/**
 * Respuesta al consumo de la API que permite consultar los proyectos
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
export class AzureGetProjectsItemResponse {
    //Descripción del proyecto
    description: string | undefined;
    //Identificador del proyecto
    id: string | undefined;
    //Nombre del proyecto
    name: string | undefined;
    //Estado del proyecto
    state: string | undefined;
    // URL del proyecto
    url: string | undefined;
}
