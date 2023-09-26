[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [controllers/feature.controller](../modules/controllers_feature_controller.md) / FeatureController

# Class: FeatureController

[controllers/feature.controller](../modules/controllers_feature_controller.md).FeatureController

Controlador encargado de gestionar las características

## Table of contents

### Constructors

- [constructor](controllers_feature_controller.FeatureController.md#constructor)

### Properties

- [agileController](controllers_feature_controller.FeatureController.md#agilecontroller)

### Methods

- [get](controllers_feature_controller.FeatureController.md#get)

## Constructors

### constructor

• **new FeatureController**()

Crea una instancia del controlador

#### Defined in

[controllers/feature.controller.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/feature.controller.ts#L22)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia del controlador encargado de integrarse con Azure DevOps

#### Defined in

[controllers/feature.controller.ts:17](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/feature.controller.ts#L17)

## Methods

### get

▸ **get**(`workItems`): `undefined` \| [`Feature`](models_agile_feature.Feature.md)[]

Permite obtener las características de un conjunto de épicas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workItems` | `undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[] | Elementos de trabajo |

#### Returns

`undefined` \| [`Feature`](models_agile_feature.Feature.md)[]

Lista de características

#### Defined in

[controllers/feature.controller.ts:31](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/feature.controller.ts#L31)
