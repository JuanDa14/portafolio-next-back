import { Request, Response } from 'express';
import { abilities, projects } from '../constants';
import { Ability, Project } from '../models';

type Data = {
	ok: boolean;
	message: string;
};

export const seedData = async (req: Request, res: Response<Data>) => {
	if (process.env.NODE_ENV !== 'development') {
		return res.status(403).json({
			ok: false,
			message: 'Not allowed to seed data in production',
		});
	}

	try {
		await Project.deleteMany();
		await Ability.deleteMany();

		await Project.insertMany(projects);
		await Ability.insertMany(abilities);

		res.status(201).json({
			ok: true,
			message: 'Data seeded',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			ok: false,
			message: 'Internal server error',
		});
	}
};
