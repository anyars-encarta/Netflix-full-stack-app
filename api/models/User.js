const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String, default: "" },
    contact: { type: String },
    address: { type: String },
    gender: { type: String },
    isActive: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
},
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);