var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { AgileController } from './agile.controller';
/**
 * Controlador encargado de gestionar los proyectos
 *
 * @category Controllers
 *
 * {@label Proyectos}
 */
export class ProjectController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new AgileController();
    }
    /**
     * Permite obtener los proyectos de una organización creados en Azure DevOps
     * @returns {Promise<Array<Project> | undefined>} Lista de proyectos
     */
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = new Array();
            const azureProjects = yield this.agileController.getProjects();
            azureProjects === null || azureProjects === void 0 ? void 0 : azureProjects.forEach((item) => {
                projects.push({
                    id: item.id,
                    description: item.description,
                    url: item.url,
                    name: item.name,
                    state: undefined,
                });
            });
            return projects;
        });
    }
}
