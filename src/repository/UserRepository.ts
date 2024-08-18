import { executarComandoSQL } from "../database/mysql";
import { User } from "../model/User";

export class UserRepository {
    private static instance: UserRepository;

    public static getInstance(): UserRepository {
        if (!this.instance) {
            this.instance = new UserRepository();
        }
        return this.instance
    }
    
    constructor(){
        this.createTable();
    }

    private async createTable() {
        const query = `
        CREATE TABLE IF NOT EXISTS habit.User (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )`;

        try {
                const resultado =  await executarComandoSQL(query, []);
                console.log('Query executada com sucesso:', resultado);
        } catch (err) {
            console.error('Error');
        }
    }

    async insert(user:User): Promise<User> {
        const query = "INSERT INTO habit.User (name, email, password) VALUES (?, ?, ?)" ;

        try {
            const resultado = await executarComandoSQL(query, [user.name, user.email, user.password]);
            console.log('User inserted successfully, ID: ', resultado.insertId);
            user.id = resultado.insertId;
            return new Promise<User>((resolve)=> {
                resolve(user);
            })
        } catch (err) {
            console.error('Erro ao inserir o user:', err);
            throw err;
        }
    }

    async update(user:User): Promise<User> {
        const query = "UPDATE habit.User SET name = ?, email = ?, password = ? WHERE (id = ?);"

        try {
            const resultado = await executarComandoSQL(query, [user.name, user.email, user.password, user.id]);
            console.log('User updated successfully, ID: ', resultado);
            return new Promise<User>((resolve)=> {
                resolve(user);
            })
        } catch (err:any) {
            console.error('Error updating user:', err);
            throw err;
        }
    }

    async delete(id:number): Promise<void> {
        const query = "DELETE FROM habit.User WHERE id = ?";

        try {
            await executarComandoSQL(query, [id]);
            console.log('User deleted successfully, ID: ', id);
        } catch (err) {
            console.error('Error when deleting user:', err);
            throw err;
        }
    }

    async findById(id:number): Promise<User | null> {
        const query = "SELECT * FROM habit.User WHERE id = ?";

        try {
            const resultado = await executarComandoSQL(query, [id]);
            if (resultado.length === 0) {
                return null
            }
            return new User(resultado[0].id, resultado[0].name, resultado[0].email, resultado[0].password);
        } catch (err) {
            console.error('Error when searching user:', err);
            throw err;
        }
    }

    async findAll(): Promise<User[]> {
        const query = "SELECT * FROM habit.User";

        try {
            const resultado = await executarComandoSQL(query, []);
            return resultado.map((user:any) => new User(user.id, user.name, user.email, user.password));
        } catch (err) {
            console.error('Error when searching for users:', err);
            throw err;
        }
    }

    async findByEmail(email:string): Promise<User | null> {
        const query = "SELECT * FROM habit.User WHERE email = ?";

        try {
            const resultado = await executarComandoSQL(query, [email]);
            if (resultado.length === 0) {
                return null;
            }
            return new User(resultado[0].id, resultado[0].name, resultado[0].email, resultado[0].password);
        } catch (err) {
            console.error('Error when searching for user:', err);
            throw err;
        }
    }
}