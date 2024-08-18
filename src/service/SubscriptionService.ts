import { SubscriptionDto } from "../model/dto/SubscriptionDto";
import { SubscriptionDtoNoID } from "../model/dto/noID/SubscriptionDTONoID";
import { Subscription } from "../model/Subscription";
import { ConflictError, NotFoundError, ValidationError } from "../util/CustomErrors";
import { SubscriptionRepository } from "../repository/SubscriptionRepository";
import { UserRepository } from "../repository/UserRepository";
import { SubscriptionTypeRepo } from "../repository/SubscriptionTypeRepo";
import { dataParaString } from "../util/DataUtil";

export class SubscriptionService {
    private subscriptionRepo = SubscriptionRepository.getInstance();
    private userRepo = UserRepository.getInstance();
    private subscriptionTypeRepo = SubscriptionTypeRepo.getInstance();

    async createSubscription(subscriptionDTO: SubscriptionDtoNoID): Promise<Subscription> {
        const subscription = this.toSubscription({ id: 0, ...subscriptionDTO });
        await this.validate(subscription);
        await this.subscriptionRepo.insert(subscription);
        console.log("Subscription - Service - Insert", subscription);
        return subscription;
    }

    async updateSubscription(subscriptionDTO: SubscriptionDto): Promise<Subscription> {
        const subscription = this.toSubscription(subscriptionDTO);
        const foundSubscription = await this.getSubscriptionById(subscription.id);
        await this.checkConsistency(subscription, foundSubscription);
        await this.subscriptionRepo.update(subscription);
        console.log("Subscription - Service - Update", subscription);
        return subscription;
    }

    async deleteSubscription(subscriptionDTO: SubscriptionDto): Promise<void> {
        const subscription = this.toSubscription(subscriptionDTO);

        const foundSubscription = await this.getSubscriptionById(subscription.id);
        this.checkMatch(subscription, foundSubscription);

        await this.subscriptionRepo.delete(subscription.id);
        console.log("Subscription - Service - Delete", subscription);
    }

    async getAllSubscriptions(): Promise<Subscription[]> {
        const subscriptions = await this.subscriptionRepo.findAll();
        console.log("Subscription - Service - List All", subscriptions);
        return subscriptions;
    }

    async getSubscriptionById(id: number): Promise<Subscription> {
        const foundSubscription = await this.subscriptionRepo.findByID(id);
        if (!foundSubscription) 
            throw new NotFoundError(`Subscription with ID ${id} not found`);
        return foundSubscription;
    }

    // Aux methods
    private checkMatch(subscription: Subscription, foundSubscription: Subscription) {
        if (subscription.typeID !== foundSubscription.typeID) {
            throw new ValidationError(`Subscription type ID (${subscription.typeID}) doesn't match`);
        }
        if (subscription.userID !== foundSubscription.userID) {
            throw new ValidationError(`User ID (${subscription.userID}) doesn't match`);
        }
    }

    private async checkConsistency(subscription: Subscription, foundSubscription: Subscription) {
        if (subscription.typeID !== foundSubscription.typeID) {
            const subscriptionType = await this.subscriptionTypeRepo.getById(subscription.typeID);
            if (!subscriptionType) 
                throw new ConflictError(`Subscription type with ID ${subscription.typeID} does not exist`);
        }

        if (subscription.userID !== foundSubscription.userID) {
            const user = await this.userRepo.findById(subscription.userID);
            if (!user) 
                throw new ConflictError(`User with ID ${subscription.userID} does not exist`);
        }
    }

    private async validate(subscription: Subscription) {
        const user = await this.userRepo.findById(subscription.userID);
        if (!user) 
            throw new ConflictError(`User with ID ${subscription.userID} not found`);

        const subscriptionType = await this.subscriptionTypeRepo.getById(subscription.typeID);
        if (!subscriptionType) 
            throw new ConflictError(`Subscription type with ID ${subscription.typeID} not found`);
    }

    private toSubscription(subscriptionDTO: SubscriptionDto): Subscription {
        return new Subscription(subscriptionDTO.id, subscriptionDTO.paymentDate, subscriptionDTO.typeID, subscriptionDTO.userID);
    }
}
