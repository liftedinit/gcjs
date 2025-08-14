//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDeploymentRequest, MsgUpdateDeploymentRequest, MsgRemoveDeploymentRequest } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest", MsgCreateDeploymentRequest], ["/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest", MsgUpdateDeploymentRequest], ["/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest", MsgRemoveDeploymentRequest]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDeployment(value: MsgCreateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
        value: MsgCreateDeploymentRequest.encode(value).finish()
      };
    },
    updateDeployment(value: MsgUpdateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
        value: MsgUpdateDeploymentRequest.encode(value).finish()
      };
    },
    removeDeployment(value: MsgRemoveDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
        value: MsgRemoveDeploymentRequest.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDeployment(value: MsgCreateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
        value
      };
    },
    updateDeployment(value: MsgUpdateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
        value
      };
    },
    removeDeployment(value: MsgRemoveDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
        value
      };
    }
  },
  toJSON: {
    createDeployment(value: MsgCreateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
        value: MsgCreateDeploymentRequest.toJSON(value)
      };
    },
    updateDeployment(value: MsgUpdateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
        value: MsgUpdateDeploymentRequest.toJSON(value)
      };
    },
    removeDeployment(value: MsgRemoveDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
        value: MsgRemoveDeploymentRequest.toJSON(value)
      };
    }
  },
  fromJSON: {
    createDeployment(value: any) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
        value: MsgCreateDeploymentRequest.fromJSON(value)
      };
    },
    updateDeployment(value: any) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
        value: MsgUpdateDeploymentRequest.fromJSON(value)
      };
    },
    removeDeployment(value: any) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
        value: MsgRemoveDeploymentRequest.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createDeployment(value: MsgCreateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest",
        value: MsgCreateDeploymentRequest.fromPartial(value)
      };
    },
    updateDeployment(value: MsgUpdateDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest",
        value: MsgUpdateDeploymentRequest.fromPartial(value)
      };
    },
    removeDeployment(value: MsgRemoveDeploymentRequest) {
      return {
        typeUrl: "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest",
        value: MsgRemoveDeploymentRequest.fromPartial(value)
      };
    }
  }
};