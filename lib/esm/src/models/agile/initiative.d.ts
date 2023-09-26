import { UserStory } from "./userStory";
/**
 * Datos comúnes en los elementos de trabajo
 *
 * @see (¿Características?)[]
 *
 * @category Models
 *
 * {@label Iniciativas}
 */
export declare class Initiative {
    /**
     * Adjuntos asociados a una iniciativa
     */
    attachedFiles: Array<string> | undefined;
    /**
     * Identificador de una iniciativa
     */
    id: string | undefined;
    /**
     * Nombre de la iniciativa
     */
    name: string | undefined;
    /**
    * Historias de usuario asociadas a la iniciativa
    */
    userStories: Array<UserStory> | undefined;
    /**
     * Permite crear una iniciativa
     * @param {string} idInitiative - Identificador de la iniciativa
     * @param {Array<UserStory> | undefined} userStories - Historias de usuario
     * @param {Team | undefined} team - Equipo de trabajo
     * @param {{wiki:string, attachedFiles:string[]} | undefined} docsReferenced - Referencia a la documentación
     */
    constructor(idInitiative: string, userStories: Array<UserStory> | undefined, docsReferenced: {
        wiki: string;
        attachedFiles: string[];
    } | undefined);
}
//# sourceMappingURL=initiative.d.ts.map