import {
    AzureWorkItem,
    Epic,
    Feature,
    Initiative,
    Task,
    UserStory,
} from '../models';
import { AgileController } from './agile.controller';
import { EpicController } from './epic.controller';
import { FeatureController } from './feature.controller';
import { TaskController } from './task.controller';
import { UserStoryController } from './userStory.controller';

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
    private agileController: AgileController;
    /**
     * Instancia encargada de gestionar las épicas
     */
    private epicController: EpicController;
    /**
     * Instancia encargada de gestionar las caracteristicas
     */
    private featureController: FeatureController;
    /**
     * Instancia encargada de gestionar las tareas
     */
    private taskController: TaskController;
    /**
     * Instancia encargada de gestionar las historias de usuario
     */
    private userStoryController: UserStoryController;

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
        const azureWorkItems: Array<AzureWorkItem> | undefined =
            await this.agileController.getByInitiative(idInitiative);

        const epics: Array<Epic> | undefined =
            this.epicController.get(azureWorkItems);

        const features: Array<Feature> | undefined =
            this.featureController.get(azureWorkItems);

        const userStories: Array<UserStory> | undefined =
            this.userStoryController.get(azureWorkItems);

        const tasks: Array<Task> | undefined =
            this.taskController.get(azureWorkItems);

        const featuresPending: string[] = [];
        epics?.forEach((epic: Epic) => {
            if (epic.features) {
                epic.features.forEach((feature: Feature) => {
                    if (feature && feature.id) {
                        const count = features?.filter(
                            (item: Feature) => item.id == feature.id,
                        )?.length;
                        if (!count || count == 0) {
                            featuresPending.push(feature.id);
                        }
                    }
                });
            }
        });

        if (featuresPending.length > 0) {
            const pendingsFeatures =
                await this.agileController.getChilds(featuresPending);
            const listFeatures = this.featureController.get(pendingsFeatures);
            if (listFeatures) {
                features?.push(...listFeatures);
            }
        }

        const userStoriesPending: string[] = [];
        features?.forEach((feature: Feature) => {
            if (feature.userStories) {
                feature.userStories.forEach((userStory: UserStory) => {
                    if (userStory && userStory.id) {
                        const count = userStories?.filter(
                            (item: UserStory) => item.id == userStory.id,
                        )?.length;
                        if (!count || count == 0) {
                            userStoriesPending.push(userStory.id);
                        }
                    }
                });
            }
        });

        if (userStoriesPending.length > 0) {
            const pendingsUserStories =
                await this.agileController.getChilds(userStoriesPending);
            const listUserStories =
                this.userStoryController.get(pendingsUserStories);
            if (listUserStories) {
                userStories?.push(...listUserStories);
            }
        }

        const tasksPending: string[] = [];
        userStories?.forEach((userStory: UserStory) => {
            if (userStory.tasks) {
                userStory.tasks.forEach((task: Task) => {
                    if (task && task.id) {
                        const count = tasks?.filter(
                            (item: Task) => item.id == task.id,
                        )?.length;
                        if (!count || count == 0) {
                            tasksPending.push(task.id);
                        }
                    }
                });
            }
        });

        if (tasksPending.length > 0) {
            const pendingTasks =
                await this.agileController.getChilds(tasksPending);
            const listTasks = this.taskController.get(pendingTasks);
            if (listTasks) {
                tasks?.push(...listTasks);
            }
        }

        const docsReferenced:
            | { wiki: string; attachedFiles: string[] }
            | undefined = this.epicController.getAttachedFiles(azureWorkItems);

        epics?.forEach((epic: Epic) => epic.selectMyFeatures(features));
        epics?.forEach(
            (epic: Epic) =>
                epic.features?.forEach((feature: Feature) =>
                    feature.selectMyUserStories(userStories),
                ),
        );
        epics?.forEach(
            (epic: Epic) =>
                epic.features?.forEach(
                    (feature: Feature) =>
                        feature.userStories?.forEach((userStory: UserStory) => {
                            userStory.selectMyTasks(tasks);
                            userStory.selectMyFeature(features);
                        }),
                ),
        );
        userStories?.forEach((userStory: UserStory) => {
            userStory.selectMyTasks(tasks);
            userStory.selectMyFeature(features);
        });
        const initiative = new Initiative(
            idInitiative,
            userStories,
            docsReferenced,
        );

        return initiative;
    }
}
