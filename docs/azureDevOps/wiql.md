<h1>Work Item Query Language (WIQL)</h1>

<b>Work Item Query Language (WIQL)</b> es un <b>lenguaje de consultas</b> sobre los <b>elementos de trabajo</b> creados dentro de un <b>proyecto</b> de una <b>organización</b> en <b>Azure DevOps</b>. 

La sintaxis de <b>WIQL</b> es similar a una sintaxis <b>SQL</b>. En ella se deben definir los <b>campos requeridos o necesarios en la respuesta</b>, la <b>fuente de donde se consultarán</b>, y los <b>filtros que apliquen según el objetivo de la consulta</b>. 

<code>
SELECT
    [System.Id],
    [System.AssignedTo],
    [System.State],
    [System.Title],
    [System.Tags]
FROM workitems
WHERE
    [System.TeamProject] = 'Design Agile'
    AND [System.WorkItemType] = 'User Story'
    AND [System.State] = 'Active'
ORDER BY [System.ChangedDate] DESC
ASOF '02-11-2020'
</code>