"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
router.get('/', controllers_1.getAbilities);
router.post('/', [
    (0, express_validator_1.check)('name').notEmpty().isString().trim(),
    (0, express_validator_1.check)('name').custom(middlewares_1.isExistAbilityInDB),
    (0, express_validator_1.oneOf)([
        (0, express_validator_1.check)('type').equals('Frontend').isString().trim(),
        (0, express_validator_1.check)('type').equals('Backend').isString().trim(),
        (0, express_validator_1.check)('type').equals('Database').isString().trim(),
    ]),
    (0, express_validator_1.oneOf)([
        (0, express_validator_1.check)('level').equals('Básico').isString().trim(),
        (0, express_validator_1.check)('level').equals('Intermedio').isString().trim(),
        (0, express_validator_1.check)('level').equals('Avanzado').isString().trim(),
    ]),
    middlewares_1.validateFile,
    middlewares_1.validationsReq,
], controllers_1.createAbility);
exports.default = router;
