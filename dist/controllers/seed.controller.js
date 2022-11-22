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
exports.seedData = void 0;
const constants_1 = require("../constants");
const models_1 = require("../models");
const seedData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (process.env.NODE_ENV !== 'development') {
        return res.status(403).json({
            ok: false,
            message: 'Not allowed to seed data in production',
        });
    }
    try {
        yield models_1.Project.deleteMany();
        yield models_1.Ability.deleteMany();
        yield models_1.Project.insertMany(constants_1.projects);
        yield models_1.Ability.insertMany(constants_1.abilities);
        res.status(201).json({
            ok: true,
            message: 'Data seeded',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Internal server error',
        });
    }
});
exports.seedData = seedData;
