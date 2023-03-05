import mongoose from "mongoose";

const Schema = mongoose.Schema

const groupsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    course: {
        type: String,
    }

})
export const Groups = mongoose.model('groups', groupsSchema)