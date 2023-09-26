import { AzureWorkItem } from "../azureDevOps";
import { Base } from "./base";
import { Feature } from "./feature";
import { Project } from "./project";
import { Task } from "./task";
import { Team } from "./team";
/**
 * Datos comúnes en los elementos de trabajo
 *
 * @see (¿Historias de usuario?)[]
 *
 * @category Models
 *
 * {@label Historias de usuario}
 */
export declare class UserStory extends Base {
    /**
     * Característica asociada a una historia de usuario
     */
    feature?: Feature | undefined;
    /**
     * Proyecto asignado a la historia de usuario
     */
    project?: Project | undefined;
    /**
     * Refinamiento de la historia de usuario
     */
    refinement?: string | undefined;
    /**
     * Equipo de trabajo asignado a la historia de usuario
     */
    team?: Team | undefined;
    /**
     * Tareas de una historia de usuario
     */
    tasks?: Array<Task> | undefined;
    /**
     * Crea una historia de usuario
     * @param {AzureWorkItem | undefined} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem: AzureWorkItem | undefined | string);
    /**
     * Permite asignar la épica y la caracteristica asociada a una historia de usuario
     * @param {?Array<Epic>} epics - Épicas
     * @param {?Array<Feature>} features - Características
     */
    selectMyFeature(features?: Array<Feature>): void;
    /**
     * Permite filtrar las características de una épica
     * @param {?Array<Feature>} features - Características
     */
    selectMyTasks(tasks?: Array<Task>): void;
}
//# sourceMappingURL=userStory.d.ts.map