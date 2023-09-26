"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Epic = void 0;
const base_1 = require("./base");
/**
 * Épica
 *
 * @see [¿Épicas?]()
 *
 * @category Models
 *
 * {@label Épicas}
 */
class Epic extends base_1.Base {
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
exports.Epic = Epic;
//# sourceMappingURL=epic.js.map