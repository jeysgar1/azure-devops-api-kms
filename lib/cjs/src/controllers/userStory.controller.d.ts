import { AzureWorkItem, UserStory } from '../models';
/**
 * Controlador encargado de gestionar las historias de usuario
 *
 * @category Controllers
 *
 * {@label Historias de usuario}
 */
export declare class UserStoryController {
    /**
     * Instancia encargada de gestionar el acceso sobre Azure DevOps
     */
    private agileController;
    /**
     * Instancia encargada de gestionar las características
     */
    private featureController;
    /**
     * Crea una instancia del controlador
     */
    constructor();
    /**
     * Permite obtener las historias de usuario de un conjunto de características
     * @param {AzureWorkItem[] | undefined} workItems - Elementos de trabajo
     * @returns {Array<UserStory> | undefined} Lista de historias de usuario
     */
    get(workItems: AzureWorkItem[] | undefined): Array<UserStory> | undefined;
}
//# sourceMappingURL=userStory.controller.d.ts.map