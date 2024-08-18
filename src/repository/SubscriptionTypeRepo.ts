import { executarComandoSQL } from "../database/mysql";
import { SubscriptionType } from "../model/SubscriptionType";

export class SubscriptionTypeRepo {
    private static instance: SubscriptionTypeRepo;

    public static getInstance(): SubscriptionTypeRepo {
        if (!this.instance) {
            this.instance = new SubscriptionTypeRepo();
        }
        return this.instance
    }
    
    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS habit.SubscriptionType (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nameType VARCHAR(100) NOT NULL,
            daysDuration INT NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insert(subscriptionType:SubscriptionType): Promise<SubscriptionType> {
        const query = "INSERT INTO habit.SubscriptionType (nameType, daysDuration) VALUES (?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [subscriptionType.nameType, subscriptionType.daysDuration]);
            console.log('Subscription Type inserted successfully, ID: ', resultado.insertId);
            subscriptionType.id = resultado.insertId;
            return new Promise<SubscriptionType>((resolve)=> {
                resolve(subscriptionType);
            })
        } catch (err) {
            console.error('Error when inserting Subscription Type:', err);
            throw err;
        }
    }

    async update(subscriptionType:SubscriptionType): Promise<SubscriptionType> {
        const query = "UPDATE habit.SubscriptionType SET nameType = ?, daysDuration = ? WHERE id = ?";

        try {
            await executarComandoSQL(query, [subscriptionType.nameType, subscriptionType.daysDuration, subscriptionType.id]);
            console.log('Subscription Type updated successfully, ID: ', subscriptionType.id);
            return new Promise<SubscriptionType>((resolve)=> {
                resolve(subscriptionType);
            })
        } catch (err) {
            console.error('Error when updating Subscription Type:', err);
            throw err;
        }
    }

    async delete(id:number): Promise<void> {
        const query = "DELETE FROM habit.SubscriptionType WHERE id = ?";

        try {
            await executarComandoSQL(query, [id]);
            console.log('Subscription Type deleted successfully, ID: ', id);
        } catch (err) {
            console.error('Error when deleting Subscription Type:', err);
            throw err;
        }
    }

    async getById(id:number): Promise<SubscriptionType | null> {
        const query = "SELECT * FROM habit.SubscriptionType WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            if (resultado.length === 0) {
                return null;
            }
            return new Promise<SubscriptionType>((resolve)=> {
                resolve(resultado[0]);
            })
        } catch (err) {
            console.error('Error when getting Subscription Type by ID:', err);
            throw err;
        }
    }

    async getAll(): Promise<SubscriptionType[]> {
        const query = "SELECT * FROM habit.SubscriptionType";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<SubscriptionType[]>((resolve)=> {
                resolve(resultado);
            })
        } catch (err) {
            console.error('Error when getting all Subscription Types:', err);
            throw err;
        }
    }

    async getBySubscriptionType(subscriptionType:SubscriptionType): Promise<SubscriptionType | null> {
        const query = "SELECT * FROM habit.SubscriptionType WHERE nameType = ? AND daysDuration = ?";

        try {
            const resultado = await executarComandoSQL(query, [subscriptionType.nameType, subscriptionType.daysDuration]);
            if (resultado.length === 0) {
                return null;
            }
            return new Promise<SubscriptionType>((resolve)=> {
                resolve(resultado[0]);
            })
        } catch (err) {
            console.error('Error when getting Subscription Type by name and duration:', err);
            throw err;
        }
    }
}