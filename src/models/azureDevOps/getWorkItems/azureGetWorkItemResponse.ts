/* eslint-disable @typescript-eslint/no-explicit-any */
import { AzureGetWorkItemRelationResponse } from './azureGetWorkItemRelationResponse';

/**
 * Elemento de trabajo obtenido al consumir la API de Azure DevOps
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
export class AzureGetWorkItemResponse {
    //Identificador del elemento de trabajo
    id: string | undefined;
    //Campos asociados al elemento de trabajo
    fields: Record<string, any> | undefined;
    //Relaciones del elemento de trabajo con otro
    relations: AzureGetWorkItemRelationResponse[] | undefined;
    //URL de acceso al elemento de trabajo
    url: string | undefined;
}
