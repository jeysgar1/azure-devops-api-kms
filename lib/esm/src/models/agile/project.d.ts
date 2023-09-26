import { WorkItemStates } from '../../categories';
export declare class Project {
    /**
     * Descripción del proyecto
     * @date 9/8/2023 - 2:11:04 PM
     *
     * @type {string | undefined}
     */
    description: string | undefined;
    /**
     * Identificador del proyecto
     * @date 9/8/2023 - 2:11:04 PM
     *
     * @type {string | undefined}
     */
    id: string | undefined;
    /**
     * Nombre del proyecto
     * @date 9/8/2023 - 2:11:04 PM
     *
     * @type {string | undefined}
     */
    name: string | undefined;
    /**
     * Estado del proyecto
     * @date 9/8/2023 - 2:11:04 PM
     *
     * @type {WorkItemStates | undefined}
     */
    state: typeof WorkItemStates | undefined;
    /**
     * URL de acceso en Azure DevOps de un proyecto creado previamente
     * @date 9/8/2023 - 2:11:04 PM
     *
     * @type {string | undefined}
     */
    url: string | undefined;
    /**
     * Crea un proyecto
     * @param {string} name - Nombre del proyecto
     */
    constructor(name: string);
}
//# sourceMappingURL=project.d.ts.map