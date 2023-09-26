import { configInstance } from "../config/configInstance";
import { Epic } from "../models";
/**
 * Permite transformar un elemento Azure DevOps
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo en Azure DevOps
 * @returns {Epic | undefined} Épica
 */
export function getEpic(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Epic))
        return new Epic(azureWorkItem);
    return undefined;
}
