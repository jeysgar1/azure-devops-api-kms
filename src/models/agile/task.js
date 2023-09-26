"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const base_1 = require("./base");
/**
 * Datos comúnes en los elementos de trabajo
 *
 * @see (¿Tareas?)[]
 *
 * @category Models
 *
 * {@label Iniciativas}
 */
class Task extends base_1.Base {
    /**
     * Permite crear una tarea
     * @param {AzureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem) {
        super(azureWorkItem);
        if (typeof azureWorkItem !== "string") {
            this.assignedTo = azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.assignedTo;
            this.userStoryId = (azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.parents) ? [0].toString() : undefined;
        }
    }
}
exports.Task = Task;
//# sourceMappingURL=task.js.map