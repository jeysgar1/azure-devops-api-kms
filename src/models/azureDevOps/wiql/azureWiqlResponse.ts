import { AzureWiqlItemResponse } from "./azureWiqlItemResponse";

/**
 * Elemento de trabajo obtenido al consumir la API de Azure DevOps con WIQL
 * 
 * @category Models
 * 
 * {@label Azure DevOps}
 */
export class AzureWiqlResponse {

    //Elementos de trabajo obtenidos
    workItems: AzureWiqlItemResponse[] | undefined
}