import { WorkItemTypes } from "../categories";
import { Task, UserStory } from "../models";
import { AgileController } from "./agile.controller";
import { FeatureController } from "./feature.controller";
/**
 * Controlador encargado de gestionar las historias de usuario
 *
 * @category Controllers
 *
 * {@label Historias de usuario}
 */
export class UserStoryController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new AgileController();
        this.featureController = new FeatureController();
    }
    /**
    * Permite obtener las historias de usuario de un conjunto de características
    * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
    * @returns {Array<UserStory> | undefined} Lista de historias de usuario
    */
    get(workItems) {
        if (workItems) {
            const userStories = new Array();
            const userStoriesWorkItems = workItems.filter((workItem) => workItem.type == WorkItemTypes.UserStory);
            userStoriesWorkItems === null || userStoriesWorkItems === void 0 ? void 0 : userStoriesWorkItems.forEach((userStoryWorkItem) => {
                const userStory = new UserStory(userStoryWorkItem);
                if (userStoryWorkItem.childs) {
                    userStoryWorkItem.childs.forEach((child) => {
                        var _a;
                        (_a = userStory.tasks) === null || _a === void 0 ? void 0 : _a.push(new Task(child));
                    });
                }
                userStories.push(userStory);
            });
            return userStories;
        }
        return undefined;
    }
}
