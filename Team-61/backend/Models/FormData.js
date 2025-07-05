const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormDataSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    interests: {
        type: [String],
        required: true
    },
    city: {
        type: String,
        required: true
    },
    fileId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fs.files'
    },
    imageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'fs.files'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, { timestamps: true });

const FormDataModel = mongoose.model('FormData', FormDataSchema);
module.exports = FormDataModel;