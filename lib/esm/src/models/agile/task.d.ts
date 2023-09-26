import { AzureWorkItem } from '../azureDevOps';
import { Base } from './base';
import { Person } from './person';
/**
 * Datos comúnes en los elementos de trabajo
 *
 * @see (¿Tareas?)[]
 *
 * @category Models
 *
 * {@label Iniciativas}
 */
export declare class Task extends Base {
    /**
     * Persona asignada a ejecutar la tarea
     * @date 9/8/2023 - 4:43:14 PM
     *
     * @type {(Person | undefined)}
     */
    assignedTo: Person | undefined;
    /**
     * Identificador de la historia de usuario
     * @date 9/16/2023 - 2:00:17 PM
     *
     * @type {(string | undefined)}
     */
    userStoryId: string | undefined;
    /**
     * Permite crear una tarea
     * @param {AzureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
}
//# sourceMappingURL=task.d.ts.map