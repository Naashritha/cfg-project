const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserAdminSchema = new Schema({
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
        default: 'admin'
    }
});

const UserAdminModel = mongoose.model('useradmins', UserAdminSchema);
module.exports = UserAdminModel;