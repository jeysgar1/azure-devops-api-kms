import { iAppConfig } from '../config';
import { Initiative } from '../models';
/**
 * Controlador principal encargado de exponer las funcionalidades del aplicativo
 *
 * @category Controllers
 *
 * {@label Clases gen�ricas}
 */
export declare class AzureDevOpsIntegrations {
    private static _instance;
    static getInstance(): AzureDevOpsIntegrations;
    private constructor();
    getInitiative(idInitiative: string): Promise<Initiative | undefined>;
    /**
     * Permite inicializar la configuraci�n de la aplicaci�n
     * @param {string} pathFile - Ruta del archivo de configuraci�n
     */
    init(appConfig: iAppConfig): void;
    setProject(projectName: string): void;
}
//# sourceMappingURL=main.controller.d.ts.map