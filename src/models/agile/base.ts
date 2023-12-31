import { WorkItemStates } from '../../categories';
import { AzureWorkItem } from '../azureDevOps';

/**
 * Datos comúnes en los elementos de trabajo
 *
 * @category Models
 *
 * {@label Clases genéricas}
 */
export class Base {
    /**
     * Descripción del elemento
     */
    description?: string | undefined;
    /**
     * Identificador del elemento
     */
    id?: string | undefined;
    /**
     * Nombre del elemento
     */
    name: string | undefined;
    /**
     * Estado del elemento
     */
    state: WorkItemStates | undefined;
    /**
     * URL de acceso al elemento
     */
    url?: string | undefined;

    /**
     * Permite crear una instancia
     * @param {AzureWorkItem | undefined} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem: AzureWorkItem | undefined | string) {
        if (typeof azureWorkItem === 'string') {
            this.id = azureWorkItem;
        } else {
            this.id = azureWorkItem?.id;
            this.description = azureWorkItem?.description;
            this.name = azureWorkItem?.title;
            this.state = azureWorkItem?.state;
            this.url = azureWorkItem?.url;
        }
    }
}
