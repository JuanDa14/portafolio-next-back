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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAbilities = exports.createAbility = void 0;
const Ability_1 = __importDefault(require("../models/Ability"));
const config_1 = require("../config");
const createAbility = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message } = yield (0, config_1.saveFiles)(req.files, '', 'abilities', req.method);
        const newAbility = yield Ability_1.default.create(Object.assign(Object.assign({}, req.body), { imageUrl: message }));
        res.status(201).json({
            ok: true,
            data: newAbility,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
});
exports.createAbility = createAbility;
const getAbilities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const abilities = yield Ability_1.default.find().select('-__v -createdAt -updatedAt').lean();
        res.status(200).json({
            ok: true,
            data: abilities,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
});
exports.getAbilities = getAbilities;
