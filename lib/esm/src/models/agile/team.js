/**
 * Equipo de trabajo
 *
 * @category Agile
 *
 * {@label Equipo de trabajo}
 */
export class Team {
    /**
     * Crea un equipo de trabajo
     * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem) {
        this.architect = azureWorkItem.architect;
        this.productOwner = azureWorkItem.productOwner;
        this.proxy = azureWorkItem.proxy;
        this.scrumMaster = azureWorkItem.scrumMaster;
        this.techLeader = azureWorkItem.techLeader;
    }
}
