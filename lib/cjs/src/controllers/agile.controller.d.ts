import { AzureGetProjectsItemResponse, AzureWorkItem } from '../models';
import { AzureDevOpsClient } from '../services/azure.devops.client';
/**
 * Controlador encargado de establecer una comunicación con el cliente API de integración
 * con Azure DevOps
 *
 * @category Controllers
 *
 * {@label Clases genéricas}
 */
export declare class AgileController {
    protected azureClient: AzureDevOpsClient;
    /**
     * Permite obtener los elementos de trabajo a partir de un identificador de una iniciativa
     *
     * @param {string} id - Identificador de la iniciativa
     * @returns {Promise<undefined | AzureWorkItem[]>} - Lista de elementos de trabajo asociados a una iniciativa
     */
    getByInitiative(id: string): Promise<Array<AzureWorkItem> | undefined>;
    getChilds(ids: string[]): Promise<AzureWorkItem[]>;
    /**
     * Permite obtener los proyectos creados en Azure DevOps para una organización
     *
     * @returns {Promise<Array<AzureGetProjectsItemResponse>} - Proyectos creados en una organización
     */
    getProjects(): Promise<Array<AzureGetProjectsItemResponse> | undefined>;
}
//# sourceMappingURL=agile.controller.d.ts.map