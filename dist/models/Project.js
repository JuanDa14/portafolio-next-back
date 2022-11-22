"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProjectSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    technologies: [
        {
            type: String,
            required: true,
            trim: true,
        },
    ],
    imageUrl: {
        type: String,
    },
    githubUrl: {
        type: String,
        required: true,
    },
    websiteUrl: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
const Project = mongoose_1.models.Project || (0, mongoose_1.model)('Project', ProjectSchema);
exports.default = Project;
