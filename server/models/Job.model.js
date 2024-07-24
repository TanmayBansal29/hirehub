import mongoose, { mongo } from "mongoose";

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    jobHighlights: {
        qualifications: {
            type: String,
            required: true
        },
        requiredSkills: {
            type: String,
            required: true
        },
    },
    jobDescription: {
        type: String,
        required: true
    },
    dayToDayResponsibilties: {
        type: String,
        required: true
    },
    qualifications: {
        type: String,
        required: true
    },
    jobRole: {
        type: String,
        required: true
    },
    employmentType: {
        type: String,
        required: true
    },
    selectionProcess: {
        type: String,
        required: true
    },
    mustHaveSkills: {
        type: String
    },
    salaryDetails: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    companyBenefits: {
        type: String,
        required: true
    },
    openings: {
        type: Number,
        required: true
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    created_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Application'
        }
    ]
},
{
    timestamps: true
})

export const Job = mongoose.model('Job', JobSchema)