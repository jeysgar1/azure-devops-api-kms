[Azure DevOps Integration (Coding) - v0.0.3](../README.md) / [controllers/initiative.controller](../modules/controllers_initiative_controller.md) / InitiativeController

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

[controllers/initiative.controller.ts:47](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L47)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia encargada de gestionar todo al rededor de agilidad

#### Defined in

[controllers/initiative.controller.ts:26](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L26)

___

### epicController

• `Private` **epicController**: [`EpicController`](controllers_epic_controller.EpicController.md)

Instancia encargada de gestionar las épicas

#### Defined in

[controllers/initiative.controller.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L30)

___

### featureController

• `Private` **featureController**: [`FeatureController`](controllers_feature_controller.FeatureController.md)

Instancia encargada de gestionar las caracteristicas

#### Defined in

[controllers/initiative.controller.ts:34](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L34)

___

### taskController

• `Private` **taskController**: [`TaskController`](controllers_task_controller.TaskController.md)

Instancia encargada de gestionar las tareas

#### Defined in

[controllers/initiative.controller.ts:38](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L38)

___

### userStoryController

• `Private` **userStoryController**: [`UserStoryController`](controllers_userStory_controller.UserStoryController.md)

Instancia encargada de gestionar las historias de usuario

#### Defined in

[controllers/initiative.controller.ts:42](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L42)

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

[controllers/initiative.controller.ts:60](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/initiative.controller.ts#L60)
