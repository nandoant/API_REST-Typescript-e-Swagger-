import { UserDTONoID } from "../model/dto/noID/UserDTONoID";
import { UserDTO } from "../model/dto/UserDTO";
import { User } from "../model/User";
import { SubscriptionRepository } from "../repository/SubscriptionRepository";
import { UserRepository } from "../repository/UserRepository";
import { ConflictError, NotFoundError, ValidationError } from "../util/CustomErrors";

export class UserService {
    private userRepo = UserRepository.getInstance();
    private subscriptionRepo = SubscriptionRepository.getInstance();

    async createUser(userDTO: UserDTONoID): Promise<User> {
        const user = this.convertDTOToUser({ id: 0, name: userDTO.name, email: userDTO.email, password: userDTO.password });

        await this.validateEmailAvailability(user.email);

        const newUser = await this.userRepo.insert(user);
        console.log("User - Service - Insert ", newUser);
        return newUser;
    }

    async updateUser(userDTO: UserDTO): Promise<User> {
        const user = this.convertDTOToUser(userDTO);

        const foundUser = await this.retrieveUserById(user);

        await this.checkUserEmailConflict(foundUser, user);

        await this.userRepo.update(user);
        console.log("User - Service - Update ", user);
        return user;
    }

    async deleteUser(userDTO: UserDTO): Promise<User> {
        console.log("User - Service - Delete ", userDTO);
        const user = this.convertDTOToUser(userDTO);

        const foundUser = await this.retrieveUserById(user);

        this.assertUserMatches(foundUser, user);

        await this.subscriptionRepo.deleteByUserID(foundUser.id);

        await this.userRepo.delete(foundUser.id);
        console.log("User - Service - Delete ", user);
        return user;
    }

    async filterUser(id: number): Promise<User> {
        console.log("User - Service - Filter ", id);
        const user = await this.userRepo.findById(id);

        if (!user) throw new NotFoundError(`User with ID ${id} not found`);

        console.log("User - Service - Filter ", user);
        return user;
    }

    async listAllUsers(): Promise<User[]> {
        const users = await this.userRepo.findAll();
        console.log("User - Service - List All ", users);
        return users;
    }

    private assertUserMatches(foundUser: User, user: User) {
        if (foundUser.email !== user.email)
            throw new ValidationError(`Provided email (${user.email}) does not match the existing email`);
        if (foundUser.password !== user.password)
            throw new ValidationError(`Provided password does not match the existing password`);
        if (foundUser.name !== user.name)
            throw new ValidationError(`Provided name (${user.name}) does not match the existing name`);
    }

    private async validateEmailAvailability(email: string) {
        const foundUser = await this.userRepo.findByEmail(email);
        if (foundUser)
            throw new ConflictError(`Email (${email}) is already associated with another user`);
    }

    private async retrieveUserById(user: User) {
        const foundUser = await this.userRepo.findById(user.id);
        if (!foundUser)
            throw new NotFoundError(`User with ID ${user.id} not found`);
        return foundUser;
    }

    private async checkUserEmailConflict(foundUser: User, user: User) {
        if (foundUser.email !== user.email) {
            const foundUserEmail = await this.userRepo.findByEmail(user.email);
            if (foundUserEmail)
                throw new ConflictError(`Email (${user.email}) is already associated with another user`);
        }
    }

    private convertDTOToUser(userDTO: UserDTO): User {
        return new User(userDTO.id, userDTO.name, userDTO.email, userDTO.password);
    }
}
