const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"],
    },
    profilePicture: {
        type: String,
        default: "",
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;