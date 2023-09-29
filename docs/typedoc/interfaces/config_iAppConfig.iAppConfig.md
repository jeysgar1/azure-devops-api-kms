[Azure DevOps Integration (Coding) - v0.0.3](../README.md) / [config/iAppConfig](../modules/config_iAppConfig.md) / iAppConfig

# Interface: iAppConfig

[config/iAppConfig](../modules/config_iAppConfig.md).iAppConfig

## Table of contents

### Properties

- [fields](config_iAppConfig.iAppConfig.md#fields)
- [organizationName](config_iAppConfig.iAppConfig.md#organizationname)
- [projectName](config_iAppConfig.iAppConfig.md#projectname)
- [states](config_iAppConfig.iAppConfig.md#states)
- [token](config_iAppConfig.iAppConfig.md#token)
- [types](config_iAppConfig.iAppConfig.md#types)

## Properties

### fields

• **fields**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `idInitiative` | `string` | Campo que define el identificador de una iniciativa |
| `team` | { `architect`: `string` ; `productOnwer`: `string` ; `proxy`: `string` ; `scrumMaster`: `string` ; `techLeader`: `string`  } | Equipo de trabajo |
| `team.architect` | `string` | Campo que define al Arquitecto de software |
| `team.productOnwer` | `string` | Campo que define al dueño del producto |
| `team.proxy` | `string` | Campo que define al analista de requerimientos |
| `team.scrumMaster` | `string` | Campo que define al especialista de scrum |
| `team.techLeader` | `string` | Campo que define al líder técnico |

#### Defined in

[config/iAppConfig.ts:2](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/config/iAppConfig.ts#L2)

___

### organizationName

• **organizationName**: `string`

Nombre de la organización

#### Defined in

[config/iAppConfig.ts:36](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/config/iAppConfig.ts#L36)

___

### projectName

• **projectName**: `string`

Nombre del proyecto

#### Defined in

[config/iAppConfig.ts:40](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/config/iAppConfig.ts#L40)

___

### states

• **states**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Cancelled` | `string`[] |
| `Doing` | `string`[] |
| `Done` | `string`[] |
| `ToDo` | `string`[] |

#### Defined in

[config/iAppConfig.ts:41](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/config/iAppConfig.ts#L41)

___

### token

• **token**: `string`

#### Defined in

[config/iAppConfig.ts:53](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/config/iAppConfig.ts#L53)

___

### types

• **types**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Epic` | `string` |
| `Feature` | `string` |
| `Task` | `string` |
| `UserStory` | `string` |

#### Defined in

[config/iAppConfig.ts:47](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/config/iAppConfig.ts#L47)
