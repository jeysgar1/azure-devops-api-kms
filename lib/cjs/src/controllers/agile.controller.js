"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgileController = void 0;
const models_1 = require("../models");
const azure_devops_client_1 = require("../services/azure.devops.client");
/**
 * Controlador encargado de establecer una comunicación con el cliente API de integración
 * con Azure DevOps
 *
 * @category Controllers
 *
 * {@label Clases genéricas}
 */
class AgileController {
    constructor() {
        // Cliente encargado de integrarse con Azure DevOps
        this.azureClient = new azure_devops_client_1.AzureDevOpsClient();
    }
    /**
     * Permite obtener los elementos de trabajo a partir de un identificador de una iniciativa
     *
     * @param {string} id - Identificador de la iniciativa
     * @returns {Promise<undefined | AzureWorkItem[]>} - Lista de elementos de trabajo asociados a una iniciativa
     */
    getByInitiative(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let azureWorkItems = [];
            const ids = yield this.azureClient.wiql(id);
            if (ids) {
                azureWorkItems = yield this.getChilds(ids);
            }
            return azureWorkItems;
        });
    }
    getChilds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const azureWorkItems = [];
            const azureGetWorkItemResponse = yield this.azureClient.getWorkItems(ids);
            if (azureGetWorkItemResponse) {
                azureGetWorkItemResponse.forEach((workItem) => {
                    const azureWorkitem = new models_1.AzureWorkItem(workItem);
                    azureWorkItems.push(azureWorkitem);
                });
            }
            return azureWorkItems;
        });
    }
    /**
     * Permite obtener los proyectos creados en Azure DevOps para una organización
     *
     * @returns {Promise<Array<AzureGetProjectsItemResponse>} - Proyectos creados en una organización
     */
    getProjects() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.azureClient.getProjects();
        });
    }
}
exports.AgileController = AgileController;
