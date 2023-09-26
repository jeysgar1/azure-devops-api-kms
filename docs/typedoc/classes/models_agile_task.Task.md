[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [models/agile/task](../modules/models_agile_task.md) / Task

# Class: Task

[models/agile/task](../modules/models_agile_task.md).Task

Datos comúnes en los elementos de trabajo

**`See`**

(¿Tareas?)[]

## Hierarchy

- [`Base`](models_agile_base.Base.md)

  ↳ **`Task`**

## Table of contents

### Constructors

- [constructor](models_agile_task.Task.md#constructor)

### Properties

- [assignedTo](models_agile_task.Task.md#assignedto)
- [description](models_agile_task.Task.md#description)
- [id](models_agile_task.Task.md#id)
- [name](models_agile_task.Task.md#name)
- [state](models_agile_task.Task.md#state)
- [url](models_agile_task.Task.md#url)
- [userStoryId](models_agile_task.Task.md#userstoryid)

## Constructors

### constructor

• **new Task**(`azureWorkItem`)

Permite crear una tarea

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `azureWorkItem` | `undefined` \| `string` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md) | Elemento de trabajo |

#### Overrides

[Base](models_agile_base.Base.md).[constructor](models_agile_base.Base.md#constructor)

#### Defined in

[models/agile/task.ts:36](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/task.ts#L36)

## Properties

### assignedTo

• **assignedTo**: `undefined` \| [`Person`](models_agile_person.Person.md)

Persona asignada a ejecutar la tarea

**`Date`**

9/8/2023 - 4:43:14 PM

#### Defined in

[models/agile/task.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/task.ts#L22)

___

### description

• `Optional` **description**: `string`

Descripción del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[description](models_agile_base.Base.md#description)

#### Defined in

[models/agile/base.ts:16](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L16)

___

### id

• `Optional` **id**: `string`

Identificador del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[id](models_agile_base.Base.md#id)

#### Defined in

[models/agile/base.ts:20](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L20)

___

### name

• **name**: `undefined` \| `string`

Nombre del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[name](models_agile_base.Base.md#name)

#### Defined in

[models/agile/base.ts:24](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L24)

___

### state

• **state**: `undefined` \| [`WorkItemStates`](../enums/categories_workItemStates.WorkItemStates.md)

Estado del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[state](models_agile_base.Base.md#state)

#### Defined in

[models/agile/base.ts:28](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L28)

___

### url

• `Optional` **url**: `string`

URL de acceso al elemento

#### Inherited from

[Base](models_agile_base.Base.md).[url](models_agile_base.Base.md#url)

#### Defined in

[models/agile/base.ts:32](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L32)

___

### userStoryId

• **userStoryId**: `undefined` \| `string`

Identificador de la historia de usuario

**`Date`**

9/16/2023 - 2:00:17 PM

#### Defined in

[models/agile/task.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/task.ts#L30)
