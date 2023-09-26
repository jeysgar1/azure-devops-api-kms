[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [controllers/initiative.controller](../modules/controllers_initiative_controller.md) / InitiativeController

# Class: InitiativeController

[controllers/initiative.controller](../modules/controllers_initiative_controller.md).InitiativeController

Controlador encargado de gestionar las iniciativas

## Table of contents

### Constructors

- [constructor](controllers_initiative_controller.InitiativeController.md#constructor)

### Properties

- [agileController](controllers_initiative_controller.InitiativeController.md#agilecontroller)
- [epicController](controllers_initiative_controller.InitiativeController.md#epiccontroller)
- [featureController](controllers_initiative_controller.InitiativeController.md#featurecontroller)
- [taskController](controllers_initiative_controller.InitiativeController.md#taskcontroller)
- [userStoryController](controllers_initiative_controller.InitiativeController.md#userstorycontroller)

### Methods

- [get](controllers_initiative_controller.InitiativeController.md#get)

## Constructors

### constructor

• **new InitiativeController**()

Crea una instancia del controlador

#### Defined in

[controllers/initiative.controller.ts:41](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L41)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia encargada de gestionar todo al rededor de agilidad

#### Defined in

[controllers/initiative.controller.ts:20](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L20)

___

### epicController

• `Private` **epicController**: [`EpicController`](controllers_epic_controller.EpicController.md)

Instancia encargada de gestionar las épicas

#### Defined in

[controllers/initiative.controller.ts:24](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L24)

___

### featureController

• `Private` **featureController**: [`FeatureController`](controllers_feature_controller.FeatureController.md)

Instancia encargada de gestionar las caracteristicas

#### Defined in

[controllers/initiative.controller.ts:28](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L28)

___

### taskController

• `Private` **taskController**: [`TaskController`](controllers_task_controller.TaskController.md)

Instancia encargada de gestionar las tareas

#### Defined in

[controllers/initiative.controller.ts:32](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L32)

___

### userStoryController

• `Private` **userStoryController**: [`UserStoryController`](controllers_userStory_controller.UserStoryController.md)

Instancia encargada de gestionar las historias de usuario

#### Defined in

[controllers/initiative.controller.ts:36](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L36)

## Methods

### get

▸ **get**(`idInitiative`): `Promise`<`undefined` \| [`Initiative`](models_agile_initiative.Initiative.md)\>

Permite obtener una iniciativa

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idInitiative` | `string` | Identificador de la iniciativa |

#### Returns

`Promise`<`undefined` \| [`Initiative`](models_agile_initiative.Initiative.md)\>

Iniciativa

#### Defined in

[controllers/initiative.controller.ts:54](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/initiative.controller.ts#L54)
