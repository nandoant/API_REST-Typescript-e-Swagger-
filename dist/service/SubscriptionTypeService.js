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
exports.SubscriptionTypeService = void 0;
const SubscriptionType_1 = require("../model/SubscriptionType");
const SubscriptionTypeRepo_1 = require("../repository/SubscriptionTypeRepo");
const CustomErrors_1 = require("../util/CustomErrors");
class SubscriptionTypeService {
    constructor() {
        this.subsTypeRepo = SubscriptionTypeRepo_1.SubscriptionTypeRepo.getInstance();
    }
    createSubscriptionType(subscriptionTypeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscriptionType = this.convertDTOToSubscriptionType({ id: 0, nameType: subscriptionTypeDTO.nameType, daysDuration: subscriptionTypeDTO.daysDuration });
            yield this.checkDuplicateSubscriptionType(subscriptionType);
            const newSubscriptionType = yield this.subsTypeRepo.insert(subscriptionType);
            console.log("Subscription Type - Service - Insert ", newSubscriptionType);
            return newSubscriptionType;
        });
    }
    updateSubscriptionType(subscriptionTypeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscriptionType = this.convertDTOToSubscriptionType(subscriptionTypeDTO);
            const existSubscriptionType = yield this.filterSubscriptionType(subscriptionType.id);
            yield this.checkDuplicateSubscriptionType(subscriptionType);
            const updatedSubscriptionType = yield this.subsTypeRepo.update(subscriptionType);
            console.log("Subscription Type - Service - Update ", updatedSubscriptionType);
            return updatedSubscriptionType;
        });
    }
    deleteSubscriptionType(subscriptionTypeDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Subscription Type - Service - Delete ", subscriptionTypeDTO);
            const subscriptionType = this.convertDTOToSubscriptionType(subscriptionTypeDTO);
            yield this.checkSubscriptionTypeMatch(subscriptionType);
            yield this.subsTypeRepo.delete(subscriptionType.id);
            console.log("Subscription Type - Service - Delete ", subscriptionType);
            return subscriptionType;
        });
    }
    filterSubscriptionType(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Subscription Type - Service - Filter ", id);
            const subscriptionType = yield this.subsTypeRepo.getById(id);
            if (!subscriptionType)
                throw new CustomErrors_1.NotFoundError(`Subscription Type with ID (${id}) not found`);
            console.log("Subscription Type - Service - Filter ", subscriptionType);
            return subscriptionType;
        });
    }
    listAllSubscriptionTypes() {
        return __awaiter(this, void 0, void 0, function* () {
            const subscriptionTypes = yield this.subsTypeRepo.getAll();
            console.log("Subscription Type - Service - List All ", subscriptionTypes);
            return subscriptionTypes;
        });
    }
    //aux methods
    checkDuplicateSubscriptionType(subscriptionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundSubscriptionType = yield this.subsTypeRepo.getBySubscriptionType(subscriptionType);
            if (foundSubscriptionType)
                throw new CustomErrors_1.ConflictError(`Subscription Type with name (${subscriptionType.nameType}) and durarion (${subscriptionType.daysDuration}) already exists`);
        });
    }
    checkSubscriptionTypeMatch(subscriptionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundSubscriptionType = yield this.subsTypeRepo.getById(subscriptionType.id);
            if (!foundSubscriptionType)
                throw new CustomErrors_1.NotFoundError(`Subscription Type with ID ${subscriptionType.id} not found`);
            if (foundSubscriptionType.nameType !== subscriptionType.nameType)
                throw new CustomErrors_1.ConflictError(`Provided name (${subscriptionType.nameType}) does not match the existing name (${foundSubscriptionType.nameType})`);
            if (foundSubscriptionType.daysDuration !== subscriptionType.daysDuration)
                throw new CustomErrors_1.ConflictError(`Provided duration (${subscriptionType.daysDuration}) does not match the existing duration (${foundSubscriptionType.daysDuration})`);
        });
    }
    convertDTOToSubscriptionType(dto) {
        return new SubscriptionType_1.SubscriptionType(dto.id, dto.nameType, dto.daysDuration);
    }
}
exports.SubscriptionTypeService = SubscriptionTypeService;
