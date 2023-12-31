import { iAppConfig } from './iAppConfig';
declare class ConfigInstance {
    private appConfig?;
    static instance?: ConfigInstance;
    private constructor();
    static getInstance(appConfig?: iAppConfig | undefined): ConfigInstance | undefined;
    getOrganization(): string;
    getStates(): {
        ToDo: string[];
        Doing: string[];
        Done: string[];
        Cancelled: string[];
    };
    getToken(): string;
    getTypes(): {
        Epic: string;
        Feature: string;
        UserStory: string;
        Task: string;
    };
    onValidate(): boolean;
}
export declare const configInstance: (appConfig?: iAppConfig | undefined) => ConfigInstance | undefined;
export {};
