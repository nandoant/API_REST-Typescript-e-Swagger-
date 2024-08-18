export class SubscriptionTypeDto{
    id: number;
    nameType: string;
    daysDuration: number;

    constructor(id: number, nomeTipo: string, duracaoDias: number){
        this.id = id;
        this.nameType = nomeTipo;
        this.daysDuration = duracaoDias;
    }
}