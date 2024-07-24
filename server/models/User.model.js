import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile: {
        education: {
            currentDegree: {
                degreeName: {
                    type: String,
                    required: true
                },
                universityName: {
                    type: String,
                    required: true
                },
                graduationYear: {
                    type: Number,
                    enum: [2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033],
                    required: true
                },
                cgpa: {
                    type: Number,
                    required: true
                }
            },
            previousDegree: {
                degreeName: {
                    type: String,
                },
                universityName: {
                    type: String,
                },
                graduatedYear: {
                    type: Number,
                    enum: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
                },
                cgpa: {
                    type: Number,
                    required: true
                }
            },
            seniorSecondary: {
                board: {
                    Type: String,
                    enum: ["CBSE", "ICSE", "State Board"],
                    required: true
                },
                medium: {
                    Type: String,
                    enum: ["English", "Hindi", "Local Language"],
                    required: true
                },
                percentage: {
                    type: Number,
                    required: true
                },
                passedOutYear: {
                    type: Number,
                    required: true
                }
            },
            higherSecondary: {
                board: {
                    Type: String,
                    enum: ["CBSE", "ICSE", "State Board"],
                    required: true
                },
                medium: {
                    Type: String,
                    enum: ["English", "Hindi", "Local Language"],
                    required: true
                },
                percentage: {
                    type: Number,
                    required: true
                },
                passedOutYear: {
                    type: Number,
                    required: true
                }
            }
        },
        bio: {
            type: String
        },
        skills: {
            type: String
        },
        resume: {
            type: String
        },
        resumeOriginalName: {
            type:String
        },
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        },
        profilePhoto: {
            type: String,
            default: ""
        }
    }
},
{
    timestamps: true
}
)

export const User = mongoose.model('User', UserSchema)