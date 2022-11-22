import { Request, Response } from 'express';

import Project from '../models/Project';
import { IProject } from '../interfaces/project';
import { saveFiles } from '../config';
import { FileArray } from 'express-fileupload';

type Data =
	| {
			ok: boolean;
			data: IProject[] | IProject;
	  }
	| {
			ok: boolean;
			message: string;
	  };

export const getProjects = async (req: Request, res: Response<Data>) => {
	try {
		const projects = await Project.find()
			.select('title description date technologies imageUrl githubUrl websiteUrl updatedAt')
			.lean();

		res.status(200).json({
			ok: true,
			data: projects,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: 'Internal server error',
		});
	}
};

export const createProject = async (req: Request, res: Response) => {
	try {
		const { message } = await saveFiles(req.files as FileArray, '', 'projects', req.method);

		const project = await Project.create({
			...req.body,
			imageUrl: message,
		});

		res.status(201).json({
			ok: true,
			data: project,
		});
	} catch (error) {
		res.status(500).json({
			ok: false,
			message: 'Internal server error',
		});
	}
};
