import { Initiative } from './models';
import { InitiativeController } from './controllers/initiative.controller';
import { configInstance, iAppConfig } from './config';

export default class AzureDevOpsIntegrations {
    constructor(appConfig: iAppConfig) {
        configInstance(appConfig);
    }

    public async getById(
        idInitiative: string,
    ): Promise<Initiative | undefined> {
        if (configInstance()?.onValidate()) {
            const initiativeController: InitiativeController =
                new InitiativeController();
            return await initiativeController.get(idInitiative);
        } else {
            throw Error("Couldn't get the initiative");
        }
    }
}
