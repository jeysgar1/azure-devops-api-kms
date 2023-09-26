import { configInstance } from '../config/configInstance';
import { Feature } from '../models';
/**
 * Permite obtener una característica
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {Feature | undefined} Característica
 */
export function getFeature(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Feature))
        return new Feature(azureWorkItem);
    return undefined;
}
