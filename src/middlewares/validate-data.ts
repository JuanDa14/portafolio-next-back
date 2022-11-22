import Project from '../models/Project';
import Ability from '../models/Ability';

//?Projectos
export const isExistProjectInDB = async (title: string) => {
	const project = await Project.findOne({ title }).select('_id').lean();

	if (project) {
		throw new Error(`The project with title ${title} exist in DB`);
	}
};

//?Habilidades
export const isExistAbilityInDB = async (name: string) => {
	const ability = await Ability.findOne({ name }).select('_id');

	if (ability) {
		throw new Error(`The ability with name ${name} exist in DB`);
	}
};
