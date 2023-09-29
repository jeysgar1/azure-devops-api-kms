[Azure DevOps Integration (Coding) - v0.0.12](../README.md) / [controllers/task.controller](../modules/controllers_task_controller.md) / TaskController

# Class: TaskController

[controllers/task.controller](../modules/controllers_task_controller.md).TaskController

Controlador encargado de gestionar las tareas

## Table of contents

### Constructors

- [constructor](controllers_task_controller.TaskController.md#constructor)

### Properties

- [agileController](controllers_task_controller.TaskController.md#agilecontroller)

### Methods

- [get](controllers_task_controller.TaskController.md#get)

## Constructors

### constructor

• **new TaskController**()

Crea una instancia del controlador

#### Defined in

[controllers/task.controller.ts:21](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/controllers/task.controller.ts#L21)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia asociada a gestionar el acceso sobre Azure DevOps

#### Defined in

[controllers/task.controller.ts:16](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/controllers/task.controller.ts#L16)

## Methods

### get

▸ **get**(`workItems`): `undefined` \| [`Task`](models_agile_task.Task.md)[]

Permite obtener las tareas de un conjunto de historias de usuario

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `workItems` | `undefined` \| [`AzureWorkItem`](models_azureDevOps_azureWorkItem.AzureWorkItem.md)[] | Elementos de trabajo |

#### Returns

`undefined` \| [`Task`](models_agile_task.Task.md)[]

Lista de tareas

#### Defined in

[controllers/task.controller.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/f839fd0/src/controllers/task.controller.ts#L30)
