import { verificaFormatoData } from "../util/DataUtil";
export class Subscription {
    id: number;
    paymentDate: string;
    typeID: number;
    userID: number;

    constructor(id: number, paymentDate: string, typeID: number, userID: number){
        this.validate(id, paymentDate, typeID, userID);
        this.id = id;
        this.paymentDate = paymentDate;
        this.typeID = typeID;
        this.userID = userID;
    }

    validate(id: number, paymentDate: string, typeID: number, userID: number): void {
        if (id < 0 || !Number.isInteger(id)) {
            throw new Error("Id must be a positive integer.");
        }

        if (!verificaFormatoData(paymentDate)) {
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