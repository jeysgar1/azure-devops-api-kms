"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkItemStates = void 0;
/**
 * Definición que da la aplicación sobre los estados que puede tener un elemento de trabajo
 * @enum
 * {@label Estados de un elemento de trabajo}
*/
var WorkItemStates;
(function (WorkItemStates) {
    //Elementos de trabajo pendientes por hacer
    WorkItemStates[WorkItemStates["ToDo"] = 0] = "ToDo";
    //Elementos de trabajo en progreso 
    WorkItemStates[WorkItemStates["Doing"] = 1] = "Doing";
    //Elementos de trabajo completados
    WorkItemStates[WorkItemStates["Done"] = 2] = "Done";
    //Elementos de trabajo cancelados
    WorkItemStates[WorkItemStates["Cancelled"] = 3] = "Cancelled";
    //Elementos de trabajo con un estado desconocido
    WorkItemStates[WorkItemStates["Unknow"] = 4] = "Unknow";
})(WorkItemStates || (exports.WorkItemStates = WorkItemStates = {}));
;
//# sourceMappingURL=workItemStates.js.map