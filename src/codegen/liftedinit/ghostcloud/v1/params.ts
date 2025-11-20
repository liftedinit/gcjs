import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Params
 */
export interface Params {
  maxPayloadSize: bigint;
  maxNameSize: bigint;
  maxDescriptionSize: bigint;
  maxUncompressedSize: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Params
 */
export interface ParamsAmino {
  max_payload_size?: string;
  max_name_size?: string;
  max_description_size?: string;
  max_uncompressed_size?: string;
}
export interface ParamsAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Params";
  value: ParamsAmino;
}
/**
 * Params defines the parameters for the module.
 * @name ParamsSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Params
 */
export interface ParamsSDKType {
  max_payload_size: bigint;
  max_name_size: bigint;
  max_description_size: bigint;
  max_uncompressed_size: bigint;
}
function createBaseParams(): Params {
  return {
    maxPayloadSize: BigInt(0),
    maxNameSize: BigInt(0),
    maxDescriptionSize: BigInt(0),
    maxUncompressedSize: BigInt(0)
  };
}
/**
 * Params defines the parameters for the module.
 * @name Params
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Params
 */
export const Params = {
  typeUrl: "/liftedinit.ghostcloud.v1.Params",
  is(o: any): o is Params {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.maxPayloadSize === "bigint" && typeof o.maxNameSize === "bigint" && typeof o.maxDescriptionSize === "bigint" && typeof o.maxUncompressedSize === "bigint");
  },
  isSDK(o: any): o is ParamsSDKType {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_payload_size === "bigint" && typeof o.max_name_size === "bigint" && typeof o.max_description_size === "bigint" && typeof o.max_uncompressed_size === "bigint");
  },
  isAmino(o: any): o is ParamsAmino {
    return o && (o.$typeUrl === Params.typeUrl || typeof o.max_payload_size === "bigint" && typeof o.max_name_size === "bigint" && typeof o.max_description_size === "bigint" && typeof o.max_uncompressed_size === "bigint");
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxPayloadSize !== BigInt(0)) {
      writer.uint32(8).int64(message.maxPayloadSize);
    }
    if (message.maxNameSize !== BigInt(0)) {
      writer.uint32(16).int64(message.maxNameSize);
    }
    if (message.maxDescriptionSize !== BigInt(0)) {
      writer.uint32(24).int64(message.maxDescriptionSize);
    }
    if (message.maxUncompressedSize !== BigInt(0)) {
      writer.uint32(32).uint64(message.maxUncompressedSize);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxPayloadSize = reader.int64();
          break;
        case 2:
          message.maxNameSize = reader.int64();
          break;
        case 3:
          message.maxDescriptionSize = reader.int64();
          break;
        case 4:
          message.maxUncompressedSize = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    return {
      maxPayloadSize: isSet(object.maxPayloadSize) ? BigInt(object.maxPayloadSize.toString()) : BigInt(0),
      maxNameSize: isSet(object.maxNameSize) ? BigInt(object.maxNameSize.toString()) : BigInt(0),
      maxDescriptionSize: isSet(object.maxDescriptionSize) ? BigInt(object.maxDescriptionSize.toString()) : BigInt(0),
      maxUncompressedSize: isSet(object.maxUncompressedSize) ? BigInt(object.maxUncompressedSize.toString()) : BigInt(0)
    };
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.maxPayloadSize !== undefined && (obj.maxPayloadSize = (message.maxPayloadSize || BigInt(0)).toString());
    message.maxNameSize !== undefined && (obj.maxNameSize = (message.maxNameSize || BigInt(0)).toString());
    message.maxDescriptionSize !== undefined && (obj.maxDescriptionSize = (message.maxDescriptionSize || BigInt(0)).toString());
    message.maxUncompressedSize !== undefined && (obj.maxUncompressedSize = (message.maxUncompressedSize || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.maxPayloadSize = object.maxPayloadSize !== undefined && object.maxPayloadSize !== null ? BigInt(object.maxPayloadSize.toString()) : BigInt(0);
    message.maxNameSize = object.maxNameSize !== undefined && object.maxNameSize !== null ? BigInt(object.maxNameSize.toString()) : BigInt(0);
    message.maxDescriptionSize = object.maxDescriptionSize !== undefined && object.maxDescriptionSize !== null ? BigInt(object.maxDescriptionSize.toString()) : BigInt(0);
    message.maxUncompressedSize = object.maxUncompressedSize !== undefined && object.maxUncompressedSize !== null ? BigInt(object.maxUncompressedSize.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.max_payload_size !== undefined && object.max_payload_size !== null) {
      message.maxPayloadSize = BigInt(object.max_payload_size);
    }
    if (object.max_name_size !== undefined && object.max_name_size !== null) {
      message.maxNameSize = BigInt(object.max_name_size);
    }
    if (object.max_description_size !== undefined && object.max_description_size !== null) {
      message.maxDescriptionSize = BigInt(object.max_description_size);
    }
    if (object.max_uncompressed_size !== undefined && object.max_uncompressed_size !== null) {
      message.maxUncompressedSize = BigInt(object.max_uncompressed_size);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.max_payload_size = message.maxPayloadSize !== BigInt(0) ? message.maxPayloadSize?.toString() : undefined;
    obj.max_name_size = message.maxNameSize !== BigInt(0) ? message.maxNameSize?.toString() : undefined;
    obj.max_description_size = message.maxDescriptionSize !== BigInt(0) ? message.maxDescriptionSize?.toString() : undefined;
    obj.max_uncompressed_size = message.maxUncompressedSize !== BigInt(0) ? message.maxUncompressedSize?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Params",
      value: Params.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);