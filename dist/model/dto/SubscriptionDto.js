"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionDto = void 0;
class SubscriptionDto {
    constructor(id, paymentDate, typeID, userID) {
        this.id = id;
        this.paymentDate = paymentDate;
        this.typeID = typeID;
        this.userID = userID;
    }
}
exports.SubscriptionDto = SubscriptionDto;
