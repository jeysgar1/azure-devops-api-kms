import { Initiative } from './models';
import { iAppConfig } from './config';
declare class AzureDevOpsIntegrations {
    private static _instance;
    static getInstance(): AzureDevOpsIntegrations;
    private constructor();
    getInitiative(idInitiative: string): Promise<Initiative | undefined>;
    /**
     * Permite inicializar la configuración de la aplicación
     * @param {string} pathFile - Ruta del archivo de configuración
     */
    init(appConfig: iAppConfig): void;
    setProject(projectName: string): void;
}
declare const azureDevOpsIntegrationInstance: AzureDevOpsIntegrations;
export default azureDevOpsIntegrationInstance;
export { iAppConfig };
//# sourceMappingURL=index.d.ts.map