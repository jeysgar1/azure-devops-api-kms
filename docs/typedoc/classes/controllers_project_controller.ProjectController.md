[Azure DevOps Integration (Coding) - v0.0.4](../README.md) / [controllers/project.controller](../modules/controllers_project_controller.md) / ProjectController

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

[controllers/project.controller.ts:20](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/project.controller.ts#L20)

## Properties

### agileController

• `Private` **agileController**: [`AgileController`](controllers_agile_controller.AgileController.md)

Instancia asociada a la gestión de acceso en Azure DevOps

#### Defined in

[controllers/project.controller.ts:15](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/project.controller.ts#L15)

## Methods

### get

▸ **get**(): `Promise`<`undefined` \| [`Project`](models_agile_project.Project.md)[]\>

Permite obtener los proyectos de una organización creados en Azure DevOps

#### Returns

`Promise`<`undefined` \| [`Project`](models_agile_project.Project.md)[]\>

Lista de proyectos

#### Defined in

[controllers/project.controller.ts:28](https://github.com/jeysgar1/azure-devops-api-kms/blob/65a7ab4/src/controllers/project.controller.ts#L28)
