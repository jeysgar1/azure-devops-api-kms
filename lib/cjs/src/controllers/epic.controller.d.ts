import { AzureWorkItem, Epic } from "../models";
/**
 * Controlador encargado de gestionar las épicas
 *
 * @category Controllers
 *
 * {@label Épicas}
 */
export declare class EpicController {
    /**
     * Permite obtener las épicas asociadas a una iniciativa
     *
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<Epic | undefined} Lista de epicas
     */
    get(workItems: AzureWorkItem[] | undefined): Array<Epic> | undefined;
    /**
     * Permite obtener los archivos adjuntos o el link del refinamiento
     *
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {{wiki:string, attachedFiles:string} | undefined} Archivos adjuntos y wiki
     */
    getAttachedFiles(workItems: AzureWorkItem[] | undefined): {
        wiki: string;
        attachedFiles: string[];
    } | undefined;
}
//# sourceMappingURL=epic.controller.d.ts.map