import { Controller, Delete, Get, Post, Put, Query } from "tsoa";
import { Body, Res, Route, Tags, TsoaResponse } from "@tsoa/runtime";
import { UserDTONoID } from "../model/dto/noID/UserDTONoID";
import { UserDTO } from "../model/dto/UserDTO";
import { UserService } from "../service/UserService";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { handleError } from "../util/HandleError";

@Route("user")
@Tags("User")
export class UserController extends Controller {
    private userService = new UserService();

    @Post()
    public async createUser(
        @Body() userDTO: UserDTONoID,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() conflictResponse: TsoaResponse<409, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<201, BasicResponseDto>
    ): Promise<void> {
        try {
            const user = await this.userService.createUser(userDTO);
            return successResponse(201, new BasicResponseDto("User created successfully!", user));
        } catch (error: any) {
            handleError(error, badRequestResponse, undefined, conflictResponse);
        }
    }

    @Put()
    public async updateUser(
        @Body() userDTO: UserDTO,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() conflictResponse: TsoaResponse<409, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const user = await this.userService.updateUser(userDTO);
            return successResponse(200, new BasicResponseDto("User updated successfully!", user));
        } catch (error: any) {
            handleError(error,badRequestResponse, notFoundResponse, conflictResponse);
        }
    }

    @Delete()
    public async deleteUser(
        @Body() userDTO: UserDTO,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const user = await this.userService.deleteUser(userDTO);
            return successResponse(200, new BasicResponseDto("User deleted successfully!", user));
        } catch (error: any) {
            handleError(error,badRequestResponse, notFoundResponse);
        }
    }

    @Get()
    public async getUser(
        @Query() id: number,
        @Res() notFoundResponse: TsoaResponse<404, BasicResponseDto>,
        @Res() badRequestResponse: TsoaResponse<400, BasicResponseDto>,
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        try {
            const user = await this.userService.filterUser(id);
            return successResponse(200, new BasicResponseDto("User found successfully!", user));
        } catch (error: any) {
            handleError(error,badRequestResponse, notFoundResponse);
        }
    }

    @Get("all")
    public async listAllUsers(
        @Res() successResponse: TsoaResponse<200, BasicResponseDto>
    ): Promise<void> {
        const users = await this.userService.listAllUsers();
        return successResponse(200, new BasicResponseDto("Users retrieved successfully!", users));
    }
}
