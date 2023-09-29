"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    token: 'wdmbrjxwa4kmaywc5ujcvlnqgqhjbrkwomfogbiy7j72rrz27hwq',
    types: {
        Epic: 'Epic',
        Feature: 'Feature',
        Task: 'Task',
        UserStory: 'Product Backlog Item',
    },
};
exports.default = iTestConfig;
