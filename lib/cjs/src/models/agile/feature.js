"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feature = void 0;
const base_1 = require("./base");
/**
 * Característica
 *
 * @see (¿Características?)[]
 *
 * @category Models
 *
 * {@label Características}
 */
class Feature extends base_1.Base {
    /**
     * Crea una característica
     * @param {azureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem) {
        super(azureWorkItem);
        this.userStories = new Array();
        if (typeof azureWorkItem !== "string") {
            this.epicId = (azureWorkItem === null || azureWorkItem === void 0 ? void 0 : azureWorkItem.parents) ? [0].toString() : undefined;
        }
    }
    /**
     * Permite seleccionar las historias de usuario de una caracteristica
     * @param {?Array<UserStory>} userStories - Historias de usuario
     */
    selectMyUserStories(userStories) {
        if (userStories) {
            this.userStories = new Array();
            this.userStories = userStories.filter((userStory) => { var _a; return ((_a = userStory.feature) === null || _a === void 0 ? void 0 : _a.id) == this.id; });
        }
    }
}
exports.Feature = Feature;
