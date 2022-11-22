"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationsReq = void 0;
const express_validator_1 = require("express-validator");
const validationsReq = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    const errorsArray = errors.array();
    const errorsMap = errorsArray.map((error) => ({ field: error.param, message: error.msg }));
    if (errorsArray.length > 0) {
        return res.status(400).json({
            ok: false,
            errors: errorsMap,
        });
    }
    next();
};
exports.validationsReq = validationsReq;
