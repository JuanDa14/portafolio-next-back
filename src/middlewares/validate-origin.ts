import { NextFunction, Request, Response } from 'express';

const whiteList = [process.env.FRONTEND_URL as string];

type Data = {
	ok: boolean;
	message: string;
};

export const validationOrigin = (req: Request, res: Response<Data>, next: NextFunction) => {
	// if (whiteList.includes(process.env.FRONTEND_URL as string)) {
	// 	next();
	// } else {
	// 	return res.status(400).json({
	// 		ok: false,
	// 		message: 'No se puede realizar la petición',
	// 	});
	// }
	next();
};
