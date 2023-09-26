/* eslint-disable @typescript-eslint/no-explicit-any */
import { AzureWorkItem } from "../azureDevOps";
import { Base } from "./base";
import { Feature } from "./feature";
import { Project } from "./project";
import { Task } from "./task";
import { Team } from "./team";

/**
 * Datos comúnes en los elementos de trabajo
 * 
 * @see (¿Historias de usuario?)[]
 * 
 * @category Models
 * 
 * {@label Historias de usuario}
 */
export class UserStory extends Base{

    /**
     * Característica asociada a una historia de usuario
     */
    feature?: Feature | undefined;
    /**
     * Proyecto asignado a la historia de usuario
     */
    project? : Project | undefined;
    /**
     * Refinamiento de la historia de usuario
     */
    refinement?:string | undefined;
    /**
     * Equipo de trabajo asignado a la historia de usuario
     */
    team?: Team | undefined;
    /**
     * Tareas de una historia de usuario
     */
    tasks?: Array<Task> | undefined;

    /**
     * Crea una historia de usuario
     * @param {AzureWorkItem | undefined} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem:AzureWorkItem|undefined|string){
        super(azureWorkItem);
        this.tasks = new Array<Task>();
        if(typeof azureWorkItem !== "string" && azureWorkItem){
            this.team = new Team(azureWorkItem);
            if(azureWorkItem.teamProject){
                this.project = new Project(azureWorkItem.teamProject);
            }
            if(azureWorkItem.linkWiki){
                this.refinement = azureWorkItem.linkWiki;
            }
        }
    }


    /**
     * Permite asignar la épica y la caracteristica asociada a una historia de usuario
     * @param {?Array<Epic>} epics - Épicas 
     * @param {?Array<Feature>} features - Características
     */
    selectMyFeature(features?:Array<Feature>){
        if(features){
            this.feature = features.filter((feature:Feature) => feature.id == this.feature?.id)[0];
        }
    }
    
    /**
     * Permite filtrar las características de una épica
     * @param {?Array<Feature>} features - Características
     */
    selectMyTasks(tasks?:Array<Task>){
        if(tasks){
            this.tasks = new Array<Task>();
            this.tasks = tasks.filter((task : Task) => task.userStoryId == this.id);
        }
    }

    
   
}