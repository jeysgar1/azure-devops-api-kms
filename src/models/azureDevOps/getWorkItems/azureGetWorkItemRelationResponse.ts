/**
 * Elemento de trabajo relacionado obtenido al consumir la API de Azure DevOps
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
export class AzureGetWorkItemRelationResponse {
    // Identificador del elemento de trabajo relacionado
    id: string | undefined;
    // Tipo de relación entre un elemento de trabajo y otro
    rel: string | undefined;
    // URL de acceso al elemento de trabajo
    url: string | undefined;
}
