import { configInstance, iAppConfig } from '../config';
import { Initiative } from '../models';
import { InitiativeController } from './initiative.controller';

/**
 * Controlador principal encargado de exponer las funcionalidades del aplicativo
 *
 * @category Controllers
 *
 * {@label Clases gen�ricas}
 */
export class AzureDevOpsIntegrations {
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
     * Permite inicializar la configuraci�n de la aplicaci�n
     * @param {string} pathFile - Ruta del archivo de configuraci�n
     */
    public init(appConfig: iAppConfig): void {
        configInstance(appConfig);
    }
}
