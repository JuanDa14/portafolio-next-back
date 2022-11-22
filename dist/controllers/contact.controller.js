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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendContactEmail = void 0;
const config_1 = require("../config");
const sendContactEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, subject, message } = req.body;
    try {
        yield (0, config_1.sendEmail)(name, email, subject, message);
        res.status(200).json({
            ok: true,
            message: 'Mensaje enviado correctamente',
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error al enviar el mensaje',
        });
    }
});
exports.sendContactEmail = sendContactEmail;
