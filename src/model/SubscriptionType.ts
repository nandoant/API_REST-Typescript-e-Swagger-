export class SubscriptionType {
    id: number;
    nameType: string;
    daysDuration: number;

    constructor(id: number, nameType: string, durationDays: number){
        this.validate(id, nameType, durationDays);
        this.id = id;
        this.nameType = nameType;
        this.daysDuration = durationDays;
    }

    validate(id: number, nomeTipo: string, duracaoDias: number): void {
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