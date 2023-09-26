var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { defineFeature, loadFeature } from 'jest-cucumber';
import path from 'path';
import azureDevOpsIntegrationInstance from '../index';
import iTestConfig from './iTestConfig';
const feature = loadFeature(path.join(__dirname, './app.feature'));
defineFeature(feature, (test) => {
    let initiative = undefined;
    beforeEach(() => {
        initiative = undefined;
        azureDevOpsIntegrationInstance.init(iTestConfig);
    });
    test('Obtener una iniciativa', ({ given, when, then }) => {
        given('La conexion con Azure DevOps', () => { });
        when('Solicito una iniciativa', () => __awaiter(void 0, void 0, void 0, function* () {
            initiative =
                yield azureDevOpsIntegrationInstance.getInitiative('2633');
        }));
        then('Obtengo la referencia', () => {
            expect(initiative).toBeDefined();
        });
    });
});
