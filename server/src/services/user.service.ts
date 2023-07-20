import { IUserModel, UserModel } from "../models/user.model";

// Get user by params (email, phone)
const getUserByParams = async (params: {} ): Promise<IUserModel | null> => { // params: { email: string, phone: string }
    const user = await UserModel.findOne(params); 
    return user;
  }
export default {
    getUserByParams
};