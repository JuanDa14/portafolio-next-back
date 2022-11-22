import { Model, Schema, models, model } from 'mongoose';
import { IProject } from '../interfaces';

const ProjectSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			required: true,
			trim: true,
		},
		technologies: [
			{
				type: String,
				required: true,
				trim: true,
			},
		],

		imageUrl: {
			type: String,
		},

		githubUrl: {
			type: String,
			required: true,
		},

		websiteUrl: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Project: Model<IProject> = models.Project || model('Project', ProjectSchema);

export default Project;
