import { WorkItemStates, WorkItemTypes } from "../../categories";
import { Person, Project } from "../agile";
import { AzureGetWorkItemResponse } from "./getWorkItems";
/**
 * Elemento de trabajo transformado al consumir la API de Azure DevOps
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
export declare class AzureWorkItem {
    affectedSystems: Array<string> | undefined;
    architect: Person | undefined;
    assignedTo: Person | undefined;
    changedBy: Person | undefined;
    changedDate: string | undefined;
    childs: Array<string> | undefined;
    closedDate: string | undefined;
    createdDate: string | undefined;
    createdBy: Person | undefined;
    description: string | undefined;
    id: string | undefined;
    idInitiative: string | undefined;
    links: Array<string> | undefined;
    linkWiki: string | undefined;
    parents: Array<string> | undefined;
    project: Project | undefined;
    productOwner: Person | undefined;
    proxy: Person | undefined;
    releaseDate: string | undefined;
    scrumMaster: Person | undefined;
    state: WorkItemStates | undefined;
    teamProject: string | undefined;
    techLeader: Person | undefined;
    title: string | undefined;
    type: WorkItemTypes | undefined;
    url: string | undefined;
    /**
     * Crea una instancia del elemento de trabajo transformado
     * @param {AzureGetWorkItemResponse} workItem - Elemento de trabajo
     */
    constructor(workItem: AzureGetWorkItemResponse);
}
//# sourceMappingURL=azureWorkItem.d.ts.map