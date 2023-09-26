import { AzureGetWorkItemResponse } from "./azureGetWorkItemResponse"

/**
 * Elemento de trabajo obtenido al consumir la API de Azure DevOps
 * 
 * @category Models
 * 
 * {@label Azure DevOps}
 */
export class AzureGetWorkItemsResponse {
    //Cantidad de elementos de trabajo obtenidas
    count: number | undefined
    //Elementos de trabajo obtenidos
    value: AzureGetWorkItemResponse[] | undefined
}