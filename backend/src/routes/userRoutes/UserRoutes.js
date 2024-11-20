import express from 'express';
import { index, register, getUserById, update, deleteUserById} from '../../controllers/user/userController.js';
import loginRequired from '../../middlewares/loginRequired.js';

const router = express.Router();

router.get('/', index);

router.get('/:id', getUserById)

router.post('/register', register)

router.patch('/update/:id', update)

router.delete('/delete/:id', deleteUserById)

export default router;
