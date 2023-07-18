import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserModel } from '../models/user.model';
import { SpecialistModel } from '../models/specialist.model';


const register = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new UserModel(request.body);
        const errors = user.validateSync();
        if (errors) {
            response.status(StatusCodes.BAD_REQUEST).send(errors);
            return;
        }
        
        if (user.isSpecialist === true) {
            const specialist = new SpecialistModel(request.body);
            specialist.userId = user._id;
            const errors = specialist.validateSync();
            if (errors) {
                response.status(StatusCodes.BAD_REQUEST).send(errors);
                return;
            }
            const result = await specialist.save();
            response.status(StatusCodes.CREATED).send(result);
        } 
        const result = await user.save();
        console.log("User created: ", result);
        response.status(StatusCodes.CREATED).send(result);
    } catch (error: any) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error.message);
    }
};

export default {
    register
};
