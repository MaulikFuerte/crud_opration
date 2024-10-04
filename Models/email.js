const mongoose = require('mongoose');
const { validate } = require('./User');

const emailSchema = new mongoose.Schema({
    email : { type: String, require : true,validate:{
        
    }},
    password : { type: String, require: true},
});

const Email = mongoose.model('Emails', emailSchema);

module.export = Email;