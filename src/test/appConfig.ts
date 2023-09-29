import { iAppConfig } from '../config/iAppConfig';

const appConfigTest: iAppConfig = {
    organizationName: 'informaticaETB',
    states: {
        ToDo: ['New'],
        Doing: ['In Progess', 'En progreso'],
        Done: ['Completado', 'Done'],
        Cancelled: ['Cancelled', 'Cancelado'],
    },
    token: '',
    types: {
        Epic: 'Epic',
        Feature: 'Feature',
        Task: 'Task',
        UserStory: 'Product Backlog Item',
    },
};

export default appConfigTest;
