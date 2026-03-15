import express from 'express';
import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

router.post('/register', registerUser);

export default router;