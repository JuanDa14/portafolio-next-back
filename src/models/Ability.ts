import { model, Model, models, Schema } from 'mongoose';
import { IAbility } from '../interfaces';

const AbilitySchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},

		type: {
			type: String,
			required: true,
			trim: true,
			enum: {
				values: ['Frontend', 'Backend', 'Database'],
				message: '{VALUE} is not a valid type',
			},
		},

		level: {
			type: String,
			required: true,
			emun: {
				values: ['Básico', 'Intermedio', 'Avanzado'],
				message: '{VALUE} is not a valid level',
			},
			trim: true,
		},

		imageUrl: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

const Ability: Model<IAbility> = models.Ability || model('Ability', AbilitySchema);

export default Ability;
