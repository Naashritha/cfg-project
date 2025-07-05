const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserStudentSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'student'
    }
});

const UserStudentModel = mongoose.model('userstudents', UserStudentSchema);
module.exports = UserStudentModel;