[Azure DevOps Integration (Coding) - v0.0.2](../README.md) / [models/azureDevOps/azureWorkItem](../modules/models_azureDevOps_azureWorkItem.md) / AzureWorkItem

# Class: AzureWorkItem

[models/azureDevOps/azureWorkItem](../modules/models_azureDevOps_azureWorkItem.md).AzureWorkItem

Elemento de trabajo transformado al consumir la API de Azure DevOps

## Table of contents

### Constructors

- [constructor](models_azureDevOps_azureWorkItem.AzureWorkItem.md#constructor)

### Properties

- [affectedSystems](models_azureDevOps_azureWorkItem.AzureWorkItem.md#affectedsystems)
- [architect](models_azureDevOps_azureWorkItem.AzureWorkItem.md#architect)
- [assignedTo](models_azureDevOps_azureWorkItem.AzureWorkItem.md#assignedto)
- [changedBy](models_azureDevOps_azureWorkItem.AzureWorkItem.md#changedby)
- [changedDate](models_azureDevOps_azureWorkItem.AzureWorkItem.md#changeddate)
- [childs](models_azureDevOps_azureWorkItem.AzureWorkItem.md#childs)
- [closedDate](models_azureDevOps_azureWorkItem.AzureWorkItem.md#closeddate)
- [createdBy](models_azureDevOps_azureWorkItem.AzureWorkItem.md#createdby)
- [createdDate](models_azureDevOps_azureWorkItem.AzureWorkItem.md#createddate)
- [description](models_azureDevOps_azureWorkItem.AzureWorkItem.md#description)
- [id](models_azureDevOps_azureWorkItem.AzureWorkItem.md#id)
- [idInitiative](models_azureDevOps_azureWorkItem.AzureWorkItem.md#idinitiative)
- [linkWiki](models_azureDevOps_azureWorkItem.AzureWorkItem.md#linkwiki)
- [links](models_azureDevOps_azureWorkItem.AzureWorkItem.md#links)
- [parents](models_azureDevOps_azureWorkItem.AzureWorkItem.md#parents)
- [productOwner](models_azureDevOps_azureWorkItem.AzureWorkItem.md#productowner)
- [project](models_azureDevOps_azureWorkItem.AzureWorkItem.md#project)
- [proxy](models_azureDevOps_azureWorkItem.AzureWorkItem.md#proxy)
- [releaseDate](models_azureDevOps_azureWorkItem.AzureWorkItem.md#releasedate)
- [scrumMaster](models_azureDevOps_azureWorkItem.AzureWorkItem.md#scrummaster)
- [state](models_azureDevOps_azureWorkItem.AzureWorkItem.md#state)
- [teamProject](models_azureDevOps_azureWorkItem.AzureWorkItem.md#teamproject)
- [techLeader](models_azureDevOps_azureWorkItem.AzureWorkItem.md#techleader)
- [title](models_azureDevOps_azureWorkItem.AzureWorkItem.md#title)
- [type](models_azureDevOps_azureWorkItem.AzureWorkItem.md#type)
- [url](models_azureDevOps_azureWorkItem.AzureWorkItem.md#url)

## Constructors

### constructor

• **new AzureWorkItem**(`workItem`)

Crea una instancia del elemento de trabajo transformado

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workItem` | [`AzureGetWorkItemResponse`](models_azureDevOps_getWorkItems_azureGetWorkItemResponse.AzureGetWorkItemResponse.md) | Elemento de trabajo |

#### Defined in

[models/azureDevOps/azureWorkItem.ts:78](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L78)

## Properties

### affectedSystems

• **affectedSystems**: `undefined` \| `string`[]

#### Defined in

[models/azureDevOps/azureWorkItem.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L22)

___

### architect

• **architect**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:24](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L24)

___

### assignedTo

• **assignedTo**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:26](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L26)

___

### changedBy

• **changedBy**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:28](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L28)

___

### changedDate

• **changedDate**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L30)

___

### childs

• **childs**: `undefined` \| `string`[]

#### Defined in

[models/azureDevOps/azureWorkItem.ts:32](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L32)

___

### closedDate

• **closedDate**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:34](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L34)

___

### createdBy

• **createdBy**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:38](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L38)

___

### createdDate

• **createdDate**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:36](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L36)

___

### description

• **description**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:40](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L40)

___

### id

• **id**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:42](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L42)

___

### idInitiative

• **idInitiative**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:44](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L44)

___

### linkWiki

• **linkWiki**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:48](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L48)

___

### links

• **links**: `undefined` \| `string`[]

#### Defined in

[models/azureDevOps/azureWorkItem.ts:46](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L46)

___

### parents

• **parents**: `undefined` \| `string`[]

#### Defined in

[models/azureDevOps/azureWorkItem.ts:50](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L50)

___

### productOwner

• **productOwner**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:54](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L54)

___

### project

• **project**: `undefined` \| [`Project`](models_agile_project.Project.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:52](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L52)

___

### proxy

• **proxy**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:56](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L56)

___

### releaseDate

• **releaseDate**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:58](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L58)

___

### scrumMaster

• **scrumMaster**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:60](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L60)

___

### state

• **state**: `undefined` \| [`WorkItemStates`](../enums/categories_workItemStates.WorkItemStates.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:62](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L62)

___

### teamProject

• **teamProject**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:64](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L64)

___

### techLeader

• **techLeader**: `undefined` \| [`Person`](models_agile_person.Person.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:66](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L66)

___

### title

• **title**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:68](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L68)

___

### type

• **type**: `undefined` \| [`WorkItemTypes`](../enums/categories_workItemTypes.WorkItemTypes.md)

#### Defined in

[models/azureDevOps/azureWorkItem.ts:70](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L70)

___

### url

• **url**: `undefined` \| `string`

#### Defined in

[models/azureDevOps/azureWorkItem.ts:72](https://github.com/jeysgar1/azure-devops-api-kms/blob/c1ba83d/src/models/azureDevOps/azureWorkItem.ts#L72)
