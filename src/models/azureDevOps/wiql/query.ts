import { configInstance } from '../../../config';

export function query(
    numIniciativa: string,
    Epic = configInstance()?.getTypes()?.Epic,
    Feature = configInstance()?.getTypes()?.Feature,
    UserStory = configInstance()?.getTypes()?.UserStory,
    Task = configInstance()?.getTypes()?.Task,
) {
    return `SELECT [System.Id], [System.AssignedTo], [System.State], [System.Title], [System.WorkItemType] FROM workitems WHERE ([System.WorkItemType] = '${Epic}' OR [System.WorkItemType] = '${Feature}' OR [System.WorkItemType] = '${UserStory}' OR [System.WorkItemType] = '${Task}') AND [Custom.NumeroIniciativa] = '${numIniciativa}' order by [System.CreatedDate] desc`;
}
