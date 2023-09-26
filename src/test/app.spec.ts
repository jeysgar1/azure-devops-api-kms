
import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';
import azureDevOpsIntegrationInstance from "../index"
import { Initiative } from '../models';
import iTestConfig from './iTestConfig';

const feature = loadFeature(path.join(__dirname, './app.feature'));

defineFeature(feature, (test) => {

  let initiative : Initiative | undefined = undefined;

  beforeEach(() => {
    initiative = undefined;
    azureDevOpsIntegrationInstance.init(iTestConfig);
  });

  test('Obtener una iniciativa', ({ given, when, then }) => {

    given('La conexion con Azure DevOps', () => {
      
    });

    when('Solicito una iniciativa', async () => {
      initiative = await azureDevOpsIntegrationInstance.getInitiative('2633');
    });

    then('Obtengo la referencia', () => {
      expect(initiative).toBeDefined();
    })

  })

});
