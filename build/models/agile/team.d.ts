import { AzureWorkItem } from '../azureDevOps';
import { Person } from './person';
export declare class Team {
    architect?: Person | undefined;
    productOwner?: Person | undefined;
    proxy?: Person | undefined;
    techLeader?: Person | undefined;
    scrumMaster?: Person | undefined;
    constructor(azureWorkItem: AzureWorkItem);
}
