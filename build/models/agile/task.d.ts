import { AzureWorkItem } from '../azureDevOps';
import { Base } from './base';
import { Person } from './person';
export declare class Task extends Base {
    assignedTo: Person | undefined;
    userStoryId: string | undefined;
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
}
