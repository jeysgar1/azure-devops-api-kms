[Azure DevOps Integration (Coding) - v0.0.3](../README.md) / [services/azure.devops.client](../modules/services_azure_devops_client.md) / AzureDevOpsClient

# Class: AzureDevOpsClient

[services/azure.devops.client](../modules/services_azure_devops_client.md).AzureDevOpsClient

## Table of contents

### Constructors

- [constructor](services_azure_devops_client.AzureDevOpsClient.md#constructor)

### Methods

- [createConnection](services_azure_devops_client.AzureDevOpsClient.md#createconnection)
- [getProjects](services_azure_devops_client.AzureDevOpsClient.md#getprojects)
- [getWorkItems](services_azure_devops_client.AzureDevOpsClient.md#getworkitems)
- [wiql](services_azure_devops_client.AzureDevOpsClient.md#wiql)

## Constructors

### constructor

• **new AzureDevOpsClient**()

## Methods

### createConnection

▸ `Private` **createConnection**(): `AxiosInstance`

#### Returns

`AxiosInstance`

#### Defined in

[services/azure.devops.client.ts:19](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/services/azure.devops.client.ts#L19)

___

### getProjects

▸ **getProjects**(): `Promise`<`undefined` \| [`AzureGetProjectsItemResponse`](models_azureDevOps_getProjects_azureGetProjectsItemResponse.AzureGetProjectsItemResponse.md)[]\>

#### Returns

`Promise`<`undefined` \| [`AzureGetProjectsItemResponse`](models_azureDevOps_getProjects_azureGetProjectsItemResponse.AzureGetProjectsItemResponse.md)[]\>

#### Defined in

[services/azure.devops.client.ts:50](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/services/azure.devops.client.ts#L50)

___

### getWorkItems

▸ **getWorkItems**(`ids`): `Promise`<`undefined` \| [`AzureGetWorkItemResponse`](models_azureDevOps_getWorkItems_azureGetWorkItemResponse.AzureGetWorkItemResponse.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ids` | `string`[] |

#### Returns

`Promise`<`undefined` \| [`AzureGetWorkItemResponse`](models_azureDevOps_getWorkItems_azureGetWorkItemResponse.AzureGetWorkItemResponse.md)[]\>

#### Defined in

[services/azure.devops.client.ts:58](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/services/azure.devops.client.ts#L58)

___

### wiql

▸ **wiql**(`id`): `Promise`<`undefined` \| `string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<`undefined` \| `string`[]\>

#### Defined in

[services/azure.devops.client.ts:68](https://github.com/jeysgar1/azure-devops-api-kms/blob/71b51ad/src/services/azure.devops.client.ts#L68)
