[Azure DevOps Integration (Coding) - v0.0.12](../README.md) / [config/iAppConfig](../modules/config_iAppConfig.md) / iAppConfig

# Interface: iAppConfig

[config/iAppConfig](../modules/config_iAppConfig.md).iAppConfig

## Table of contents

### Properties

- [organizationName](config_iAppConfig.iAppConfig.md#organizationname)
- [states](config_iAppConfig.iAppConfig.md#states)
- [token](config_iAppConfig.iAppConfig.md#token)
- [types](config_iAppConfig.iAppConfig.md#types)

## Properties

### organizationName

• **organizationName**: `string`

Nombre de la organización

#### Defined in

[config/iAppConfig.ts:5](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/config/iAppConfig.ts#L5)

___

### states

• **states**: `Object`

Estados de la organización

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Cancelled` | `string`[] |
| `Doing` | `string`[] |
| `Done` | `string`[] |
| `ToDo` | `string`[] |

#### Defined in

[config/iAppConfig.ts:9](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/config/iAppConfig.ts#L9)

___

### token

• **token**: `string`

#### Defined in

[config/iAppConfig.ts:33](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/config/iAppConfig.ts#L33)

___

### types

• **types**: `Object`

Tipos de elementos de la organización

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Epic` | `string` |
| `Feature` | `string` |
| `Task` | `string` |
| `UserStory` | `string` |

#### Defined in

[config/iAppConfig.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/config/iAppConfig.ts#L22)
