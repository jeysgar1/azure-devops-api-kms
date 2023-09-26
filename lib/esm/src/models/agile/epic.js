import { Base } from './base';
/**
 * Épica
 *
 * @see [¿Épicas?]()
 *
 * @category Models
 *
 * {@label Épicas}
 */
export class Epic extends Base {
    /**
     * Crea una instancia de una épica
     * @param {AzureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem) {
        super(azureWorkItem);
        this.features = new Array();
    }
    /**
     * Permite filtrar las características de una épica
     * @param {?Array<Feature>} features - Características
     */
    selectMyFeatures(features) {
        if (features) {
            this.features = new Array();
            this.features = features.filter((feature) => feature.epicId == this.id);
        }
    }
}
