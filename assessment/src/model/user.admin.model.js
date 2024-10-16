const mongoose = require('mongoose');

const userAdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const userAdminModel = mongoose.model('user_admin_details', userAdminSchema);

module.exports = {
    userAdminModel
}