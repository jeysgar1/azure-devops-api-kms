import { AzureGetWorkItemRelationResponse } from './azureGetWorkItemRelationResponse';
export declare class AzureGetWorkItemResponse {
    id: string | undefined;
    fields: Record<string, any> | undefined;
    relations: AzureGetWorkItemRelationResponse[] | undefined;
    url: string | undefined;
}
