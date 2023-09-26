"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const config_1 = require("../../../config");
function query(numIniciativa, Epic, Feature, UserStory, Task) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    if (Epic === void 0) { Epic = (_b = (_a = (0, config_1.configInstance)()) === null || _a === void 0 ? void 0 : _a.getTypes()) === null || _b === void 0 ? void 0 : _b.Epic; }
    if (Feature === void 0) { Feature = (_d = (_c = (0, config_1.configInstance)()) === null || _c === void 0 ? void 0 : _c.getTypes()) === null || _d === void 0 ? void 0 : _d.Feature; }
    if (UserStory === void 0) { UserStory = (_f = (_e = (0, config_1.configInstance)()) === null || _e === void 0 ? void 0 : _e.getTypes()) === null || _f === void 0 ? void 0 : _f.UserStory; }
    if (Task === void 0) { Task = (_h = (_g = (0, config_1.configInstance)()) === null || _g === void 0 ? void 0 : _g.getTypes()) === null || _h === void 0 ? void 0 : _h.Task; }
    return `SELECT [System.Id], [System.AssignedTo], [System.State], [System.Title], [System.WorkItemType] FROM workitems WHERE ([System.WorkItemType] = '${Epic}' OR [System.WorkItemType] = '${Feature}' OR [System.WorkItemType] = '${UserStory}' OR [System.WorkItemType] = '${Task}') AND [Custom.NumeroIniciativa] = '${numIniciativa}' order by [System.CreatedDate] desc`;
}
exports.query = query;
