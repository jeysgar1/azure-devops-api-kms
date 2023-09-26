import { WorkItemTypes } from '../categories';
import { AzureWorkItem, Task } from '../models';
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
     * Instancia asociada a gestionar el acceso sobre Azure DevOps
     */
    private agileController: AgileController;

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
    get(workItems: AzureWorkItem[] | undefined): Array<Task> | undefined {
        if (workItems) {
            const tasks = new Array<Task>();
            const tasksWorkItems = workItems.filter(
                (workItem: AzureWorkItem) =>
                    workItem.type == WorkItemTypes.Task,
            );
            tasksWorkItems?.forEach((taskWorkItem: AzureWorkItem) => {
                const task: Task = new Task(taskWorkItem);
                tasks.push(task);
            });
            return tasks;
        }
        return undefined;
    }
}
