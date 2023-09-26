import { Project } from "../models";
/**
 * Controlador encargado de gestionar los proyectos
 *
 * @category Controllers
 *
 * {@label Proyectos}
 */
export declare class ProjectController {
    /**
     * Instancia asociada a la gestión de acceso en Azure DevOps
     */
    private agileController;
    /**
     * Crea una instancia del controlador
     */
    constructor();
    /**
     * Permite obtener los proyectos de una organización creados en Azure DevOps
     * @returns {Promise<Array<Project> | undefined>} Lista de proyectos
     */
    get(): Promise<Array<Project> | undefined>;
}
//# sourceMappingURL=project.controller.d.ts.map