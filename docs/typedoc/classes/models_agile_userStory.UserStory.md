[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [models/agile/userStory](../modules/models_agile_userStory.md) / UserStory

# Class: UserStory

[models/agile/userStory](../modules/models_agile_userStory.md).UserStory

Datos comúnes en los elementos de trabajo

**`See`**

(¿Historias de usuario?)[]

## Hierarchy

- [`Base`](models_agile_base.Base.md)

  ↳ **`UserStory`**

## Table of contents

### Constructors

- [constructor](models_agile_userStory.UserStory.md#constructor)

### Properties

- [description](models_agile_userStory.UserStory.md#description)
- [feature](models_agile_userStory.UserStory.md#feature)
- [id](models_agile_userStory.UserStory.md#id)
- [name](models_agile_userStory.UserStory.md#name)
- [project](models_agile_userStory.UserStory.md#project)
- [refinement](models_agile_userStory.UserStory.md#refinement)
- [state](models_agile_userStory.UserStory.md#state)
- [tasks](models_agile_userStory.UserStory.md#tasks)
- [team](models_agile_userStory.UserStory.md#team)
- [url](models_agile_userStory.UserStory.md#url)

### Methods

- [selectMyFeature](models_agile_userStory.UserStory.md#selectmyfeature)
- [selectMyTasks](models_agile_userStory.UserStory.md#selectmytasks)

## Constructors

### constructor

• **new UserStory**(`azureWorkItem`)

Crea una historia de usuario

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `azureWorkItem` | `undefined` \| `string` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md) | Elemento de trabajo |

#### Overrides

[Base](models_agile_base.Base.md).[constructor](models_agile_base.Base.md#constructor)

#### Defined in

[models/agile/userStory.ts:44](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L44)

## Properties

### description

• `Optional` **description**: `string`

Descripción del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[description](models_agile_base.Base.md#description)

#### Defined in

[models/agile/base.ts:15](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/base.ts#L15)

___

### feature

• `Optional` **feature**: [`Feature`](models_agile_feature.Feature.md)

Característica asociada a una historia de usuario

#### Defined in

[models/agile/userStory.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L22)

___

### id

• `Optional` **id**: `string`

Identificador del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[id](models_agile_base.Base.md#id)

#### Defined in

[models/agile/base.ts:19](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/base.ts#L19)

___

### name

• **name**: `undefined` \| `string`

Nombre del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[name](models_agile_base.Base.md#name)

#### Defined in

[models/agile/base.ts:23](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/base.ts#L23)

___

### project

• `Optional` **project**: [`Project`](models_agile_project.Project.md)

Proyecto asignado a la historia de usuario

#### Defined in

[models/agile/userStory.ts:26](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L26)

___

### refinement

• `Optional` **refinement**: `string`

Refinamiento de la historia de usuario

#### Defined in

[models/agile/userStory.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L30)

___

### state

• **state**: `undefined` \| [`WorkItemStates`](../enums/categories_workItemStates.WorkItemStates.md)

Estado del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[state](models_agile_base.Base.md#state)

#### Defined in

[models/agile/base.ts:27](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/base.ts#L27)

___

### tasks

• `Optional` **tasks**: [`Task`](models_agile_task.Task.md)[]

Tareas de una historia de usuario

#### Defined in

[models/agile/userStory.ts:38](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L38)

___

### team

• `Optional` **team**: [`Team`](models_agile_team.Team.md)

Equipo de trabajo asignado a la historia de usuario

#### Defined in

[models/agile/userStory.ts:34](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L34)

___

### url

• `Optional` **url**: `string`

URL de acceso al elemento

#### Inherited from

[Base](models_agile_base.Base.md).[url](models_agile_base.Base.md#url)

#### Defined in

[models/agile/base.ts:31](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/base.ts#L31)

## Methods

### selectMyFeature

▸ **selectMyFeature**(`features?`): `void`

Permite asignar la épica y la caracteristica asociada a una historia de usuario

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `features?` | [`Feature`](models_agile_feature.Feature.md)[] | Características |

#### Returns

`void`

#### Defined in

[models/agile/userStory.ts:63](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L63)

___

### selectMyTasks

▸ **selectMyTasks**(`tasks?`): `void`

Permite filtrar las características de una épica

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks?` | [`Task`](models_agile_task.Task.md)[] |

#### Returns

`void`

#### Defined in

[models/agile/userStory.ts:75](https://github.com/jeysgar1/azure-devops-api-kms/blob/28b9ee1/src/models/agile/userStory.ts#L75)
