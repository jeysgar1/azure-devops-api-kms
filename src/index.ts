import { Initiative } from './models';
import { InitiativeController } from './controllers/initiative.controller';
import { configInstance, iAppConfig } from './config';

class AzureDevOpsIntegrations {
    private static _instance: AzureDevOpsIntegrations =
        new AzureDevOpsIntegrations();

    public static getInstance(): AzureDevOpsIntegrations {
        return this._instance;
    }

    private constructor() {}

    public async getInitiative(
        idInitiative: string,
    ): Promise<Initiative | undefined> {
        if (configInstance()?.onValidate()) {
            const initiativeController: InitiativeController =
                new InitiativeController();
            return await initiativeController.get(idInitiative);
        } else {
            throw Error("Couldn't get the initiative");
        }
    }

    /**
     * Permite inicializar la configuración de la aplicación
     * @param {string} pathFile - Ruta del archivo de configuración
     */
    public init(appConfig: iAppConfig): void {
        configInstance(appConfig);
    }

    public setProject(projectName: string): void {
        configInstance()?.setProject(projectName);
    }
}

const azureDevOpsIntegrationInstance: AzureDevOpsIntegrations =
    AzureDevOpsIntegrations.getInstance();
export default azureDevOpsIntegrationInstance;
export { iAppConfig };
