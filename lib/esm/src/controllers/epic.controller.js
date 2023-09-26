/* eslint-disable @typescript-eslint/no-explicit-any */
import { configInstance } from '../config';
import { Epic, Feature } from '../models';
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
    get(workItems) {
        if (workItems) {
            const epics = new Array();
            const epicsWorkItems = workItems.filter((workItem) => { var _a, _b; return workItem.type == ((_b = (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Epic); });
            epicsWorkItems === null || epicsWorkItems === void 0 ? void 0 : epicsWorkItems.forEach((epicWorkItem) => {
                const epic = new Epic(epicWorkItem);
                if (epicWorkItem.childs) {
                    epicWorkItem.childs.forEach((child) => {
                        var _a;
                        (_a = epic.features) === null || _a === void 0 ? void 0 : _a.push(new Feature(child));
                    });
                }
                epics.push(epic);
            });
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
    getAttachedFiles(workItems) {
        if (workItems) {
            const attachedFiles = [];
            let wiki = '';
            workItems.forEach((workItem) => {
                if (workItem.links && workItem.links.length > 0) {
                    workItem.links.forEach((child) => {
                        attachedFiles.push(child);
                    });
                }
                if (workItem.linkWiki) {
                    wiki = workItem.linkWiki;
                }
            });
            return { wiki: wiki, attachedFiles: attachedFiles };
        }
        return undefined;
    }
}
