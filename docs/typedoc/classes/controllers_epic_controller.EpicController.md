[Azure DevOps Integration (Coding) - v0.0.12](../README.md) / [controllers/epic.controller](../modules/controllers_epic_controller.md) / EpicController

# Class: EpicController

[controllers/epic.controller](../modules/controllers_epic_controller.md).EpicController

Controlador encargado de gestionar las épicas

## Table of contents

### Constructors

- [constructor](controllers_epic_controller.EpicController.md#constructor)

### Methods

- [get](controllers_epic_controller.EpicController.md#get)
- [getAttachedFiles](controllers_epic_controller.EpicController.md#getattachedfiles)

## Constructors

### constructor

• **new EpicController**()

## Methods

### get

▸ **get**(`workItems`): `undefined` \| [`Epic`](models_agile_epic.Epic.md)[]

Permite obtener las épicas asociadas a una iniciativa

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workItems` | `undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[] | Elementos de trabajo |

#### Returns

`undefined` \| [`Epic`](models_agile_epic.Epic.md)[]

Lista de epicas

#### Defined in

[controllers/epic.controller.ts:20](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/controllers/epic.controller.ts#L20)

___

### getAttachedFiles

▸ **getAttachedFiles**(`workItems`): `undefined` \| { `attachedFiles`: `string`[] ; `wiki`: `string`  }

Permite obtener los archivos adjuntos o el link del refinamiento

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workItems` | `undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[] | Elementos de trabajo |

#### Returns

`undefined` \| { `attachedFiles`: `string`[] ; `wiki`: `string`  }

Archivos adjuntos y wiki

#### Defined in

[controllers/epic.controller.ts:47](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/controllers/epic.controller.ts#L47)
