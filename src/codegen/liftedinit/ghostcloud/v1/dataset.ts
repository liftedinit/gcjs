import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
/**
 * @name ItemMeta
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemMeta
 */
export interface ItemMeta {
  path: string;
}
export interface ItemMetaProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.ItemMeta";
  value: Uint8Array;
}
/**
 * @name ItemMetaAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemMeta
 */
export interface ItemMetaAmino {
  path?: string;
}
export interface ItemMetaAminoMsg {
  type: "/liftedinit.ghostcloud.v1.ItemMeta";
  value: ItemMetaAmino;
}
/**
 * @name ItemMetaSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemMeta
 */
export interface ItemMetaSDKType {
  path: string;
}
/**
 * @name ItemContent
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemContent
 */
export interface ItemContent {
  /**
   * This can be large
   */
  content: Uint8Array;
}
export interface ItemContentProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.ItemContent";
  value: Uint8Array;
}
/**
 * @name ItemContentAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemContent
 */
export interface ItemContentAmino {
  /**
   * This can be large
   */
  content?: string;
}
export interface ItemContentAminoMsg {
  type: "/liftedinit.ghostcloud.v1.ItemContent";
  value: ItemContentAmino;
}
/**
 * @name ItemContentSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemContent
 */
export interface ItemContentSDKType {
  content: Uint8Array;
}
/**
 * @name Item
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Item
 */
export interface Item {
  meta?: ItemMeta;
  content?: ItemContent;
}
export interface ItemProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Item";
  value: Uint8Array;
}
/**
 * @name ItemAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Item
 */
export interface ItemAmino {
  meta?: ItemMetaAmino;
  content?: ItemContentAmino;
}
export interface ItemAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Item";
  value: ItemAmino;
}
/**
 * @name ItemSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Item
 */
export interface ItemSDKType {
  meta?: ItemMetaSDKType;
  content?: ItemContentSDKType;
}
/**
 * @name Dataset
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Dataset
 */
export interface Dataset {
  items: Item[];
}
export interface DatasetProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Dataset";
  value: Uint8Array;
}
/**
 * @name DatasetAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Dataset
 */
export interface DatasetAmino {
  items?: ItemAmino[];
}
export interface DatasetAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Dataset";
  value: DatasetAmino;
}
/**
 * @name DatasetSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Dataset
 */
export interface DatasetSDKType {
  items: ItemSDKType[];
}
function createBaseItemMeta(): ItemMeta {
  return {
    path: ""
  };
}
/**
 * @name ItemMeta
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemMeta
 */
export const ItemMeta = {
  typeUrl: "/liftedinit.ghostcloud.v1.ItemMeta",
  is(o: any): o is ItemMeta {
    return o && (o.$typeUrl === ItemMeta.typeUrl || typeof o.path === "string");
  },
  isSDK(o: any): o is ItemMetaSDKType {
    return o && (o.$typeUrl === ItemMeta.typeUrl || typeof o.path === "string");
  },
  isAmino(o: any): o is ItemMetaAmino {
    return o && (o.$typeUrl === ItemMeta.typeUrl || typeof o.path === "string");
  },
  encode(message: ItemMeta, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ItemMeta {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemMeta();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ItemMeta {
    return {
      path: isSet(object.path) ? String(object.path) : ""
    };
  },
  toJSON(message: ItemMeta): JsonSafe<ItemMeta> {
    const obj: any = {};
    message.path !== undefined && (obj.path = message.path);
    return obj;
  },
  fromPartial(object: Partial<ItemMeta>): ItemMeta {
    const message = createBaseItemMeta();
    message.path = object.path ?? "";
    return message;
  },
  fromAmino(object: ItemMetaAmino): ItemMeta {
    const message = createBaseItemMeta();
    if (object.path !== undefined && object.path !== null) {
      message.path = object.path;
    }
    return message;
  },
  toAmino(message: ItemMeta): ItemMetaAmino {
    const obj: any = {};
    obj.path = message.path === "" ? undefined : message.path;
    return obj;
  },
  fromAminoMsg(object: ItemMetaAminoMsg): ItemMeta {
    return ItemMeta.fromAmino(object.value);
  },
  fromProtoMsg(message: ItemMetaProtoMsg): ItemMeta {
    return ItemMeta.decode(message.value);
  },
  toProto(message: ItemMeta): Uint8Array {
    return ItemMeta.encode(message).finish();
  },
  toProtoMsg(message: ItemMeta): ItemMetaProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.ItemMeta",
      value: ItemMeta.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ItemMeta.typeUrl, ItemMeta);
function createBaseItemContent(): ItemContent {
  return {
    content: new Uint8Array()
  };
}
/**
 * @name ItemContent
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.ItemContent
 */
export const ItemContent = {
  typeUrl: "/liftedinit.ghostcloud.v1.ItemContent",
  is(o: any): o is ItemContent {
    return o && (o.$typeUrl === ItemContent.typeUrl || o.content instanceof Uint8Array || typeof o.content === "string");
  },
  isSDK(o: any): o is ItemContentSDKType {
    return o && (o.$typeUrl === ItemContent.typeUrl || o.content instanceof Uint8Array || typeof o.content === "string");
  },
  isAmino(o: any): o is ItemContentAmino {
    return o && (o.$typeUrl === ItemContent.typeUrl || o.content instanceof Uint8Array || typeof o.content === "string");
  },
  encode(message: ItemContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content.length !== 0) {
      writer.uint32(10).bytes(message.content);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ItemContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItemContent();
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
  fromJSON(object: any): ItemContent {
    return {
      content: isSet(object.content) ? bytesFromBase64(object.content) : new Uint8Array()
    };
  },
  toJSON(message: ItemContent): JsonSafe<ItemContent> {
    const obj: any = {};
    message.content !== undefined && (obj.content = base64FromBytes(message.content !== undefined ? message.content : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<ItemContent>): ItemContent {
    const message = createBaseItemContent();
    message.content = object.content ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ItemContentAmino): ItemContent {
    const message = createBaseItemContent();
    if (object.content !== undefined && object.content !== null) {
      message.content = bytesFromBase64(object.content);
    }
    return message;
  },
  toAmino(message: ItemContent): ItemContentAmino {
    const obj: any = {};
    obj.content = message.content ? base64FromBytes(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: ItemContentAminoMsg): ItemContent {
    return ItemContent.fromAmino(object.value);
  },
  fromProtoMsg(message: ItemContentProtoMsg): ItemContent {
    return ItemContent.decode(message.value);
  },
  toProto(message: ItemContent): Uint8Array {
    return ItemContent.encode(message).finish();
  },
  toProtoMsg(message: ItemContent): ItemContentProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.ItemContent",
      value: ItemContent.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ItemContent.typeUrl, ItemContent);
function createBaseItem(): Item {
  return {
    meta: undefined,
    content: undefined
  };
}
/**
 * @name Item
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Item
 */
export const Item = {
  typeUrl: "/liftedinit.ghostcloud.v1.Item",
  is(o: any): o is Item {
    return o && o.$typeUrl === Item.typeUrl;
  },
  isSDK(o: any): o is ItemSDKType {
    return o && o.$typeUrl === Item.typeUrl;
  },
  isAmino(o: any): o is ItemAmino {
    return o && o.$typeUrl === Item.typeUrl;
  },
  encode(message: Item, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== undefined) {
      ItemMeta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    if (message.content !== undefined) {
      ItemContent.encode(message.content, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Item {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = ItemMeta.decode(reader, reader.uint32());
          break;
        case 2:
          message.content = ItemContent.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Item {
    return {
      meta: isSet(object.meta) ? ItemMeta.fromJSON(object.meta) : undefined,
      content: isSet(object.content) ? ItemContent.fromJSON(object.content) : undefined
    };
  },
  toJSON(message: Item): JsonSafe<Item> {
    const obj: any = {};
    message.meta !== undefined && (obj.meta = message.meta ? ItemMeta.toJSON(message.meta) : undefined);
    message.content !== undefined && (obj.content = message.content ? ItemContent.toJSON(message.content) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Item>): Item {
    const message = createBaseItem();
    message.meta = object.meta !== undefined && object.meta !== null ? ItemMeta.fromPartial(object.meta) : undefined;
    message.content = object.content !== undefined && object.content !== null ? ItemContent.fromPartial(object.content) : undefined;
    return message;
  },
  fromAmino(object: ItemAmino): Item {
    const message = createBaseItem();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = ItemMeta.fromAmino(object.meta);
    }
    if (object.content !== undefined && object.content !== null) {
      message.content = ItemContent.fromAmino(object.content);
    }
    return message;
  },
  toAmino(message: Item): ItemAmino {
    const obj: any = {};
    obj.meta = message.meta ? ItemMeta.toAmino(message.meta) : undefined;
    obj.content = message.content ? ItemContent.toAmino(message.content) : undefined;
    return obj;
  },
  fromAminoMsg(object: ItemAminoMsg): Item {
    return Item.fromAmino(object.value);
  },
  fromProtoMsg(message: ItemProtoMsg): Item {
    return Item.decode(message.value);
  },
  toProto(message: Item): Uint8Array {
    return Item.encode(message).finish();
  },
  toProtoMsg(message: Item): ItemProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Item",
      value: Item.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Item.typeUrl, Item);
function createBaseDataset(): Dataset {
  return {
    items: []
  };
}
/**
 * @name Dataset
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Dataset
 */
export const Dataset = {
  typeUrl: "/liftedinit.ghostcloud.v1.Dataset",
  is(o: any): o is Dataset {
    return o && (o.$typeUrl === Dataset.typeUrl || Array.isArray(o.items) && (!o.items.length || Item.is(o.items[0])));
  },
  isSDK(o: any): o is DatasetSDKType {
    return o && (o.$typeUrl === Dataset.typeUrl || Array.isArray(o.items) && (!o.items.length || Item.isSDK(o.items[0])));
  },
  isAmino(o: any): o is DatasetAmino {
    return o && (o.$typeUrl === Dataset.typeUrl || Array.isArray(o.items) && (!o.items.length || Item.isAmino(o.items[0])));
  },
  encode(message: Dataset, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.items) {
      Item.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Dataset {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDataset();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.items.push(Item.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Dataset {
    return {
      items: Array.isArray(object?.items) ? object.items.map((e: any) => Item.fromJSON(e)) : []
    };
  },
  toJSON(message: Dataset): JsonSafe<Dataset> {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toJSON(e) : undefined);
    } else {
      obj.items = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Dataset>): Dataset {
    const message = createBaseDataset();
    message.items = object.items?.map(e => Item.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DatasetAmino): Dataset {
    const message = createBaseDataset();
    message.items = object.items?.map(e => Item.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Dataset): DatasetAmino {
    const obj: any = {};
    if (message.items) {
      obj.items = message.items.map(e => e ? Item.toAmino(e) : undefined);
    } else {
      obj.items = message.items;
    }
    return obj;
  },
  fromAminoMsg(object: DatasetAminoMsg): Dataset {
    return Dataset.fromAmino(object.value);
  },
  fromProtoMsg(message: DatasetProtoMsg): Dataset {
    return Dataset.decode(message.value);
  },
  toProto(message: Dataset): Uint8Array {
    return Dataset.encode(message).finish();
  },
  toProtoMsg(message: Dataset): DatasetProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Dataset",
      value: Dataset.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Dataset.typeUrl, Dataset);