import { UserStory } from './userStory';
export declare class Initiative {
    attachedFiles: Array<string> | undefined;
    id: string | undefined;
    name: string | undefined;
    userStories: Array<UserStory> | undefined;
    constructor(idInitiative: string, userStories: Array<UserStory> | undefined, docsReferenced: {
        wiki: string;
        attachedFiles: string[];
    } | undefined);
}
