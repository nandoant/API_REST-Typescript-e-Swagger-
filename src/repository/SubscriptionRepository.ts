import { executarComandoSQL } from "../database/mysql";
import { Subscription } from "../model/Subscription";
import { stringParaData } from "../util/DataUtil";

export class SubscriptionRepository{
    private static instance: SubscriptionRepository;

    public static getInstance(): SubscriptionRepository {
        if (!this.instance) {
            this.instance = new SubscriptionRepository();
        }
        return this.instance
    }
    
    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS habit.Subscription (
            id INT AUTO_INCREMENT PRIMARY KEY,
            paymentDate date NOT NULL,
            typeID INT NOT NULL,
            userID INT NOT NULL,
            FOREIGN KEY (typeID) REFERENCES subscriptionType(ID),
            FOREIGN KEY (userID) REFERENCES user(ID)
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insert(subscription:Subscription): Promise<Subscription> {
        const query = "INSERT INTO habit.Subscription (paymentDate, typeID, userID) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [stringParaData(subscription.paymentDate), subscription.typeID, subscription.userID]);
            console.log('Subscription inserted successfully, ID: ', resultado.insertId);
            subscription.id = resultado.insertId;
            return new Promise<Subscription>((resolve)=> {
                resolve(subscription);
            })
        } catch (err) {
            console.error('Error when entering subscription:', err);
            throw err;
        }
    }

    async update(subscription:Subscription): Promise<Subscription> {
        const query = "UPDATE habit.Subscription SET paymentDate = ?, typeID = ?, userID = ? WHERE (id = ?);"

        try {
            const resultado = await executarComandoSQL(query, [stringParaData(subscription.paymentDate), subscription.typeID, subscription.userID, subscription.id]);
            console.log('Subscription updated successfully, ID: ', resultado);
            return new Promise<Subscription>((resolve)=> {
                resolve(subscription);
            })
        } catch (err:any) {
            console.error('Error when updating subscription:', err);
            throw err;
        }
    }

    async delete(id:number): Promise<void> {
        const query = "DELETE FROM habit.Subscription WHERE (id = ?);"

        try {
            const resultado = await executarComandoSQL(query, [id]);
            console.log('Subscription deleted successfully, ID: ', resultado);
        } catch (err:any) {
            console.error('Error when deleting subscription:', err);
            throw err;
        }
    }

    async findByID(userID:number): Promise<Subscription | null> {
        const query = "SELECT * FROM habit.Subscription WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [userID]);
            if (resultado.length === 0) {
                return null
            }
            return new Promise<Subscription>((resolve)=> {
                resolve(resultado[0]);
            })
        } catch (err) {
            console.error('Error when searching a subscription:', err);
            throw err;
        }
    }

    async findAll(): Promise<Subscription[]> {
        const query = "SELECT * FROM habit.Subscription";

        try {
            const resultado = await executarComandoSQL(query, []);
            return new Promise<Subscription[]>((resolve)=> {
                resolve(resultado);
            })
        } catch (err) {
            console.error('Error when searching subscriptions:', err);
            throw err;
        }
    }

    async findBySubscription(subscription:Subscription): Promise<Subscription | null> {
        const query = "SELECT * FROM habit.Subscription WHERE (paymentDate = ? AND typeID = ? AND userID = ? AND id = ?);"

        try {
            const resultado = await executarComandoSQL(query, [stringParaData(subscription.paymentDate), subscription.typeID, subscription.userID, subscription.id]);
            if (resultado.length === 0) {
                return null
            }
            return new Promise<Subscription>((resolve)=> {
                resolve(resultado);
            })
        } catch (err) {
            console.error('Error when searching a subscription:', err);
            throw err;
        }
    }

    async deleteByUserID(userID:number): Promise<void> {
        const query = "DELETE FROM habit.Subscription WHERE (userID = ?);"

        try {
            const resultado = await executarComandoSQL(query, [userID]);
            console.log('Subscription deleted successfully, ID: ', resultado);
        } catch (err:any) {
            console.error('Error when deleting subscription:', err);
            throw err;
        }
    }

}