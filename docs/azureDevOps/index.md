

<h1>Azure DevOps</h1>

<b>Azure DevOps</b> es una plataforma <b>SaaS</b> (<b>Software as a Service</b>) que provee <b>Microsoft</b> dentro de la nube de <b>Azure</b> en la cuál un equipo de trabajo puede apoyarse para optimizar y automatizar el ciclo de vida de desarrollo de un aplicativo a partir de <b>teorías</b>, <b>recomendaciones</b> y <b>buenas prácticas</b> como <b>DevOps</b>, <b>SCRUM</b>, <b>KANBAN</b>, <b>LEAN</b>, entre otras. 

En <b>Azure DevOps</b>, el principal componente es la <b>Organización</b>. La <b>Organización</b> representa la compañía, la cuál define uno o varios <b>Proyectos</b>. A criterio de cada compañia, un <b>Proyecto</b> puede representar a un <b>equipo</b>, más de un equipo o a una <b>aplicación</b>. <b>Azure DevOps</b> permite que cada proyecto defina su propio proceso : <b>SCRUM</b>, <b>KANBAN</b> o interno de la compañía. Al definir su proceso, puede dar inicio a la <b>definición de un tablero</b>, al uso de un <b>repositorio</b> y a la <b>publicación de artefactos</b>. Sea cuál sea el proceso definido, cada <b>proyecto</b> define quiénes son sus <b>participantes</b> (<b>personas</b>) formando un <b>Equipo</b>.   

```plantuml
@startuml
class "Organización" {
}

class Proyecto {
  
}

class Iniciativa {
  
}

class "Historia de usuario" {
  
}

class "Épica" {
  
}

class "Característica" {
  
}

class Tarea {
  
}

class Refinamiento {
  
}

class Equipo {
  
}

class Persona {
  
}

"Organización"  -->  Proyecto : Define varios
Iniciativa --> "Historia de usuario" : Especificada en varias
"Épica" --> "Característica" : Compuesto de varias
"Característica" <-- "Historia de usuario" : Asociada a una
"Historia de usuario" --> Tarea : Solicita ejecutar varias
"Historia de usuario" <-- Refinamiento : Diseña la solución de una
Tarea --> Equipo : Asignada a un
Equipo --> Proyecto : El cuál pertenece a un
Equipo --> Persona : Compuesto de varias
@enduml
```

Los <b>Equipos</b> existen gracias a las <b>necesidades del usuario</b> o del <b>dueño del producto</b> (<b>Product Owner</b>). Cada que el dueño del producto manifiesta una necesidad, se crea una <b>Iniciativa</b>, las iniciativas van acompañadas de un análisis, una viabilidad y una macro-estimación. Cuando financieramente y técnicamente es aprobada, es asignada a un <b>Proxy</b>, el cuál cumple la función de <b>analista de requerimientos</b>. El <b>Proxy</b> debe entablar más de una reunión de entendimiento con el <b>Product Owner</b> para asociar una <b>Característica</b> de una <b>Épica</b>. 

Las <b>Épicas</b> y las <b>Características</b> no pertenecen a una iniciativa, un proyecto, un equipo o una aplicación. Mediante estos dos atributos, se puede generar un <b>roadmap</b> a un <b>producto</b>, una <b>aplicación</b> o una <b>idea</b>. Por lo que, una <b>Épica</b> y una <b>Característica</b> debe existir para una o más de una <b>Historia de usuario</b> escrita por uno o más de un <b>Proxy</b> para una o más de una <b>Iniciativa</b>.