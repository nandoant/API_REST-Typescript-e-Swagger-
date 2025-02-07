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
exports.SubscriptionRepository = void 0;
const mysql_1 = require("../database/mysql");
const DataUtil_1 = require("../util/DataUtil");
class SubscriptionRepository {
    static getInstance() {
        if (!this.instance) {
            this.instance = new SubscriptionRepository();
        }
        return this.instance;
    }
    constructor() {
        this.createTable();
    }
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        CREATE TABLE IF NOT EXISTS habit.Subscription (
            id INT AUTO_INCREMENT PRIMARY KEY,
            paymentDate date NOT NULL,
            typeID INT NOT NULL,
            userID INT NOT NULL
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
    insert(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "INSERT INTO habit.Subscription (paymentDate, typeID, userID) VALUES (?, ?, ?)";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [(0, DataUtil_1.stringParaData)(subscription.paymentDate), subscription.typeID, subscription.userID]);
                console.log('Subscription inserted successfully, ID: ', resultado.insertId);
                subscription.id = resultado.insertId;
                return new Promise((resolve) => {
                    resolve(subscription);
                });
            }
            catch (err) {
                console.error('Error when entering subscription:', err);
                throw err;
            }
        });
    }
    update(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "UPDATE habit.Subscription SET paymentDate = ?, typeID = ?, userID = ? WHERE (id = ?);";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [(0, DataUtil_1.stringParaData)(subscription.paymentDate), subscription.typeID, subscription.userID, subscription.id]);
                console.log('Subscription updated successfully, ID: ', resultado);
                return new Promise((resolve) => {
                    resolve(subscription);
                });
            }
            catch (err) {
                console.error('Error when updating subscription:', err);
                throw err;
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM habit.Subscription WHERE (id = ?);";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [id]);
                console.log('Subscription deleted successfully, ID: ', resultado);
            }
            catch (err) {
                console.error('Error when deleting subscription:', err);
                throw err;
            }
        });
    }
    findByID(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.Subscription WHERE id = ?";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [userID]);
                if (resultado.length === 0) {
                    return null;
                }
                return new Promise((resolve) => {
                    resolve(resultado[0]);
                });
            }
            catch (err) {
                console.error('Error when searching a subscription:', err);
                throw err;
            }
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.Subscription";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, []);
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error('Error when searching subscriptions:', err);
                throw err;
            }
        });
    }
    findBySubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "SELECT * FROM habit.Subscription WHERE (paymentDate = ? AND typeID = ? AND userID = ? AND id = ?);";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [(0, DataUtil_1.stringParaData)(subscription.paymentDate), subscription.typeID, subscription.userID, subscription.id]);
                if (resultado.length === 0) {
                    return null;
                }
                return new Promise((resolve) => {
                    resolve(resultado);
                });
            }
            catch (err) {
                console.error('Error when searching a subscription:', err);
                throw err;
            }
        });
    }
    deleteByUserID(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = "DELETE FROM habit.Subscription WHERE (userID = ?);";
            try {
                const resultado = yield (0, mysql_1.executarComandoSQL)(query, [userID]);
                console.log('Subscription deleted successfully, ID: ', resultado);
            }
            catch (err) {
                console.error('Error when deleting subscription:', err);
                throw err;
            }
        });
    }
}
exports.SubscriptionRepository = SubscriptionRepository;
