"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStoryController = void 0;
const categories_1 = require("../categories");
const models_1 = require("../models");
const agile_controller_1 = require("./agile.controller");
const feature_controller_1 = require("./feature.controller");
/**
 * Controlador encargado de gestionar las historias de usuario
 *
 * @category Controllers
 *
 * {@label Historias de usuario}
 */
class UserStoryController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new agile_controller_1.AgileController();
        this.featureController = new feature_controller_1.FeatureController();
    }
    /**
    * Permite obtener las historias de usuario de un conjunto de características
    * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
    * @returns {Array<UserStory> | undefined} Lista de historias de usuario
    */
    get(workItems) {
        if (workItems) {
            const userStories = new Array();
            const userStoriesWorkItems = workItems.filter((workItem) => workItem.type == categories_1.WorkItemTypes.UserStory);
            userStoriesWorkItems === null || userStoriesWorkItems === void 0 ? void 0 : userStoriesWorkItems.forEach((userStoryWorkItem) => {
                const userStory = new models_1.UserStory(userStoryWorkItem);
                if (userStoryWorkItem.childs) {
                    userStoryWorkItem.childs.forEach((child) => {
                        var _a;
                        (_a = userStory.tasks) === null || _a === void 0 ? void 0 : _a.push(new models_1.Task(child));
                    });
                }
                userStories.push(userStory);
            });
            return userStories;
        }
        return undefined;
    }
}
exports.UserStoryController = UserStoryController;
