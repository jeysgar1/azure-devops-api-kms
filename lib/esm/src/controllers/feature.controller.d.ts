import { AzureWorkItem, Feature } from "../models";
/**
 * Controlador encargado de gestionar las características
 *
 * @category Controllers
 *
 * {@label Características}
 */
export declare class FeatureController {
    /**
     * Instancia del controlador encargado de integrarse con Azure DevOps
     */
    private agileController;
    /**
     * Crea una instancia del controlador
     */
    constructor();
    /**
     * Permite obtener las características de un conjunto de épicas
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Feature> | undefined} Lista de características
     */
    get(workItems: AzureWorkItem[] | undefined): Array<Feature> | undefined;
}
//# sourceMappingURL=feature.controller.d.ts.map