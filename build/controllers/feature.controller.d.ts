import { AzureWorkItem, Feature } from '../models';
export declare class FeatureController {
    private agileController;
    constructor();
    get(workItems: AzureWorkItem[] | undefined): Array<Feature> | undefined;
}
