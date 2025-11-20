import * as _2 from "./app/runtime/v1alpha1/module";
import * as _3 from "./auth/v1beta1/auth";
import * as _4 from "./auth/v1beta1/genesis";
import * as _5 from "./auth/v1beta1/query";
import * as _6 from "./auth/v1beta1/tx";
import * as _7 from "./authz/v1beta1/authz";
import * as _8 from "./authz/v1beta1/event";
import * as _9 from "./authz/v1beta1/genesis";
import * as _10 from "./authz/v1beta1/query";
import * as _11 from "./authz/v1beta1/tx";
import * as _12 from "./bank/v1beta1/authz";
import * as _13 from "./bank/v1beta1/bank";
import * as _14 from "./bank/v1beta1/genesis";
import * as _15 from "./bank/v1beta1/query";
import * as _16 from "./bank/v1beta1/tx";
import * as _17 from "./base/abci/v1beta1/abci";
import * as _18 from "./base/node/v1beta1/query";
import * as _19 from "./base/query/v1beta1/pagination";
import * as _20 from "./base/reflection/v2alpha1/reflection";
import * as _21 from "./base/v1beta1/coin";
import * as _22 from "./circuit/v1/query";
import * as _23 from "./circuit/v1/tx";
import * as _24 from "./circuit/v1/types";
import * as _25 from "./consensus/v1/query";
import * as _26 from "./consensus/v1/tx";
import * as _27 from "./crypto/ed25519/keys";
import * as _28 from "./crypto/hd/v1/hd";
import * as _29 from "./crypto/keyring/v1/record";
import * as _30 from "./crypto/multisig/keys";
import * as _31 from "./crypto/secp256k1/keys";
import * as _32 from "./crypto/secp256r1/keys";
import * as _33 from "./distribution/v1beta1/distribution";
import * as _34 from "./distribution/v1beta1/genesis";
import * as _35 from "./distribution/v1beta1/query";
import * as _36 from "./distribution/v1beta1/tx";
import * as _37 from "./feegrant/v1beta1/feegrant";
import * as _38 from "./feegrant/v1beta1/genesis";
import * as _39 from "./feegrant/v1beta1/query";
import * as _40 from "./feegrant/v1beta1/tx";
import * as _41 from "./gov/v1/genesis";
import * as _42 from "./gov/v1/gov";
import * as _43 from "./gov/v1/query";
import * as _44 from "./gov/v1/tx";
import * as _45 from "./gov/v1beta1/genesis";
import * as _46 from "./gov/v1beta1/gov";
import * as _47 from "./gov/v1beta1/query";
import * as _48 from "./gov/v1beta1/tx";
import * as _49 from "./group/v1/events";
import * as _50 from "./group/v1/genesis";
import * as _51 from "./group/v1/query";
import * as _52 from "./group/v1/tx";
import * as _53 from "./group/v1/types";
import * as _54 from "./mint/v1beta1/genesis";
import * as _55 from "./mint/v1beta1/mint";
import * as _56 from "./mint/v1beta1/query";
import * as _57 from "./mint/v1beta1/tx";
import * as _58 from "./msg/textual/v1/textual";
import * as _59 from "./orm/query/v1alpha1/query";
import * as _60 from "./params/v1beta1/params";
import * as _61 from "./params/v1beta1/query";
import * as _62 from "./query/v1/query";
import * as _63 from "./reflection/v1/reflection";
import * as _64 from "./staking/v1beta1/authz";
import * as _65 from "./staking/v1beta1/genesis";
import * as _66 from "./staking/v1beta1/query";
import * as _67 from "./staking/v1beta1/staking";
import * as _68 from "./staking/v1beta1/tx";
import * as _69 from "./store/internal/kv/v1beta1/kv";
import * as _70 from "./store/snapshots/v1/snapshot";
import * as _71 from "./store/streaming/abci/grpc";
import * as _72 from "./store/v1beta1/commit_info";
import * as _73 from "./store/v1beta1/listening";
import * as _74 from "./tx/config/v1/config";
import * as _75 from "./tx/signing/v1beta1/signing";
import * as _76 from "./tx/v1beta1/service";
import * as _77 from "./tx/v1beta1/tx";
import * as _78 from "./upgrade/v1beta1/query";
import * as _79 from "./upgrade/v1beta1/tx";
import * as _80 from "./upgrade/v1beta1/upgrade";
import * as _81 from "./vesting/v1beta1/tx";
import * as _82 from "./vesting/v1beta1/vesting";
import * as _109 from "./auth/v1beta1/tx.amino";
import * as _110 from "./authz/v1beta1/tx.amino";
import * as _111 from "./bank/v1beta1/tx.amino";
import * as _112 from "./circuit/v1/tx.amino";
import * as _113 from "./consensus/v1/tx.amino";
import * as _114 from "./distribution/v1beta1/tx.amino";
import * as _115 from "./feegrant/v1beta1/tx.amino";
import * as _116 from "./gov/v1/tx.amino";
import * as _117 from "./gov/v1beta1/tx.amino";
import * as _118 from "./group/v1/tx.amino";
import * as _119 from "./mint/v1beta1/tx.amino";
import * as _120 from "./staking/v1beta1/tx.amino";
import * as _121 from "./upgrade/v1beta1/tx.amino";
import * as _122 from "./vesting/v1beta1/tx.amino";
import * as _123 from "./auth/v1beta1/tx.registry";
import * as _124 from "./authz/v1beta1/tx.registry";
import * as _125 from "./bank/v1beta1/tx.registry";
import * as _126 from "./circuit/v1/tx.registry";
import * as _127 from "./consensus/v1/tx.registry";
import * as _128 from "./distribution/v1beta1/tx.registry";
import * as _129 from "./feegrant/v1beta1/tx.registry";
import * as _130 from "./gov/v1/tx.registry";
import * as _131 from "./gov/v1beta1/tx.registry";
import * as _132 from "./group/v1/tx.registry";
import * as _133 from "./mint/v1beta1/tx.registry";
import * as _134 from "./staking/v1beta1/tx.registry";
import * as _135 from "./upgrade/v1beta1/tx.registry";
import * as _136 from "./vesting/v1beta1/tx.registry";
import * as _137 from "./auth/v1beta1/query.lcd";
import * as _138 from "./authz/v1beta1/query.lcd";
import * as _139 from "./bank/v1beta1/query.lcd";
import * as _140 from "./base/node/v1beta1/query.lcd";
import * as _141 from "./circuit/v1/query.lcd";
import * as _142 from "./consensus/v1/query.lcd";
import * as _143 from "./distribution/v1beta1/query.lcd";
import * as _144 from "./feegrant/v1beta1/query.lcd";
import * as _145 from "./gov/v1/query.lcd";
import * as _146 from "./gov/v1beta1/query.lcd";
import * as _147 from "./group/v1/query.lcd";
import * as _148 from "./mint/v1beta1/query.lcd";
import * as _149 from "./params/v1beta1/query.lcd";
import * as _150 from "./staking/v1beta1/query.lcd";
import * as _151 from "./tx/v1beta1/service.lcd";
import * as _152 from "./upgrade/v1beta1/query.lcd";
import * as _153 from "./auth/v1beta1/query.rpc.Query";
import * as _154 from "./authz/v1beta1/query.rpc.Query";
import * as _155 from "./bank/v1beta1/query.rpc.Query";
import * as _156 from "./base/node/v1beta1/query.rpc.Service";
import * as _157 from "./circuit/v1/query.rpc.Query";
import * as _158 from "./consensus/v1/query.rpc.Query";
import * as _159 from "./distribution/v1beta1/query.rpc.Query";
import * as _160 from "./feegrant/v1beta1/query.rpc.Query";
import * as _161 from "./gov/v1/query.rpc.Query";
import * as _162 from "./gov/v1beta1/query.rpc.Query";
import * as _163 from "./group/v1/query.rpc.Query";
import * as _164 from "./mint/v1beta1/query.rpc.Query";
import * as _165 from "./orm/query/v1alpha1/query.rpc.Query";
import * as _166 from "./params/v1beta1/query.rpc.Query";
import * as _167 from "./staking/v1beta1/query.rpc.Query";
import * as _168 from "./tx/v1beta1/service.rpc.Service";
import * as _169 from "./upgrade/v1beta1/query.rpc.Query";
import * as _170 from "./auth/v1beta1/tx.rpc.msg";
import * as _171 from "./authz/v1beta1/tx.rpc.msg";
import * as _172 from "./bank/v1beta1/tx.rpc.msg";
import * as _173 from "./circuit/v1/tx.rpc.msg";
import * as _174 from "./consensus/v1/tx.rpc.msg";
import * as _175 from "./distribution/v1beta1/tx.rpc.msg";
import * as _176 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _177 from "./gov/v1/tx.rpc.msg";
import * as _178 from "./gov/v1beta1/tx.rpc.msg";
import * as _179 from "./group/v1/tx.rpc.msg";
import * as _180 from "./mint/v1beta1/tx.rpc.msg";
import * as _181 from "./staking/v1beta1/tx.rpc.msg";
import * as _182 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _183 from "./vesting/v1beta1/tx.rpc.msg";
import * as _189 from "./lcd";
import * as _190 from "./rpc.query";
import * as _191 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export namespace runtime {
      export const v1alpha1 = {
        ..._2
      };
    }
  }
  export namespace auth {
    export const v1beta1 = {
      ..._3,
      ..._4,
      ..._5,
      ..._6,
      ..._109,
      ..._123,
      ..._137,
      ..._153,
      ..._170
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._7,
      ..._8,
      ..._9,
      ..._10,
      ..._11,
      ..._110,
      ..._124,
      ..._138,
      ..._154,
      ..._171
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._12,
      ..._13,
      ..._14,
      ..._15,
      ..._16,
      ..._111,
      ..._125,
      ..._139,
      ..._155,
      ..._172
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._17
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._18,
        ..._140,
        ..._156
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._19
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._20
      };
    }
    export const v1beta1 = {
      ..._21
    };
  }
  export namespace circuit {
    export const v1 = {
      ..._22,
      ..._23,
      ..._24,
      ..._112,
      ..._126,
      ..._141,
      ..._157,
      ..._173
    };
  }
  export namespace consensus {
    export const v1 = {
      ..._25,
      ..._26,
      ..._113,
      ..._127,
      ..._142,
      ..._158,
      ..._174
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._27
    };
    export namespace hd {
      export const v1 = {
        ..._28
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._29
      };
    }
    export const multisig = {
      ..._30
    };
    export const secp256k1 = {
      ..._31
    };
    export const secp256r1 = {
      ..._32
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._33,
      ..._34,
      ..._35,
      ..._36,
      ..._114,
      ..._128,
      ..._143,
      ..._159,
      ..._175
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._115,
      ..._129,
      ..._144,
      ..._160,
      ..._176
    };
  }
  export namespace gov {
    export const v1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._116,
      ..._130,
      ..._145,
      ..._161,
      ..._177
    };
    export const v1beta1 = {
      ..._45,
      ..._46,
      ..._47,
      ..._48,
      ..._117,
      ..._131,
      ..._146,
      ..._162,
      ..._178
    };
  }
  export namespace group {
    export const v1 = {
      ..._49,
      ..._50,
      ..._51,
      ..._52,
      ..._53,
      ..._118,
      ..._132,
      ..._147,
      ..._163,
      ..._179
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._119,
      ..._133,
      ..._148,
      ..._164,
      ..._180
    };
  }
  export namespace msg {
    export namespace textual {
      export const v1 = {
        ..._58
      };
    }
  }
  export namespace orm {
    export namespace query {
      export const v1alpha1 = {
        ..._59,
        ..._165
      };
    }
  }
  export namespace params {
    export const v1beta1 = {
      ..._60,
      ..._61,
      ..._149,
      ..._166
    };
  }
  export namespace query {
    export const v1 = {
      ..._62
    };
  }
  export namespace reflection {
    export const v1 = {
      ..._63
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._64,
      ..._65,
      ..._66,
      ..._67,
      ..._68,
      ..._120,
      ..._134,
      ..._150,
      ..._167,
      ..._181
    };
  }
  export namespace store {
    export namespace internal {
      export namespace kv {
        export const v1beta1 = {
          ..._69
        };
      }
    }
    export namespace snapshots {
      export const v1 = {
        ..._70
      };
    }
    export namespace streaming {
      export const abci = {
        ..._71
      };
    }
    export const v1beta1 = {
      ..._72,
      ..._73
    };
  }
  export namespace tx {
    export namespace config {
      export const v1 = {
        ..._74
      };
    }
    export namespace signing {
      export const v1beta1 = {
        ..._75
      };
    }
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._151,
      ..._168
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._78,
      ..._79,
      ..._80,
      ..._121,
      ..._135,
      ..._152,
      ..._169,
      ..._182
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._81,
      ..._82,
      ..._122,
      ..._136,
      ..._183
    };
  }
  export const ClientFactory = {
    ..._189,
    ..._190,
    ..._191
  };
}