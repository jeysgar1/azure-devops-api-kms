[Azure DevOps Integration (Coding) - v0.0.3](../README.md) / [controllers/agile.controller](../modules/controllers_agile_controller.md) / AgileController

# Class: AgileController

[controllers/agile.controller](../modules/controllers_agile_controller.md).AgileController

Controlador encargado de establecer una comunicación con el cliente API de integración
con Azure DevOps

## Table of contents

### Constructors

- [constructor](controllers_agile_controller.AgileController.md#constructor)

### Properties

- [azureClient](controllers_agile_controller.AgileController.md#azureclient)

### Methods

- [getByInitiative](controllers_agile_controller.AgileController.md#getbyinitiative)
- [getChilds](controllers_agile_controller.AgileController.md#getchilds)
- [getProjects](controllers_agile_controller.AgileController.md#getprojects)

## Constructors

### constructor

• **new AgileController**()

## Properties

### azureClient

• `Protected` **azureClient**: [`AzureDevOpsClient`](services_azure_devops_client.AzureDevOpsClient.md)

#### Defined in

[controllers/agile.controller.ts:18](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/agile.controller.ts#L18)

## Methods

### getByInitiative

▸ **getByInitiative**(`id`): `Promise`<`undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[]\>

Permite obtener los elementos de trabajo a partir de un identificador de una iniciativa

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Identificador de la iniciativa |

#### Returns

`Promise`<`undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[]\>

- Lista de elementos de trabajo asociados a una iniciativa

#### Defined in

[controllers/agile.controller.ts:26](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/agile.controller.ts#L26)

___

### getChilds

▸ **getChilds**(`ids`): `Promise`<[`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`<[`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[]\>

#### Defined in

[controllers/agile.controller.ts:37](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/agile.controller.ts#L37)

___

### getProjects

▸ **getProjects**(): `Promise`<`undefined` \| [`AzureGetProjectsItemResponse`](models_azureDevOps_getProjects_azureGetProjectsItemResponse.AzureGetProjectsItemResponse.md)[]\>

Permite obtener los proyectos creados en Azure DevOps para una organización

#### Returns

`Promise`<`undefined` \| [`AzureGetProjectsItemResponse`](models_azureDevOps_getProjects_azureGetProjectsItemResponse.AzureGetProjectsItemResponse.md)[]\>

- Proyectos creados en una organización

#### Defined in

[controllers/agile.controller.ts:59](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/agile.controller.ts#L59)
