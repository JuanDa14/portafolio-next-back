"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedRoute = exports.contactRoute = exports.projectRoute = exports.abilityRoute = void 0;
__exportStar(require("./index"), exports);
var ability_routes_1 = require("./ability.routes");
Object.defineProperty(exports, "abilityRoute", { enumerable: true, get: function () { return __importDefault(ability_routes_1).default; } });
var project_routes_1 = require("./project.routes");
Object.defineProperty(exports, "projectRoute", { enumerable: true, get: function () { return __importDefault(project_routes_1).default; } });
var contact_routes_1 = require("./contact.routes");
Object.defineProperty(exports, "contactRoute", { enumerable: true, get: function () { return __importDefault(contact_routes_1).default; } });
var seed_routes_1 = require("./seed.routes");
Object.defineProperty(exports, "seedRoute", { enumerable: true, get: function () { return __importDefault(seed_routes_1).default; } });
