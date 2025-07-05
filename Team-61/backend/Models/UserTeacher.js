const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTeacherSchema = new Schema({
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
        default: 'teacher'
    }
});

const UserTeacherModel = mongoose.model('userteachers', UserTeacherSchema);
module.exports = UserTeacherModel;