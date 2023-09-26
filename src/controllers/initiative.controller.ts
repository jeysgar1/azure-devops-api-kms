import { LoggingSubTag, LoggingTag } from "../audit";
import { logging } from "../audit/logging";
import { AzureWorkItem, Epic, Feature, Initiative, Task, UserStory } from "../model";
import { AgileController } from "./agile.controller";
import { EpicController } from "./epic.controller";
import { FeatureController } from "./feature.controller";
import { TaskController } from "./task.controller";
import { UserStoryController } from "./userStory.controller";

/**
 * Controlador encargado de gestionar las iniciativas
 * 
 * @category Controllers
 * 
 * {@label Iniciativas}
 */
export class InitiativeController {

    /**
     * Instancia encargada de gestionar todo al rededor de agilidad
     */
    private agileController : AgileController;
    /**
     * Instancia encargada de gestionar las épicas
     */
    private epicController: EpicController
    /**
     * Instancia encargada de gestionar las caracteristicas
     */
    private featureController : FeatureController
    /**
     * Instancia encargada de gestionar las tareas
     */
    private taskController : TaskController
    /**
     * Instancia encargada de gestionar las historias de usuario
     */
    private userStoryController : UserStoryController

    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new AgileController();
        this.epicController = new EpicController();
        this.featureController = new FeatureController();
        this.userStoryController = new UserStoryController();
        this.taskController = new TaskController();
    }

    /**
     * Permite obtener una iniciativa
     * @param {string} idInitiative - Identificador de la iniciativa
     * @returns {Promise<Initiative | undefined>} Iniciativa
     */
    async get(idInitiative: string): Promise<Initiative | undefined> {
        logging(LoggingTag.Initiative, LoggingSubTag.Start, "Id : "+idInitiative)
        const azureWorkItems : Array<AzureWorkItem> | undefined =  await this.agileController.getByInitiative(idInitiative);
        logging(LoggingTag.Initiative, LoggingSubTag["Send Call Procedure"], "Total Azure Work Items : "+azureWorkItems?.length)

        const epics : Array<Epic> | undefined = this.epicController.get(azureWorkItems);
        logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total Epics : "+epics?.length)
        const features : Array<Feature> | undefined =  this.featureController.get(azureWorkItems);
        logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total Features : "+features?.length)

        const userStories : Array<UserStory> | undefined = this.userStoryController.get(azureWorkItems);
        logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total User Stories : "+userStories?.length)
        const tasks : Array<Task> | undefined = this.taskController.get(azureWorkItems);
        logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total Tasks : "+tasks?.length)

        const featuresPending : string[] = []
        epics?.forEach((epic:Epic) => {
            if(epic.features){
                epic.features.forEach((feature:Feature) => {
                    if(feature && feature.id){
                        const count = features?.filter((item:Feature) => item.id == feature.id)?.length;
                        if(!count || count == 0){
                            featuresPending.push(feature.id);
                        }
                    }
                })
            }
        })

        if(featuresPending.length > 0){
            logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total Pending Features : "+featuresPending?.length)
            const pendingsFeatures = await this.agileController.getChilds(featuresPending);
            const listFeatures = this.featureController.get(pendingsFeatures);
            if(listFeatures){
                features?.push(...listFeatures);
            }
        }
       

        const userStoriesPending : string[] = []
        features?.forEach((feature:Feature) => {
            if(feature.userStories){
                feature.userStories.forEach((userStory:UserStory) => {
                    if(userStory && userStory.id){
                        const count = userStories?.filter((item:UserStory) => item.id == userStory.id)?.length;
                        if(!count || count == 0){
                            userStoriesPending.push(userStory.id);
                        }
                    }
                })
            }
        })

        if(userStoriesPending.length > 0){
            logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total Pending User Stories : "+userStoriesPending?.length)
            const pendingsUserStories = await this.agileController.getChilds(userStoriesPending);
            const listUserStories = this.userStoryController.get(pendingsUserStories);
            if(listUserStories){
                userStories?.push(...listUserStories);
            }
        }

        const tasksPending : string[] = []
        userStories?.forEach((userStory:UserStory) => {
            if(userStory.tasks){
                userStory.tasks.forEach((task:Task) => {
                    if(task && task.id){
                        const count = tasks?.filter((item:Task) => item.id == task.id)?.length;
                        if(!count || count == 0){
                            tasksPending.push(task.id);
                        }
                    }
                })
            }
        })

        if(tasksPending.length > 0){
            logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Total Pending Tasks : "+tasksPending?.length)
            const pendingTasks = await this.agileController.getChilds(tasksPending);
            const listTasks = this.taskController.get(pendingTasks);
            if(listTasks){
                tasks?.push(...listTasks);
            }
        }

        const docsReferenced : {wiki:string, attachedFiles:string[]} | undefined = this.epicController.getAttachedFiles(azureWorkItems);
        logging(LoggingTag.Initiative, LoggingSubTag["Response Call Procedure"], "Docs : "+JSON.stringify(docsReferenced))

        epics?.forEach((epic:Epic) => epic.selectMyFeatures(features));
        epics?.forEach((epic:Epic) => epic.features?.forEach((feature:Feature) => feature.selectMyUserStories(userStories)))
        epics?.forEach((epic:Epic) => epic.features?.forEach((feature:Feature) => feature.userStories?.forEach((userStory:UserStory) => {userStory.selectMyTasks(tasks); userStory.selectMyFeature(features)})))
        userStories?.forEach((userStory : UserStory) => {userStory.selectMyTasks(tasks); userStory.selectMyFeature(features)})
        const initiative = new Initiative(idInitiative, userStories, docsReferenced);
        logging(LoggingTag.Initiative, LoggingSubTag.End, "Initiative : "+JSON.stringify(initiative))
        
        return initiative;
    }
}