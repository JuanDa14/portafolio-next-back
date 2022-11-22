"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateFile = void 0;
const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'svg+xml'];
const validateFile = (req, res, next) => {
    var _a;
    if (!req.files) {
        return res.status(400).json({ ok: false, message: 'No files were uploaded' });
    }
    const { mimetype } = (_a = req.files) === null || _a === void 0 ? void 0 : _a.file;
    const extension = mimetype.split('/')[1];
    if (!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(404).json({
            ok: false,
            message: 'No file uploaded',
        });
    }
    if (!allowedExtensions.includes(extension)) {
        return res.status(403).json({ ok: false, message: 'Extension not allowed' });
    }
    next();
};
exports.validateFile = validateFile;
