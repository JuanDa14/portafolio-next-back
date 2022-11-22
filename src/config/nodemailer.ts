import nodemailer from 'nodemailer';
import nodemailerSendgrid from 'nodemailer-sendgrid';

export const transporter = () => {
	const transport = nodemailer.createTransport(
		nodemailerSendgrid({
			apiKey: process.env.SENDGRID_API_KEY as string,
		})
	);
	return transport;
};

type DataEmail = {
	to: string;
	from: string;
	subject: string;
	text: string;
	html: string;
};

const template = (name: string, email: string, subject: string, message: string) => {
	return `
        <h2>Hi ${name},</h2>
        <p>Thanks for signing up!</p>
        <p>${email}</p>
        <p>Please click this link to activate your account:</p>
    `;
};

export const sendEmail = async (name: string, email: string, subject: string, message: string) => {
	const transport = transporter();

	await transport.sendMail({
		from: process.env.DEFAULT_EMAIL,
		to: process.env.DEFAULT_EMAIL,
		subject,
		html: template(name, email, subject, message),
	});
};
