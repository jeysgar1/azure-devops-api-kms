import { configInstance } from '../config/configInstance';
import { AzureWorkItem, Epic } from '../models';

/**
 * Permite transformar un elemento Azure DevOps
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo en Azure DevOps
 * @returns {Epic | undefined} Épica
 */
export function getEpic(azureWorkItem: AzureWorkItem): Epic | undefined {
    if (azureWorkItem.type === configInstance()?.getTypes()?.Epic)
        return new Epic(azureWorkItem);
    return undefined;
}
