"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTask = void 0;
const configInstance_1 = require("../config/configInstance");
const models_1 = require("../models");
/**
 * Permite obtener una tarea
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {Task | undefined} Tarea
 */
function getTask(azureWorkItem) {
    var _a, _b;
    if (azureWorkItem.type === ((_b = (_a = (0, configInstance_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Task))
        return new models_1.Task(azureWorkItem);
    return undefined;
}
exports.getTask = getTask;
