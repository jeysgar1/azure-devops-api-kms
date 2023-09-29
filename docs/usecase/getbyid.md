<h1>Consultar por un identificador común</h1>

<p>Bajo el supuesto de que todos los elementos de trabajo de todos los proyectos creados dentro de una organización en <b>Azure DevOps</b> tienen una misma propiedad o atributo y gran parte de ellos tiene un valor a este, como también, que están relacionados los elementos de trabajo como <b>padre-hijo</b>, se implementó este caso de uso en el cuál a partir de un valor dado se consulta históricamente sobre un campo personalizado todos aquellos elementos de trabajo que esten asociados y se transforma a <b>conocimiento explítico</b> capturando aquellos datos que proveen <b>información</b> para la <b>organización</b></p>

1. Importar la librería <code>azure-devops-api-kms</code> 

```javascript
const {AzureDevOpsIntegrations} = require("azure-devops-api-kms")
```

2. Configurar la aplicación :  La aplicación es configurada a partir del <b>nombre de la organización</b>,  los posibles valores de los estados <b>ToDo</b>, <b>Doing</b>, <b>Done</b> & <b>Cancelled</b>, como también, los posibles valores de los tipos de los elementos <b>Epic</b>, <b>Feature</b>, <b>User Story</b> & <b>Task</b>. Todo lo anterior relacionado a la definición y creación generada para los proyectos y la organización en <b>Azure DevOps</b> junto al token de acceso personal.  

```javascript
const config = { 
    organizationName: 'jeodev',
    states: {
        ToDo: ['New'],
        Doing: ['In Progess', 'En progreso'],
        Done: ['Completado', 'Done'],
        Cancelled: ['Cancelled', 'Cancelado'],
    },
    token: '2apifvui5npcij44lhhom4rsesm2j23zxygn5dzbtt4xgcug4jlq',
    types: {
        Epic: 'Epic',
        Feature: 'Feature',
        Task: 'Task',
        UserStory: 'Product Backlog Item',
    }};
```

3. Instanciar la librería. 

```javascript
const azureDevOpsIntegrationInstance = new AzureDevOpsIntegrations(config);
```

4. Consultar un identificador en común

```javascript
azureDevOpsIntegrationInstance.getById('2633')
```