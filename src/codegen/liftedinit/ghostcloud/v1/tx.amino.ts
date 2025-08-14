import { MsgCreateDeploymentRequest, MsgUpdateDeploymentRequest, MsgRemoveDeploymentRequest } from "./tx";
export const AminoConverter = {
  "/liftedinit.ghostcloud.v1.MsgCreateDeploymentRequest": {
    aminoType: "lifted/ghostcloud/MsgCreateDeployment",
    toAmino: MsgCreateDeploymentRequest.toAmino,
    fromAmino: MsgCreateDeploymentRequest.fromAmino
  },
  "/liftedinit.ghostcloud.v1.MsgUpdateDeploymentRequest": {
    aminoType: "lifted/ghostcloud/MsgUpdateDeployment",
    toAmino: MsgUpdateDeploymentRequest.toAmino,
    fromAmino: MsgUpdateDeploymentRequest.fromAmino
  },
  "/liftedinit.ghostcloud.v1.MsgRemoveDeploymentRequest": {
    aminoType: "lifted/ghostcloud/MsgRemoveDeployment",
    toAmino: MsgRemoveDeploymentRequest.toAmino,
    fromAmino: MsgRemoveDeploymentRequest.fromAmino
  }
};