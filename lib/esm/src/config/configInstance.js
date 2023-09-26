class ConfigInstance {
    constructor(appConfig) {
        if (appConfig)
            this.appConfig = appConfig;
    }
    static getInstance(appConfig) {
        if (ConfigInstance.instance == undefined) {
            if (appConfig) {
                ConfigInstance.instance = new ConfigInstance(appConfig);
            }
        }
        return ConfigInstance.instance;
    }
    getOrganization() {
        var _a, _b;
        return (_b = (_a = this.appConfig) === null || _a === void 0 ? void 0 : _a.organizationName) !== null && _b !== void 0 ? _b : 'Not defined';
    }
    getProject() {
        var _a, _b;
        return (_b = (_a = this.appConfig) === null || _a === void 0 ? void 0 : _a.projectName) !== null && _b !== void 0 ? _b : 'Not defined';
    }
    getStates() {
        var _a, _b;
        return (_b = (_a = this.appConfig) === null || _a === void 0 ? void 0 : _a.states) !== null && _b !== void 0 ? _b : { ToDo: [""], Doing: [""], Done: [""], Cancelled: [""] };
    }
    getToken() {
        var _a, _b;
        return (_b = (_a = this.appConfig) === null || _a === void 0 ? void 0 : _a.token) !== null && _b !== void 0 ? _b : 'Not defined';
    }
    getTypes() {
        var _a, _b;
        return (_b = (_a = this.appConfig) === null || _a === void 0 ? void 0 : _a.types) !== null && _b !== void 0 ? _b : { Epic: 'Not defined', Feature: 'Not defined', UserStory: 'Not defined', Task: 'Not defined' };
    }
    onValidate() {
        if (!this.appConfig)
            throw Error("The app config is required");
        if (!this.appConfig.organizationName)
            throw Error("The organization name is required");
        if (!this.appConfig.token)
            throw Error("The token is required");
        if (!this.appConfig.types)
            throw Error("The types are required");
        if (!this.appConfig.types.Epic)
            throw Error("The epic type is required");
        if (!this.appConfig.types.Feature)
            throw Error("The feature type is required");
        if (!this.appConfig.types.UserStory)
            throw Error("The user story type is required");
        if (!this.appConfig.types.Task)
            throw Error("The task type is required");
        if (!this.appConfig.states)
            throw Error("The states are required");
        if (!this.appConfig.states.ToDo)
            throw Error("The ToDo states are required");
        if (!this.appConfig.states.Doing)
            throw Error("The Doing states are required");
        if (!this.appConfig.states.Done)
            throw Error("The Done states are required");
        if (!this.appConfig.states.Cancelled)
            throw Error("The Cancelled states are required");
        return true;
    }
    setProject(projectName) {
        if (this.appConfig)
            this.appConfig.projectName = projectName;
    }
}
export const configInstance = (appConfig) => {
    return ConfigInstance.getInstance(appConfig);
};
