import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export enum ArchiveType {
  Zip = 0,
  UNRECOGNIZED = -1,
}
export const ArchiveTypeSDKType = ArchiveType;
export const ArchiveTypeAmino = ArchiveType;
export function archiveTypeFromJSON(object: any): ArchiveType {
  switch (object) {
    case 0:
    case "Zip":
      return ArchiveType.Zip;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ArchiveType.UNRECOGNIZED;
  }
}
export function archiveTypeToJSON(object: ArchiveType): string {
  switch (object) {
    case ArchiveType.Zip:
      return "Zip";
    case ArchiveType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * @name Archive
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Archive
 */
export interface Archive {
  archiveType: ArchiveType;
  /**
   * This can be large
   */
  content: Uint8Array;
}
export interface ArchiveProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Archive";
  value: Uint8Array;
}
/**
 * @name ArchiveAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Archive
 */
export interface ArchiveAmino {
  archive_type?: ArchiveType;
  /**
   * This can be large
   */
  content?: string;
}
export interface ArchiveAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Archive";
  value: ArchiveAmino;
}
/**
 * @name ArchiveSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Archive
 */
export interface ArchiveSDKType {
  archive_type: ArchiveType;
  content: Uint8Array;
}
function createBaseArchive(): Archive {
  return {
    archiveType: 0,
    content: new Uint8Array()
  };
}
/**
 * @name Archive
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Archive
 */
export const Archive = {
  typeUrl: "/liftedinit.ghostcloud.v1.Archive",
  is(o: any): o is Archive {
    return o && (o.$typeUrl === Archive.typeUrl || isSet(o.archiveType) && (o.content instanceof Uint8Array || typeof o.content === "string"));
  },
  isSDK(o: any): o is ArchiveSDKType {
    return o && (o.$typeUrl === Archive.typeUrl || isSet(o.archive_type) && (o.content instanceof Uint8Array || typeof o.content === "string"));
  },
  isAmino(o: any): o is ArchiveAmino {
    return o && (o.$typeUrl === Archive.typeUrl || isSet(o.archive_type) && (o.content instanceof Uint8Array || typeof o.content === "string"));
  },
  encode(message: Archive, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.archiveType !== 0) {
      writer.uint32(8).int32(message.archiveType);
    }
    if (message.content.length !== 0) {
      writer.uint32(18).bytes(message.content);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Archive {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseArchive();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.archiveType = reader.int32() as any;
          break;
        case 2:
          message.content = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Archive {
    return {
      archiveType: isSet(object.archiveType) ? archiveTypeFromJSON(object.archiveType) : -1,
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array()
    };
  },
  toJSON(message: Archive): JsonSafe<Archive> {
    const obj: any = {};
    message.archiveType !== undefined && (obj.archiveType = archiveTypeToJSON(message.archiveType));
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Archive>): Archive {
    const message = createBaseArchive();
    message.archiveType = object.archiveType ?? 0;
    message.content = object.content ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ArchiveAmino): Archive {
    const message = createBaseArchive();
    if (object.archive_type !== undefined && object.archive_type !== null) {
      message.archiveType = object.archive_type;
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },
  toAmino(message: Archive): ArchiveAmino {
    const obj: any = {};
    obj.archive_type = message.archiveType === 0 ? undefined : message.archiveType;
    obj.content = message.content ? base64FromBytes(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: ArchiveAminoMsg): Archive {
    return Archive.fromAmino(object.value);
  },
  fromProtoMsg(message: ArchiveProtoMsg): Archive {
    return Archive.decode(message.value);
  },
  toProto(message: Archive): Uint8Array {
    return Archive.encode(message).finish();
  },
  toProtoMsg(message: Archive): ArchiveProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Archive",
      value: Archive.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Archive.typeUrl, Archive);