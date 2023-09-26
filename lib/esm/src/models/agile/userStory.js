import { Base } from "./base";
import { Project } from "./project";
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
export class UserStory extends Base {
    /**
     * Crea una historia de usuario
     * @param {AzureWorkItem | undefined} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem) {
        super(azureWorkItem);
        this.tasks = new Array();
        if (typeof azureWorkItem !== "string" && azureWorkItem) {
            this.team = new Team(azureWorkItem);
            if (azureWorkItem.teamProject) {
                this.project = new Project(azureWorkItem.teamProject);
            }
            if (azureWorkItem.linkWiki) {
                this.refinement = azureWorkItem.linkWiki;
            }
        }
    }
    /**
     * Permite asignar la épica y la caracteristica asociada a una historia de usuario
     * @param {?Array<Epic>} epics - Épicas
     * @param {?Array<Feature>} features - Características
     */
    selectMyFeature(features) {
        if (features) {
            this.feature = features.filter((feature) => { var _a; return feature.id == ((_a = this.feature) === null || _a === void 0 ? void 0 : _a.id); })[0];
        }
    }
    /**
     * Permite filtrar las características de una épica
     * @param {?Array<Feature>} features - Características
     */
    selectMyTasks(tasks) {
        if (tasks) {
            this.tasks = new Array();
            this.tasks = tasks.filter((task) => task.userStoryId == this.id);
        }
    }
}
