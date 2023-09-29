import { iAppConfig } from '../config/iAppConfig';

const iTestConfig: iAppConfig = {
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
    token: 'vrqn3lkexyajfzrckvcy2t7sw7u2z3oebk2bq5fblkortxoojzza',
    types: {
        Epic: 'Epic',
        Feature: 'Feature',
        Task: 'Task',
        UserStory: 'Product Backlog Item',
    },
};

export default iTestConfig;
