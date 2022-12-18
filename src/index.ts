import express from 'express';
import fileUpload from 'express-fileupload';
import * as dotenv from 'dotenv';
dotenv.config();

import cors, { CorsOptions } from 'cors';

import { db } from './config';

// Importando Routes
import { abilityRoute, projectRoute, contactRoute, seedRoute } from './routes';

const corsOptions = {
	origin: process.env.FRONTEND_URL,
};

const app = express();
//Base de datos
db();

//Middlewares
//TODO Activar cuando se tenga el frontend
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: '/tmp/',
		createParentPath: true,
	})
);

//?Rutas
app.use('/api/ability', abilityRoute);
app.use('/api/project', projectRoute);
app.use('/api/contact', contactRoute);
app.use('/api/seed', seedRoute);

//?Servidor
app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`);
});
