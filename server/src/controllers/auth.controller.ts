import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserModel } from '../models/user.model';
import { SpecialistModel } from '../models/specialist.model';
import userService from '../services/user.service';
import { authService } from '../services/auth.service';

// Register 
const register = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new UserModel(request.body);
        // Validator for input data 
        const errors = user.validateSync();
        if (errors) {
            response.status(StatusCodes.BAD_REQUEST).send(errors);
            return;
        }
        // Check if user exist 
        // Create tokens for user and session and save them in database
        const tokens = await authService.register(user);
        console.log(tokens);
        response.status(StatusCodes.CREATED).send(tokens);

    } catch (error: any) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
};

export default {
    register
};
