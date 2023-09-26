/**
 * Definición que da la aplicación sobre los tipos de elementos de trabajo
 * @enum 
 * {@label Tipos de elementos de trabajo}
*/
export type WorkItemTypesHomologation = {
    //Definición que da la oragnización a una épica
    'Epic': string,
    //Definición que da la oragnización a una característica
    'Feature': string,
    //Definición que da la oragnización a una tarea
    'Task': string,
    //Definición que da la oragnización a una historia de usuario
    'UserStory': string
}