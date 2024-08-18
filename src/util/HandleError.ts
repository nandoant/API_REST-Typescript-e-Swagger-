import { TsoaResponse } from "tsoa";
import { BasicResponseDto } from "../model/dto/BasicResponseDto";
import { ConflictError, NotFoundError, ValidationError } from "./CustomErrors";

export function handleError(
    error: any,
    badRequestResponse: TsoaResponse<400, BasicResponseDto>,
    notFoundResponse?: TsoaResponse<404, BasicResponseDto>,
    conflictResponse?: TsoaResponse<409, BasicResponseDto>
): void {
    if (error instanceof NotFoundError && notFoundResponse) {
        notFoundResponse(404, new BasicResponseDto("", error.message));
    } else if (error instanceof ValidationError) {
        badRequestResponse(400, new BasicResponseDto("", error.message));
    } else if (error instanceof ConflictError && conflictResponse) {
        conflictResponse(409, new BasicResponseDto("", error.message));
    } else {
        throw badRequestResponse(400, error.message);
    }
}