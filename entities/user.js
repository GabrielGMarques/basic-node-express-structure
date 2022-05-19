const mongoose = require('mongoose');
const { Schema } = mongoose;

const user = {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
};

const userSchema = new Schema(user);

module.exports = mongoose.model('user', userSchema)