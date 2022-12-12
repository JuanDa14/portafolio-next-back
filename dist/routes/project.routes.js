"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/', middlewares_1.validationUrl, controllers_1.getProjects);
router.post('/', [
    middlewares_1.validationUrl,
    (0, express_validator_1.check)('title').notEmpty().isString().trim(),
    (0, express_validator_1.check)('title').custom(middlewares_1.isExistProjectInDB),
    (0, express_validator_1.check)('description').notEmpty().isString().trim(),
    (0, express_validator_1.check)('technologies').notEmpty().isArray(),
    (0, express_validator_1.check)('githubUrl').notEmpty().isString().trim(),
    (0, express_validator_1.check)('websiteUrl').notEmpty().isString().trim(),
    middlewares_1.validateFile,
    middlewares_1.validationsReq,
], controllers_1.createProject);
exports.default = router;
