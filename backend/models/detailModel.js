import mongoose, { Schema } from "mongoose";

const detailSchema = new Schema({

    name:{
        firstName: {
        type: String,
        },

        middleName: {
        type: String,
        },

        lastName: {
        type: String,
        },
    },

    permanentAddress: {
        street: {
            type: String,
        },

        city: {
            type: String,
        },

        state: {
            type: String,
        },

        zipCode: {
            type: String,
        },

        country: {
            type: String,
        },
    },

    currentAddress: {
        street: {
            type: String,
        },

        city: {
            type: String,
        },

        state: {
            type: String,
        },

        zipCode: {
            type: String,
        },

        country: {
            type: String,
        },
    },

    dateOfBirth: {
        type: Date,
    },

    age: {
        type: Number,
    },

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },

    passport: {
        type: String,
    },

    mobile: {
        type: String,
    },

    panNo: {
        type: String,
    },

    visa: {
        type: String,
    },

    email: {
        type: String,
    },

    emergencyContact: {
        name: {
            type: String,
        },

        number: {
            type: String,
        },
    },


    availableForRelocation: {
        type: Boolean,
        default: false,
    },


    educationQualifications: [
    {
        srNo: {
            type: Number,
        },
        institution: {
            type: String,
        },
        qualification: {
            type: String,
        },
        percentageOrCGPA: {
            type: String,
        },
        passOutYear: {
            type: Number,
        },
    },
    ],


    trainings: [
        {
            program: {
                type: String,
            },
            contents: {
                type: String,
            },
            organizedBy: {
                type: String,
            },
            duration: {
                type: String,
            },
        },
    ],


    certifications: [
        {
            srNo: {
                type: Number,
            },
            certification: {
                type: String,
            },
            duration: {
                type: String,
            },
        },
    ],


    familyDetails: [
        {
            relation: {
                type: String,
            },
            occupation: {
                type: String,
            },
            residentLocation: {
                type: String,
            },
        },
    ],


    references: [
        {
            name: {
                type: String,
            },
            designation: {
                type: String,
            },
            contactNo: {
                type: String,
            },
        },
    ],
    });

export const Detail = mongoose.model("Detail", detailSchema);
