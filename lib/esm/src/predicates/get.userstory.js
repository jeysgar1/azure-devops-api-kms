import { configInstance } from "../config/configInstance";
import { UserStory } from "../models";
/**
 * Permite obtener una Historia de usuario
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {UserStory | undefined} Historia de usuario
 */
export function getUserStory(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.UserStory))
        return new UserStory(azureWorkItem);
    return undefined;
}
