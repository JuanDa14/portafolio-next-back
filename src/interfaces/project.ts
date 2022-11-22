export type ITechnologie =
	| 'HTML'
	| 'CSS'
	| 'JavaScript'
	| 'TypeScript'
	| 'React'
	| 'Nextjs'
	| 'Styled Components'
	| 'Bootstrap'
	| 'SASS'
	| 'Tailwind Css'
	| 'Nodejs'
	| 'PHP'
	| 'Laravel'
	| 'GraphQL'
	| 'MySQL'
	| 'MongoDB'
	| 'PostgreSQL'
	| 'TypeORM';

export interface IProject {
	_id: string;
	title: string;
	description: string;
	date: string;
	technologies: string[];
	imageUrl: string;
	githubUrl: string;
	websiteUrl: string;
}
