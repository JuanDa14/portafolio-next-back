"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post('/', [
    middlewares_1.validationOrigin,
    (0, express_validator_1.check)('name', 'Su nombre es requerido').notEmpty().isString().trim(),
    (0, express_validator_1.check)('email', 'El email no es valido').notEmpty().isEmail().normalizeEmail().trim(),
    (0, express_validator_1.check)('subject', 'El asunto es requerido').notEmpty().isString().trim(),
    (0, express_validator_1.check)('message', 'El mensaje es requerido').notEmpty().isString().trim(),
    middlewares_1.validationsReq,
], controllers_1.sendContactEmail);
exports.default = router;
