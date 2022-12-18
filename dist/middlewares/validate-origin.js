"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationOrigin = void 0;
const validationOrigin = (req, res, next) => {
    if (req.headers.origin === process.env.FRONTEND_URL) {
        next();
    }
    else {
        return res.status(400).json({
            ok: false,
            message: 'Dominio no permitido',
        });
    }
};
exports.validationOrigin = validationOrigin;
