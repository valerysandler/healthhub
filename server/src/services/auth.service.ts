import { SpecialistModel } from "../models/specialist.model";
import { IUserModel } from "../models/user.model";
import { jwtService } from "./jwt.service";
import userService from "./user.service";

async function register(user: IUserModel): Promise<string> {
    const userIsExist = await userService.getUserByParams({ email: user.email, phone: user.phone });
    if (userIsExist) {
        return `User with email ${user.email} or phone ${user.phone} already exist`;
    }
    if (user.isSpecialist === true) {
        const specialist = new SpecialistModel(user);
        specialist.userId = user._id;
        const errors = specialist.validateSync();
        if (errors) {
            return errors.message;
        }

        const result = await specialist.save();
        console.log("Specialist created: ", result);
    }
    const result = await user.save();
    console.log("User created: ", result);
    // Create tokens for user and session and save them in database
    const accessToken = await jwtService.generateAccessToken(user._id, user.email, user.phone, user.isSpecialist);
    return accessToken;
}

export const authService = {
    register,
};