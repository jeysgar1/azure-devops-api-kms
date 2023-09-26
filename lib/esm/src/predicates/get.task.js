import { configInstance } from '../config/configInstance';
import { Task } from '../models';
/**
 * Permite obtener una tarea
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {Task | undefined} Tarea
 */
export function getTask(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Task))
        return new Task(azureWorkItem);
    return undefined;
}
