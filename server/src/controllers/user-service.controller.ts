import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserModel } from '../models/user.model';


const getUserByParams = async (request: Request, response: Response, next: NextFunction) => (params: string) => {
    try {
        // Get user from DB
        
        
    } catch(error: any) {
        console.log("Error: ", error.message);
    }
}