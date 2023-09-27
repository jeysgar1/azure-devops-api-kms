var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { configInstance } from '../config';
import { InitiativeController } from './initiative.controller';
/**
 * Controlador principal encargado de exponer las funcionalidades del aplicativo
 *
 * @category Controllers
 *
 * {@label Clases gen�ricas}
 */
export class AzureDevOpsIntegrations {
    static getInstance() {
        return this._instance;
    }
    constructor() { }
    getInitiative(idInitiative) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if ((_a = configInstance()) === null || _a === void 0 ? void 0 : _a.onValidate()) {
                const initiativeController = new InitiativeController();
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
        configInstance(appConfig);
    }
    setProject(projectName) {
        var _a;
        (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.setProject(projectName);
    }
}
AzureDevOpsIntegrations._instance = new AzureDevOpsIntegrations();
