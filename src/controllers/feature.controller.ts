import { WorkItemTypes } from '../categories';
import { AzureWorkItem, Feature, UserStory } from '../models';
import { AgileController } from './agile.controller';

/**
 * Controlador encargado de gestionar las características
 *
 * @category Controllers
 *
 * {@label Características}
 */
export class FeatureController {
    /**
     * Instancia del controlador encargado de integrarse con Azure DevOps
     */
    private agileController: AgileController;

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
    get(workItems: AzureWorkItem[] | undefined): Array<Feature> | undefined {
        if (workItems) {
            const features = new Array<Feature>();
            const featuresWorkItems = workItems.filter(
                (workItem: AzureWorkItem) =>
                    workItem.type == WorkItemTypes.Feature,
            );
            featuresWorkItems?.forEach((featureWorkItem: AzureWorkItem) => {
                const feature: Feature = new Feature(featureWorkItem);
                if (featureWorkItem.childs) {
                    featureWorkItem.childs.forEach((child: string) => {
                        feature.userStories?.push(new UserStory(child));
                    });
                }
                features.push(feature);
            });
            return features;
        }
        return undefined;
    }
}
