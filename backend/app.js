const express = require('express');
const app = express() ;  
const dotenv = require('dotenv') ; 
const path = require('path');  
const cors = require('cors')
const connectDatabase = require("./config/connectDatabase")
dotenv.config({path  : path.join(__dirname , "config" , "config.env")})

const jobs  = require('./routes/job');

app.use(express.json()) ; 
app.use(cors()) 


app.use('/api/v1/', jobs) ; 

connectDatabase() ;

app.listen(process.env.PORT, () => {
    console.log(`Server listening to Port ${process.env.PORT} in  ${process.env.NODE_ENV}`)
});
