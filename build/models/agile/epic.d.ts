import { AzureWorkItem } from '../azureDevOps';
import { Base } from './base';
import { Feature } from './feature';
export declare class Epic extends Base {
    features?: Array<Feature> | undefined;
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
    selectMyFeatures(features?: Array<Feature>): void;
}
