import { AzureWorkItem } from "../azureDevOps";
import { Base } from "./base";
import { UserStory } from "./userStory";
/**
 * Característica
 *
 * @see (¿Características?)[]
 *
 * @category Models
 *
 * {@label Características}
 */
export declare class Feature extends Base {
    /**
     * Identificador de la épica
     */
    epicId: string | undefined;
    /**
     * Historias de usuario asociadas a una historia de usuario
     */
    userStories?: Array<UserStory> | undefined;
    /**
     * Crea una característica
     * @param {azureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
    /**
     * Permite seleccionar las historias de usuario de una caracteristica
     * @param {?Array<UserStory>} userStories - Historias de usuario
     */
    selectMyUserStories(userStories?: Array<UserStory>): void;
}
//# sourceMappingURL=feature.d.ts.map