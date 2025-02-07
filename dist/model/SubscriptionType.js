"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionType = void 0;
class SubscriptionType {
    constructor(id, nameType, durationDays) {
        this.validate(id, nameType, durationDays);
        this.id = id;
        this.nameType = nameType;
        this.daysDuration = durationDays;
    }
    validate(id, nomeTipo, duracaoDias) {
        if (id < 0 || !Number.isInteger(id)) {
            throw new Error("Id must be a positive integer.");
        }
        if (typeof nomeTipo !== "string" || nomeTipo.length < 0) {
            throw new Error("Name must be a string with at least 1 characters.");
        }
        if (duracaoDias <= 0 || !Number.isInteger(duracaoDias)) {
            throw new Error("DuracaoDias must be a positive integer.");
        }
    }
}
exports.SubscriptionType = SubscriptionType;
