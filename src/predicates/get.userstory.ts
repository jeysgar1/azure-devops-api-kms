import {configInstance} from "../config/configInstance";
import { AzureWorkItem, UserStory } from "../models";

/**
 * Permite obtener una Historia de usuario
 * @param {AzureWorkItem} azureWorkItem - Elemento de trabajo
 * @returns {UserStory | undefined} Historia de usuario
 */
export function getUserStory(azureWorkItem:AzureWorkItem) : UserStory | undefined {
    if(azureWorkItem.type === configInstance()?.getTypes()?.UserStory) return new UserStory(azureWorkItem);
    return undefined;
}