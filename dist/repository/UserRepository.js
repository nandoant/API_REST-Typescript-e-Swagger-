"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const mysql_1 = require("../database/mysql");
const User_1 = require("../model/User");
class UserRepository {
    static getInstance() {
        if (!this.instance) {
            this.instance = new UserRepository();
        }
        return this.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS habit.User (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL
        )`;
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                console.log('Query executada com sucesso:', resultado);
            }
            catch (err) {
                console.error('Error');
            }
        });
    }
    insert(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO habit.User (name, email, password) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [user.name, user.email, user.password]);
                console.log('User inserted successfully, ID: ', resultado.insertId);
                user.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(user);
                });
            }
            catch (err) {
                console.error('Erro ao inserir o user:', err);
                throw err;
            }
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE habit.User SET name = ?, email = ?, password = ? WHERE (id = ?);";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [user.name, user.email, user.password, user.id]);
                console.log('User updated successfully, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(user);
                });
            }
            catch (err) {
                console.error('Error updating user:', err);
                throw err;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM habit.User WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('User deleted successfully, ID: ', id);
            }
            catch (err) {
                console.error('Error when deleting user:', err);
                throw err;
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.User WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                if (resultado.length === 0) {
                    return null;
                }
                return new User_1.User(resultado[0].id, resultado[0].name, resultado[0].email, resultado[0].password);
            }
            catch (err) {
                console.error('Error when searching user:', err);
                throw err;
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.User";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return resultado.map((user) => new User_1.User(user.id, user.name, user.email, user.password));
            }
            catch (err) {
                console.error('Error when searching for users:', err);
                throw err;
            }
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.User WHERE email = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [email]);
                if (resultado.length === 0) {
                    return null;
                }
                return new User_1.User(resultado[0].id, resultado[0].name, resultado[0].email, resultado[0].password);
            }
            catch (err) {
                console.error('Error when searching for user:', err);
                throw err;
            }
        });
    }
}
exports.UserRepository = UserRepository;
