"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.SubscriptionController = void 0;
const tsoa_1 = require("tsoa");
const runtime_1 = require("@tsoa/runtime");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const HandleError_1 = require("../util/HandleError");
const SubscriptionService_1 = require("../service/SubscriptionService");
const SubscriptionDto_1 = require("../model/dto/SubscriptionDto");
const SubscriptionDTONoID_1 = require("../model/dto/noID/SubscriptionDTONoID");
let SubscriptionController = class SubscriptionController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.subscriptionService = new SubscriptionService_1.SubscriptionService();
    }
    createSubscription(subscriptionDTO, badRequestResponse, conflictResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscription = yield this.subscriptionService.createSubscription(subscriptionDTO);
                return successResponse(201, new BasicResponseDto_1.BasicResponseDto("Subscription created successfully!", subscription));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, undefined, conflictResponse);
            }
        });
    }
    updateSubscription(subscriptionDTO, notFoundResponse, badRequestResponse, conflictResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscription = yield this.subscriptionService.updateSubscription(subscriptionDTO);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription updated successfully!", subscription));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse, conflictResponse);
            }
        });
    }
    deleteSubscription(subscriptionDTO, notFoundResponse, badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscription = yield this.subscriptionService.deleteSubscription(subscriptionDTO);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription deleted successfully!", subscription));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse);
            }
        });
    }
    getAllSubscriptions(badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscriptions = yield this.subscriptionService.getAllSubscriptions();
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscriptions found successfully!", subscriptions));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse);
            }
        });
    }
    filterSubscription(id, notFoundResponse, badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscription = yield this.subscriptionService.getSubscriptionById(id);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription found successfully!", subscription));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse);
            }
        });
    }
};
exports.SubscriptionController = SubscriptionController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubscriptionDTONoID_1.SubscriptionDtoNoID, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "createSubscription", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __param(4, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubscriptionDto_1.SubscriptionDto, Function, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "updateSubscription", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubscriptionDto_1.SubscriptionDto, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "deleteSubscription", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, runtime_1.Res)()),
    __param(1, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "getAllSubscriptions", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionController.prototype, "filterSubscription", null);
exports.SubscriptionController = SubscriptionController = __decorate([
    (0, runtime_1.Route)("subscription"),
    (0, runtime_1.Tags)("Subscription")
], SubscriptionController);
