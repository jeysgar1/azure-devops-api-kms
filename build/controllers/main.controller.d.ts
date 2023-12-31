import { iAppConfig } from '../config';
import { Initiative } from '../models';
export declare class AzureDevOpsIntegrations {
    private static _instance;
    static getInstance(): AzureDevOpsIntegrations;
    private constructor();
    getInitiative(idInitiative: string): Promise<Initiative | undefined>;
    init(appConfig: iAppConfig): void;
}
