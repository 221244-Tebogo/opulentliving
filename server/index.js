const express = require('express'); //importing
const cors = require('cors');
const mongoose = require('mongoose');
const productRoute = require('./routes/product');

require('dotenv/config');

const app = express(); //initialize app

//used with React
app.use(cors({
    origin: 'http://localhost:3000' // Setup origin - Client port
}));
//initialize middleware 
app.use(express.json()); //gets Json data to work 
app.use(express.urlencoded({ extended: false })); 

app.use(productRoute);

mongoose.connect(process.env.DB_CONNECTION, { //connections to Mongoose
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'OpulentLiving', // Collection Name on Mongoose should match
}).then(() => console.log("Connected to OpulentLiving DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err); //error message if its not connected 
    });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});
