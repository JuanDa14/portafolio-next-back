import { Request } from 'express';

export interface IFileUploadRequest extends Request {
	file: {
		tempFilePath: string;
		mimetype: string;
	};
}
