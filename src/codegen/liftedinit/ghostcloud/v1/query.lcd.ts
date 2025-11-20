import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryMetasRequest, QueryMetasResponseSDKType, QueryContentRequest, QueryContentResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Parameters queries the parameters of the module. */
  params = async (_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> => {
    const endpoint = `ghostcloud/ghostcloud/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  };
  /* Metas */
  metas = async (params: QueryMetasRequest): Promise<QueryMetasResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filters !== "undefined") {
      options.params.filters = params.filters;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `ghostcloud/ghostcloud/deployments`;
    return await this.req.get<QueryMetasResponseSDKType>(endpoint, options);
  };
  /* Content */
  content = async (params: QueryContentRequest): Promise<QueryContentResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.path !== "undefined") {
      options.params.path = params.path;
    }
    const endpoint = `ghostcloud/ghostcloud/content/${params.creator}/${params.name}/${params.path}`;
    return await this.req.get<QueryContentResponseSDKType>(endpoint, options);
  };
}