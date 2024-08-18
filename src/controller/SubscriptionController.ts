import { Controller, Delete, Get, Post, Put, Query } from "tsoa";
import { Body, Res, Route, Tags, TsoaResponse } from "@tsoa/runtime";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { handleError } from "../util/HandleError";
import { SubscriptionService } from "../service/SubscriptionService";
import { SubscriptionDto } from "../model/dto/SubscriptionDto";
import { SubscriptionDtoNoID } from "../model/dto/noID/SubscriptionDTONoID";

@Route("subscription")
@Tags("Subscription")
export class SubscriptionController extends Controller {
    private subscriptionService = new SubscriptionService();

    @Post()
    public async createSubscription(
        @Body() subscriptionDTO: SubscriptionDtoNoID,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() conflictResponse: TsoaResponse<409, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscription = await this.subscriptionService.createSubscription(subscriptionDTO);
            return successResponse(201, new BasicResponseDto("Subscription created successfully!", subscription));
        } catch (error: any) {
            handleError(error, badRequestResponse, undefined, conflictResponse);
        }
    }

    @Put()
    public async updateSubscription(
        @Body() subscriptionDTO: SubscriptionDto,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() conflictResponse: TsoaResponse<409, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscription = await this.subscriptionService.updateSubscription(subscriptionDTO);
            return successResponse(200, new BasicResponseDto("Subscription updated successfully!", subscription));
        } catch (error: any) {
            handleError(error, badRequestResponse, notFoundResponse, conflictResponse);
        }
    }

    @Delete()
    public async deleteSubscription(
        @Body() subscriptionDTO: SubscriptionDto,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscription = await this.subscriptionService.deleteSubscription(subscriptionDTO);
            return successResponse(200, new BasicResponseDto("Subscription deleted successfully!", subscription));
        } catch (error: any) {
            handleError(error, badRequestResponse, notFoundResponse);
        }
    }

    @Get("all")
    public async getAllSubscriptions(
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscriptions = await this.subscriptionService.getAllSubscriptions();
            return successResponse(200, new BasicResponseDto("Subscriptions found successfully!", subscriptions));
        } catch (error: any) {
            handleError(error, badRequestResponse);
        }
    }

    @Get()
    public async filterSubscription(
        @Query() id: number,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscription = await this.subscriptionService.getSubscriptionById(id);
            return successResponse(200, new BasicResponseDto("Subscription found successfully!", subscription));
        } catch (error: any) {
            handleError(error, badRequestResponse, notFoundResponse);
        }
    }
}