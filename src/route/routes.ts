/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TsoaRoute, fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../controller/UserController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SubscriptionTypeController } from './../controller/SubscriptionTypeController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SubscriptionController } from './../controller/SubscriptionController';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "UserDTONoID": {
        "dataType": "refObject",
        "properties": {
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "BasicResponseDto": {
        "dataType": "refObject",
        "properties": {
            "message": {"dataType":"string","required":true},
            "object": {"dataType":"any","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserDTO": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionTypeNoID": {
        "dataType": "refObject",
        "properties": {
            "nameType": {"dataType":"string","required":true},
            "daysDuration": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionTypeDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "nameType": {"dataType":"string","required":true},
            "daysDuration": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionDtoNoID": {
        "dataType": "refObject",
        "properties": {
            "paymentDate": {"dataType":"string","required":true},
            "typeID": {"dataType":"double","required":true},
            "userID": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "SubscriptionDto": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "paymentDate": {"dataType":"string","required":true},
            "typeID": {"dataType":"double","required":true},
            "userID": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        app.post('/user',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.createUser)),

            async function UserController_createUser(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    userDTO: {"in":"body","name":"userDTO","required":true,"ref":"UserDTONoID"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    conflictResponse: {"in":"res","name":"409","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'createUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/user',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.updateUser)),

            async function UserController_updateUser(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    userDTO: {"in":"body","name":"userDTO","required":true,"ref":"UserDTO"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    conflictResponse: {"in":"res","name":"409","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'updateUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/user',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.deleteUser)),

            async function UserController_deleteUser(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    userDTO: {"in":"body","name":"userDTO","required":true,"ref":"UserDTO"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'deleteUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/user',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.getUser)),

            async function UserController_getUser(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"query","name":"id","required":true,"dataType":"double"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'getUser',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/user/all',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.listAllUsers)),

            async function UserController_listAllUsers(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'listAllUsers',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/subscriptionType',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController.prototype.createSubscriptionType)),

            async function SubscriptionTypeController_createSubscriptionType(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    subsTypeDTO: {"in":"body","name":"subsTypeDTO","required":true,"ref":"SubscriptionTypeNoID"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    conflictResponse: {"in":"res","name":"409","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionTypeController();

              await templateService.apiHandler({
                methodName: 'createSubscriptionType',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/subscriptionType',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController.prototype.updateSubscriptionType)),

            async function SubscriptionTypeController_updateSubscriptionType(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    subsTypeDTO: {"in":"body","name":"subsTypeDTO","required":true,"ref":"SubscriptionTypeDto"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    conflictResponse: {"in":"res","name":"409","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionTypeController();

              await templateService.apiHandler({
                methodName: 'updateSubscriptionType',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/subscriptionType',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController.prototype.deleteSubscriptionType)),

            async function SubscriptionTypeController_deleteSubscriptionType(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    subsTypeDTO: {"in":"body","name":"subsTypeDTO","required":true,"ref":"SubscriptionTypeDto"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionTypeController();

              await templateService.apiHandler({
                methodName: 'deleteSubscriptionType',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/subscriptionType',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController.prototype.filterSubscriptionType)),

            async function SubscriptionTypeController_filterSubscriptionType(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"query","name":"id","required":true,"dataType":"double"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionTypeController();

              await templateService.apiHandler({
                methodName: 'filterSubscriptionType',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/subscriptionType/all',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionTypeController.prototype.listAllSubscriptionTypes)),

            async function SubscriptionTypeController_listAllSubscriptionTypes(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionTypeController();

              await templateService.apiHandler({
                methodName: 'listAllSubscriptionTypes',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/subscription',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.createSubscription)),

            async function SubscriptionController_createSubscription(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    subscriptionDTO: {"in":"body","name":"subscriptionDTO","required":true,"ref":"SubscriptionDtoNoID"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    conflictResponse: {"in":"res","name":"409","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"201","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'createSubscription',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.put('/subscription',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.updateSubscription)),

            async function SubscriptionController_updateSubscription(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    subscriptionDTO: {"in":"body","name":"subscriptionDTO","required":true,"ref":"SubscriptionDto"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    conflictResponse: {"in":"res","name":"409","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'updateSubscription',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.delete('/subscription',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.deleteSubscription)),

            async function SubscriptionController_deleteSubscription(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    subscriptionDTO: {"in":"body","name":"subscriptionDTO","required":true,"ref":"SubscriptionDto"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'deleteSubscription',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/subscription/all',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.getAllSubscriptions)),

            async function SubscriptionController_getAllSubscriptions(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'getAllSubscriptions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.get('/subscription',
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController)),
            ...(fetchMiddlewares<RequestHandler>(SubscriptionController.prototype.filterSubscription)),

            async function SubscriptionController_filterSubscription(request: ExRequest, response: ExResponse, next: any) {
            const args: Record<string, TsoaRoute.ParameterSchema> = {
                    id: {"in":"query","name":"id","required":true,"dataType":"double"},
                    notFoundResponse: {"in":"res","name":"404","required":true,"ref":"BasicResponseDto"},
                    badRequestResponse: {"in":"res","name":"400","required":true,"ref":"BasicResponseDto"},
                    successResponse: {"in":"res","name":"200","required":true,"ref":"BasicResponseDto"},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args, request, response });

                const controller = new SubscriptionController();

              await templateService.apiHandler({
                methodName: 'filterSubscription',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
