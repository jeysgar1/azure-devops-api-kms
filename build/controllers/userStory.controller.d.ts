import { AzureWorkItem, UserStory } from '../models';
export declare class UserStoryController {
    private agileController;
    private featureController;
    constructor();
    get(workItems: AzureWorkItem[] | undefined): Array<UserStory> | undefined;
}
