[Azure DevOps Integration (Coding) - v0.0.12](../README.md) / [models/agile/initiative](../modules/models_agile_initiative.md) / Initiative

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

[models/agile/initiative.ts:38](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/models/agile/initiative.ts#L38)

## Properties

### attachedFiles

• **attachedFiles**: `undefined` \| `string`[]

Adjuntos asociados a una iniciativa

#### Defined in

[models/agile/initiative.ts:17](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/models/agile/initiative.ts#L17)

___

### id

• **id**: `undefined` \| `string`

Identificador de una iniciativa

#### Defined in

[models/agile/initiative.ts:21](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/models/agile/initiative.ts#L21)

___

### name

• **name**: `undefined` \| `string`

Nombre de la iniciativa

#### Defined in

[models/agile/initiative.ts:25](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/models/agile/initiative.ts#L25)

___

### userStories

• **userStories**: `undefined` \| [`UserStory`](models_agile_userStory.UserStory.md)[]

Historias de usuario asociadas a la iniciativa

#### Defined in

[models/agile/initiative.ts:29](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/models/agile/initiative.ts#L29)
