import { AzureWorkItem, Task } from '../models';
export declare class TaskController {
    private agileController;
    constructor();
    get(workItems: AzureWorkItem[] | undefined): Array<Task> | undefined;
}
