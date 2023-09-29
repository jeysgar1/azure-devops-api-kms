import { Project } from '../models';
export declare class ProjectController {
    private agileController;
    constructor();
    get(): Promise<Array<Project> | undefined>;
}
