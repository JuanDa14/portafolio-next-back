import { NextFunction, Request, Response } from 'express';

type Data = {
	ok: boolean;
	message: string;
};

export const validationOrigin = (req: Request, res: Response<Data>, next: NextFunction) => {
	if (req.headers.origin?.toString() === process.env.FRONTEND_URL) {
		next();
	} else {
		return res.status(400).json({
			ok: false,
			message: 'Dominio no permitido',
		});
	}
};
