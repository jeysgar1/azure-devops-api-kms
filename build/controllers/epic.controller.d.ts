import { AzureWorkItem, Epic } from '../models';
export declare class EpicController {
    get(workItems: AzureWorkItem[] | undefined): Array<Epic> | undefined;
    getAttachedFiles(workItems: AzureWorkItem[] | undefined): {
        wiki: string;
        attachedFiles: string[];
    } | undefined;
}
