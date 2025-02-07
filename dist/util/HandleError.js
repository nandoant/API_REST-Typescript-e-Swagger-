"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = handleError;
const BasicResponseDto_1 = require("../model/dto/BasicResponseDto");
const CustomErrors_1 = require("./CustomErrors");
function handleError(error, badRequestResponse, notFoundResponse, conflictResponse) {
    if (error instanceof CustomErrors_1.NotFoundError && notFoundResponse) {
        notFoundResponse(404, new BasicResponseDto_1.BasicResponseDto("", error.message));
    }
    else if (error instanceof CustomErrors_1.ValidationError) {
        badRequestResponse(400, new BasicResponseDto_1.BasicResponseDto("", error.message));
    }
    else if (error instanceof CustomErrors_1.ConflictError && conflictResponse) {
        conflictResponse(409, new BasicResponseDto_1.BasicResponseDto("", error.message));
    }
    else {
        throw badRequestResponse(400, error.message);
    }
}
