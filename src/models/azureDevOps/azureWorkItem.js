"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AzureWorkItem = void 0;
const categories_1 = require("../../categories");
const configInstance_1 = require("../../config/configInstance");
/**
 * Elemento de trabajo transformado al consumir la API de Azure DevOps
 *
 * @category Models
 *
 * {@label Azure DevOps}
 */
class AzureWorkItem {
    /**
     * Crea una instancia del elemento de trabajo transformado
     * @param {AzureGetWorkItemResponse} workItem - Elemento de trabajo
     */
    constructor(workItem) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        this.id = workItem.id;
        this.url = workItem.url;
        if (workItem.fields) {
            this.title = workItem.fields["System.Title"];
            this.description = workItem.fields["System.Description"];
            this.idInitiative = workItem.fields["Custom.NumeroIniciativa"];
            this.idInitiative = workItem.fields["Custom.NumeroIniciativa"];
            const type = workItem.fields["System.WorkItemType"];
            if (type == ((_b = (_a = (0, configInstance_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Epic))
                this.type = categories_1.WorkItemTypes.Epic;
            else if (type == ((_d = (_c = (0, configInstance_1.configInstance)()) === null || _c === void 0 ? void 0 : _c.getTypes()) === null || _d === void 0 ? void 0 : _d.Feature))
                this.type = categories_1.WorkItemTypes.Feature;
            else if (type == ((_f = (_e = (0, configInstance_1.configInstance)()) === null || _e === void 0 ? void 0 : _e.getTypes()) === null || _f === void 0 ? void 0 : _f.UserStory))
                this.type = categories_1.WorkItemTypes.UserStory;
            else if (type == ((_h = (_g = (0, configInstance_1.configInstance)()) === null || _g === void 0 ? void 0 : _g.getTypes()) === null || _h === void 0 ? void 0 : _h.Task))
                this.type = categories_1.WorkItemTypes.Task;
            else
                this.type = categories_1.WorkItemTypes.Unknow;
            const state = workItem.fields["System.State"];
            if ((_k = (_j = (0, configInstance_1.configInstance)()) === null || _j === void 0 ? void 0 : _j.getStates()) === null || _k === void 0 ? void 0 : _k.Cancelled.includes(state))
                this.state = categories_1.WorkItemStates.Cancelled;
            else if ((_m = (_l = (0, configInstance_1.configInstance)()) === null || _l === void 0 ? void 0 : _l.getStates()) === null || _m === void 0 ? void 0 : _m.Doing.includes(state))
                this.state = categories_1.WorkItemStates.Doing;
            else if ((_p = (_o = (0, configInstance_1.configInstance)()) === null || _o === void 0 ? void 0 : _o.getStates()) === null || _p === void 0 ? void 0 : _p.Done.includes(state))
                this.state = categories_1.WorkItemStates.Done;
            else if ((_r = (_q = (0, configInstance_1.configInstance)()) === null || _q === void 0 ? void 0 : _q.getStates()) === null || _r === void 0 ? void 0 : _r.ToDo.includes(state))
                this.state = categories_1.WorkItemStates.ToDo;
            else
                this.state = categories_1.WorkItemStates.Unknow;
            const assignedToItem = (_s = workItem.fields["System.AssignedTo"]) !== null && _s !== void 0 ? _s : { displayName: '', uniqueName: '' };
            if (assignedToItem) {
                this.assignedTo = {
                    name: assignedToItem.displayName,
                    email: assignedToItem.uniqueName
                };
            }
            this.closedDate = workItem.fields['Microsoft.VSTS.Common.ClosedDate'];
            const createdByItem = (_t = workItem.fields["System.CreatedBy"]) !== null && _t !== void 0 ? _t : { displayName: '', uniqueName: '' };
            if (createdByItem) {
                this.createdBy = {
                    name: createdByItem.displayName,
                    email: createdByItem.uniqueName
                };
            }
            const architectItem = (_u = workItem.fields["Custom.Arquitecto"]) !== null && _u !== void 0 ? _u : { displayName: '', uniqueName: '' };
            if (architectItem) {
                this.architect = {
                    name: architectItem.displayName,
                    email: architectItem.uniqueName
                };
            }
            const scrumMasterItem = (_v = workItem.fields["Custom.ScrumMaster"]) !== null && _v !== void 0 ? _v : { displayName: '', uniqueName: '' };
            if (scrumMasterItem) {
                this.scrumMaster = {
                    name: scrumMasterItem.displayName,
                    email: scrumMasterItem.uniqueName
                };
            }
            this.changedDate = workItem.fields['System.ChangedDate'];
            this.createdDate = workItem.fields['System.CreatedDate'];
            this.releaseDate = workItem.fields['Custom.Fecha_PnP'];
            const productOwnerItem = (_w = workItem.fields["Custom.Product_Owner"]) !== null && _w !== void 0 ? _w : { displayName: '', uniqueName: '' };
            if (productOwnerItem) {
                this.productOwner = {
                    name: productOwnerItem.displayName,
                    email: productOwnerItem.uniqueName
                };
            }
            const proxyItem = (_x = workItem.fields["Custom.GestordeRequerimientos"]) !== null && _x !== void 0 ? _x : { displayName: '', uniqueName: '' };
            if (proxyItem) {
                this.proxy = {
                    name: proxyItem.displayName,
                    email: proxyItem.uniqueName
                };
            }
            const techLeaderItem = (_y = workItem.fields["Custom.Desarrollador_Sistema_1"]) !== null && _y !== void 0 ? _y : { displayName: '', uniqueName: '' };
            if (techLeaderItem) {
                this.techLeader = {
                    name: techLeaderItem.displayName,
                    email: techLeaderItem.uniqueName
                };
            }
            const affectedSystemsSplit = (_z = workItem.fields['Custom.SistemasAfectados']) === null || _z === void 0 ? void 0 : _z.split(";");
            this.affectedSystems = new Array();
            affectedSystemsSplit === null || affectedSystemsSplit === void 0 ? void 0 : affectedSystemsSplit.forEach((item) => { var _a; (_a = this.affectedSystems) === null || _a === void 0 ? void 0 : _a.push(item); });
            this.linkWiki = workItem.fields['Custom.Link_Documento_Arquitectura'];
            this.teamProject = workItem.fields['System.TeamProject'];
            const changedByItem = (_0 = workItem.fields["System.ChangedBy"]) !== null && _0 !== void 0 ? _0 : { displayName: '', uniqueName: '' };
            if (changedByItem) {
                this.changedBy = {
                    name: changedByItem.displayName,
                    email: changedByItem.uniqueName
                };
            }
        }
        if (workItem.relations) {
            (_1 = workItem.relations) === null || _1 === void 0 ? void 0 : _1.forEach((relation) => {
                var _a;
                if (!this.childs)
                    this.childs = new Array();
                if (!this.links)
                    this.links = new Array();
                if (!this.parents)
                    this.parents = new Array();
                const idSplit = (_a = relation.url) === null || _a === void 0 ? void 0 : _a.split("/");
                relation.id = idSplit === null || idSplit === void 0 ? void 0 : idSplit.reverse()[0];
                if (this.childs) {
                    if (relation.rel == categories_1.WorkItemLinkType.Child)
                        if (relation.id)
                            this.childs.push(relation.id);
                }
                if (this.parents) {
                    if (relation.rel == categories_1.WorkItemLinkType.Parent)
                        if (relation.id)
                            this.parents.push(relation.id);
                }
                if (this.links) {
                    if (relation.rel == categories_1.WorkItemLinkType.Hyperlink || relation.rel == categories_1.WorkItemLinkType.AttachedFile)
                        if (relation.url)
                            this.links.push(relation.url);
                }
            });
        }
    }
}
exports.AzureWorkItem = AzureWorkItem;
//# sourceMappingURL=azureWorkItem.js.map