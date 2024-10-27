import express from 'express';
import { index, register, getRoleById, deleteRoleById, update } from '../../controllers/model/roleControllers.js';
const router = express.Router();

// Rota para listar todas as funções
router.get('/', index);

router.get('/:id', getRoleById)

router.post('/register', register)

router.patch('/update/:id', update)

router.delete('/delete/:id', deleteRoleById)

export default router;
