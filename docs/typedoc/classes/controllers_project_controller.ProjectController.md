[Azure DevOps Integration (Coding) - v0.0.1](../README.md) / [controllers/project.controller](../modules/controllers_project_controller.md) / ProjectController

# Class: ProjectController

[controllers/project.controller](../modules/controllers_project_controller.md).ProjectController

Controlador encargado de gestionar los proyectos

## Table of contents

### Constructors

- [constructor](controllers_project_controller.ProjectController.md#constructor)

### Properties

- [agileController](controllers_project_controller.ProjectController.md#agilecontroller)

### Methods

- [get](controllers_project_controller.ProjectController.md#get)

## Constructors

### constructor

• **new ProjectController**()

Crea una instancia del controlador

#### Defined in

[controllers/project.controller.ts:22](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/project.controller.ts#L22)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia asociada a la gestión de acceso en Azure DevOps

#### Defined in

[controllers/project.controller.ts:17](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/project.controller.ts#L17)

## Methods

### get

▸ **get**(): `Promise`<`undefined` \| [`Project`](models_agile_project.Project.md)[]\>

Permite obtener los proyectos de una organización creados en Azure DevOps

#### Returns

`Promise`<`undefined` \| [`Project`](models_agile_project.Project.md)[]\>

Lista de proyectos

#### Defined in

[controllers/project.controller.ts:30](https://github.com/jeysgar1/azure-devops-api-kms/blob/9e6388c/src/controllers/project.controller.ts#L30)
