[Azure DevOps Integration (Coding) - v0.0.4](../README.md) / [models/agile/epic](../modules/models_agile_epic.md) / Epic

# Class: Epic

[models/agile/epic](../modules/models_agile_epic.md).Epic

Épica

**`See`**

[¿Épicas?]()

## Hierarchy

- [`Base`](models_agile_base.Base.md)

  ↳ **`Epic`**

## Table of contents

### Constructors

- [constructor](models_agile_epic.Epic.md#constructor)

### Properties

- [description](models_agile_epic.Epic.md#description)
- [features](models_agile_epic.Epic.md#features)
- [id](models_agile_epic.Epic.md#id)
- [name](models_agile_epic.Epic.md#name)
- [state](models_agile_epic.Epic.md#state)
- [url](models_agile_epic.Epic.md#url)

### Methods

- [selectMyFeatures](models_agile_epic.Epic.md#selectmyfeatures)

## Constructors

### constructor

• **new Epic**(`azureWorkItem`)

Crea una instancia de una épica

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `azureWorkItem` | `undefined` \| `string` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md) | Elemento de trabajo |

#### Overrides

[Base](models_agile_base.Base.md).[constructor](models_agile_base.Base.md#constructor)

#### Defined in

[models/agile/epic.ts:24](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/epic.ts#L24)

## Properties

### description

• `Optional` **description**: `string`

Descripción del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[description](models_agile_base.Base.md#description)

#### Defined in

[models/agile/base.ts:15](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/base.ts#L15)

___

### features

• `Optional` **features**: [`Feature`](models_agile_feature.Feature.md)[]

Características que pertenecen a una épica

#### Defined in

[models/agile/epic.ts:18](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/epic.ts#L18)

___

### id

• `Optional` **id**: `string`

Identificador del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[id](models_agile_base.Base.md#id)

#### Defined in

[models/agile/base.ts:19](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/base.ts#L19)

___

### name

• **name**: `undefined` \| `string`

Nombre del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[name](models_agile_base.Base.md#name)

#### Defined in

[models/agile/base.ts:23](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/base.ts#L23)

___

### state

• **state**: `undefined` \| [`WorkItemStates`](../enums/categories_workItemStates.WorkItemStates.md)

Estado del elemento

#### Inherited from

[Base](models_agile_base.Base.md).[state](models_agile_base.Base.md#state)

#### Defined in

[models/agile/base.ts:27](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/base.ts#L27)

___

### url

• `Optional` **url**: `string`

URL de acceso al elemento

#### Inherited from

[Base](models_agile_base.Base.md).[url](models_agile_base.Base.md#url)

#### Defined in

[models/agile/base.ts:31](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/base.ts#L31)

## Methods

### selectMyFeatures

▸ **selectMyFeatures**(`features?`): `void`

Permite filtrar las características de una épica

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `features?` | [`Feature`](models_agile_feature.Feature.md)[] | Características |

#### Returns

`void`

#### Defined in

[models/agile/epic.ts:33](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/models/agile/epic.ts#L33)
