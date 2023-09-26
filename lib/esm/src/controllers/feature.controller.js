import { WorkItemTypes } from "../categories";
import { Feature, UserStory } from "../models";
import { AgileController } from "./agile.controller";
/**
 * Controlador encargado de gestionar las características
 *
 * @category Controllers
 *
 * {@label Características}
 */
export class FeatureController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new AgileController();
    }
    /**
     * Permite obtener las características de un conjunto de épicas
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Feature> | undefined} Lista de características
     */
    get(workItems) {
        if (workItems) {
            const features = new Array();
            const featuresWorkItems = workItems.filter((workItem) => workItem.type == WorkItemTypes.Feature);
            featuresWorkItems === null || featuresWorkItems === void 0 ? void 0 : featuresWorkItems.forEach((featureWorkItem) => {
                const feature = new Feature(featureWorkItem);
                if (featureWorkItem.childs) {
                    featureWorkItem.childs.forEach((child) => {
                        var _a;
                        (_a = feature.userStories) === null || _a === void 0 ? void 0 : _a.push(new UserStory(child));
                    });
                }
                features.push(feature);
            });
            return features;
        }
        return undefined;
    }
}
