import {configInstance} from "../config/configInstance";
import { AzureWorkItem, Feature } from "../model";

/**
 * Permite obtener una característica
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {Feature | undefined} Característica
 */
export function getFeature(azureWorkItem:AzureWorkItem) : Feature | undefined {
    if(azureWorkItem.type === configInstance()?.getTypes()?.Feature) return new Feature(azureWorkItem);
    return undefined;
}