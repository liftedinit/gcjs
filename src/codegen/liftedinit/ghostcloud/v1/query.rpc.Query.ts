import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryParamsRequest, QueryParamsResponse, QueryMetasRequest, QueryMetasResponse, QueryContentRequest, QueryContentResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  metas(request: QueryMetasRequest): Promise<QueryMetasResponse>;
  content(request: QueryContentRequest): Promise<QueryContentResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Parameters queries the parameters of the module. */
  params = async (request: QueryParamsRequest = {}): Promise<QueryParamsResponse> => {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("liftedinit.ghostcloud.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  };
  /* Metas */
  metas = async (request: QueryMetasRequest): Promise<QueryMetasResponse> => {
    const data = QueryMetasRequest.encode(request).finish();
    const promise = this.rpc.request("liftedinit.ghostcloud.v1.Query", "Metas", data);
    return promise.then(data => QueryMetasResponse.decode(new BinaryReader(data)));
  };
  /* Content */
  content = async (request: QueryContentRequest): Promise<QueryContentResponse> => {
    const data = QueryContentRequest.encode(request).finish();
    const promise = this.rpc.request("liftedinit.ghostcloud.v1.Query", "Content", data);
    return promise.then(data => QueryContentResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    params(request?: QueryParamsRequest): Promise<QueryParamsResponse> {
      return queryService.params(request);
    },
    metas(request: QueryMetasRequest): Promise<QueryMetasResponse> {
      return queryService.metas(request);
    },
    content(request: QueryContentRequest): Promise<QueryContentResponse> {
      return queryService.content(request);
    }
  };
};