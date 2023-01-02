(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{673:function(e,t,s){"use strict";s.r(t);var i=s(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"state-transitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#state-transitions"}},[e._v("#")]),e._v(" State Transitions")]),e._v(" "),s("h2",{attrs:{id:"client-state-verification-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-state-verification-functions"}},[e._v("#")]),e._v(" Client State Verification Functions")]),e._v(" "),s("p",[e._v("Successful state verification by a solo machine light client will result in:")]),e._v(" "),s("ul",[s("li",[e._v("the sequence being incremented by 1.")])]),e._v(" "),s("h2",{attrs:{id:"update-by-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-by-header"}},[e._v("#")]),e._v(" Update By Header")]),e._v(" "),s("p",[e._v("A successful update of a solo machine light client by a header will result in:")]),e._v(" "),s("ul",[s("li",[e._v("the public key being updated to the new public key provided by the header.")]),e._v(" "),s("li",[e._v("the diversifier being updated to the new diviersifier provided by the header.")]),e._v(" "),s("li",[e._v("the timestamp being updated to the new timestamp provided by the header.")]),e._v(" "),s("li",[e._v("the sequence being incremented by 1")]),e._v(" "),s("li",[e._v("the consensus state being updated (consensus state stores the public key, diversifier, and timestamp)")])]),e._v(" "),s("h2",{attrs:{id:"update-by-governance-proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-by-governance-proposal"}},[e._v("#")]),e._v(" Update By Governance Proposal")]),e._v(" "),s("p",[e._v("A successful update of a solo machine light client by a governance proposal will result in:")]),e._v(" "),s("ul",[s("li",[e._v("the client state being updated to the substitute client state")]),e._v(" "),s("li",[e._v("the consensus state being updated to the substitute consensus state (consensus state stores the public key, diversifier, and timestamp)")]),e._v(" "),s("li",[e._v("the frozen sequence being set to zero (client is unfrozen if it was previously frozen).")])]),e._v(" "),s("h2",{attrs:{id:"upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[e._v("#")]),e._v(" Upgrade")]),e._v(" "),s("p",[e._v("Client udgrades are not supported for the solo machine light client. No state transition occurs.")]),e._v(" "),s("h2",{attrs:{id:"misbehaviour"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#misbehaviour"}},[e._v("#")]),e._v(" Misbehaviour")]),e._v(" "),s("p",[e._v("Successful misbehaviour processing of a solo machine light client will result in:")]),e._v(" "),s("ul",[s("li",[e._v("the frozen sequence being set to the sequence the misbehaviour occurred at")])])])}),[],!1,null,null,null);t.default=a.exports}}]);