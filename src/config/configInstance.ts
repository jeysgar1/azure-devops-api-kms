import { iAppConfig } from "./iAppConfig";



class ConfigInstance {
    
    private appConfig? : iAppConfig
    static instance? : ConfigInstance

    private constructor(appConfig : iAppConfig | undefined){
        if(appConfig)this.appConfig = appConfig;
    }


    public static getInstance(appConfig? : iAppConfig | undefined) : ConfigInstance | undefined{
        if(ConfigInstance.instance == undefined){
            if(appConfig){
                ConfigInstance.instance = new ConfigInstance(appConfig);
            }
        }
        return ConfigInstance.instance;
    }

    public getOrganization() : string{
        return this.appConfig?.organizationName ?? 'Not defined';
    }

    public getProject() : string{
        return this.appConfig?.projectName ?? 'Not defined';
    }

    public getStates() : {ToDo:string[], Doing:string[], Done:string[], Cancelled:string[]} {
        return this.appConfig?.states ?? {ToDo:[""], Doing:[""], Done:[""], Cancelled:[""]}
    }

    public getToken() : string{
        return this.appConfig?.token ?? 'Not defined';
    }

    public getTypes() : {Epic : string, Feature : string, UserStory : string, Task : string} {
        return this.appConfig?.types ?? {Epic : 'Not defined', Feature : 'Not defined', UserStory : 'Not defined', Task : 'Not defined'};
    }

    public onValidate() : boolean{ 
        if(!this.appConfig) throw Error("The app config is required")
        if(!this.appConfig.organizationName) throw Error("The organization name is required")
        if(!this.appConfig.token) throw Error("The token is required")
        if(!this.appConfig.types) throw Error("The types are required")
        if(!this.appConfig.types.Epic) throw Error("The epic type is required")
        if(!this.appConfig.types.Feature) throw Error("The feature type is required")
        if(!this.appConfig.types.UserStory) throw Error("The user story type is required")
        if(!this.appConfig.types.Task) throw Error("The task type is required")
        if(!this.appConfig.states) throw Error("The states are required")
        if(!this.appConfig.states.ToDo) throw Error("The ToDo states are required")
        if(!this.appConfig.states.Doing) throw Error("The Doing states are required")
        if(!this.appConfig.states.Done) throw Error("The Done states are required")
        if(!this.appConfig.states.Cancelled) throw Error("The Cancelled states are required")
        return true;
    }

    public setProject(projectName:string) : void{
        if(this.appConfig)
            this.appConfig.projectName = projectName;
    }
}


export const configInstance = (appConfig? : iAppConfig | undefined) : ConfigInstance | undefined => {
    return ConfigInstance.getInstance(appConfig);
}





