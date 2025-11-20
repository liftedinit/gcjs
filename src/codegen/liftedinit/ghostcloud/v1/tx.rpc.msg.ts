import { DeliverTxResponse, StdFee } from "../../../types";
import { Rpc } from "../../../helpers";
import { MsgCreateDeploymentRequest, MsgUpdateDeploymentRequest, MsgRemoveDeploymentRequest } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createDeployment(signerAddress: string, message: MsgCreateDeploymentRequest, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  updateDeployment(signerAddress: string, message: MsgUpdateDeploymentRequest, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  removeDeployment(signerAddress: string, message: MsgRemoveDeploymentRequest, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CreateDeployment */
  createDeployment = async (signerAddress: string, message: MsgCreateDeploymentRequest, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDeploymentRequest.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* UpdateDeployment */
  updateDeployment = async (signerAddress: string, message: MsgUpdateDeploymentRequest, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgUpdateDeploymentRequest.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* RemoveDeployment */
  removeDeployment = async (signerAddress: string, message: MsgRemoveDeploymentRequest, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgRemoveDeploymentRequest.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};