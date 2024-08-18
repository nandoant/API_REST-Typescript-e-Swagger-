export class SubscriptionDtoNoID {
    paymentDate: string;
    typeID: number;
    userID: number;

    constructor(paymentDate: string, typeID: number, userID: number){
        this.paymentDate = paymentDate;
        this.typeID = typeID;
        this.userID = userID;
    }
}