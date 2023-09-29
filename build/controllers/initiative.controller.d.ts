import { Initiative } from '../models';
export declare class InitiativeController {
    private agileController;
    private epicController;
    private featureController;
    private taskController;
    private userStoryController;
    constructor();
    get(idInitiative: string): Promise<Initiative | undefined>;
}
