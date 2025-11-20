import * as _89 from "./ghostcloud/v1/archive";
import * as _90 from "./ghostcloud/v1/dataset";
import * as _91 from "./ghostcloud/v1/filter-by";
import * as _92 from "./ghostcloud/v1/genesis";
import * as _93 from "./ghostcloud/v1/meta";
import * as _94 from "./ghostcloud/v1/params";
import * as _95 from "./ghostcloud/v1/payload";
import * as _96 from "./ghostcloud/v1/query";
import * as _97 from "./ghostcloud/v1/tx";
import * as _184 from "./ghostcloud/v1/tx.amino";
import * as _185 from "./ghostcloud/v1/tx.registry";
import * as _186 from "./ghostcloud/v1/query.lcd";
import * as _187 from "./ghostcloud/v1/query.rpc.Query";
import * as _188 from "./ghostcloud/v1/tx.rpc.msg";
import * as _192 from "./lcd";
import * as _193 from "./rpc.query";
import * as _194 from "./rpc.tx";
export namespace liftedinit {
  export namespace ghostcloud {
    export const v1 = {
      ..._89,
      ..._90,
      ..._91,
      ..._92,
      ..._93,
      ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._184,
      ..._185,
      ..._186,
      ..._187,
      ..._188
    };
  }
  export const ClientFactory = {
    ..._192,
    ..._193,
    ..._194
  };
}