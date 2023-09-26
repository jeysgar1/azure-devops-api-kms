[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [models/agile/base](../modules/models_agile_base.md) / Base

# Class: Base

[models/agile/base](../modules/models_agile_base.md).Base

Datos comúnes en los elementos de trabajo

## Hierarchy

- **`Base`**

  ↳ [`Epic`](models_agile_epic.Epic.md)

  ↳ [`Feature`](models_agile_feature.Feature.md)

  ↳ [`Task`](models_agile_task.Task.md)

  ↳ [`UserStory`](models_agile_userStory.UserStory.md)

## Table of contents

### Constructors

- [constructor](models_agile_base.Base.md#constructor)

### Properties

- [description](models_agile_base.Base.md#description)
- [id](models_agile_base.Base.md#id)
- [name](models_agile_base.Base.md#name)
- [state](models_agile_base.Base.md#state)
- [url](models_agile_base.Base.md#url)

## Constructors

### constructor

• **new Base**(`azureWorkItem`)

Permite crear una instancia

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `azureWorkItem` | `undefined` \| `string` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md) | Elemento de trabajo |

#### Defined in

[models/agile/base.ts:38](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L38)

## Properties

### description

• `Optional` **description**: `string`

Descripción del elemento

#### Defined in

[models/agile/base.ts:16](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L16)

___

### id

• `Optional` **id**: `string`

Identificador del elemento

#### Defined in

[models/agile/base.ts:20](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L20)

___

### name

• **name**: `undefined` \| `string`

Nombre del elemento

#### Defined in

[models/agile/base.ts:24](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L24)

___

### state

• **state**: `undefined` \| [`WorkItemStates`](../enums/categories_workItemStates.WorkItemStates.md)

Estado del elemento

#### Defined in

[models/agile/base.ts:28](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L28)

___

### url

• `Optional` **url**: `string`

URL de acceso al elemento

#### Defined in

[models/agile/base.ts:32](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/base.ts#L32)
