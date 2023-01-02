(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{649:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-007-solo-machine-sign-bytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-007-solo-machine-sign-bytes"}},[e._v("#")]),e._v(" ADR 007: Solo machine sign bytes")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("2022-08-02: Initial draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted, applied in v7")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("06-solomachine")]),e._v(" implemention up until ibc-go v7 constructed sign bytes using a "),a("code",[e._v("DataType")]),e._v(" which described what type of data was being signed.\nThis design decision arose from a misunderstanding of the security implications.\nIt was noted that the proto definitions do not "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/7237#discussion_r484264573",target:"_blank",rel:"noopener noreferrer"}},[e._v("provide uniqueness"),a("OutboundLink")],1),e._v(" which is a necessity for ensuring two signatures over different data types can never be the same.\nWhat was missed is that the uniqueness is not provided by the proto definition, but by the usage of the proto definition.\nThe path provided by core IBC will be unique and is already encoded into the signature data.\nThus two different paths with the same data values will encode differently which provides signature uniqueness.")]),e._v(" "),a("p",[e._v("Furthermore, the current construction does not support the proposed changes in the spec repo to support "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/issues/684",target:"_blank",rel:"noopener noreferrer"}},[e._v("Generic Verification functions"),a("OutboundLink")],1),e._v(".\nThis is because in order to verify a new path, a new "),a("code",[e._v("DataType")]),e._v(" must be added for that path.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("Remove "),a("code",[e._v("DataType")]),e._v(" and change the "),a("code",[e._v("DataType")]),e._v(" in the "),a("code",[e._v("SignBytes")]),e._v(" and "),a("code",[e._v("SignatureAndData")]),e._v(" to be "),a("code",[e._v("Path")]),e._v(".\nThe new "),a("code",[e._v("Path")]),e._v(" field should be bytes.\nRemove all "),a("code",[e._v("...Data")]),e._v(" proto definitions except for "),a("code",[e._v("HeaderData")]),e._v("\nThese "),a("code",[e._v("...Data")]),e._v(" definitions were created previously for each "),a("code",[e._v("DataType")]),e._v(".\nThe proto version of the solo machine proto definitions should be bumped to "),a("code",[e._v("v3")]),e._v(".")]),e._v(" "),a("p",[e._v("This removes an extra layer of complexity from signature construction and allows for support of generic verification.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Simplification of solo machine signature construction")]),e._v(" "),a("li",[e._v("Support for generic verification")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Breaks existing signature construction in a non-backwards compatible way")]),e._v(" "),a("li",[e._v("Solo machines must update to handle the new format")]),e._v(" "),a("li",[e._v("Migration required for solo machine client and consensus states")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p",[e._v("No notable consequences")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/1141",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1141"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);