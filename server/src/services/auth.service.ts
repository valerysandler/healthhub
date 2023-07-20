import { SpecialistModel } from "../models/specialist.model";
import { IUserModel } from "../models/user.model";
import { jwtService } from "./jwt.service";
import userService from "./user.service";

async function register(user: IUserModel) {
    const userIsExist = await userService.getUserByParams({ email: user.email, phone: user.phone });
    if (userIsExist) {
        return `User with email ${user.email} or phone ${user.phone} already exist`;
    }
    if (user.isSpecialist === true) {
        const specialist = new SpecialistModel(user);
        specialist.userId = user._id;
        const errors = specialist.validateSync();
        if (errors) {
            return errors;
        }

        const result = await specialist.save();
        console.log("Specialist created: ", result);
    }
    const result = await user.save();
    console.log("User created: ", result);
    await jwtService.generateAccessToken(result.id, result.email, result.phone, result.isSpecialist);
    await jwtService.generateRefreshToken(result.id, result.email, result.phone, result.isSpecialist);
    // Save tokens in database
    // const session = new SessionModel({ userId: result.id, accessToken: accessToken, refreshToken: refreshToken });
    // await session.save();
    // console.log("Session created: ", session);
    // return { accessToken, refreshToken };
    
    
}

export const authService = {
    register,
};