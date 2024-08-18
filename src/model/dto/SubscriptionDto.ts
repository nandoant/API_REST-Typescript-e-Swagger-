export class SubscriptionDto {
    id: number;
    paymentDate: string;
    typeID: number;
    userID: number;

    constructor(id: number, paymentDate: string, typeID: number, userID: number){
        this.id = id;
        this.paymentDate = paymentDate;
        this.typeID = typeID;
        this.userID = userID;
    }
}