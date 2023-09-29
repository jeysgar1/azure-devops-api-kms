import { iAppConfig } from '../config/iAppConfig';

const appConfigTest: iAppConfig = {
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
    token: 'bpjnxmqu7o7jwycyrlvh637tybp4ci63hrdonlxwsn7ji62bpryq',
    types: {
        Epic: 'Epic',
        Feature: 'Feature',
        Task: 'Task',
        UserStory: 'Product Backlog Item',
    },
};

export default appConfigTest;
