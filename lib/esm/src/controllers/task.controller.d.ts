import { AzureWorkItem, Task } from '../models';
/**
 * Controlador encargado de gestionar las tareas
 *
 * @category Controllers
 *
 * {@label Tareas}
 */
export declare class TaskController {
    /**
     * Instancia asociada a gestionar el acceso sobre Azure DevOps
     */
    private agileController;
    /**
     * Crea una instancia del controlador
     */
    constructor();
    /**
     * Permite obtener las tareas de un conjunto de historias de usuario
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Task> | undefined} Lista de tareas
     */
    get(workItems: AzureWorkItem[] | undefined): Array<Task> | undefined;
}
//# sourceMappingURL=task.controller.d.ts.map