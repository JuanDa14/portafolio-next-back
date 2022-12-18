import { Router } from 'express';
import { check } from 'express-validator';

import { validationsReq, validateFile, isExistProjectInDB, validationOrigin } from '../middlewares';
import { getProjects, createProject } from '../controllers';

const router = Router();

router.get('/', validationOrigin, getProjects);

router.post(
	'/',
	[
		validationOrigin,
		check('title').notEmpty().isString().trim(),
		check('title').custom(isExistProjectInDB),

		check('description').notEmpty().isString().trim(),
		check('technologies').notEmpty().isArray(),
		check('githubUrl').notEmpty().isString().trim(),
		check('websiteUrl').notEmpty().isString().trim(),
		validateFile,
		validationsReq,
	],
	createProject
);

export default router;
