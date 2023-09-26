"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const categories_1 = require("../categories");
const models_1 = require("../models");
const agile_controller_1 = require("./agile.controller");
/**
 * Controlador encargado de gestionar las tareas
 *
 * @category Controllers
 *
 * {@label Tareas}
 */
class TaskController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new agile_controller_1.AgileController();
    }
    /**
     * Permite obtener las tareas de un conjunto de historias de usuario
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Task> | undefined} Lista de tareas
     */
    get(workItems) {
        if (workItems) {
            const tasks = new Array();
            const tasksWorkItems = workItems.filter((workItem) => workItem.type == categories_1.WorkItemTypes.Task);
            tasksWorkItems === null || tasksWorkItems === void 0 ? void 0 : tasksWorkItems.forEach((taskWorkItem) => {
                const task = new models_1.Task(taskWorkItem);
                tasks.push(task);
            });
            return tasks;
        }
        return undefined;
    }
}
exports.TaskController = TaskController;
