var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { baseURI, getProjectsURI, query, } from '../models';
import { configInstance } from '../config/configInstance';
export class AzureDevOpsClient {
    createConnection() {
        var _a, _b, _c, _d;
        const instance = axios.create();
        instance.defaults.baseURL = baseURI((_b = (_a = configInstance()) === null || _a === void 0 ? void 0 : _a.getOrganization()) !== null && _b !== void 0 ? _b : '');
        instance.defaults.headers.common['Authorization'] =
            'Basic' + btoa((_d = '' + ':' + ((_c = configInstance()) === null || _c === void 0 ? void 0 : _c.getToken())) !== null && _d !== void 0 ? _d : '');
        instance.defaults.timeout = 100000;
        instance.interceptors.request.use((request) => {
            console.log(JSON.stringify(request, null, 2));
            return request;
        });
        instance.interceptors.response.use((response) => {
            console.log(JSON.stringify({
                status: response.status,
                statusText: response.statusText,
                data: response.data,
            }, null, 2));
            return response;
        });
        return instance;
    }
    getProjects() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createConnection().get(getProjectsURI());
            return (_a = response.data) === null || _a === void 0 ? void 0 : _a.value;
        });
    }
    getWorkItems(ids) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.createConnection().post('/_apis/wit/workitemsbatch?api-version=7.1-preview.1', { ids: ids, $expand: 'relations' });
            return (_a = response.data) === null || _a === void 0 ? void 0 : _a.value;
        });
    }
    wiql(id) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const wilqResponse = yield this.createConnection().post('/_apis/wit/wiql?api-version=7.1-preview.2', { query: query(id) });
            const items = [];
            (_b = (_a = wilqResponse === null || wilqResponse === void 0 ? void 0 : wilqResponse.data) === null || _a === void 0 ? void 0 : _a.workItems) === null || _b === void 0 ? void 0 : _b.forEach((item) => {
                if (item.id)
                    items.push(item.id);
            });
            return items;
        });
    }
}
