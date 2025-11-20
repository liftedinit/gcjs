import { isSet } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export enum Filter_Operator {
  EQUAL = 0,
  NOT_EQUAL = 1,
  GREATER_THAN = 2,
  LESS_THAN = 3,
  GREATER_THAN_OR_EQUAL = 4,
  LESS_THAN_OR_EQUAL = 5,
  CONTAINS = 6,
  NOT_CONTAINS = 7,
  UNRECOGNIZED = -1,
}
export const Filter_OperatorSDKType = Filter_Operator;
export const Filter_OperatorAmino = Filter_Operator;
export function filter_OperatorFromJSON(object: any): Filter_Operator {
  switch (object) {
    case 0:
    case "EQUAL":
      return Filter_Operator.EQUAL;
    case 1:
    case "NOT_EQUAL":
      return Filter_Operator.NOT_EQUAL;
    case 2:
    case "GREATER_THAN":
      return Filter_Operator.GREATER_THAN;
    case 3:
    case "LESS_THAN":
      return Filter_Operator.LESS_THAN;
    case 4:
    case "GREATER_THAN_OR_EQUAL":
      return Filter_Operator.GREATER_THAN_OR_EQUAL;
    case 5:
    case "LESS_THAN_OR_EQUAL":
      return Filter_Operator.LESS_THAN_OR_EQUAL;
    case 6:
    case "CONTAINS":
      return Filter_Operator.CONTAINS;
    case 7:
    case "NOT_CONTAINS":
      return Filter_Operator.NOT_CONTAINS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filter_Operator.UNRECOGNIZED;
  }
}
export function filter_OperatorToJSON(object: Filter_Operator): string {
  switch (object) {
    case Filter_Operator.EQUAL:
      return "EQUAL";
    case Filter_Operator.NOT_EQUAL:
      return "NOT_EQUAL";
    case Filter_Operator.GREATER_THAN:
      return "GREATER_THAN";
    case Filter_Operator.LESS_THAN:
      return "LESS_THAN";
    case Filter_Operator.GREATER_THAN_OR_EQUAL:
      return "GREATER_THAN_OR_EQUAL";
    case Filter_Operator.LESS_THAN_OR_EQUAL:
      return "LESS_THAN_OR_EQUAL";
    case Filter_Operator.CONTAINS:
      return "CONTAINS";
    case Filter_Operator.NOT_CONTAINS:
      return "NOT_CONTAINS";
    case Filter_Operator.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
export enum Filter_Field {
  CREATOR = 0,
  UNRECOGNIZED = -1,
}
export const Filter_FieldSDKType = Filter_Field;
export const Filter_FieldAmino = Filter_Field;
export function filter_FieldFromJSON(object: any): Filter_Field {
  switch (object) {
    case 0:
    case "CREATOR":
      return Filter_Field.CREATOR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Filter_Field.UNRECOGNIZED;
  }
}
export function filter_FieldToJSON(object: Filter_Field): string {
  switch (object) {
    case Filter_Field.CREATOR:
      return "CREATOR";
    case Filter_Field.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * @name Filter
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Filter
 */
export interface Filter {
  field: Filter_Field;
  operator: Filter_Operator;
  value: string;
}
export interface FilterProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Filter";
  value: Uint8Array;
}
/**
 * @name FilterAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Filter
 */
export interface FilterAmino {
  field?: Filter_Field;
  operator?: Filter_Operator;
  value?: string;
}
export interface FilterAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Filter";
  value: FilterAmino;
}
/**
 * @name FilterSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Filter
 */
export interface FilterSDKType {
  field: Filter_Field;
  operator: Filter_Operator;
  value: string;
}
function createBaseFilter(): Filter {
  return {
    field: 0,
    operator: 0,
    value: ""
  };
}
/**
 * @name Filter
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Filter
 */
export const Filter = {
  typeUrl: "/liftedinit.ghostcloud.v1.Filter",
  is(o: any): o is Filter {
    return o && (o.$typeUrl === Filter.typeUrl || isSet(o.field) && isSet(o.operator) && typeof o.value === "string");
  },
  isSDK(o: any): o is FilterSDKType {
    return o && (o.$typeUrl === Filter.typeUrl || isSet(o.field) && isSet(o.operator) && typeof o.value === "string");
  },
  isAmino(o: any): o is FilterAmino {
    return o && (o.$typeUrl === Filter.typeUrl || isSet(o.field) && isSet(o.operator) && typeof o.value === "string");
  },
  encode(message: Filter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.field !== 0) {
      writer.uint32(8).int32(message.field);
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Filter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.field = reader.int32() as any;
          break;
        case 2:
          message.operator = reader.int32() as any;
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Filter {
    return {
      field: isSet(object.field) ? filter_FieldFromJSON(object.field) : -1,
      operator: isSet(object.operator) ? filter_OperatorFromJSON(object.operator) : -1,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Filter): JsonSafe<Filter> {
    const obj: any = {};
    message.field !== undefined && (obj.field = filter_FieldToJSON(message.field));
    message.operator !== undefined && (obj.operator = filter_OperatorToJSON(message.operator));
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Filter>): Filter {
    const message = createBaseFilter();
    message.field = object.field ?? 0;
    message.operator = object.operator ?? 0;
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: FilterAmino): Filter {
    const message = createBaseFilter();
    if (object.field !== undefined && object.field !== null) {
      message.field = object.field;
    }
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Filter): FilterAmino {
    const obj: any = {};
    obj.field = message.field === 0 ? undefined : message.field;
    obj.operator = message.operator === 0 ? undefined : message.operator;
    obj.value = message.value === "" ? undefined : message.value;
    return obj;
  },
  fromAminoMsg(object: FilterAminoMsg): Filter {
    return Filter.fromAmino(object.value);
  },
  fromProtoMsg(message: FilterProtoMsg): Filter {
    return Filter.decode(message.value);
  },
  toProto(message: Filter): Uint8Array {
    return Filter.encode(message).finish();
  },
  toProtoMsg(message: Filter): FilterProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Filter",
      value: Filter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Filter.typeUrl, Filter);