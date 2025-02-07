"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const DataUtil_1 = require("../util/DataUtil");
class Subscription {
    constructor(id, paymentDate, typeID, userID) {
        this.validate(id, paymentDate, typeID, userID);
        this.id = id;
        this.paymentDate = paymentDate;
        this.typeID = typeID;
        this.userID = userID;
    }
    validate(id, paymentDate, typeID, userID) {
        if (id < 0 || !Number.isInteger(id)) {
            throw new Error("Id must be a positive integer.");
        }
        if (!(0, DataUtil_1.verificaFormatoData)(paymentDate)) {
            throw new Error("Payment Date must be in the format dd/mm/yyyy.");
        }
        if (typeID < 0 || !Number.isInteger(typeID)) {
            throw new Error("Type ID must be a positive integer.");
        }
        if (userID < 0 || !Number.isInteger(userID)) {
            throw new Error("User ID must be a positive integer.");
        }
    }
}
exports.Subscription = Subscription;
