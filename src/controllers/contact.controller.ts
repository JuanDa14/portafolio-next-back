import { Response, Request } from 'express';
import { sendEmail } from '../config';

type Data = {
	ok: boolean;
	message: string;
};

export const sendContactEmail = async (req: Request, res: Response<Data>) => {
	const { name, email, subject, message } = req.body;
	try {
		await sendEmail(name, email, subject, message);

		res.status(200).json({
			ok: true,
			message: 'Mensaje enviado correctamente',
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: 'Error al enviar el mensaje',
		});
	}
};
