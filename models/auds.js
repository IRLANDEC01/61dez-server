import mongoose from "mongoose";

const Schema = mongoose.Schema

const audsSchema = new Schema({
    name: {
        type: Number,
        required: true
    },
    notation: {
        type: String,
    },
    isUsed: {
        type: Boolean,
        default: false
    }

})
export const Auds = mongoose.model('auds', audsSchema)