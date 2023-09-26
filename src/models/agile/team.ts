import { AzureWorkItem } from '../azureDevOps';
import { Person } from './person';

/**
 * Equipo de trabajo
 *
 * @category Agile
 *
 * {@label Equipo de trabajo}
 */
export class Team {
    /**
     * Arquitecto asignado
     */
    architect?: Person | undefined;
    /**
     * Propietario del producto
     */
    productOwner?: Person | undefined;
    /**
     * Analista funcional
     */
    proxy?: Person | undefined;
    /**
     * Líder técnico
     */
    techLeader?: Person | undefined;
    /**
     * Experto en SCRUM
     */
    scrumMaster?: Person | undefined;

    /**
     * Crea un equipo de trabajo
     * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem: AzureWorkItem) {
        this.architect = azureWorkItem.architect;
        this.productOwner = azureWorkItem.productOwner;
        this.proxy = azureWorkItem.proxy;
        this.scrumMaster = azureWorkItem.scrumMaster;
        this.techLeader = azureWorkItem.techLeader;
    }
}
