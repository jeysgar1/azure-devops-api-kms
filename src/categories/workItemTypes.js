"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkItemTypes = void 0;
/**
 * Definición que da la aplicación sobre los tipos de elementos de trabajo
 * @enum
 * {@label Tipos de elementos de trabajo}
*/
var WorkItemTypes;
(function (WorkItemTypes) {
    // Épica
    WorkItemTypes["Epic"] = "Epic";
    //Característica
    WorkItemTypes["Feature"] = "Feature";
    //Tarea
    WorkItemTypes["Task"] = "Task";
    //Desconocido
    WorkItemTypes["Unknow"] = "Unknow";
    //Historia de usuario
    WorkItemTypes["UserStory"] = "UserStory";
})(WorkItemTypes || (exports.WorkItemTypes = WorkItemTypes = {}));
//# sourceMappingURL=workItemTypes.js.map