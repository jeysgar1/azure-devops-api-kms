import { AzureWorkItem } from '../azureDevOps';
import { Base } from './base';
import { Feature } from './feature';
import { Project } from './project';
import { Task } from './task';
import { Team } from './team';
export declare class UserStory extends Base {
    feature?: Feature | undefined;
    project?: Project | undefined;
    refinement?: string | undefined;
    team?: Team | undefined;
    tasks?: Array<Task> | undefined;
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
    selectMyFeature(features?: Array<Feature>): void;
    selectMyTasks(tasks?: Array<Task>): void;
}
