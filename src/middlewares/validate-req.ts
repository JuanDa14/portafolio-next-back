import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validationsReq = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req);

	const errorsArray = errors.array();

	const errorsMap = errorsArray.map((error) => ({ field: error.param, message: error.msg }));

	if (errorsArray.length > 0) {
		return res.status(400).json({
			ok: false,
			errors: errorsMap,
		});
	}

	next();
};
