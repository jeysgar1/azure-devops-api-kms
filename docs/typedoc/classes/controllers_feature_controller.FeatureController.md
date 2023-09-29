[Azure DevOps Integration (Coding) - v0.0.3](../README.md) / [controllers/feature.controller](../modules/controllers_feature_controller.md) / FeatureController

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

[controllers/feature.controller.ts:21](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/feature.controller.ts#L21)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia del controlador encargado de integrarse con Azure DevOps

#### Defined in

[controllers/feature.controller.ts:16](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/feature.controller.ts#L16)

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

[controllers/feature.controller.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/controllers/feature.controller.ts#L30)
