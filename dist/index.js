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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
// Importando Routes
const routes_1 = require("./routes");
const corsOptions = {
    origin: process.env.FRONTEND_URL,
};
const app = (0, express_1.default)();
//Base de datos
(0, config_1.db)();
//Middlewares
//TODO Activar cuando se tenga el frontend
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: '/tmp/',
    createParentPath: true,
}));
//?Rutas
app.use('/api/ability', routes_1.abilityRoute);
app.use('/api/project', routes_1.projectRoute);
app.use('/api/contact', routes_1.contactRoute);
app.use('/api/seed', routes_1.seedRoute);
//?Servidor
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
