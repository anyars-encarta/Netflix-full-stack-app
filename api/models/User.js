const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    contact: { type: String },
    address: { type: String },
    gender: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
},
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);