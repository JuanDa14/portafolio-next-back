"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationOrigin = void 0;
const validationOrigin = (req, res, next) => {
    var _a;
    if (((_a = req.headers.origin) === null || _a === void 0 ? void 0 : _a.toString()) === process.env.FRONTEND_URL) {
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
