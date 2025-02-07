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
exports.SubscriptionTypeRepo = void 0;
const mysql_1 = require("../database/mysql");
class SubscriptionTypeRepo {
    static getInstance() {
        if (!this.instance) {
            this.instance = new SubscriptionTypeRepo();
        }
        return this.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS habit.SubscriptionType (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nameType VARCHAR(100) NOT NULL,
            daysDuration INT NOT NULL
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
    insert(subscriptionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO habit.SubscriptionType (nameType, daysDuration) VALUES (?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [subscriptionType.nameType, subscriptionType.daysDuration]);
                console.log('Subscription Type inserted successfully, ID: ', resultado.insertId);
                subscriptionType.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(subscriptionType);
                });
            }
            catch (err) {
                console.error('Error when inserting Subscription Type:', err);
                throw err;
            }
        });
    }
    update(subscriptionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE habit.SubscriptionType SET nameType = ?, daysDuration = ? WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [subscriptionType.nameType, subscriptionType.daysDuration, subscriptionType.id]);
                console.log('Subscription Type updated successfully, ID: ', subscriptionType.id);
                return new Promise((resolve) => {
                    resolve(subscriptionType);
                });
            }
            catch (err) {
                console.error('Error when updating Subscription Type:', err);
                throw err;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM habit.SubscriptionType WHERE id = ?";
            try {
                yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Subscription Type deleted successfully, ID: ', id);
            }
            catch (err) {
                console.error('Error when deleting Subscription Type:', err);
                throw err;
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.SubscriptionType WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                if (resultado.length === 0) {
                    return null;
                }
                return new Promise((resolve) => {
                    resolve(resultado[0]);
                });
            }
            catch (err) {
                console.error('Error when getting Subscription Type by ID:', err);
                throw err;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.SubscriptionType";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error('Error when getting all Subscription Types:', err);
                throw err;
            }
        });
    }
    getBySubscriptionType(subscriptionType) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.SubscriptionType WHERE nameType = ? AND daysDuration = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [subscriptionType.nameType, subscriptionType.daysDuration]);
                if (resultado.length === 0) {
                    return null;
                }
                return new Promise((resolve) => {
                    resolve(resultado[0]);
                });
            }
            catch (err) {
                console.error('Error when getting Subscription Type by name and duration:', err);
                throw err;
            }
        });
    }
}
exports.SubscriptionTypeRepo = SubscriptionTypeRepo;
