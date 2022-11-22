"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AbilitySchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
        enum: {
            values: ['Frontend', 'Backend', 'Database'],
            message: '{VALUE} is not a valid type',
        },
    },
    level: {
        type: String,
        required: true,
        emun: {
            values: ['Básico', 'Intermedio', 'Avanzado'],
            message: '{VALUE} is not a valid level',
        },
        trim: true,
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true,
});
const Ability = mongoose_1.models.Ability || (0, mongoose_1.model)('Ability', AbilitySchema);
exports.default = Ability;
