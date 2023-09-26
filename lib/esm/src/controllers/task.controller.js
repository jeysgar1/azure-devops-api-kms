import { WorkItemTypes } from '../categories';
import { Task } from '../models';
import { AgileController } from './agile.controller';
/**
 * Controlador encargado de gestionar las tareas
 *
 * @category Controllers
 *
 * {@label Tareas}
 */
export class TaskController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new AgileController();
    }
    /**
     * Permite obtener las tareas de un conjunto de historias de usuario
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Task> | undefined} Lista de tareas
     */
    get(workItems) {
        if (workItems) {
            const tasks = new Array();
            const tasksWorkItems = workItems.filter((workItem) => workItem.type == WorkItemTypes.Task);
            tasksWorkItems === null || tasksWorkItems === void 0 ? void 0 : tasksWorkItems.forEach((taskWorkItem) => {
                const task = new Task(taskWorkItem);
                tasks.push(task);
            });
            return tasks;
        }
        return undefined;
    }
}
