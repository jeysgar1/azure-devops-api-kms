var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Initiative, } from '../models';
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
    get(idInitiative) {
        return __awaiter(this, void 0, void 0, function* () {
            const azureWorkItems = yield this.agileController.getByInitiative(idInitiative);
            const epics = this.epicController.get(azureWorkItems);
            const features = this.featureController.get(azureWorkItems);
            const userStories = this.userStoryController.get(azureWorkItems);
            const tasks = this.taskController.get(azureWorkItems);
            const featuresPending = [];
            epics === null || epics === void 0 ? void 0 : epics.forEach((epic) => {
                if (epic.features) {
                    epic.features.forEach((feature) => {
                        var _a;
                        if (feature && feature.id) {
                            const count = (_a = features === null || features === void 0 ? void 0 : features.filter((item) => item.id == feature.id)) === null || _a === void 0 ? void 0 : _a.length;
                            if (!count || count == 0) {
                                featuresPending.push(feature.id);
                            }
                        }
                    });
                }
            });
            if (featuresPending.length > 0) {
                const pendingsFeatures = yield this.agileController.getChilds(featuresPending);
                const listFeatures = this.featureController.get(pendingsFeatures);
                if (listFeatures) {
                    features === null || features === void 0 ? void 0 : features.push(...listFeatures);
                }
            }
            const userStoriesPending = [];
            features === null || features === void 0 ? void 0 : features.forEach((feature) => {
                if (feature.userStories) {
                    feature.userStories.forEach((userStory) => {
                        var _a;
                        if (userStory && userStory.id) {
                            const count = (_a = userStories === null || userStories === void 0 ? void 0 : userStories.filter((item) => item.id == userStory.id)) === null || _a === void 0 ? void 0 : _a.length;
                            if (!count || count == 0) {
                                userStoriesPending.push(userStory.id);
                            }
                        }
                    });
                }
            });
            if (userStoriesPending.length > 0) {
                const pendingsUserStories = yield this.agileController.getChilds(userStoriesPending);
                const listUserStories = this.userStoryController.get(pendingsUserStories);
                if (listUserStories) {
                    userStories === null || userStories === void 0 ? void 0 : userStories.push(...listUserStories);
                }
            }
            const tasksPending = [];
            userStories === null || userStories === void 0 ? void 0 : userStories.forEach((userStory) => {
                if (userStory.tasks) {
                    userStory.tasks.forEach((task) => {
                        var _a;
                        if (task && task.id) {
                            const count = (_a = tasks === null || tasks === void 0 ? void 0 : tasks.filter((item) => item.id == task.id)) === null || _a === void 0 ? void 0 : _a.length;
                            if (!count || count == 0) {
                                tasksPending.push(task.id);
                            }
                        }
                    });
                }
            });
            if (tasksPending.length > 0) {
                const pendingTasks = yield this.agileController.getChilds(tasksPending);
                const listTasks = this.taskController.get(pendingTasks);
                if (listTasks) {
                    tasks === null || tasks === void 0 ? void 0 : tasks.push(...listTasks);
                }
            }
            const docsReferenced = this.epicController.getAttachedFiles(azureWorkItems);
            epics === null || epics === void 0 ? void 0 : epics.forEach((epic) => epic.selectMyFeatures(features));
            epics === null || epics === void 0 ? void 0 : epics.forEach((epic) => {
                var _a;
                return (_a = epic.features) === null || _a === void 0 ? void 0 : _a.forEach((feature) => feature.selectMyUserStories(userStories));
            });
            epics === null || epics === void 0 ? void 0 : epics.forEach((epic) => {
                var _a;
                return (_a = epic.features) === null || _a === void 0 ? void 0 : _a.forEach((feature) => {
                    var _a;
                    return (_a = feature.userStories) === null || _a === void 0 ? void 0 : _a.forEach((userStory) => {
                        userStory.selectMyTasks(tasks);
                        userStory.selectMyFeature(features);
                    });
                });
            });
            userStories === null || userStories === void 0 ? void 0 : userStories.forEach((userStory) => {
                userStory.selectMyTasks(tasks);
                userStory.selectMyFeature(features);
            });
            const initiative = new Initiative(idInitiative, userStories, docsReferenced);
            return initiative;
        });
    }
}
