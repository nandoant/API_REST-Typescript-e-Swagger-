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
exports.SubscriptionTypeController = void 0;
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const tsoa_1 = require("tsoa");
const runtime_1 = require("@tsoa/runtime");
const SubscriptionTypeService_1 = require("../service/SubscriptionTypeService");
const SubscriptionTypeNoID_1 = require("../model/dto/noID/SubscriptionTypeNoID");
const SubscriptionTypeDto_1 = require("../model/dto/SubscriptionTypeDto");
const HandleError_1 = require("../util/HandleError");
let SubscriptionTypeController = class SubscriptionTypeController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.subsTypeService = new SubscriptionTypeService_1.SubscriptionTypeService();
    }
    createSubscriptionType(subsTypeDTO, badRequestResponse, conflictResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscriptionType = yield this.subsTypeService.createSubscriptionType(subsTypeDTO);
                return successResponse(201, new BasicResponseDto_1.BasicResponseDto("Subscription Type created successfully!", subscriptionType));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, undefined, conflictResponse);
            }
        });
    }
    updateSubscriptionType(subsTypeDTO, notFoundResponse, badRequestResponse, conflictResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscriptionType = yield this.subsTypeService.updateSubscriptionType(subsTypeDTO);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription Type updated successfully!", subscriptionType));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse, conflictResponse);
            }
        });
    }
    deleteSubscriptionType(subsTypeDTO, notFoundResponse, badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscriptionType = yield this.subsTypeService.deleteSubscriptionType(subsTypeDTO);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription Type deleted successfully!", subscriptionType));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse);
            }
        });
    }
    filterSubscriptionType(id, notFoundResponse, badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscriptionType = yield this.subsTypeService.filterSubscriptionType(id);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription Type found successfully!", subscriptionType));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse);
            }
        });
    }
    listAllSubscriptionTypes(badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const subscriptionTypes = yield this.subsTypeService.listAllSubscriptionTypes();
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Subscription Types listed successfully!", subscriptionTypes));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse);
            }
        });
    }
};
exports.SubscriptionTypeController = SubscriptionTypeController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubscriptionTypeNoID_1.SubscriptionTypeNoID, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionTypeController.prototype, "createSubscriptionType", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __param(4, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubscriptionTypeDto_1.SubscriptionTypeDto, Function, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionTypeController.prototype, "updateSubscriptionType", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [SubscriptionTypeDto_1.SubscriptionTypeDto, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionTypeController.prototype, "deleteSubscriptionType", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionTypeController.prototype, "filterSubscriptionType", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, runtime_1.Res)()),
    __param(1, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Function]),
    __metadata("design:returntype", Promise)
], SubscriptionTypeController.prototype, "listAllSubscriptionTypes", null);
exports.SubscriptionTypeController = SubscriptionTypeController = __decorate([
    (0, runtime_1.Route)("subscriptionType"),
    (0, runtime_1.Tags)("Subscription Type")
], SubscriptionTypeController);
