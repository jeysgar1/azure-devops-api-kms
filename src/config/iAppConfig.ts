export interface iAppConfig {
    /**
     * Nombre de la organización
     */
    organizationName: string;
    /**
     * Estados de la organización
     */
    states: {
        // Posibles valores del estado ToDo
        ToDo: string[];
        // Posibles valores del estado Doing
        Doing: string[];
        // Posibles valores del estado Done
        Done: string[];
        // Posibles valores del estado Cancelled
        Cancelled: string[];
    };
    /**
     * Tipos de elementos de la organización
     */
    types: {
        // Posible valor del tipo Épica
        Epic: string;
        // Posible valor del estado Característica
        Feature: string;
        // Posible valor del estado Historia de usuario
        UserStory: string;
        // Posible valor del estado Tarea
        Task: string;
    };
    // Token de acceso personal
    token: string;
}
