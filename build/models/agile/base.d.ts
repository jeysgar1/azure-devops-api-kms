import { WorkItemStates } from '../../categories';
import { AzureWorkItem } from '../azureDevOps';
export declare class Base {
    description?: string | undefined;
    id?: string | undefined;
    name: string | undefined;
    state: WorkItemStates | undefined;
    url?: string | undefined;
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
}
