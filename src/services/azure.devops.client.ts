import axios, { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { AzureGetProjectsItemResponse, AzureGetProjectsResponse, AzureGetWorkItemResponse, AzureWiqlItemResponse, AzureWiqlResponse, baseURI, getProjectsURI, query } from "../models";
import {configInstance} from "../config/configInstance";


export class AzureDevOpsClient {

    
    private createConnection(): AxiosInstance {
        const instance : AxiosInstance = axios.create();
        instance.defaults.baseURL = baseURI(configInstance()?.getOrganization() ?? '');
        instance.defaults.headers.common['Authorization'] = 'Basic' + btoa('' + ':' + configInstance()?.getToken() ?? '');
        instance.defaults.timeout = 100000;
        instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
            console.log(JSON.stringify(request, null ,2));
            return request
        })
        instance.interceptors.response.use((response : AxiosResponse) => {
            console.log(JSON.stringify(response, null, 2));
            return response
        })
        return instance;
    }

   
    async getProjects(): Promise<AzureGetProjectsItemResponse[] | undefined> {
        const response = await this.createConnection().get<AzureGetProjectsResponse>(getProjectsURI());
        return response.data?.value;
    }

    
    async getWorkItems(ids: string[]): Promise<AzureGetWorkItemResponse[] | undefined> {
        const response = await this.createConnection().post('/_apis/wit/workitemsbatch?api-version=7.1-preview.1', { ids: ids, $expand:"relations"});
        return response.data?.value;
    }

    
    async wiql(id: string): Promise<string[] | undefined> {
        const wilqResponse = await this.createConnection().post<AzureWiqlResponse>('/_apis/wit/wiql?api-version=7.1-preview.2', { query: query(id) });
        const items: string[] = []
        wilqResponse?.data?.workItems?.forEach((item: AzureWiqlItemResponse) => { if (item.id) items.push(item.id) });
        return items;
    }
}