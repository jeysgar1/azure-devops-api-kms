import { AzureGetWorkItemRelationResponse } from './azureGetWorkItemRelationResponse';
/**
 * Elemento de trabajo obtenido al consumir la API de Azure DevOps
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
export declare class AzureGetWorkItemResponse {
    id: string | undefined;
    fields: Record<string, any> | undefined;
    relations: AzureGetWorkItemRelationResponse[] | undefined;
    url: string | undefined;
}
//# sourceMappingURL=azureGetWorkItemResponse.d.ts.map