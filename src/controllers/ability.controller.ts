import { Request, Response } from 'express';
import { FileArray } from 'express-fileupload';

import Ability from '../models/Ability';
import { IAbility } from '../interfaces';
import { saveFiles } from '../config';

type Data = IAbility | IAbility[] | { ok: boolean; message: string };

export const createAbility = async (req: Request, res: Response<Data>) => {
	try {
		const { message } = await saveFiles(req.files as FileArray, '', 'abilities', req.method);

		const newAbility = await Ability.create({
			...req.body,
			imageUrl: message,
		});

		res.status(201).json(newAbility);
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: 'Internal server error',
		});
	}
};

export const getAbilities = async (req: Request, res: Response<Data>) => {
	try {
		const abilities = await Ability.find().select('-__v -createdAt -updatedAt').lean();

		res.status(200).json(abilities);
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: 'Internal server error',
		});
	}
};
