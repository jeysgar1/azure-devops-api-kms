import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';
import AzureDevOpsIntegrations from '../app';
import { Initiative } from '../models';
import appConfigTest from './appConfig';

const feature = loadFeature(path.join(__dirname, './app.feature'));

defineFeature(feature, (test) => {
    let initiative: Initiative | undefined = undefined;
    let azureDevOpsIntegrationInstance: AzureDevOpsIntegrations | undefined =
        undefined;

    beforeEach(() => {
        initiative = undefined;
        azureDevOpsIntegrationInstance = new AzureDevOpsIntegrations(
            appConfigTest,
        );
    });

    test('Obtener una iniciativa', ({ given, when, then }) => {
        given('La conexion con Azure DevOps', () => {});

        when('Solicito una iniciativa', async () => {
            initiative = await azureDevOpsIntegrationInstance?.getById('2633');
        });

        then('Obtengo la referencia', () => {
            expect(initiative).toBeDefined();
        });
    });
});
