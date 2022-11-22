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
exports.isExistAbilityInDB = exports.isExistProjectInDB = void 0;
const Project_1 = __importDefault(require("../models/Project"));
const Ability_1 = __importDefault(require("../models/Ability"));
//?Projectos
const isExistProjectInDB = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const project = yield Project_1.default.findOne({ title }).select('_id').lean();
    if (project) {
        throw new Error(`The project with title ${title} exist in DB`);
    }
});
exports.isExistProjectInDB = isExistProjectInDB;
//?Habilidades
const isExistAbilityInDB = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const ability = yield Ability_1.default.findOne({ name }).select('_id');
    if (ability) {
        throw new Error(`The ability with name ${name} exist in DB`);
    }
});
exports.isExistAbilityInDB = isExistAbilityInDB;
