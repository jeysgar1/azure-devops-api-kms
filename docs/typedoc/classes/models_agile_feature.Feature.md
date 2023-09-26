[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [models/agile/feature](../modules/models_agile_feature.md) / Feature

# Class: Feature

[models/agile/feature](../modules/models_agile_feature.md).Feature

Característica

**`See`**

(¿Características?)[]

## Hierarchy

- [`Base`](models_agile_base.Base.md)

  ↳ **`Feature`**

## Table of contents

### Constructors

- [constructor](models_agile_feature.Feature.md#constructor)

### Properties

- [description](models_agile_feature.Feature.md#description)
- [epicId](models_agile_feature.Feature.md#epicid)
- [id](models_agile_feature.Feature.md#id)
- [name](models_agile_feature.Feature.md#name)
- [state](models_agile_feature.Feature.md#state)
- [url](models_agile_feature.Feature.md#url)
- [userStories](models_agile_feature.Feature.md#userstories)

### Methods

- [selectMyUserStories](models_agile_feature.Feature.md#selectmyuserstories)

## Constructors

### constructor

• **new Feature**(`azureWorkItem`)

Crea una característica

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `azureWorkItem` | `undefined` \| `string` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md) | Elemento de trabajo |

#### Overrides

[Base](models_agile_base.Base.md).[constructor](models_agile_base.Base.md#constructor)

#### Defined in

[models/agile/feature.ts:29](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/feature.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Descripción del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[description](models_agile_base.Base.md#description)

#### Defined in

[models/agile/base.ts:16](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L16)

___

### epicId

• **epicId**: `undefined` \| `string`

Identificador de la épica

#### Defined in

[models/agile/feature.ts:19](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/feature.ts#L19)

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

### userStories

• `Optional` **userStories**: [`UserStory`](models_agile_userStory.UserStory.md)[]

Historias de usuario asociadas a una historia de usuario

#### Defined in

[models/agile/feature.ts:23](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/feature.ts#L23)

## Methods

### selectMyUserStories

▸ **selectMyUserStories**(`userStories?`): `void`

Permite seleccionar las historias de usuario de una caracteristica

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `userStories?` | [`UserStory`](models_agile_userStory.UserStory.md)[] | Historias de usuario |

#### Returns

`void`

#### Defined in

[models/agile/feature.ts:41](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/feature.ts#L41)
