import { NextFunction, Request, Response } from 'express';

const url = process.env.FRONTEND_URL;

type Data = {
	ok: boolean;
	message: string;
};

export const validationUrl = (req: Request, res: Response<Data>, next: NextFunction) => {
	if (req.headers.origin === url) {
		next();
	} else {
		return res.status(400).json({
			ok: false,
			message: 'No se puede realizar la petición',
		});
	}
};
