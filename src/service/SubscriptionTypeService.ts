import { SubscriptionType } from "../model/SubscriptionType";
import { SubscriptionTypeNoID } from "../model/dto/noID/SubscriptionTypeNoID";
import { SubscriptionTypeDto } from "../model/dto/SubscriptionTypeDto";
import { SubscriptionTypeRepo } from "../repository/SubscriptionTypeRepo";
import { ConflictError, NotFoundError, ValidationError } from "../util/CustomErrors";

export class SubscriptionTypeService {
    private subsTypeRepo = SubscriptionTypeRepo.getInstance();

    async createSubscriptionType(subscriptionTypeDTO: SubscriptionTypeNoID): Promise<SubscriptionType> {
        const subscriptionType = this.convertDTOToSubscriptionType({ id: 0, nameType: subscriptionTypeDTO.nameType, daysDuration: subscriptionTypeDTO.daysDuration });

        await this.checkDuplicateSubscriptionType(subscriptionType);

        const newSubscriptionType = await this.subsTypeRepo.insert(subscriptionType);
        console.log("Subscription Type - Service - Insert ", newSubscriptionType);
        return newSubscriptionType;
    }

    async updateSubscriptionType(subscriptionTypeDTO: SubscriptionTypeDto): Promise<SubscriptionType> {
        const subscriptionType = this.convertDTOToSubscriptionType(subscriptionTypeDTO);

        const existSubscriptionType = await this.filterSubscriptionType(subscriptionType.id);
        await this.checkDuplicateSubscriptionType(subscriptionType);
        

        const updatedSubscriptionType = await this.subsTypeRepo.update(subscriptionType);
        console.log("Subscription Type - Service - Update ", updatedSubscriptionType);
        return updatedSubscriptionType;
    }

    async deleteSubscriptionType(subscriptionTypeDTO: SubscriptionTypeDto): Promise<SubscriptionType> {
        console.log("Subscription Type - Service - Delete ", subscriptionTypeDTO);
        const subscriptionType = this.convertDTOToSubscriptionType(subscriptionTypeDTO);

        await this.checkSubscriptionTypeMatch(subscriptionType);

        await this.subsTypeRepo.delete(subscriptionType.id);
        console.log("Subscription Type - Service - Delete ", subscriptionType);
        return subscriptionType;
    }

    async filterSubscriptionType(id: number): Promise<SubscriptionType> {
        console.log("Subscription Type - Service - Filter ", id);
        const subscriptionType = await this.subsTypeRepo.getById(id);

        if (!subscriptionType) 
            throw new NotFoundError(`Subscription Type with ID (${id}) not found`);

        console.log("Subscription Type - Service - Filter ", subscriptionType);
        return subscriptionType;
    }

    async listAllSubscriptionTypes(): Promise<SubscriptionType[]> {
        const subscriptionTypes = await this.subsTypeRepo.getAll();
        console.log("Subscription Type - Service - List All ", subscriptionTypes);
        return subscriptionTypes;
    }

    //aux methods
    private async checkDuplicateSubscriptionType(subscriptionType: SubscriptionType) {
        const foundSubscriptionType = await this.subsTypeRepo.getBySubscriptionType(subscriptionType);
        if (foundSubscriptionType)
            throw new ConflictError(`Subscription Type with name (${subscriptionType.nameType}) and durarion (${subscriptionType.daysDuration}) already exists`);
    }

    private async checkSubscriptionTypeMatch(subscriptionType: SubscriptionType) {
        const foundSubscriptionType = await this.subsTypeRepo.getById(subscriptionType.id);
        if (!foundSubscriptionType) 
            throw new NotFoundError(`Subscription Type with ID ${subscriptionType.id} not found`);
        
        if (foundSubscriptionType.nameType !== subscriptionType.nameType) 
            throw new ConflictError(`Provided name (${subscriptionType.nameType}) does not match the existing name (${foundSubscriptionType.nameType})`);
        
        if (foundSubscriptionType.daysDuration !== subscriptionType.daysDuration) 
            throw new ConflictError(`Provided duration (${subscriptionType.daysDuration}) does not match the existing duration (${foundSubscriptionType.daysDuration})`);
    }

    private convertDTOToSubscriptionType(dto: SubscriptionTypeDto): SubscriptionType {
        return new SubscriptionType(dto.id, dto.nameType, dto.daysDuration);
    }
}
