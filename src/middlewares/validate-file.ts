import { NextFunction, Request, Response } from 'express';
import { IFileUploadRequest } from '../interfaces';

const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg+xml'];

type Data = {
	ok: boolean;
	message: string;
};

export const validateFile = (req: Request, res: Response<Data>, next: NextFunction) => {
	if (!req.files) {
		return res.status(400).json({ ok: false, message: 'No files were uploaded' });
	}

	const { mimetype } = req.files?.file as IFileUploadRequest['file'];

	const extension = mimetype.split('/')[1];

	if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
		return res.status(404).json({
			ok: false,
			message: 'No file uploaded',
		});
	}

	if (!allowedExtensions.includes(extension)) {
		return res.status(403).json({ ok: false, message: 'Extension not allowed' });
	}

	next();
};
