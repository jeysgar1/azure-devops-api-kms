import { AzureGetProjectsItemResponse, AzureWorkItem } from '../models';
import { AzureDevOpsClient } from '../services/azure.devops.client';
export declare class AgileController {
    protected azureClient: AzureDevOpsClient;
    getByInitiative(id: string): Promise<Array<AzureWorkItem> | undefined>;
    getChilds(ids: string[]): Promise<AzureWorkItem[]>;
    getProjects(): Promise<Array<AzureGetProjectsItemResponse> | undefined>;
}
