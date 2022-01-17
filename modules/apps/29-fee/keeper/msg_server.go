package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/cosmos/ibc-go/v3/modules/apps/29-fee/types"
	channeltypes "github.com/cosmos/ibc-go/v3/modules/core/04-channel/types"
)

var _ types.MsgServer = Keeper{}

// RegisterCounterpartyAddress is called by the relayer on each channelEnd and allows them to specify their counterparty address before relaying
// This ensures they will be properly compensated for forward relaying on the source chain since the destination chain must send back relayer's source address (counterparty address) in acknowledgement
// This function may be called more than once by relayers, in which case, the previous counterparty address will be overwritten by the new counterparty address
func (k Keeper) RegisterCounterpartyAddress(goCtx context.Context, msg *types.MsgRegisterCounterpartyAddress) (*types.MsgRegisterCounterpartyAddressResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.SetCounterpartyAddress(
		ctx, msg.Address, msg.CounterpartyAddress,
	)

	k.Logger(ctx).Info("Registering counterparty address for relayer.", "Address:", msg.Address, "Counterparty Address:", msg.CounterpartyAddress)

	return &types.MsgRegisterCounterpartyAddressResponse{}, nil
}

// PayPacketFee defines a rpc handler method for MsgPayPacketFee
// PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to relay the packet with the next sequence
func (k Keeper) PayPacketFee(goCtx context.Context, msg *types.MsgPayPacketFee) (*types.MsgPayPacketFeeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// get the next sequence
	sequence, found := k.GetNextSequenceSend(ctx, msg.SourcePortId, msg.SourceChannelId)
	if !found {
		return nil, channeltypes.ErrSequenceSendNotFound
	}

	packetId := &channeltypes.PacketId{
		PortId:    msg.SourcePortId,
		ChannelId: msg.SourceChannelId,
		Sequence:  sequence,
	}

	identifiedPacket := types.NewIdentifiedPacketFee(packetId, msg.Fee, msg.Signer, msg.Relayers)
	err := k.EscrowPacketFee(ctx, identifiedPacket)
	if err != nil {
		return nil, err
	}

	return &types.MsgPayPacketFeeResponse{}, nil
}

// PayPacketFee defines a rpc handler method for MsgPayPacketFee
// PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
// incentivize the relaying of a known packet
func (k Keeper) PayPacketFeeAsync(goCtx context.Context, msg *types.MsgPayPacketFeeAsync) (*types.MsgPayPacketFeeAsyncResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	err := k.EscrowPacketFee(ctx, msg.IdentifiedPacketFee)
	if err != nil {
		return nil, err
	}

	return &types.MsgPayPacketFeeAsyncResponse{}, nil
}
