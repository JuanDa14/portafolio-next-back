"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationOrigin = void 0;
const whiteList = [process.env.FRONTEND_URL];
const validationOrigin = (req, res, next) => {
    if (whiteList.includes(process.env.FRONTEND_URL)) {
        next();
    }
    else {
        return res.status(400).json({
            ok: false,
            message: 'No se puede realizar la petición',
        });
    }
};
exports.validationOrigin = validationOrigin;
