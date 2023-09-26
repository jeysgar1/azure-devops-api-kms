"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initiative = void 0;
/**
 * Datos comúnes en los elementos de trabajo
 *
 * @see (¿Características?)[]
 *
 * @category Models
 *
 * {@label Iniciativas}
 */
class Initiative {
    /**
     * Permite crear una iniciativa
     * @param {string} idInitiative - Identificador de la iniciativa
     * @param {Array<UserStory> | undefined} userStories - Historias de usuario
     * @param {Team | undefined} team - Equipo de trabajo
     * @param {{wiki:string, attachedFiles:string[]} | undefined} docsReferenced - Referencia a la documentación
     */
    constructor(idInitiative, userStories, docsReferenced) {
        this.id = idInitiative;
        this.name = "Iniciativa " + idInitiative;
        this.userStories = userStories;
        this.attachedFiles = docsReferenced === null || docsReferenced === void 0 ? void 0 : docsReferenced.attachedFiles;
    }
}
exports.Initiative = Initiative;
//# sourceMappingURL=initiative.js.map