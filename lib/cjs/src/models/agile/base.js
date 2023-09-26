"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
/**
 * Datos comúnes en los elementos de trabajo
 *
 * @category Models
 *
 * {@label Clases genéricas}
 */
class Base {
    /**
     * Permite crear una instancia
     * @param {AzureWorkItem | undefined} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem) {
        if (typeof azureWorkItem === "string") {
            this.id = azureWorkItem;
        }
        else {
            this.id = azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.id;
            this.description = azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.description;
            this.name = azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.title;
            this.state = azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.state;
            this.url = azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.url;
        }
    }
}
exports.Base = Base;
