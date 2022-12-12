"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationUrl = void 0;
const url = process.env.FRONTEND_URL;
const validationUrl = (req, res, next) => {
    if (req.headers.origin === url) {
        next();
    }
    else {
        return res.status(400).json({
            ok: false,
            message: 'No se puede realizar la petición',
        });
    }
};
exports.validationUrl = validationUrl;
