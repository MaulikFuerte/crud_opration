const mongoose = require('mongoose');

// Define the User Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
});

// Create the User model
const User = mongoose.model('Users', UserSchema);

module.exports = User;
