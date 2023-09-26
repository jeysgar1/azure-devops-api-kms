import { WorkItemTypes } from "../categories";
import { AzureWorkItem, Task, UserStory } from "../models";
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
     * Instancia encargada de gestionar el acceso sobre Azure DevOps
     */
    private agileController : AgileController
    /**
     * Instancia encargada de gestionar las características
     */
    private featureController : FeatureController
    
    /**
     * Crea una instancia del controlador
     */
    constructor(){
        this.agileController = new AgileController();
        this.featureController = new FeatureController();
    }

     /**
     * Permite obtener las historias de usuario de un conjunto de características
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<UserStory> | undefined} Lista de historias de usuario
     */
     get(workItems : AzureWorkItem[] | undefined):Array<UserStory> | undefined {
        if(workItems){
            const userStories = new Array<UserStory>();
            const userStoriesWorkItems = workItems.filter((workItem:AzureWorkItem) => workItem.type == WorkItemTypes.UserStory);
            userStoriesWorkItems?.forEach((userStoryWorkItem : AzureWorkItem) => {
                const userStory : UserStory = new UserStory(userStoryWorkItem);
                if(userStoryWorkItem.childs){
                    userStoryWorkItem.childs.forEach((child:string) => {
                        userStory.tasks?.push(new Task(child));
                    })
                }
                userStories.push(userStory);
            })
            return userStories;
        }
        return undefined;
    }
}