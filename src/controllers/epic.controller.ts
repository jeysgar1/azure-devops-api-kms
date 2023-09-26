/* eslint-disable @typescript-eslint/no-explicit-any */


import { configInstance } from "../config";
import { AzureWorkItem, Epic, Feature } from "../models";

/**
 * Controlador encargado de gestionar las épicas
 * 
 * @category Controllers
 * 
 * {@label Épicas}
 */
export class EpicController {


    /**
     * Permite obtener las épicas asociadas a una iniciativa
     * 
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Epic | undefined} Lista de epicas
     */
    get(workItems : AzureWorkItem[] | undefined):Array<Epic> | undefined {
        if(workItems){
            const epics = new Array<Epic>();
            const epicsWorkItems = workItems.filter((workItem:AzureWorkItem) => workItem.type == configInstance()?.getTypes()?.Epic);
            epicsWorkItems?.forEach((epicWorkItem : AzureWorkItem) => {
                const epic : Epic = new Epic(epicWorkItem);
                if(epicWorkItem.childs){
                    epicWorkItem.childs.forEach((child:string) => {
                        epic.features?.push(new Feature(child));
                    })
                }
                epics.push(epic);
            })
            return epics;
        }
        return undefined;
    }

    /**
     * Permite obtener los archivos adjuntos o el link del refinamiento
     * 
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {{wiki:string, attachedFiles:string} | undefined} Archivos adjuntos y wiki
     */
    getAttachedFiles(workItems : AzureWorkItem[] | undefined):{wiki:string, attachedFiles:string[]} | undefined {
        if(workItems){
            const attachedFiles : string[] = []
            let wiki : string = ''
            workItems.forEach((workItem : AzureWorkItem) => {
                if(workItem.links && workItem.links.length > 0){
                    workItem.links.forEach((child:string) => {
                        attachedFiles.push(child);
                    })
                } 
                if(workItem.linkWiki){
                    wiki = workItem.linkWiki;
                }
            })
            return {wiki:wiki, attachedFiles:attachedFiles};
        }
        return undefined;
    }
}