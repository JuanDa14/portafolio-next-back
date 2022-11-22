import { v2 as cloudinary } from 'cloudinary';
import { FileArray } from 'express-fileupload';
import { IFileUploadRequest } from '../interfaces';

cloudinary.config(process.env.CLOUDINARY_URL as string);

type Data = {
	ok: boolean;
	message: string;
};

export const saveFiles = async (
	req: FileArray,
	image: string,
	collection: string,
	method: string
): Promise<Data> => {
	const { tempFilePath } = req?.file as IFileUploadRequest['file'];

	try {
		if (method === 'PUT' || method === 'DELETE') {
			const nameArray = image.split('/');
			const name = nameArray[nameArray.length - 1];
			const [public_id] = name.split('.');
			await cloudinary.uploader.destroy(
				process.env.CLOUDINARY_FOLDER_NAME + '/' + collection + '/' + public_id
			);
		}

		if (method === 'DELETE') return { ok: true, message: 'Image deleted successfully' };

		const { secure_url } = await cloudinary.uploader.upload(tempFilePath, {
			folder: process.env.CLOUDINARY_FOLDER_NAME + '/' + collection,
		});

		if (secure_url) {
			return { ok: true, message: secure_url };
		} else {
			return { ok: false, message: 'Image could not be uploaded' };
		}
	} catch (error) {
		console.log(error);
		return { ok: false, message: 'Internal server error' };
	}
};
