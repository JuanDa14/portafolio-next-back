import { Router } from 'express';
import { check } from 'express-validator';
import { sendContactEmail } from '../controllers';

import { validationsReq, validationUrl } from '../middlewares';

const router = Router();

router.post(
	'/',
	[
		validationUrl,
		check('name', 'Su nombre es requerido').notEmpty().isString().trim(),
		check('email', 'El email no es valido').notEmpty().isEmail().normalizeEmail().trim(),
		check('subject', 'El asunto es requerido').notEmpty().isString().trim(),
		check('message', 'El mensaje es requerido').notEmpty().isString().trim(),
		validationsReq,
	],
	sendContactEmail
);

export default router;
