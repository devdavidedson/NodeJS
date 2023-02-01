import { Router } from "express";

import * as homeControllers from '../controllers/homeControllers';
import * as infosControllers from '../controllers/infosControllers';
import * as userControllers from '../controllers/userControllers';

const router = Router();

router.get('/', homeControllers.home);

router.get('/contato', infosControllers.contato);

router.get('/sobre', infosControllers.sobre);

router.get('/nome', userControllers.nome);

router.get('/idade', userControllers.idadeInicial);

router.post('/idade-resultado', userControllers.idadeResultado);

export default router;