"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureController = void 0;
const categories_1 = require("../categories");
const models_1 = require("../models");
const agile_controller_1 = require("./agile.controller");
/**
 * Controlador encargado de gestionar las características
 *
 * @category Controllers
 *
 * {@label Características}
 */
class FeatureController {
    /**
     * Crea una instancia del controlador
     */
    constructor() {
        this.agileController = new agile_controller_1.AgileController();
    }
    /**
     * Permite obtener las características de un conjunto de épicas
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Feature> | undefined} Lista de características
     */
    get(workItems) {
        if (workItems) {
            const features = new Array();
            const featuresWorkItems = workItems.filter((workItem) => workItem.type == categories_1.WorkItemTypes.Feature);
            featuresWorkItems === null || featuresWorkItems === void 0 ? void 0 : featuresWorkItems.forEach((featureWorkItem) => {
                const feature = new models_1.Feature(featureWorkItem);
                if (featureWorkItem.childs) {
                    featureWorkItem.childs.forEach((child) => {
                        var _a;
                        (_a = feature.userStories) === null || _a === void 0 ? void 0 : _a.push(new models_1.UserStory(child));
                    });
                }
                features.push(feature);
            });
            return features;
        }
        return undefined;
    }
}
exports.FeatureController = FeatureController;
