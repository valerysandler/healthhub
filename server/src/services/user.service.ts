import { IUserModel, UserModel } from "../models/user.model";

// Get user by params (email, phone)
const getUserByParams = async (params: {}): Promise<IUserModel | null> => { // params: { email: string, phone: string }
  const user = await UserModel.findOne(params).exec();
  return user;
}

const getAllUsersFromDB = async (): Promise<IUserModel[] | void> => {
  try {
    const users = await UserModel.find().exec();
    console.log(users);
    return users;

  } catch (error: any) {
    console.log(error.message);
  }
}

export default {
  getUserByParams,
  getAllUsersFromDB
};


