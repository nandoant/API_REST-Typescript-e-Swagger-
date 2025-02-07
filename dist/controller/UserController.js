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
exports.UserController = void 0;
const tsoa_1 = require("tsoa");
const runtime_1 = require("@tsoa/runtime");
const UserDTONoID_1 = require("../model/dto/noID/UserDTONoID");
const UserDTO_1 = require("../model/dto/UserDTO");
const UserService_1 = require("../service/UserService");
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const HandleError_1 = require("../util/HandleError");
let UserController = class UserController extends tsoa_1.Controller {
    constructor() {
        super(...arguments);
        this.userService = new UserService_1.UserService();
    }
    createUser(userDTO, badRequestResponse, conflictResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.createUser(userDTO);
                return successResponse(201, new BasicResponseDto_1.BasicResponseDto("User created successfully!", user));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, undefined, conflictResponse);
            }
        });
    }
    updateUser(userDTO, notFoundResponse, badRequestResponse, conflictResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.updateUser(userDTO);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("User updated successfully!", user));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse, conflictResponse);
            }
        });
    }
    deleteUser(userDTO, notFoundResponse, badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.deleteUser(userDTO);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("User deleted successfully!", user));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse);
            }
        });
    }
    getUser(id, notFoundResponse, badRequestResponse, successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.filterUser(id);
                return successResponse(200, new BasicResponseDto_1.BasicResponseDto("User found successfully!", user));
            }
            catch (error) {
                (0, HandleError_1.handleError)(error, badRequestResponse, notFoundResponse);
            }
        });
    }
    listAllUsers(successResponse) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.listAllUsers();
            return successResponse(200, new BasicResponseDto_1.BasicResponseDto("Users retrieved successfully!", users));
        });
    }
};
exports.UserController = UserController;
__decorate([
    (0, tsoa_1.Post)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDTONoID_1.UserDTONoID, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, tsoa_1.Put)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __param(4, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDTO_1.UserDTO, Function, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, tsoa_1.Delete)(),
    __param(0, (0, runtime_1.Body)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserDTO_1.UserDTO, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
__decorate([
    (0, tsoa_1.Get)(),
    __param(0, (0, tsoa_1.Query)()),
    __param(1, (0, runtime_1.Res)()),
    __param(2, (0, runtime_1.Res)()),
    __param(3, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Function, Function, Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
__decorate([
    (0, tsoa_1.Get)("all"),
    __param(0, (0, runtime_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "listAllUsers", null);
exports.UserController = UserController = __decorate([
    (0, runtime_1.Route)("user"),
    (0, runtime_1.Tags)("User")
], UserController);
