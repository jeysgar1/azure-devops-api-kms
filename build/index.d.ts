import { Initiative } from './models';
import { iAppConfig } from './config';
declare class AzureDevOpsIntegrations {
    private static _instance;
    static getInstance(): AzureDevOpsIntegrations;
    private constructor();
    getInitiative(idInitiative: string): Promise<Initiative | undefined>;
    init(appConfig: iAppConfig): void;
    setProject(projectName: string): void;
}
declare const azureDevOpsIntegrationInstance: AzureDevOpsIntegrations;
export default azureDevOpsIntegrationInstance;
export { iAppConfig };
