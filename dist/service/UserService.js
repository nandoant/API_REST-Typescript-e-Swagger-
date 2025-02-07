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
exports.UserService = void 0;
const User_1 = require("../model/User");
const SubscriptionRepository_1 = require("../repository/SubscriptionRepository");
const UserRepository_1 = require("../repository/UserRepository");
const CustomErrors_1 = require("../util/CustomErrors");
class UserService {
    constructor() {
        this.userRepo = UserRepository_1.UserRepository.getInstance();
        this.subscriptionRepo = SubscriptionRepository_1.SubscriptionRepository.getInstance();
    }
    createUser(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.convertDTOToUser({ id: 0, name: userDTO.name, email: userDTO.email, password: userDTO.password });
            yield this.validateEmailAvailability(user.email);
            const newUser = yield this.userRepo.insert(user);
            console.log("User - Service - Insert ", newUser);
            return newUser;
        });
    }
    updateUser(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = this.convertDTOToUser(userDTO);
            const foundUser = yield this.retrieveUserById(user);
            yield this.checkUserEmailConflict(foundUser, user);
            yield this.userRepo.update(user);
            console.log("User - Service - Update ", user);
            return user;
        });
    }
    deleteUser(userDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("User - Service - Delete ", userDTO);
            const user = this.convertDTOToUser(userDTO);
            const foundUser = yield this.retrieveUserById(user);
            this.assertUserMatches(foundUser, user);
            yield this.subscriptionRepo.deleteByUserID(foundUser.id);
            yield this.userRepo.delete(foundUser.id);
            console.log("User - Service - Delete ", user);
            return user;
        });
    }
    filterUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("User - Service - Filter ", id);
            const user = yield this.userRepo.findById(id);
            if (!user)
                throw new CustomErrors_1.NotFoundError(`User with ID ${id} not found`);
            console.log("User - Service - Filter ", user);
            return user;
        });
    }
    listAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepo.findAll();
            console.log("User - Service - List All ", users);
            return users;
        });
    }
    assertUserMatches(foundUser, user) {
        if (foundUser.email !== user.email)
            throw new CustomErrors_1.ValidationError(`Provided email (${user.email}) does not match the existing email`);
        if (foundUser.password !== user.password)
            throw new CustomErrors_1.ValidationError(`Provided password does not match the existing password`);
        if (foundUser.name !== user.name)
            throw new CustomErrors_1.ValidationError(`Provided name (${user.name}) does not match the existing name`);
    }
    validateEmailAvailability(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.userRepo.findByEmail(email);
            if (foundUser)
                throw new CustomErrors_1.ConflictError(`Email (${email}) is already associated with another user`);
        });
    }
    retrieveUserById(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.userRepo.findById(user.id);
            if (!foundUser)
                throw new CustomErrors_1.NotFoundError(`User with ID ${user.id} not found`);
            return foundUser;
        });
    }
    checkUserEmailConflict(foundUser, user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (foundUser.email !== user.email) {
                const foundUserEmail = yield this.userRepo.findByEmail(user.email);
                if (foundUserEmail)
                    throw new CustomErrors_1.ConflictError(`Email (${user.email}) is already associated with another user`);
            }
        });
    }
    convertDTOToUser(userDTO) {
        return new User_1.User(userDTO.id, userDTO.name, userDTO.email, userDTO.password);
    }
}
exports.UserService = UserService;
