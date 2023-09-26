import { AzureWorkItem } from "../azureDevOps";
import { Base } from "./base";
import { UserStory } from "./userStory";

/**
 * Característica
 * 
 * @see (¿Características?)[]
 * 
 * @category Models
 * 
 * {@label Características}
 */
export class Feature extends Base{

    /**
     * Identificador de la épica
     */
    epicId : string | undefined
    /**
     * Historias de usuario asociadas a una historia de usuario
     */
    userStories?:Array<UserStory> | undefined;

    /**
     * Crea una característica
     * @param {azureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem:AzureWorkItem|undefined|string){
        super(azureWorkItem);
        this.userStories = new Array<UserStory>();
        if(typeof azureWorkItem !== "string"){
            this.epicId = azureWorkItem?.parents?[0].toString() : undefined;
        }
    }

    /**
     * Permite seleccionar las historias de usuario de una caracteristica
     * @param {?Array<UserStory>} userStories - Historias de usuario
     */
    selectMyUserStories(userStories?:Array<UserStory>){
        if(userStories){
            this.userStories = new Array<UserStory>();
            this.userStories = userStories.filter((userStory : UserStory) => userStory.feature?.id == this.id);
        }
    }
}