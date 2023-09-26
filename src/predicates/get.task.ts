import {configInstance} from "../config/configInstance";
import { AzureWorkItem, Task } from "../model";

/**
 * Permite obtener una tarea
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {Task | undefined} Tarea
 */
export function getTask(azureWorkItem:AzureWorkItem) : Task | undefined {
    if(azureWorkItem.type === configInstance()?.getTypes()?.Task) return new Task(azureWorkItem);
    return undefined;
}