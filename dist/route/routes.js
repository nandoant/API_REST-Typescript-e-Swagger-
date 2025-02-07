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
exports.RegisterRoutes = RegisterRoutes;
/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const runtime_1 = require("@tsoa/runtime");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const UserController_1 = require("./../controller/UserController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const SubscriptionTypeController_1 = require("./../controller/SubscriptionTypeController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const SubscriptionController_1 = require("./../controller/SubscriptionController");
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
const models = {
    "UserDTONoID": {
        "dataType": "refObject",
        "properties": {
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": { "dataType": "string", "required": true },
            "object": { "dataType": "any", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserDTO": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "name": { "dataType": "string", "required": true },
            "email": { "dataType": "string", "required": true },
            "password": { "dataType": "string", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionTypeNoID": {
        "dataType": "refObject",
        "properties": {
            "nameType": { "dataType": "string", "required": true },
            "daysDuration": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionTypeDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "nameType": { "dataType": "string", "required": true },
            "daysDuration": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionDtoNoID": {
        "dataType": "refObject",
        "properties": {
            "paymentDate": { "dataType": "string", "required": true },
            "typeID": { "dataType": "double", "required": true },
            "userID": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionDto": {
        "dataType": "refObject",
        "properties": {
            "id": { "dataType": "double", "required": true },
            "paymentDate": { "dataType": "string", "required": true },
            "typeID": { "dataType": "double", "required": true },
            "userID": { "dataType": "double", "required": true },
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new runtime_1.ExpressTemplateService(models, { "noImplicitAdditionalProperties": "throw-on-extras", "bodyCoercion": true });
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
function RegisterRoutes(app) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.post('/user', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.createUser)), function UserController_createUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userDTO: { "in": "body", "name": "userDTO", "required": true, "ref": "UserDTONoID" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                conflictResponse: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'createUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/user', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.updateUser)), function UserController_updateUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userDTO: { "in": "body", "name": "userDTO", "required": true, "ref": "UserDTO" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                conflictResponse: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'updateUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/user', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.deleteUser)), function UserController_deleteUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                userDTO: { "in": "body", "name": "userDTO", "required": true, "ref": "UserDTO" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'deleteUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/user', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.getUser)), function UserController_getUser(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'getUser',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/user/all', ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController)), ...((0, runtime_1.fetchMiddlewares)(UserController_1.UserController.prototype.listAllUsers)), function UserController_listAllUsers(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new UserController_1.UserController();
                yield templateService.apiHandler({
                    methodName: 'listAllUsers',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/subscriptionType', ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController.prototype.createSubscriptionType)), function SubscriptionTypeController_createSubscriptionType(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subsTypeDTO: { "in": "body", "name": "subsTypeDTO", "required": true, "ref": "SubscriptionTypeNoID" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                conflictResponse: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionTypeController_1.SubscriptionTypeController();
                yield templateService.apiHandler({
                    methodName: 'createSubscriptionType',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/subscriptionType', ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController.prototype.updateSubscriptionType)), function SubscriptionTypeController_updateSubscriptionType(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subsTypeDTO: { "in": "body", "name": "subsTypeDTO", "required": true, "ref": "SubscriptionTypeDto" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                conflictResponse: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionTypeController_1.SubscriptionTypeController();
                yield templateService.apiHandler({
                    methodName: 'updateSubscriptionType',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/subscriptionType', ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController.prototype.deleteSubscriptionType)), function SubscriptionTypeController_deleteSubscriptionType(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subsTypeDTO: { "in": "body", "name": "subsTypeDTO", "required": true, "ref": "SubscriptionTypeDto" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionTypeController_1.SubscriptionTypeController();
                yield templateService.apiHandler({
                    methodName: 'deleteSubscriptionType',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/subscriptionType', ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController.prototype.filterSubscriptionType)), function SubscriptionTypeController_filterSubscriptionType(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionTypeController_1.SubscriptionTypeController();
                yield templateService.apiHandler({
                    methodName: 'filterSubscriptionType',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/subscriptionType/all', ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionTypeController_1.SubscriptionTypeController.prototype.listAllSubscriptionTypes)), function SubscriptionTypeController_listAllSubscriptionTypes(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionTypeController_1.SubscriptionTypeController();
                yield templateService.apiHandler({
                    methodName: 'listAllSubscriptionTypes',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/subscription', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.createSubscription)), function SubscriptionController_createSubscription(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subscriptionDTO: { "in": "body", "name": "subscriptionDTO", "required": true, "ref": "SubscriptionDtoNoID" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                conflictResponse: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "201", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'createSubscription',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/subscription', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.updateSubscription)), function SubscriptionController_updateSubscription(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subscriptionDTO: { "in": "body", "name": "subscriptionDTO", "required": true, "ref": "SubscriptionDto" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                conflictResponse: { "in": "res", "name": "409", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'updateSubscription',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.delete('/subscription', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.deleteSubscription)), function SubscriptionController_deleteSubscription(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                subscriptionDTO: { "in": "body", "name": "subscriptionDTO", "required": true, "ref": "SubscriptionDto" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'deleteSubscription',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/subscription/all', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.getAllSubscriptions)), function SubscriptionController_getAllSubscriptions(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'getAllSubscriptions',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/subscription', ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController)), ...((0, runtime_1.fetchMiddlewares)(SubscriptionController_1.SubscriptionController.prototype.filterSubscription)), function SubscriptionController_filterSubscription(request, response, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = {
                id: { "in": "query", "name": "id", "required": true, "dataType": "double" },
                notFoundResponse: { "in": "res", "name": "404", "required": true, "ref": "BasicResponseDto" },
                badRequestResponse: { "in": "res", "name": "400", "required": true, "ref": "BasicResponseDto" },
                successResponse: { "in": "res", "name": "200", "required": true, "ref": "BasicResponseDto" },
            };
            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
            let validatedArgs = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });
                const controller = new SubscriptionController_1.SubscriptionController();
                yield templateService.apiHandler({
                    methodName: 'filterSubscription',
                    controller,
                    response,
                    next,
                    validatedArgs,
                    successStatus: undefined,
                });
            }
            catch (err) {
                return next(err);
            }
        });
    });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
