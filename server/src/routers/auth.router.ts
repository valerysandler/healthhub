import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

// Test
router.get('/test', (request, response) => {
    response.send('Auth test');
});

router.post('/register', authController.register);

export const authRouter = router;