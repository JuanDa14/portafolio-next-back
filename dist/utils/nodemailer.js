"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageOfNodemailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const nodemailer_sendgrid_1 = __importDefault(require("nodemailer-sendgrid"));
const templeateHTML = (data) => {
    return `<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>${data.title}</title>
		</head>
		<style>
			body {
				height: 100vh;
				font-family: sans-serif;
				background-color: rgba(0 0 0 / 0.9);
				color: white;
			}
			.contenido {
				height: 100%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				width: 50%;
				margin: 0 auto;
			}
			.titulo {
				font-size: 2rem;
				font-weight: 700;
				margin: 0;
				margin-bottom: 1px;
			}
			.cliente {
				font-size: 1;
			}
	
			.cliente p {
				font-weight: bolder;
				color: #ccc;
			}
			.descripcion {
				text-align: justify;
			}
			.descripcion span {
				color: #ccc;
				font-weight: bolder;
				font-size: 1.2rem;
			}
		</style>
		<body class="body">
			<div class="contenido">
				<p class="titulo">${data.title.toLocaleUpperCase()}</p>
				<div class="cliente">
					<p>Cliente : <span class="cliente__nombre">${data.name}</span></p>
					<p>Email : <span class="cliente__email">${data.email}</span></p>
				</div>
				<p class="descripcion">
					<span>Asunto: </span>
					${data.description}
				</p>
			</div>
		</body>
	</html>
	`;
};
const transporter = () => {
    const transport = nodemailer_1.default.createTransport((0, nodemailer_sendgrid_1.default)({
        apiKey: process.env.SENDGRID_API_KEY,
    }));
    return transport;
};
const sendMessageOfNodemailer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const transport = transporter();
    try {
        yield transport.sendMail({
            from: process.env.DEFAULT_EMAIL,
            to: process.env.DEFAULT_EMAIL,
            subject: `${data.title.toLocaleUpperCase()}`,
            html: templeateHTML(data),
        });
    }
    catch (error) {
        console.log(error);
        throw new Error('Error sending email');
    }
});
exports.sendMessageOfNodemailer = sendMessageOfNodemailer;
