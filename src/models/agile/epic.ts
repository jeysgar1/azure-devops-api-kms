import { AzureWorkItem } from "../azureDevOps";
import { Base } from "./base";
import { Feature } from "./feature";

/**
 * Épica
 * 
 * @see [¿Épicas?]()
 * 
 * @category Models
 * 
 * {@label Épicas}
 */
export class Epic extends Base{
    
    /**
     * Características que pertenecen a una épica
     */
    features?: Array<Feature> | undefined

    /**
     * Crea una instancia de una épica
     * @param {AzureWorkItem | undefined|string} azureWorkItem - Elemento de trabajo
     */
    constructor(azureWorkItem:AzureWorkItem | undefined|string){
        super(azureWorkItem)
        this.features = new Array<Feature>();
        }

    /**
     * Permite filtrar las características de una épica
     * @param {?Array<Feature>} features - Características
     */
    selectMyFeatures(features?:Array<Feature>){
        if(features){
            this.features = new Array<Feature>();
            this.features = features.filter((feature : Feature) => feature.epicId == this.id);
        }
    }
}