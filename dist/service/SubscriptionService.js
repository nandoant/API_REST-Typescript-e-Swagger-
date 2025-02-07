"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const Subscription_1 = require("../model/Subscription");
const CustomErrors_1 = require("../util/CustomErrors");
const SubscriptionRepository_1 = require("../repository/SubscriptionRepository");
const UserRepository_1 = require("../repository/UserRepository");
const SubscriptionTypeRepo_1 = require("../repository/SubscriptionTypeRepo");
class SubscriptionService {
    constructor() {
        this.subscriptionRepo = SubscriptionRepository_1.SubscriptionRepository.getInstance();
        this.userRepo = UserRepository_1.UserRepository.getInstance();
        this.subscriptionTypeRepo = SubscriptionTypeRepo_1.SubscriptionTypeRepo.getInstance();
    }
    createSubscription(subscriptionDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = this.toSubscription(Object.assign({ id: 0 }, subscriptionDTO));
            yield this.validate(subscription);
            yield this.subscriptionRepo.insert(subscription);
            console.log("Subscription - Service - Insert", subscription);
            return subscription;
        });
    }
    updateSubscription(subscriptionDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = this.toSubscription(subscriptionDTO);
            const foundSubscription = yield this.getSubscriptionById(subscription.id);
            yield this.checkConsistency(subscription, foundSubscription);
            yield this.subscriptionRepo.update(subscription);
            console.log("Subscription - Service - Update", subscription);
            return subscription;
        });
    }
    deleteSubscription(subscriptionDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = this.toSubscription(subscriptionDTO);
            const foundSubscription = yield this.getSubscriptionById(subscription.id);
            this.checkMatch(subscription, foundSubscription);
            yield this.subscriptionRepo.delete(subscription.id);
            console.log("Subscription - Service - Delete", subscription);
        });
    }
    getAllSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            const subscriptions = yield this.subscriptionRepo.findAll();
            console.log("Subscription - Service - List All", subscriptions);
            return subscriptions;
        });
    }
    getSubscriptionById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundSubscription = yield this.subscriptionRepo.findByID(id);
            if (!foundSubscription)
                throw new CustomErrors_1.NotFoundError(`Subscription with ID ${id} not found`);
            return foundSubscription;
        });
    }
    // Aux methods
    checkMatch(subscription, foundSubscription) {
        if (subscription.typeID !== foundSubscription.typeID) {
            throw new CustomErrors_1.ValidationError(`Subscription type ID (${subscription.typeID}) doesn't match`);
        }
        if (subscription.userID !== foundSubscription.userID) {
            throw new CustomErrors_1.ValidationError(`User ID (${subscription.userID}) doesn't match`);
        }
    }
    checkConsistency(subscription, foundSubscription) {
        return __awaiter(this, void 0, void 0, function* () {
            if (subscription.typeID !== foundSubscription.typeID) {
                const subscriptionType = yield this.subscriptionTypeRepo.getById(subscription.typeID);
                if (!subscriptionType)
                    throw new CustomErrors_1.ConflictError(`Subscription type with ID ${subscription.typeID} does not exist`);
            }
            if (subscription.userID !== foundSubscription.userID) {
                const user = yield this.userRepo.findById(subscription.userID);
                if (!user)
                    throw new CustomErrors_1.ConflictError(`User with ID ${subscription.userID} does not exist`);
            }
        });
    }
    validate(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepo.findById(subscription.userID);
            if (!user)
                throw new CustomErrors_1.ConflictError(`User with ID ${subscription.userID} not found`);
            const subscriptionType = yield this.subscriptionTypeRepo.getById(subscription.typeID);
            if (!subscriptionType)
                throw new CustomErrors_1.ConflictError(`Subscription type with ID ${subscription.typeID} not found`);
        });
    }
    toSubscription(subscriptionDTO) {
        return new Subscription_1.Subscription(subscriptionDTO.id, subscriptionDTO.paymentDate, subscriptionDTO.typeID, subscriptionDTO.userID);
    }
}
exports.SubscriptionService = SubscriptionService;
