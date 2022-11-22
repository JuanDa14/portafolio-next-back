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
exports.saveFiles = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config(process.env.CLOUDINARY_URL);
const saveFiles = (req, image, collection, method) => __awaiter(void 0, void 0, void 0, function* () {
    const { tempFilePath } = req === null || req === void 0 ? void 0 : req.file;
    try {
        if (method === 'PUT' || method === 'DELETE') {
            const nameArray = image.split('/');
            const name = nameArray[nameArray.length - 1];
            const [public_id] = name.split('.');
            yield cloudinary_1.v2.uploader.destroy(process.env.CLOUDINARY_FOLDER_NAME + '/' + collection + '/' + public_id);
        }
        if (method === 'DELETE')
            return { ok: true, message: 'Image deleted successfully' };
        const { secure_url } = yield cloudinary_1.v2.uploader.upload(tempFilePath, {
            folder: process.env.CLOUDINARY_FOLDER_NAME + '/' + collection,
        });
        if (secure_url) {
            return { ok: true, message: secure_url };
        }
        else {
            return { ok: false, message: 'Image could not be uploaded' };
        }
    }
    catch (error) {
        console.log(error);
        return { ok: false, message: 'Internal server error' };
    }
});
exports.saveFiles = saveFiles;
