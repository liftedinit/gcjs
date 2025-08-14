import { Filter, FilterAmino, FilterSDKType } from "./filter-by";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { Meta, MetaAmino, MetaSDKType } from "./meta";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsRequest
 */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/liftedinit.ghostcloud.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequestSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsRequest
 */
export interface QueryParamsRequestSDKType {}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsResponse
 */
export interface QueryParamsResponse {
  /**
   * params holds all the parameters of this module.
   */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * params holds all the parameters of this module.
   */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/liftedinit.ghostcloud.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponseSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsResponse
 */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
/**
 * @name QueryMetasRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasRequest
 */
export interface QueryMetasRequest {
  filters: Filter[];
  pagination?: PageRequest;
}
export interface QueryMetasRequestProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryMetasRequest";
  value: Uint8Array;
}
/**
 * @name QueryMetasRequestAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasRequest
 */
export interface QueryMetasRequestAmino {
  filters?: FilterAmino[];
  pagination?: PageRequestAmino;
}
export interface QueryMetasRequestAminoMsg {
  type: "/liftedinit.ghostcloud.v1.QueryMetasRequest";
  value: QueryMetasRequestAmino;
}
/**
 * @name QueryMetasRequestSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasRequest
 */
export interface QueryMetasRequestSDKType {
  filters: FilterSDKType[];
  pagination?: PageRequestSDKType;
}
/**
 * @name QueryMetasResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasResponse
 */
export interface QueryMetasResponse {
  meta: Meta[];
  pagination?: PageResponse;
}
export interface QueryMetasResponseProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryMetasResponse";
  value: Uint8Array;
}
/**
 * @name QueryMetasResponseAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasResponse
 */
export interface QueryMetasResponseAmino {
  meta?: MetaAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryMetasResponseAminoMsg {
  type: "/liftedinit.ghostcloud.v1.QueryMetasResponse";
  value: QueryMetasResponseAmino;
}
/**
 * @name QueryMetasResponseSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasResponse
 */
export interface QueryMetasResponseSDKType {
  meta: MetaSDKType[];
  pagination?: PageResponseSDKType;
}
/**
 * @name QueryContentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentRequest
 */
export interface QueryContentRequest {
  creator: string;
  name: string;
  path: string;
}
export interface QueryContentRequestProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryContentRequest";
  value: Uint8Array;
}
/**
 * @name QueryContentRequestAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentRequest
 */
export interface QueryContentRequestAmino {
  creator?: string;
  name?: string;
  path?: string;
}
export interface QueryContentRequestAminoMsg {
  type: "/liftedinit.ghostcloud.v1.QueryContentRequest";
  value: QueryContentRequestAmino;
}
/**
 * @name QueryContentRequestSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentRequest
 */
export interface QueryContentRequestSDKType {
  creator: string;
  name: string;
  path: string;
}
/**
 * @name QueryContentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentResponse
 */
export interface QueryContentResponse {
  content: Uint8Array;
}
export interface QueryContentResponseProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryContentResponse";
  value: Uint8Array;
}
/**
 * @name QueryContentResponseAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentResponse
 */
export interface QueryContentResponseAmino {
  content?: string;
}
export interface QueryContentResponseAminoMsg {
  type: "/liftedinit.ghostcloud.v1.QueryContentResponse";
  value: QueryContentResponseAmino;
}
/**
 * @name QueryContentResponseSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentResponse
 */
export interface QueryContentResponseSDKType {
  content: Uint8Array;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
/**
 * QueryParamsRequest is request type for the Query/Params RPC method.
 * @name QueryParamsRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsRequest
 */
export const QueryParamsRequest = {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isSDK(o: any): o is QueryParamsRequestSDKType {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    return {};
  },
  toJSON(_: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 * @name QueryParamsResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryParamsResponse
 */
export const QueryParamsResponse = {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isSDK(o: any): o is QueryParamsResponseSDKType {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isSDK(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryMetasRequest(): QueryMetasRequest {
  return {
    filters: [],
    pagination: undefined
  };
}
/**
 * @name QueryMetasRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasRequest
 */
export const QueryMetasRequest = {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryMetasRequest",
  is(o: any): o is QueryMetasRequest {
    return o && (o.$typeUrl === QueryMetasRequest.typeUrl || Array.isArray(o.filters) && (!o.filters.length || Filter.is(o.filters[0])));
  },
  isSDK(o: any): o is QueryMetasRequestSDKType {
    return o && (o.$typeUrl === QueryMetasRequest.typeUrl || Array.isArray(o.filters) && (!o.filters.length || Filter.isSDK(o.filters[0])));
  },
  isAmino(o: any): o is QueryMetasRequestAmino {
    return o && (o.$typeUrl === QueryMetasRequest.typeUrl || Array.isArray(o.filters) && (!o.filters.length || Filter.isAmino(o.filters[0])));
  },
  encode(message: QueryMetasRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.filters) {
      Filter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetasRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetasRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filters.push(Filter.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetasRequest {
    return {
      filters: Array.isArray(object?.filters) ? object.filters.map((e: any) => Filter.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMetasRequest): JsonSafe<QueryMetasRequest> {
    const obj: any = {};
    if (message.filters) {
      obj.filters = message.filters.map(e => e ? Filter.toJSON(e) : undefined);
    } else {
      obj.filters = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMetasRequest>): QueryMetasRequest {
    const message = createBaseQueryMetasRequest();
    message.filters = object.filters?.map(e => Filter.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMetasRequestAmino): QueryMetasRequest {
    const message = createBaseQueryMetasRequest();
    message.filters = object.filters?.map(e => Filter.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMetasRequest): QueryMetasRequestAmino {
    const obj: any = {};
    if (message.filters) {
      obj.filters = message.filters.map(e => e ? Filter.toAmino(e) : undefined);
    } else {
      obj.filters = message.filters;
    }
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMetasRequestAminoMsg): QueryMetasRequest {
    return QueryMetasRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetasRequestProtoMsg): QueryMetasRequest {
    return QueryMetasRequest.decode(message.value);
  },
  toProto(message: QueryMetasRequest): Uint8Array {
    return QueryMetasRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMetasRequest): QueryMetasRequestProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.QueryMetasRequest",
      value: QueryMetasRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMetasRequest.typeUrl, QueryMetasRequest);
function createBaseQueryMetasResponse(): QueryMetasResponse {
  return {
    meta: [],
    pagination: undefined
  };
}
/**
 * @name QueryMetasResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryMetasResponse
 */
export const QueryMetasResponse = {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryMetasResponse",
  is(o: any): o is QueryMetasResponse {
    return o && (o.$typeUrl === QueryMetasResponse.typeUrl || Array.isArray(o.meta) && (!o.meta.length || Meta.is(o.meta[0])));
  },
  isSDK(o: any): o is QueryMetasResponseSDKType {
    return o && (o.$typeUrl === QueryMetasResponse.typeUrl || Array.isArray(o.meta) && (!o.meta.length || Meta.isSDK(o.meta[0])));
  },
  isAmino(o: any): o is QueryMetasResponseAmino {
    return o && (o.$typeUrl === QueryMetasResponse.typeUrl || Array.isArray(o.meta) && (!o.meta.length || Meta.isAmino(o.meta[0])));
  },
  encode(message: QueryMetasResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.meta) {
      Meta.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMetasResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMetasResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta.push(Meta.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMetasResponse {
    return {
      meta: Array.isArray(object?.meta) ? object.meta.map((e: any) => Meta.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryMetasResponse): JsonSafe<QueryMetasResponse> {
    const obj: any = {};
    if (message.meta) {
      obj.meta = message.meta.map(e => e ? Meta.toJSON(e) : undefined);
    } else {
      obj.meta = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryMetasResponse>): QueryMetasResponse {
    const message = createBaseQueryMetasResponse();
    message.meta = object.meta?.map(e => Meta.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryMetasResponseAmino): QueryMetasResponse {
    const message = createBaseQueryMetasResponse();
    message.meta = object.meta?.map(e => Meta.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryMetasResponse): QueryMetasResponseAmino {
    const obj: any = {};
    if (message.meta) {
      obj.meta = message.meta.map(e => e ? Meta.toAmino(e) : undefined);
    } else {
      obj.meta = message.meta;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryMetasResponseAminoMsg): QueryMetasResponse {
    return QueryMetasResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMetasResponseProtoMsg): QueryMetasResponse {
    return QueryMetasResponse.decode(message.value);
  },
  toProto(message: QueryMetasResponse): Uint8Array {
    return QueryMetasResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMetasResponse): QueryMetasResponseProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.QueryMetasResponse",
      value: QueryMetasResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMetasResponse.typeUrl, QueryMetasResponse);
function createBaseQueryContentRequest(): QueryContentRequest {
  return {
    creator: "",
    name: "",
    path: ""
  };
}
/**
 * @name QueryContentRequest
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentRequest
 */
export const QueryContentRequest = {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryContentRequest",
  is(o: any): o is QueryContentRequest {
    return o && (o.$typeUrl === QueryContentRequest.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.path === "string");
  },
  isSDK(o: any): o is QueryContentRequestSDKType {
    return o && (o.$typeUrl === QueryContentRequest.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.path === "string");
  },
  isAmino(o: any): o is QueryContentRequestAmino {
    return o && (o.$typeUrl === QueryContentRequest.typeUrl || typeof o.creator === "string" && typeof o.name === "string" && typeof o.path === "string");
  },
  encode(message: QueryContentRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.path !== "") {
      writer.uint32(26).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentRequest();
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
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContentRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      path: isSet(object.path) ? String(object.path) : ""
    };
  },
  toJSON(message: QueryContentRequest): JsonSafe<QueryContentRequest> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },
  fromPartial(object: Partial<QueryContentRequest>): QueryContentRequest {
    const message = createBaseQueryContentRequest();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.path = object.path ?? "";
    return message;
  },
  fromAmino(object: QueryContentRequestAmino): QueryContentRequest {
    const message = createBaseQueryContentRequest();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    return message;
  },
  toAmino(message: QueryContentRequest): QueryContentRequestAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    obj.name = message.name === "" ? undefined : message.name;
    obj.path = message.path === "" ? undefined : message.path;
    return obj;
  },
  fromAminoMsg(object: QueryContentRequestAminoMsg): QueryContentRequest {
    return QueryContentRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentRequestProtoMsg): QueryContentRequest {
    return QueryContentRequest.decode(message.value);
  },
  toProto(message: QueryContentRequest): Uint8Array {
    return QueryContentRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryContentRequest): QueryContentRequestProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.QueryContentRequest",
      value: QueryContentRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContentRequest.typeUrl, QueryContentRequest);
function createBaseQueryContentResponse(): QueryContentResponse {
  return {
    content: new Uint8Array()
  };
}
/**
 * @name QueryContentResponse
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.QueryContentResponse
 */
export const QueryContentResponse = {
  typeUrl: "/liftedinit.ghostcloud.v1.QueryContentResponse",
  is(o: any): o is QueryContentResponse {
    return o && (o.$typeUrl === QueryContentResponse.typeUrl || o.content instanceof Uint8Array || typeof o.content === "string");
  },
  isSDK(o: any): o is QueryContentResponseSDKType {
    return o && (o.$typeUrl === QueryContentResponse.typeUrl || o.content instanceof Uint8Array || typeof o.content === "string");
  },
  isAmino(o: any): o is QueryContentResponseAmino {
    return o && (o.$typeUrl === QueryContentResponse.typeUrl || o.content instanceof Uint8Array || typeof o.content === "string");
  },
  encode(message: QueryContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryContentResponse {
    return {
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array()
    };
  },
  toJSON(message: QueryContentResponse): JsonSafe<QueryContentResponse> {
    const obj: any = {};
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<QueryContentResponse>): QueryContentResponse {
    const message = createBaseQueryContentResponse();
    message.content = object.content ?? new Uint8Array();
    return message;
  },
  fromAmino(object: QueryContentResponseAmino): QueryContentResponse {
    const message = createBaseQueryContentResponse();
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },
  toAmino(message: QueryContentResponse): QueryContentResponseAmino {
    const obj: any = {};
    obj.content = message.content ? base64FromBytes(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryContentResponseAminoMsg): QueryContentResponse {
    return QueryContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryContentResponseProtoMsg): QueryContentResponse {
    return QueryContentResponse.decode(message.value);
  },
  toProto(message: QueryContentResponse): Uint8Array {
    return QueryContentResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryContentResponse): QueryContentResponseProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.QueryContentResponse",
      value: QueryContentResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryContentResponse.typeUrl, QueryContentResponse);