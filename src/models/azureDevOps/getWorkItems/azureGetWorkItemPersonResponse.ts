/**
 * Persona obtenida al consumir la API de Azure DevOps
 * 
 * @category Models
 * 
 * {@label Azure DevOps}
 */

export class AzureGetWorkItemPersonResponse {
    //Nombre de la persona
    displayName: string | undefined;
    //Identificador de la persona
    id: string | undefined;
    //Correo electrónico de la persona
    uniqueName: string | undefined;
}