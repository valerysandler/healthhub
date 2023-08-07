import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const generateAccessToken = async (id: string, email: string, phone: string, isSpecialist: boolean) => {
    const payload = {
        id,
        email,
        phone,
        isSpecialist
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '24h' });
}

const generateRefreshToken = async (id: string, email: string, phone: string, isSpecialist: boolean) => {
    const payload = {
        id,
        email,
        phone,
        isSpecialist
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '30d' });
}

const verifyToken = async (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
}

export const jwtService = {
    generateAccessToken,
    generateRefreshToken,
    verifyToken
};