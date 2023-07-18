import { UserModel } from "../models/user.model";

const getUserByParams = async (params: string) => {
    try {
        const user = await UserModel.findOne({ params });
        return user;
    }
    catch (error) {
        throw error;
    }
} 

export default {
    getUserByParams
};