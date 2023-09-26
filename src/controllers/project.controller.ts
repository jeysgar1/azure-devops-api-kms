import { AzureGetProjectsItemResponse, Project } from "../model";
import { AgileController } from "./agile.controller";


/**
 * Controlador encargado de gestionar los proyectos
 * 
 * @category Controllers
 * 
 * {@label Proyectos}
 */
export class ProjectController {

    /**
     * Instancia asociada a la gestión de acceso en Azure DevOps
     */
    private agileController : AgileController 
    
    /**
     * Crea una instancia del controlador
     */
    constructor(){
        this.agileController = new AgileController();
    }

    /**
     * Permite obtener los proyectos de una organización creados en Azure DevOps
     * @returns {Promise<Array<Project> | undefined>} Lista de proyectos
     */
    async get():Promise<Array<Project> | undefined> {
       const projects : Array<Project> = new Array<Project>();
       const azureProjects : AzureGetProjectsItemResponse[] | undefined = await this.agileController.getProjects();
       azureProjects?.forEach((item : AzureGetProjectsItemResponse) => {
            projects.push({
                id: item.id,
                description:item.description,
                url:item.url,
                name:item.name,
                state:undefined
            })
       })
       return projects;
    }

}