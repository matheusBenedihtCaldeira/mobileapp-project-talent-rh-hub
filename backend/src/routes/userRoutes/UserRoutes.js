import express from 'express';
import { index, register, getUserById, update, deleteUserById} from '../../controllers/user/UserController.js';
import loginRequired from '../../middlewares/loginRequired.js';
const router = express.Router();

router.get('/', loginRequired, index);

router.get('/:id', getUserById, )

router.post('/register', loginRequired, register);

router.patch('/update/:id', loginRequired, update);

router.delete('/delete/:id', loginRequired, deleteUserById);

export default router;
