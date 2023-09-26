import { AzureGetProjectsItemResponse } from "./azureGetProjectsItemResponse"
/**
 * Respuesta al consumo de la API que permite consultar los proyectos
 * 
 * @category Models
 * 
 * {@label Azure DevOps}
 */
export class AzureGetProjectsResponse {
    //Cantidad de proyectos obtenidos
    count: number | undefined
    //Proyectos obtenidos
    value: AzureGetProjectsItemResponse[] | undefined
}