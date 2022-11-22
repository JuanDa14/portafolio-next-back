export interface IAbility {
	_id: string;
	name: string;
	type: 'Frontend' | 'Backend' | 'Database';
	level: 'Básico' | 'Intermedio' | 'Avanzado';
	imageUrl: string;
}
