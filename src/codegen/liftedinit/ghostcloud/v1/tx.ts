import { Meta, MetaAmino, MetaSDKType } from "./meta";
import { Payload, PayloadAmino, PayloadSDKType } from "./payload";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * @name MsgCreateDeploymentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest
 */
export interface MsgCreateDeploymentRequest {
  meta?: Meta;
  payload?: Payload;
}
export interface MsgCreateDeploymentRequestProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest";
  value: Uint8Array;
}
/**
 * @name MsgCreateDeploymentRequestAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest
 */
export interface MsgCreateDeploymentRequestAmino {
  meta?: MetaAmino;
  payload?: PayloadAmino;
}
export interface MsgCreateDeploymentRequestAminoMsg {
  type: "lifted/ghostcloud/MsgCreateDeployment";
  value: MsgCreateDeploymentRequestAmino;
}
/**
 * @name MsgCreateDeploymentRequestSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest
 */
export interface MsgCreateDeploymentRequestSDKType {
  meta?: MetaSDKType;
  payload?: PayloadSDKType;
}
/**
 * @name MsgCreateDeploymentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponse {}
export interface MsgCreateDeploymentResponseProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse";
  value: Uint8Array;
}
/**
 * @name MsgCreateDeploymentResponseAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponseAmino {}
export interface MsgCreateDeploymentResponseAminoMsg {
  type: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse";
  value: MsgCreateDeploymentResponseAmino;
}
/**
 * @name MsgCreateDeploymentResponseSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse
 */
export interface MsgCreateDeploymentResponseSDKType {}
/**
 * @name MsgUpdateDeploymentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest
 */
export interface MsgUpdateDeploymentRequest {
  meta?: Meta;
  payload?: Payload;
}
export interface MsgUpdateDeploymentRequestProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest";
  value: Uint8Array;
}
/**
 * @name MsgUpdateDeploymentRequestAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest
 */
export interface MsgUpdateDeploymentRequestAmino {
  meta?: MetaAmino;
  payload?: PayloadAmino;
}
export interface MsgUpdateDeploymentRequestAminoMsg {
  type: "lifted/ghostcloud/MsgUpdateDeployment";
  value: MsgUpdateDeploymentRequestAmino;
}
/**
 * @name MsgUpdateDeploymentRequestSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest
 */
export interface MsgUpdateDeploymentRequestSDKType {
  meta?: MetaSDKType;
  payload?: PayloadSDKType;
}
/**
 * @name MsgUpdateDeploymentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponse {}
export interface MsgUpdateDeploymentResponseProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse";
  value: Uint8Array;
}
/**
 * @name MsgUpdateDeploymentResponseAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponseAmino {}
export interface MsgUpdateDeploymentResponseAminoMsg {
  type: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse";
  value: MsgUpdateDeploymentResponseAmino;
}
/**
 * @name MsgUpdateDeploymentResponseSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse
 */
export interface MsgUpdateDeploymentResponseSDKType {}
/**
 * @name MsgRemoveDeploymentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest
 */
export interface MsgRemoveDeploymentRequest {
  creator: string;
  name: string;
}
export interface MsgRemoveDeploymentRequestProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest";
  value: Uint8Array;
}
/**
 * @name MsgRemoveDeploymentRequestAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest
 */
export interface MsgRemoveDeploymentRequestAmino {
  creator?: string;
  name?: string;
}
export interface MsgRemoveDeploymentRequestAminoMsg {
  type: "lifted/ghostcloud/MsgRemoveDeployment";
  value: MsgRemoveDeploymentRequestAmino;
}
/**
 * @name MsgRemoveDeploymentRequestSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest
 */
export interface MsgRemoveDeploymentRequestSDKType {
  creator: string;
  name: string;
}
/**
 * @name MsgRemoveDeploymentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse
 */
export interface MsgRemoveDeploymentResponse {}
export interface MsgRemoveDeploymentResponseProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse";
  value: Uint8Array;
}
/**
 * @name MsgRemoveDeploymentResponseAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse
 */
export interface MsgRemoveDeploymentResponseAmino {}
export interface MsgRemoveDeploymentResponseAminoMsg {
  type: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse";
  value: MsgRemoveDeploymentResponseAmino;
}
/**
 * @name MsgRemoveDeploymentResponseSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse
 */
export interface MsgRemoveDeploymentResponseSDKType {}
function createBaseMsgCreateDeploymentRequest(): MsgCreateDeploymentRequest {
  return {
    meta: undefined,
    payload: undefined
  };
}
/**
 * @name MsgCreateDeploymentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest
 */
export const MsgCreateDeploymentRequest = {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
  aminoType: "lifted/ghostcloud/MsgCreateDeployment",
  is(o: any): o is MsgCreateDeploymentRequest {
    return o && o.$typeUrl === MsgCreateDeploymentRequest.typeUrl;
  },
  isSDK(o: any): o is MsgCreateDeploymentRequestSDKType {
    return o && o.$typeUrl === MsgCreateDeploymentRequest.typeUrl;
  },
  isAmino(o: any): o is MsgCreateDeploymentRequestAmino {
    return o && o.$typeUrl === MsgCreateDeploymentRequest.typeUrl;
  },
  encode(message: MsgCreateDeploymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      Payload.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateDeploymentRequest {
    return {
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      payload: isSet(object.payload) ? Payload.fromJSON(object.payload) : undefined
    };
  },
  toJSON(message: MsgCreateDeploymentRequest): JsonSafe<MsgCreateDeploymentRequest> {
    const obj: any = {};
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.payload !== undefined && (obj.payload = message.payload ? Payload.toJSON(message.payload) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateDeploymentRequest>): MsgCreateDeploymentRequest {
    const message = createBaseMsgCreateDeploymentRequest();
    message.meta = object.meta !== undefined && object.meta !== null ? Meta.fromPartial(object.meta) : undefined;
    message.payload = object.payload !== undefined && object.payload !== null ? Payload.fromPartial(object.payload) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateDeploymentRequestAmino): MsgCreateDeploymentRequest {
    const message = createBaseMsgCreateDeploymentRequest();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromAmino(object.meta);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Payload.fromAmino(object.payload);
    }
    return message;
  },
  toAmino(message: MsgCreateDeploymentRequest): MsgCreateDeploymentRequestAmino {
    const obj: any = {};
    obj.meta = message.meta ? Meta.toAmino(message.meta) : undefined;
    obj.payload = message.payload ? Payload.toAmino(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentRequestAminoMsg): MsgCreateDeploymentRequest {
    return MsgCreateDeploymentRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateDeploymentRequest): MsgCreateDeploymentRequestAminoMsg {
    return {
      type: "lifted/ghostcloud/MsgCreateDeployment",
      value: MsgCreateDeploymentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgCreateDeploymentRequestProtoMsg): MsgCreateDeploymentRequest {
    return MsgCreateDeploymentRequest.decode(message.value);
  },
  toProto(message: MsgCreateDeploymentRequest): Uint8Array {
    return MsgCreateDeploymentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeploymentRequest): MsgCreateDeploymentRequestProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
      value: MsgCreateDeploymentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateDeploymentRequest.typeUrl, MsgCreateDeploymentRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgCreateDeploymentRequest.aminoType, MsgCreateDeploymentRequest.typeUrl);
function createBaseMsgCreateDeploymentResponse(): MsgCreateDeploymentResponse {
  return {};
}
/**
 * @name MsgCreateDeploymentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse
 */
export const MsgCreateDeploymentResponse = {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse",
  is(o: any): o is MsgCreateDeploymentResponse {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateDeploymentResponseAmino {
    return o && o.$typeUrl === MsgCreateDeploymentResponse.typeUrl;
  },
  encode(_: MsgCreateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateDeploymentResponse {
    return {};
  },
  toJSON(_: MsgCreateDeploymentResponse): JsonSafe<MsgCreateDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse {
    const message = createBaseMsgCreateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateDeploymentResponseAminoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg): MsgCreateDeploymentResponse {
    return MsgCreateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgCreateDeploymentResponse): Uint8Array {
    return MsgCreateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentResponse",
      value: MsgCreateDeploymentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateDeploymentResponse.typeUrl, MsgCreateDeploymentResponse);
function createBaseMsgUpdateDeploymentRequest(): MsgUpdateDeploymentRequest {
  return {
    meta: undefined,
    payload: undefined
  };
}
/**
 * @name MsgUpdateDeploymentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest
 */
export const MsgUpdateDeploymentRequest = {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
  aminoType: "lifted/ghostcloud/MsgUpdateDeployment",
  is(o: any): o is MsgUpdateDeploymentRequest {
    return o && o.$typeUrl === MsgUpdateDeploymentRequest.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateDeploymentRequestSDKType {
    return o && o.$typeUrl === MsgUpdateDeploymentRequest.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateDeploymentRequestAmino {
    return o && o.$typeUrl === MsgUpdateDeploymentRequest.typeUrl;
  },
  encode(message: MsgUpdateDeploymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    if (message.payload !== undefined) {
      Payload.encode(message.payload, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 2:
          message.payload = Payload.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateDeploymentRequest {
    return {
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      payload: isSet(object.payload) ? Payload.fromJSON(object.payload) : undefined
    };
  },
  toJSON(message: MsgUpdateDeploymentRequest): JsonSafe<MsgUpdateDeploymentRequest> {
    const obj: any = {};
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.payload !== undefined && (obj.payload = message.payload ? Payload.toJSON(message.payload) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateDeploymentRequest>): MsgUpdateDeploymentRequest {
    const message = createBaseMsgUpdateDeploymentRequest();
    message.meta = object.meta !== undefined && object.meta !== null ? Meta.fromPartial(object.meta) : undefined;
    message.payload = object.payload !== undefined && object.payload !== null ? Payload.fromPartial(object.payload) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateDeploymentRequestAmino): MsgUpdateDeploymentRequest {
    const message = createBaseMsgUpdateDeploymentRequest();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromAmino(object.meta);
    }
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = Payload.fromAmino(object.payload);
    }
    return message;
  },
  toAmino(message: MsgUpdateDeploymentRequest): MsgUpdateDeploymentRequestAmino {
    const obj: any = {};
    obj.meta = message.meta ? Meta.toAmino(message.meta) : undefined;
    obj.payload = message.payload ? Payload.toAmino(message.payload) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentRequestAminoMsg): MsgUpdateDeploymentRequest {
    return MsgUpdateDeploymentRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateDeploymentRequest): MsgUpdateDeploymentRequestAminoMsg {
    return {
      type: "lifted/ghostcloud/MsgUpdateDeployment",
      value: MsgUpdateDeploymentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgUpdateDeploymentRequestProtoMsg): MsgUpdateDeploymentRequest {
    return MsgUpdateDeploymentRequest.decode(message.value);
  },
  toProto(message: MsgUpdateDeploymentRequest): Uint8Array {
    return MsgUpdateDeploymentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeploymentRequest): MsgUpdateDeploymentRequestProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
      value: MsgUpdateDeploymentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateDeploymentRequest.typeUrl, MsgUpdateDeploymentRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateDeploymentRequest.aminoType, MsgUpdateDeploymentRequest.typeUrl);
function createBaseMsgUpdateDeploymentResponse(): MsgUpdateDeploymentResponse {
  return {};
}
/**
 * @name MsgUpdateDeploymentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse
 */
export const MsgUpdateDeploymentResponse = {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse",
  is(o: any): o is MsgUpdateDeploymentResponse {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateDeploymentResponseAmino {
    return o && o.$typeUrl === MsgUpdateDeploymentResponse.typeUrl;
  },
  encode(_: MsgUpdateDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateDeploymentResponse {
    return {};
  },
  toJSON(_: MsgUpdateDeploymentResponse): JsonSafe<MsgUpdateDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse {
    const message = createBaseMsgUpdateDeploymentResponse();
    return message;
  },
  toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateDeploymentResponseAminoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg): MsgUpdateDeploymentResponse {
    return MsgUpdateDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgUpdateDeploymentResponse): Uint8Array {
    return MsgUpdateDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentResponse",
      value: MsgUpdateDeploymentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateDeploymentResponse.typeUrl, MsgUpdateDeploymentResponse);
function createBaseMsgRemoveDeploymentRequest(): MsgRemoveDeploymentRequest {
  return {
    creator: "",
    name: ""
  };
}
/**
 * @name MsgRemoveDeploymentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest
 */
export const MsgRemoveDeploymentRequest = {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
  aminoType: "lifted/ghostcloud/MsgRemoveDeployment",
  is(o: any): o is MsgRemoveDeploymentRequest {
    return o && (o.$typeUrl === MsgRemoveDeploymentRequest.typeUrl || typeof o.creator === "string" && typeof o.name === "string");
  },
  isSDK(o: any): o is MsgRemoveDeploymentRequestSDKType {
    return o && (o.$typeUrl === MsgRemoveDeploymentRequest.typeUrl || typeof o.creator === "string" && typeof o.name === "string");
  },
  isAmino(o: any): o is MsgRemoveDeploymentRequestAmino {
    return o && (o.$typeUrl === MsgRemoveDeploymentRequest.typeUrl || typeof o.creator === "string" && typeof o.name === "string");
  },
  encode(message: MsgRemoveDeploymentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveDeploymentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveDeploymentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRemoveDeploymentRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : ""
    };
  },
  toJSON(message: MsgRemoveDeploymentRequest): JsonSafe<MsgRemoveDeploymentRequest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<MsgRemoveDeploymentRequest>): MsgRemoveDeploymentRequest {
    const message = createBaseMsgRemoveDeploymentRequest();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: MsgRemoveDeploymentRequestAmino): MsgRemoveDeploymentRequest {
    const message = createBaseMsgRemoveDeploymentRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: MsgRemoveDeploymentRequest): MsgRemoveDeploymentRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    return obj;
  },
  fromAminoMsg(object: MsgRemoveDeploymentRequestAminoMsg): MsgRemoveDeploymentRequest {
    return MsgRemoveDeploymentRequest.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRemoveDeploymentRequest): MsgRemoveDeploymentRequestAminoMsg {
    return {
      type: "lifted/ghostcloud/MsgRemoveDeployment",
      value: MsgRemoveDeploymentRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRemoveDeploymentRequestProtoMsg): MsgRemoveDeploymentRequest {
    return MsgRemoveDeploymentRequest.decode(message.value);
  },
  toProto(message: MsgRemoveDeploymentRequest): Uint8Array {
    return MsgRemoveDeploymentRequest.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveDeploymentRequest): MsgRemoveDeploymentRequestProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
      value: MsgRemoveDeploymentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveDeploymentRequest.typeUrl, MsgRemoveDeploymentRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRemoveDeploymentRequest.aminoType, MsgRemoveDeploymentRequest.typeUrl);
function createBaseMsgRemoveDeploymentResponse(): MsgRemoveDeploymentResponse {
  return {};
}
/**
 * @name MsgRemoveDeploymentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse
 */
export const MsgRemoveDeploymentResponse = {
  typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse",
  is(o: any): o is MsgRemoveDeploymentResponse {
    return o && o.$typeUrl === MsgRemoveDeploymentResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRemoveDeploymentResponseSDKType {
    return o && o.$typeUrl === MsgRemoveDeploymentResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRemoveDeploymentResponseAmino {
    return o && o.$typeUrl === MsgRemoveDeploymentResponse.typeUrl;
  },
  encode(_: MsgRemoveDeploymentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRemoveDeploymentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveDeploymentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRemoveDeploymentResponse {
    return {};
  },
  toJSON(_: MsgRemoveDeploymentResponse): JsonSafe<MsgRemoveDeploymentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRemoveDeploymentResponse>): MsgRemoveDeploymentResponse {
    const message = createBaseMsgRemoveDeploymentResponse();
    return message;
  },
  fromAmino(_: MsgRemoveDeploymentResponseAmino): MsgRemoveDeploymentResponse {
    const message = createBaseMsgRemoveDeploymentResponse();
    return message;
  },
  toAmino(_: MsgRemoveDeploymentResponse): MsgRemoveDeploymentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRemoveDeploymentResponseAminoMsg): MsgRemoveDeploymentResponse {
    return MsgRemoveDeploymentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRemoveDeploymentResponseProtoMsg): MsgRemoveDeploymentResponse {
    return MsgRemoveDeploymentResponse.decode(message.value);
  },
  toProto(message: MsgRemoveDeploymentResponse): Uint8Array {
    return MsgRemoveDeploymentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRemoveDeploymentResponse): MsgRemoveDeploymentResponseProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentResponse",
      value: MsgRemoveDeploymentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRemoveDeploymentResponse.typeUrl, MsgRemoveDeploymentResponse);