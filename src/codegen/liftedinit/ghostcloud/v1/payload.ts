import { Dataset, DatasetAmino, DatasetSDKType } from "./dataset";
import { Archive, ArchiveAmino, ArchiveSDKType } from "./archive";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * @name Payload
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Payload
 */
export interface Payload {
  dataset?: Dataset;
  archive?: Archive;
}
export interface PayloadProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Payload";
  value: Uint8Array;
}
/**
 * @name PayloadAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Payload
 */
export interface PayloadAmino {
  dataset?: DatasetAmino;
  archive?: ArchiveAmino;
}
export interface PayloadAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Payload";
  value: PayloadAmino;
}
/**
 * @name PayloadSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Payload
 */
export interface PayloadSDKType {
  dataset?: DatasetSDKType;
  archive?: ArchiveSDKType;
}
function createBasePayload(): Payload {
  return {
    dataset: undefined,
    archive: undefined
  };
}
/**
 * @name Payload
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Payload
 */
export const Payload = {
  typeUrl: "/liftedinit.ghostcloud.v1.Payload",
  is(o: any): o is Payload {
    return o && o.$typeUrl === Payload.typeUrl;
  },
  isSDK(o: any): o is PayloadSDKType {
    return o && o.$typeUrl === Payload.typeUrl;
  },
  isAmino(o: any): o is PayloadAmino {
    return o && o.$typeUrl === Payload.typeUrl;
  },
  encode(message: Payload, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataset !== undefined) {
      Dataset.encode(message.dataset, writer.uint32(10).fork()).ldelim();
    }
    if (message.archive !== undefined) {
      Archive.encode(message.archive, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Payload {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataset = Dataset.decode(reader, reader.uint32());
          break;
        case 2:
          message.archive = Archive.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Payload {
    return {
      dataset: isSet(object.dataset) ? Dataset.fromJSON(object.dataset) : undefined,
      archive: isSet(object.archive) ? Archive.fromJSON(object.archive) : undefined
    };
  },
  toJSON(message: Payload): JsonSafe<Payload> {
    const obj: any = {};
    message.dataset !== undefined && (obj.dataset = message.dataset ? Dataset.toJSON(message.dataset) : undefined);
    message.archive !== undefined && (obj.archive = message.archive ? Archive.toJSON(message.archive) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Payload>): Payload {
    const message = createBasePayload();
    message.dataset = object.dataset !== undefined && object.dataset !== null ? Dataset.fromPartial(object.dataset) : undefined;
    message.archive = object.archive !== undefined && object.archive !== null ? Archive.fromPartial(object.archive) : undefined;
    return message;
  },
  fromAmino(object: PayloadAmino): Payload {
    const message = createBasePayload();
    if (object.dataset !== undefined && object.dataset !== null) {
      message.dataset = Dataset.fromAmino(object.dataset);
    }
    if (object.archive !== undefined && object.archive !== null) {
      message.archive = Archive.fromAmino(object.archive);
    }
    return message;
  },
  toAmino(message: Payload): PayloadAmino {
    const obj: any = {};
    obj.dataset = message.dataset ? Dataset.toAmino(message.dataset) : undefined;
    obj.archive = message.archive ? Archive.toAmino(message.archive) : undefined;
    return obj;
  },
  fromAminoMsg(object: PayloadAminoMsg): Payload {
    return Payload.fromAmino(object.value);
  },
  fromProtoMsg(message: PayloadProtoMsg): Payload {
    return Payload.decode(message.value);
  },
  toProto(message: Payload): Uint8Array {
    return Payload.encode(message).finish();
  },
  toProtoMsg(message: Payload): PayloadProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Payload",
      value: Payload.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Payload.typeUrl, Payload);