import { Router } from 'express';
import { check } from 'express-validator';
import { sendContactEmail } from '../controllers';

import { validationsReq, validateFile, isExistProjectInDB } from '../middlewares';

const router = Router();

router.post(
	'/',
	[
		check('name', 'Su nombre es requerido').notEmpty().isString().trim(),
		check('email', 'El email no es valido').notEmpty().isEmail().normalizeEmail().trim(),
		check('subject', 'El asunto es requerido').notEmpty().isString().trim(),
		check('message', 'El mensahe es requerido').notEmpty().isString().trim(),
		validationsReq,
	],
	sendContactEmail
);

export default router;
