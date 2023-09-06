const mongoose = require('mongoose')

//setup schema
//require 
const OpulentLivingSchema = mangoose.Schema({
   name: {
        type: String,
        required: false,
    },
    ,
    surname: { 
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wallet: {
        type: Number,
        required: true,
        default: 150000
    },
    superuser: {
        type: Boolean,
        required: true,
        default: false
    },
});

//define what the schema is
module.exports = mongoose.model("Sofa",UserSchema);
