
/**
 * Definición que da la aplicación sobre los estados que puede tener un elemento de trabajo
 * @enum 
 * {@label Estados de un elemento de trabajo}
*/
export enum WorkItemStates {
    //Elementos de trabajo pendientes por hacer
    ToDo,
    //Elementos de trabajo en progreso 
    Doing,
    //Elementos de trabajo completados
    Done,
    //Elementos de trabajo cancelados
    Cancelled,
    //Elementos de trabajo con un estado desconocido
    Unknow
};