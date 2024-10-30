import express from 'express';
import { store } from '../../controllers/token/TokenController.js';

const router = express.Router();

router.post('/', store);

export default router;
