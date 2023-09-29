export interface iAppConfig {
    fields: {
        idInitiative: string;
        team: {
            architect: string;
            productOnwer: string;
            proxy: string;
            scrumMaster: string;
            techLeader: string;
        };
    };
    organizationName: string;
    projectName: string;
    states: {
        ToDo: string[];
        Doing: string[];
        Done: string[];
        Cancelled: string[];
    };
    types: {
        Epic: string;
        Feature: string;
        UserStory: string;
        Task: string;
    };
    token: string;
}
