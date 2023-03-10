import mongoose from "mongoose";

const Schema = mongoose.Schema

const groupsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    isBusy: {
        type: Boolean,
        default: false
    }
})

export const Groups = mongoose.model('groups', groupsSchema)