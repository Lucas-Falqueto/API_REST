import { Router } from 'express';
import userController from '../controllers/UserControllers';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir
// router.get('/', userController.index); // Lista de usuarios
// router.get('/:id', userController.show); // Lista de usuarios

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
Metodos de controller
index -> lista todos os usuarios -> GET
store/create -> cria novo usuário -> POST
delete -> apaga um usuario -> DELETE
show -> mostra um usuario -> GET
update -> atualiza um usuario -> PATCH ou PUT
*/
