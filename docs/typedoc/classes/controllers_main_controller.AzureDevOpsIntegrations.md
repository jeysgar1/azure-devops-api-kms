[Azure DevOps Integration (Coding) - v0.0.4](../README.md) / [controllers/main.controller](../modules/controllers_main_controller.md) / AzureDevOpsIntegrations

# Class: AzureDevOpsIntegrations

[controllers/main.controller](../modules/controllers_main_controller.md).AzureDevOpsIntegrations

Controlador principal encargado de exponer las funcionalidades del aplicativo

## Table of contents

### Constructors

- [constructor](controllers_main_controller.AzureDevOpsIntegrations.md#constructor)

### Properties

- [\_instance](controllers_main_controller.AzureDevOpsIntegrations.md#_instance)

### Methods

- [getInitiative](controllers_main_controller.AzureDevOpsIntegrations.md#getinitiative)
- [init](controllers_main_controller.AzureDevOpsIntegrations.md#init)
- [setProject](controllers_main_controller.AzureDevOpsIntegrations.md#setproject)
- [getInstance](controllers_main_controller.AzureDevOpsIntegrations.md#getinstance)

## Constructors

### constructor

• `Private` **new AzureDevOpsIntegrations**()

#### Defined in

[controllers/main.controller.ts:20](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/main.controller.ts#L20)

## Properties

### \_instance

▪ `Static` `Private` **\_instance**: [`AzureDevOpsIntegrations`](controllers_main_controller.AzureDevOpsIntegrations.md)

#### Defined in

[controllers/main.controller.ts:13](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/main.controller.ts#L13)

## Methods

### getInitiative

▸ **getInitiative**(`idInitiative`): `Promise`<`undefined` \| [`Initiative`](models_agile_initiative.Initiative.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `idInitiative` | `string` |

#### Returns

`Promise`<`undefined` \| [`Initiative`](models_agile_initiative.Initiative.md)\>

#### Defined in

[controllers/main.controller.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/main.controller.ts#L22)

___

### init

▸ **init**(`appConfig`): `void`

Permite inicializar la configuraci�n de la aplicaci�n

#### Parameters

| Name | Type |
| :------ | :------ |
| `appConfig` | [`iAppConfig`](../interfaces/config_iAppConfig.iAppConfig.md) |

#### Returns

`void`

#### Defined in

[controllers/main.controller.ts:38](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/main.controller.ts#L38)

___

### setProject

▸ **setProject**(`projectName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectName` | `string` |

#### Returns

`void`

#### Defined in

[controllers/main.controller.ts:42](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/main.controller.ts#L42)

___

### getInstance

▸ `Static` **getInstance**(): [`AzureDevOpsIntegrations`](controllers_main_controller.AzureDevOpsIntegrations.md)

#### Returns

[`AzureDevOpsIntegrations`](controllers_main_controller.AzureDevOpsIntegrations.md)

#### Defined in

[controllers/main.controller.ts:16](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/main.controller.ts#L16)
