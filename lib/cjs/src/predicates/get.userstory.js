"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserStory = void 0;
const configInstance_1 = require("../config/configInstance");
const models_1 = require("../models");
/**
 * Permite obtener una Historia de usuario
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {UserStory | undefined} Historia de usuario
 */
function getUserStory(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = (0, configInstance_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.UserStory))
        return new models_1.UserStory(azureWorkItem);
    return undefined;
}
exports.getUserStory = getUserStory;
