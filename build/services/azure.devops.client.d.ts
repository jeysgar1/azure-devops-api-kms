import { AzureGetProjectsItemResponse, AzureGetWorkItemResponse } from '../models';
export declare class AzureDevOpsClient {
    private createConnection;
    getProjects(): Promise<AzureGetProjectsItemResponse[] | undefined>;
    getWorkItems(ids: string[]): Promise<AzureGetWorkItemResponse[] | undefined>;
    wiql(id: string): Promise<string[] | undefined>;
}
