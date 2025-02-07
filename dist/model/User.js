"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email, password) {
        this.validate(id, name, email, password);
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    validate(id, name, email, password) {
        if (id < 0 || !Number.isInteger(id)) {
            throw new Error("Id must be a positive integer.");
        }
        if (typeof name !== "string" || name.length < 3) {
            throw new Error("Name must be a string with at least 3 characters.");
        }
        if (typeof email !== "string" || email.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Email must be a valid email address.");
        }
        if (typeof password !== "string" || password.length < 6) {
            throw new Error("Password must be a string with at least 6 characters.");
        }
    }
}
exports.User = User;
