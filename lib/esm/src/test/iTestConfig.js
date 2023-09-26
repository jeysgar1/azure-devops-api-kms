const iTestConfig = {
    fields: {
        idInitiative: '[Custom.NumeroIniciativa]',
        team: {
            architect: '[Custom.Arquitecto]',
            productOnwer: '[Custom.Product_Owner]',
            proxy: '[Custom.GestordeRequerimientos]',
            techLeader: '[Custom.Desarrollador_Sistema_1]',
            scrumMaster: '[Custom.ScrumMaster]',
        },
    },
    organizationName: 'informaticaETB',
    projectName: 'Canales Digitales 1',
    states: {
        ToDo: ['New'],
        Doing: ['In Progess', 'En progreso'],
        Done: ['Completado', 'Done'],
        Cancelled: ['Cancelled', 'Cancelado'],
    },
    token: 'tnri3v5dseie5fvfgj5llioagjtapbrbfmbp225ulmpmeahzqjsq',
    types: {
        Epic: 'Epic',
        Feature: 'Feature',
        Task: 'Task',
        UserStory: 'Product Backlog Item',
    },
};
export default iTestConfig;
