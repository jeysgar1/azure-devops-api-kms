"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jest_cucumber_1 = require("jest-cucumber");
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("../index"));
const iTestConfig_1 = __importDefault(require("./iTestConfig"));
const feature = (0, jest_cucumber_1.loadFeature)(path_1.default.join(__dirname, './app.feature'));
(0, jest_cucumber_1.defineFeature)(feature, (test) => {
    let initiative = undefined;
    beforeEach(() => {
        initiative = undefined;
        index_1.default.init(iTestConfig_1.default);
    });
    test('Obtener una iniciativa', ({ given, when, then }) => {
        given('La conexion con Azure DevOps', () => {
        });
        when('Solicito una iniciativa', () => __awaiter(void 0, void 0, void 0, function* () {
            initiative = yield index_1.default.getInitiative('2633');
        }));
        then('Obtengo la referencia', () => {
            expect(initiative).toBeDefined();
        });
    });
});
