import {
    WorkItemLinkType,
    WorkItemStates,
    WorkItemTypes,
} from '../../categories';
import { configInstance } from '../../config/configInstance';
import { Person, Project } from '../agile';
import {
    AzureGetWorkItemRelationResponse,
    AzureGetWorkItemResponse,
} from './getWorkItems';

/**
 * Elemento de trabajo transformado al consumir la API de Azure DevOps
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
export class AzureWorkItem {
    // Sistemas afectados según macro-estimación
    affectedSystems: Array<string> | undefined;
    // Arquitecto de software asignado
    architect: Person | undefined;
    //Persona asignada al elemento de trabajo
    assignedTo: Person | undefined;
    //Persona que modificó el elemento de trabajo
    changedBy: Person | undefined;
    //Fecha en la cuál modificó el elemento de trabajo
    changedDate: string | undefined;
    //Identificadores de los elementos de trabajo hijos
    childs: Array<string> | undefined;
    //Fecha en la cuál se da cierre el elemento de trabajo
    closedDate: string | undefined;
    //Fecha en la cuál se crea el elemento de trabajo
    createdDate: string | undefined;
    //Persona que creó el elemento de trabajo
    createdBy: Person | undefined;
    //Descripción del elemento de trabajo
    description: string | undefined;
    //Identificador del elemento de trabajo
    id: string | undefined;
    //Identificador funcional del elemento de trabajo
    idInitiative: string | undefined;
    //Hipervínculos asociados al elemento de trabajo
    links: Array<string> | undefined;
    //Hipervínculo asociado a la wiki
    linkWiki: string | undefined;
    //Identificadores de los elementos padres
    parents: Array<string> | undefined;
    //Proyecto asociado al elemento de trabajo
    project: Project | undefined;
    //Propietario del producto que generó el elemento de trabajo
    productOwner: Person | undefined;
    //Analista de requerimientos asignado
    proxy: Person | undefined;
    //Fecha en la cuál se produce el elemento de trabajo
    releaseDate: string | undefined;
    //Experto en SCRUM asignado al elemento de trabajo
    scrumMaster: Person | undefined;
    //Estado del elemento de trabajo
    state: WorkItemStates | undefined;
    //Proyecto donde existe el elemento de trabajo
    teamProject: string | undefined;
    //Líder técnico asignado al elemento de trabajo
    techLeader: Person | undefined;
    //Nombre del elemento de trabajo
    title: string | undefined;
    //Tipo de elemento de trabajo
    type: WorkItemTypes | undefined;
    //URL de acceso al elemento de trabajo
    url: string | undefined;

    /**
     * Crea una instancia del elemento de trabajo transformado
     * @param {AzureGetWorkItemResponse} workItem - Elemento de trabajo
     */
    constructor(workItem: AzureGetWorkItemResponse) {
        this.id = workItem.id;
        this.url = workItem.url;
        if (workItem.fields) {
            this.title = workItem.fields['System.Title'];
            this.description = workItem.fields['System.Description'];
            this.idInitiative = workItem.fields['Custom.NumeroIniciativa'];
            this.idInitiative = workItem.fields['Custom.NumeroIniciativa'];

            const type = workItem.fields['System.WorkItemType'];
            if (type == configInstance()?.getTypes()?.Epic)
                this.type = WorkItemTypes.Epic;
            else if (type == configInstance()?.getTypes()?.Feature)
                this.type = WorkItemTypes.Feature;
            else if (type == configInstance()?.getTypes()?.UserStory)
                this.type = WorkItemTypes.UserStory;
            else if (type == configInstance()?.getTypes()?.Task)
                this.type = WorkItemTypes.Task;
            else this.type = WorkItemTypes.Unknow;

            const state = workItem.fields['System.State'];
            if (configInstance()?.getStates()?.Cancelled.includes(state))
                this.state = WorkItemStates.Cancelled;
            else if (configInstance()?.getStates()?.Doing.includes(state))
                this.state = WorkItemStates.Doing;
            else if (configInstance()?.getStates()?.Done.includes(state))
                this.state = WorkItemStates.Done;
            else if (configInstance()?.getStates()?.ToDo.includes(state))
                this.state = WorkItemStates.ToDo;
            else this.state = WorkItemStates.Unknow;

            const assignedToItem = workItem.fields['System.AssignedTo'] ?? {
                displayName: '',
                uniqueName: '',
            };
            if (assignedToItem) {
                this.assignedTo = {
                    name: assignedToItem.displayName,
                    email: assignedToItem.uniqueName,
                };
            }

            this.closedDate =
                workItem.fields['Microsoft.VSTS.Common.ClosedDate'];

            const createdByItem = workItem.fields['System.CreatedBy'] ?? {
                displayName: '',
                uniqueName: '',
            };
            if (createdByItem) {
                this.createdBy = {
                    name: createdByItem.displayName,
                    email: createdByItem.uniqueName,
                };
            }

            const architectItem = workItem.fields['Custom.Arquitecto'] ?? {
                displayName: '',
                uniqueName: '',
            };
            if (architectItem) {
                this.architect = {
                    name: architectItem.displayName,
                    email: architectItem.uniqueName,
                };
            }

            const scrumMasterItem = workItem.fields['Custom.ScrumMaster'] ?? {
                displayName: '',
                uniqueName: '',
            };
            if (scrumMasterItem) {
                this.scrumMaster = {
                    name: scrumMasterItem.displayName,
                    email: scrumMasterItem.uniqueName,
                };
            }

            this.changedDate = workItem.fields['System.ChangedDate'];

            this.createdDate = workItem.fields['System.CreatedDate'];

            this.releaseDate = workItem.fields['Custom.Fecha_PnP'];

            const productOwnerItem = workItem.fields[
                'Custom.Product_Owner'
            ] ?? { displayName: '', uniqueName: '' };
            if (productOwnerItem) {
                this.productOwner = {
                    name: productOwnerItem.displayName,
                    email: productOwnerItem.uniqueName,
                };
            }

            const proxyItem = workItem.fields[
                'Custom.GestordeRequerimientos'
            ] ?? { displayName: '', uniqueName: '' };
            if (proxyItem) {
                this.proxy = {
                    name: proxyItem.displayName,
                    email: proxyItem.uniqueName,
                };
            }

            const techLeaderItem = workItem.fields[
                'Custom.Desarrollador_Sistema_1'
            ] ?? { displayName: '', uniqueName: '' };
            if (techLeaderItem) {
                this.techLeader = {
                    name: techLeaderItem.displayName,
                    email: techLeaderItem.uniqueName,
                };
            }

            const affectedSystemsSplit: string[] =
                workItem.fields['Custom.SistemasAfectados']?.split(';');
            this.affectedSystems = new Array<string>();
            affectedSystemsSplit?.forEach((item) => {
                this.affectedSystems?.push(item);
            });

            this.linkWiki =
                workItem.fields['Custom.Link_Documento_Arquitectura'];

            this.teamProject = workItem.fields['System.TeamProject'];

            const changedByItem = workItem.fields['System.ChangedBy'] ?? {
                displayName: '',
                uniqueName: '',
            };
            if (changedByItem) {
                this.changedBy = {
                    name: changedByItem.displayName,
                    email: changedByItem.uniqueName,
                };
            }
        }
        if (workItem.relations) {
            workItem.relations?.forEach(
                (relation: AzureGetWorkItemRelationResponse) => {
                    if (!this.childs) this.childs = new Array<string>();
                    if (!this.links) this.links = new Array<string>();
                    if (!this.parents) this.parents = new Array<string>();

                    const idSplit: string[] | undefined =
                        relation.url?.split('/');
                    relation.id = idSplit?.reverse()[0];

                    if (this.childs) {
                        if (relation.rel == WorkItemLinkType.Child)
                            if (relation.id) this.childs.push(relation.id);
                    }
                    if (this.parents) {
                        if (relation.rel == WorkItemLinkType.Parent)
                            if (relation.id) this.parents.push(relation.id);
                    }
                    if (this.links) {
                        if (
                            relation.rel == WorkItemLinkType.Hyperlink ||
                            relation.rel == WorkItemLinkType.AttachedFile
                        )
                            if (relation.url) this.links.push(relation.url);
                    }
                },
            );
        }
    }
}
