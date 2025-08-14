import { Meta, MetaAmino, MetaSDKType } from "./meta";
import { Dataset, DatasetAmino, DatasetSDKType } from "./dataset";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
/**
 * @name Deployment
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Deployment
 */
export interface Deployment {
  meta?: Meta;
  dataset?: Dataset;
}
export interface DeploymentProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.Deployment";
  value: Uint8Array;
}
/**
 * @name DeploymentAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Deployment
 */
export interface DeploymentAmino {
  meta?: MetaAmino;
  dataset?: DatasetAmino;
}
export interface DeploymentAminoMsg {
  type: "/liftedinit.ghostcloud.v1.Deployment";
  value: DeploymentAmino;
}
/**
 * @name DeploymentSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Deployment
 */
export interface DeploymentSDKType {
  meta?: MetaSDKType;
  dataset?: DatasetSDKType;
}
/**
 * GenesisState defines the ghostcloud module's genesis state.
 * @name GenesisState
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.GenesisState
 */
export interface GenesisState {
  params: Params;
  deployments: Deployment[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/liftedinit.ghostcloud.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ghostcloud module's genesis state.
 * @name GenesisStateAmino
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.GenesisState
 */
export interface GenesisStateAmino {
  params?: ParamsAmino;
  deployments?: DeploymentAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/liftedinit.ghostcloud.v1.GenesisState";
  value: GenesisStateAmino;
}
/**
 * GenesisState defines the ghostcloud module's genesis state.
 * @name GenesisStateSDKType
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.GenesisState
 */
export interface GenesisStateSDKType {
  params: ParamsSDKType;
  deployments: DeploymentSDKType[];
}
function createBaseDeployment(): Deployment {
  return {
    meta: undefined,
    dataset: undefined
  };
}
/**
 * @name Deployment
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.Deployment
 */
export const Deployment = {
  typeUrl: "/liftedinit.ghostcloud.v1.Deployment",
  is(o: any): o is Deployment {
    return o && o.$typeUrl === Deployment.typeUrl;
  },
  isSDK(o: any): o is DeploymentSDKType {
    return o && o.$typeUrl === Deployment.typeUrl;
  },
  isAmino(o: any): o is DeploymentAmino {
    return o && o.$typeUrl === Deployment.typeUrl;
  },
  encode(message: Deployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.meta !== undefined) {
      Meta.encode(message.meta, writer.uint32(10).fork()).ldelim();
    }
    if (message.dataset !== undefined) {
      Dataset.encode(message.dataset, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Deployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.meta = Meta.decode(reader, reader.uint32());
          break;
        case 2:
          message.dataset = Dataset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Deployment {
    return {
      meta: isSet(object.meta) ? Meta.fromJSON(object.meta) : undefined,
      dataset: isSet(object.dataset) ? Dataset.fromJSON(object.dataset) : undefined
    };
  },
  toJSON(message: Deployment): JsonSafe<Deployment> {
    const obj: any = {};
    message.meta !== undefined && (obj.meta = message.meta ? Meta.toJSON(message.meta) : undefined);
    message.dataset !== undefined && (obj.dataset = message.dataset ? Dataset.toJSON(message.dataset) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Deployment>): Deployment {
    const message = createBaseDeployment();
    message.meta = object.meta !== undefined && object.meta !== null ? Meta.fromPartial(object.meta) : undefined;
    message.dataset = object.dataset !== undefined && object.dataset !== null ? Dataset.fromPartial(object.dataset) : undefined;
    return message;
  },
  fromAmino(object: DeploymentAmino): Deployment {
    const message = createBaseDeployment();
    if (object.meta !== undefined && object.meta !== null) {
      message.meta = Meta.fromAmino(object.meta);
    }
    if (object.dataset !== undefined && object.dataset !== null) {
      message.dataset = Dataset.fromAmino(object.dataset);
    }
    return message;
  },
  toAmino(message: Deployment): DeploymentAmino {
    const obj: any = {};
    obj.meta = message.meta ? Meta.toAmino(message.meta) : undefined;
    obj.dataset = message.dataset ? Dataset.toAmino(message.dataset) : undefined;
    return obj;
  },
  fromAminoMsg(object: DeploymentAminoMsg): Deployment {
    return Deployment.fromAmino(object.value);
  },
  fromProtoMsg(message: DeploymentProtoMsg): Deployment {
    return Deployment.decode(message.value);
  },
  toProto(message: Deployment): Uint8Array {
    return Deployment.encode(message).finish();
  },
  toProtoMsg(message: Deployment): DeploymentProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.Deployment",
      value: Deployment.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Deployment.typeUrl, Deployment);
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    deployments: []
  };
}
/**
 * GenesisState defines the ghostcloud module's genesis state.
 * @name GenesisState
 * @package liftedinit.ghostcloud.v1
 * @see proto type: liftedinit.ghostcloud.v1.GenesisState
 */
export const GenesisState = {
  typeUrl: "/liftedinit.ghostcloud.v1.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.is(o.params) && Array.isArray(o.deployments) && (!o.deployments.length || Deployment.is(o.deployments[0])));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isSDK(o.params) && Array.isArray(o.deployments) && (!o.deployments.length || Deployment.isSDK(o.deployments[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Params.isAmino(o.params) && Array.isArray(o.deployments) && (!o.deployments.length || Deployment.isAmino(o.deployments[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.deployments) {
      Deployment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.deployments.push(Deployment.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      deployments: Array.isArray(object?.deployments) ? object.deployments.map((e: any) => Deployment.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? Deployment.toJSON(e) : undefined);
    } else {
      obj.deployments = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.deployments = object.deployments?.map(e => Deployment.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    message.deployments = object.deployments?.map(e => Deployment.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? Deployment.toAmino(e) : undefined);
    } else {
      obj.deployments = message.deployments;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/liftedinit.ghostcloud.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);