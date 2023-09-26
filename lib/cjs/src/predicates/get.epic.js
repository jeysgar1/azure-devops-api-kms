"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpic = void 0;
const configInstance_1 = require("../config/configInstance");
const models_1 = require("../models");
/**
 * Permite transformar un elemento Azure DevOps
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo en Azure DevOps
 * @returns {Epic | undefined} Épica
 */
function getEpic(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = (0, configInstance_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Epic))
        return new models_1.Epic(azureWorkItem);
    return undefined;
}
exports.getEpic = getEpic;
