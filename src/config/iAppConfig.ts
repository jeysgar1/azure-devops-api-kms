export interface iAppConfig {
    fields: {
        /**
         * Campo que define el identificador de una iniciativa
         */
        idInitiative: string;
        /**
         * Equipo de trabajo
         */
        team: {
            /**
             * Campo que define al Arquitecto de software
             */
            architect: string;
            /**
             * Campo que define al dueño del producto
             */
            productOnwer: string;
            /**
             * Campo que define al analista de requerimientos
             */
            proxy: string;
            /**
             * Campo que define al especialista de scrum
             */
            scrumMaster: string;
            /**
             * Campo que define al líder técnico
             */
            techLeader: string;
        };
    };
    /**
     * Nombre de la organización
     */
    organizationName: string;
    /**
     * Nombre del proyecto
     */
    projectName: string;
    states: {
        ToDo: string[];
        Doing: string[];
        Done: string[];
        Cancelled: string[];
    };
    types: {
        Epic: string;
        Feature: string;
        UserStory: string;
        Task: string;
    };
    token: string;
}
