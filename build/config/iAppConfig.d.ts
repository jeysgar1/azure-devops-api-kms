export interface iAppConfig {
    organizationName: string;
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
