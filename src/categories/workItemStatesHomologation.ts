/**
 * Definición que da la organización en Azure DevOps para un conjunto de estados que deben ser homologados
 * @enum
 * {@label Homologación de estados de un elemento de trabajo}
 */
export type WorkItemStatesHomologation = {
    // Definición que da la organización a los estados Nuevos
    ToDo: string[];
    // Definición que da la organización a los estados En progreso
    Doing: string[];
    //Definición que da la organización a los estados Completados
    Done: string[];
    //Definición que da la organización a los estados Cancelados
    Cancelled: string[];
};
