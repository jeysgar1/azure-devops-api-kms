import { Initiative } from '../models';
/**
 * Controlador encargado de gestionar las iniciativas
 *
 * @category Controllers
 *
 * {@label Iniciativas}
 */
export declare class InitiativeController {
    /**
     * Instancia encargada de gestionar todo al rededor de agilidad
     */
    private agileController;
    /**
     * Instancia encargada de gestionar las épicas
     */
    private epicController;
    /**
     * Instancia encargada de gestionar las caracteristicas
     */
    private featureController;
    /**
     * Instancia encargada de gestionar las tareas
     */
    private taskController;
    /**
     * Instancia encargada de gestionar las historias de usuario
     */
    private userStoryController;
    /**
     * Crea una instancia del controlador
     */
    constructor();
    /**
     * Permite obtener una iniciativa
     * @param {string} idInitiative - Identificador de la iniciativa
     * @returns {Promise<Initiative | undefined>} Iniciativa
     */
    get(idInitiative: string): Promise<Initiative | undefined>;
}
//# sourceMappingURL=initiative.controller.d.ts.map