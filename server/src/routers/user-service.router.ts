import { Router } from 'express';

const router = Router();

// Routes
router.get("/", (request, response) => {
    response.send("User service");
});



export const  userServiceRouter = Router();

