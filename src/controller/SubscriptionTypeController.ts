import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { Controller, Delete, Get, Post, Put, Query } from "tsoa";
import { Body, Res, Route, Tags, TsoaResponse } from "@tsoa/runtime";
import { SubscriptionTypeService } from "../service/SubscriptionTypeService";
import { SubscriptionTypeNoID } from "../model/dto/noID/SubscriptionTypeNoID";
import { SubscriptionTypeDto } from "../model/dto/SubscriptionTypeDto";
import { handleError } from "../util/HandleError";

@Route("subscriptionType")
@Tags("Subscription Type")
export class SubscriptionTypeController extends Controller {    
    private subsTypeService = new SubscriptionTypeService();

    @Post()
    public async createSubscriptionType(
        @Body() subsTypeDTO: SubscriptionTypeNoID,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() conflictResponse: TsoaResponse<409, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscriptionType = await this.subsTypeService.createSubscriptionType(subsTypeDTO);
            return successResponse(201, new BasicResponseDto("Subscription Type created successfully!", subscriptionType));
        } catch (error: any) {
            handleError(error, badRequestResponse, undefined, conflictResponse);
        }
    }

    @Put()
    public async updateSubscriptionType(
        @Body() subsTypeDTO: SubscriptionTypeDto,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() conflictResponse: TsoaResponse<409, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscriptionType = await this.subsTypeService.updateSubscriptionType(subsTypeDTO);
            return successResponse(200, new BasicResponseDto("Subscription Type updated successfully!", subscriptionType));
        } catch (error: any) {
            handleError(error, badRequestResponse, notFoundResponse, conflictResponse);
        }
    }

    @Delete()
    public async deleteSubscriptionType(
        @Body() subsTypeDTO: SubscriptionTypeDto,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscriptionType = await this.subsTypeService.deleteSubscriptionType(subsTypeDTO);
            return successResponse(200, new BasicResponseDto("Subscription Type deleted successfully!", subscriptionType));
        } catch (error: any) {
            handleError(error, badRequestResponse, notFoundResponse);
        }
    }

    @Get()
    public async filterSubscriptionType(
        @Query() id: number,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscriptionType = await this.subsTypeService.filterSubscriptionType(id);
            return successResponse(200, new BasicResponseDto("Subscription Type found successfully!", subscriptionType));
        } catch (error: any) {
            handleError(error, badRequestResponse, notFoundResponse);
        }
    }

    @Get("all")
    public async listAllSubscriptionTypes(
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const subscriptionTypes = await this.subsTypeService.listAllSubscriptionTypes();
            return successResponse(200, new BasicResponseDto("Subscription Types listed successfully!", subscriptionTypes));
        } catch (error: any) {
            handleError(error, badRequestResponse);
        }
    }

}