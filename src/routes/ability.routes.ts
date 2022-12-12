import { Router } from 'express';
import { check, oneOf } from 'express-validator';

import { validationsReq, validateFile, isExistAbilityInDB, validationUrl } from '../middlewares';
import { createAbility, getAbilities } from './../controllers';

const router = Router();

router.get('/', validationUrl, getAbilities);

router.post(
	'/',
	[
		validationUrl,
		check('name').notEmpty().isString().trim(),
		check('name').custom(isExistAbilityInDB),
		oneOf([
			check('type').equals('Frontend').isString().trim(),
			check('type').equals('Backend').isString().trim(),
			check('type').equals('Database').isString().trim(),
		]),
		oneOf([
			check('level').equals('Básico').isString().trim(),
			check('level').equals('Intermedio').isString().trim(),
			check('level').equals('Avanzado').isString().trim(),
		]),
		validateFile,
		validationsReq,
	],
	createAbility
);

export default router;
