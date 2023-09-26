[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [controllers/userStory.controller](../modules/controllers_userStory_controller.md) / UserStoryController

# Class: UserStoryController

[controllers/userStory.controller](../modules/controllers_userStory_controller.md).UserStoryController

Controlador encargado de gestionar las historias de usuario

## Table of contents

### Constructors

- [constructor](controllers_userStory_controller.UserStoryController.md#constructor)

### Properties

- [agileController](controllers_userStory_controller.UserStoryController.md#agilecontroller)
- [featureController](controllers_userStory_controller.UserStoryController.md#featurecontroller)

### Methods

- [get](controllers_userStory_controller.UserStoryController.md#get)

## Constructors

### constructor

• **new UserStoryController**()

Crea una instancia del controlador

#### Defined in

[controllers/userStory.controller.ts:27](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/userStory.controller.ts#L27)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia encargada de gestionar el acceso sobre Azure DevOps

#### Defined in

[controllers/userStory.controller.ts:18](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/userStory.controller.ts#L18)

___

### featureController

• `Private` **featureController**: [`FeatureController`](controllers_feature_controller.FeatureController.md)

Instancia encargada de gestionar las características

#### Defined in

[controllers/userStory.controller.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/userStory.controller.ts#L22)

## Methods

### get

▸ **get**(`workItems`): `undefined` \| [`UserStory`](models_agile_userStory.UserStory.md)[]

Permite obtener las historias de usuario de un conjunto de características

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workItems` | `undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[] | Elementos de trabajo |

#### Returns

`undefined` \| [`UserStory`](models_agile_userStory.UserStory.md)[]

Lista de historias de usuario

#### Defined in

[controllers/userStory.controller.ts:37](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/userStory.controller.ts#L37)
