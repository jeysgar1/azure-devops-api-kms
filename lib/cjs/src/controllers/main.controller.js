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
exports.AzureDevOpsIntegrations = void 0;
const config_1 = require("../config");
const initiative_controller_1 = require("./initiative.controller");
/**
 * Controlador principal encargado de exponer las funcionalidades del aplicativo
 *
 * @category Controllers
 *
 * {@label Clases gen�ricas}
 */
class AzureDevOpsIntegrations {
    static getInstance() {
        return this._instance;
    }
    constructor() { }
    getInitiative(idInitiative) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = (0, config_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.onValidate()) {
                const initiativeController = new initiative_controller_1.InitiativeController();
                return yield initiativeController.get(idInitiative);
            }
            else {
                throw Error("Couldn't get the initiative");
            }
        });
    }
    /**
     * Permite inicializar la configuraci�n de la aplicaci�n
     * @param {string} pathFile - Ruta del archivo de configuraci�n
     */
    init(appConfig) {
        (0, config_1.configInstance)(appConfig);
    }
    setProject(projectName) {
        var _a;
        (_a = (0, config_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.setProject(projectName);
    }
}
exports.AzureDevOpsIntegrations = AzureDevOpsIntegrations;
AzureDevOpsIntegrations._instance = new AzureDevOpsIntegrations();