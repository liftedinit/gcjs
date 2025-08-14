import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name Meta
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Meta
 */
export interface Meta {
  creator: string;
  name: string;
  description: string;
  domain: string;
}
export interface MetaProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Meta";
  value: Uint8Array;
}
/**
 * @name MetaAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Meta
 */
export interface MetaAmino {
  creator?: string;
  name?: string;
  description?: string;
  domain?: string;
}
export interface MetaAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Meta";
  value: MetaAmino;
}
/**
 * @name MetaSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Meta
 */
export interface MetaSDKType {
  creator: string;
  name: string;
  description: string;
  domain: string;
}
function createBaseMeta(): Meta {
  return {
    creator: "",
    name: "",
    description: "",
    domain: ""
  };
}
/**
 * @name Meta
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Meta
 */
export const Meta = {
  typeUrl: "/liftedinit.ghostcloud.v1.Meta",
  is(o: any): o is Meta {
    return o && (o.$typeUrl === Meta.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.description === "string" && typeof o.domain === "string");
  },
  isSDK(o: any): o is MetaSDKType {
    return o && (o.$typeUrl === Meta.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.description === "string" && typeof o.domain === "string");
  },
  isAmino(o: any): o is MetaAmino {
    return o && (o.$typeUrl === Meta.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.description === "string" && typeof o.domain === "string");
  },
  encode(message: Meta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(34).string(message.domain);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Meta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.domain = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Meta {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      domain: isSet(object.domain) ? String(object.domain) : ""
    };
  },
  toJSON(message: Meta): JsonSafe<Meta> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.domain !== undefined && (obj.domain = message.domain);
    return obj;
  },
  fromPartial(object: Partial<Meta>): Meta {
    const message = createBaseMeta();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    return message;
  },
  fromAmino(object: MetaAmino): Meta {
    const message = createBaseMeta();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    if (object.domain !== undefined && object.domain !== null) {
      message.domain = object.domain;
    }
    return message;
  },
  toAmino(message: Meta): MetaAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.description = message.description === "" ? undefined : message.description;
    obj.domain = message.domain === "" ? undefined : message.domain;
    return obj;
  },
  fromAminoMsg(object: MetaAminoMsg): Meta {
    return Meta.fromAmino(object.value);
  },
  fromProtoMsg(message: MetaProtoMsg): Meta {
    return Meta.decode(message.value);
  },
  toProto(message: Meta): Uint8Array {
    return Meta.encode(message).finish();
  },
  toProtoMsg(message: Meta): MetaProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Meta",
      value: Meta.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Meta.typeUrl, Meta);