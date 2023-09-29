import { WorkItemStates } from '../../categories';
export declare class Project {
    description: string | undefined;
    id: string | undefined;
    name: string | undefined;
    state: typeof WorkItemStates | undefined;
    url: string | undefined;
    constructor(name: string);
}
