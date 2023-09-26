import {
    AzureGetProjectsItemResponse,
    AzureGetWorkItemResponse,
    AzureWorkItem,
} from '../models';
import { AzureDevOpsClient } from '../services/azure.devops.client';

/**
 * Controlador encargado de establecer una comunicación con el cliente API de integración
 * con Azure DevOps
 *
 * @category Controllers
 *
 * {@label Clases genéricas}
 */
export class AgileController {
    // Cliente encargado de integrarse con Azure DevOps
    protected azureClient: AzureDevOpsClient = new AzureDevOpsClient();

    /**
     * Permite obtener los elementos de trabajo a partir de un identificador de una iniciativa
     *
     * @param {string} id - Identificador de la iniciativa
     * @returns {Promise<undefined | AzureWorkItem[]>} - Lista de elementos de trabajo asociados a una iniciativa
     */
    async getByInitiative(
        id: string,
    ): Promise<Array<AzureWorkItem> | undefined> {
        let azureWorkItems: AzureWorkItem[] = [];
        const ids: string[] | undefined = await this.azureClient.wiql(id);
        if (ids) {
            azureWorkItems = await this.getChilds(ids);
        }
        return azureWorkItems;
    }

    async getChilds(ids: string[]) {
        const azureWorkItems: AzureWorkItem[] = [];
        const azureGetWorkItemResponse: AzureGetWorkItemResponse[] | undefined =
            await this.azureClient.getWorkItems(ids);
        if (azureGetWorkItemResponse) {
            azureGetWorkItemResponse.forEach(
                (workItem: AzureGetWorkItemResponse) => {
                    const azureWorkitem: AzureWorkItem = new AzureWorkItem(
                        workItem,
                    );
                    azureWorkItems.push(azureWorkitem);
                },
            );
        }
        return azureWorkItems;
    }

    /**
     * Permite obtener los proyectos creados en Azure DevOps para una organización
     *
     * @returns {Promise<Array<AzureGetProjectsItemResponse>} - Proyectos creados en una organización
     */
    async getProjects(): Promise<
        Array<AzureGetProjectsItemResponse> | undefined
    > {
        return await this.azureClient.getProjects();
    }
}
