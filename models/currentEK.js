import mongoose from "mongoose";

const Schema = mongoose.Schema

const currentEKSchema = new Schema({
    aud: {
        type: String,
        required: true
    },
    group: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    timeToTakeKey: {
        type: String,
        required: true
    },
    timeToPassKey: {
        type: String
    }
})
export const CurrentEK = mongoose.model('currentEK', currentEKSchema)