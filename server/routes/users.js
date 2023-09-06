const express = require('express')
// const jwt = require('jsonwebtoken')
const UserSchema = require('../models/users')
const router = express()
require('dotenv/config')
//const secretKey = process.env.SECRET_KEY //from .env. this is to protect your routes

//Add a User
//apiADDUSER can be change according to your structure
router.post('/api/addUser/', async (req, res) => {
    const user = new UserSchema({... req.body})
    await user.save()
        .then(response => res.json(response) )
        .catch(error => res.status(500).json(error)) //if it fails then it redirects to error page
});

module.exports = router;

//Get all