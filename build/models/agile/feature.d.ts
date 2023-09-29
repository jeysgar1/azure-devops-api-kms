import { AzureWorkItem } from '../azureDevOps';
import { Base } from './base';
import { UserStory } from './userStory';
export declare class Feature extends Base {
    epicId: string | undefined;
    userStories?: Array<UserStory> | undefined;
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
    selectMyUserStories(userStories?: Array<UserStory>): void;
}
