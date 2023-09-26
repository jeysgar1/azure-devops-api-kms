[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [models/agile/initiative](../modules/models_agile_initiative.md) / Initiative

# Class: Initiative

[models/agile/initiative](../modules/models_agile_initiative.md).Initiative

Datos comúnes en los elementos de trabajo

**`See`**

(¿Características?)[]

## Table of contents

### Constructors

- [constructor](models_agile_initiative.Initiative.md#constructor)

### Properties

- [attachedFiles](models_agile_initiative.Initiative.md#attachedfiles)
- [id](models_agile_initiative.Initiative.md#id)
- [name](models_agile_initiative.Initiative.md#name)
- [userStories](models_agile_initiative.Initiative.md#userstories)

## Constructors

### constructor

• **new Initiative**(`idInitiative`, `userStories`, `docsReferenced`)

Permite crear una iniciativa

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idInitiative` | `string` | Identificador de la iniciativa |
| `userStories` | `undefined` \| [`UserStory`](models_agile_userStory.UserStory.md)[] | Historias de usuario |
| `docsReferenced` | `undefined` \| { `attachedFiles`: `string`[] ; `wiki`: `string`  } | Referencia a la documentación |

#### Defined in

[models/agile/initiative.ts:39](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/initiative.ts#L39)

## Properties

### attachedFiles

• **attachedFiles**: `undefined` \| `string`[]

Adjuntos asociados a una iniciativa

#### Defined in

[models/agile/initiative.ts:18](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/initiative.ts#L18)

___

### id

• **id**: `undefined` \| `string`

Identificador de una iniciativa

#### Defined in

[models/agile/initiative.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/initiative.ts#L22)

___

### name

• **name**: `undefined` \| `string`

Nombre de la iniciativa

#### Defined in

[models/agile/initiative.ts:26](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/initiative.ts#L26)

___

### userStories

• **userStories**: `undefined` \| [`UserStory`](models_agile_userStory.UserStory.md)[]

Historias de usuario asociadas a la iniciativa

#### Defined in

[models/agile/initiative.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/models/agile/initiative.ts#L30)
