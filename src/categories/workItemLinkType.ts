


/**
 * Definición que da la aplicación sobre los tipos de relaciones entre un elemento de trabajo y otro
 * @enum 
 * {@label Tipos de relaciones entre elementos de trabajo}
 */
export const WorkItemLinkType = {
    // Documento adjunto al elemento de trabajo
    AttachedFile : "AttachedFile",
    // Elemento de trabajo que responde como sucessor
    Child : "System.LinkTypes.Hierarchy-Forward",
    // Hipervínculo de acceso web del elemento.
    Hyperlink : "Hyperlink",
    // Elemento trabajo que responde como predecesor
    Parent : "System.LinkTypes.Hierarchy-Reverse",
    // Elemento de trabajo relacionado
    Related : "System.LinkTypes.Related",
    //En general, un sucesor o un predecesor
    Topology : "System.LinkTypes.Dependency"
} as const;
