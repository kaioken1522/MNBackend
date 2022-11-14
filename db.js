const mongoose = require('mongoose');
require("dotenv").config({ path: "./config/.env" });
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const app = express();
const routes = require('./routes/routes.js');
app.use(cors());
app.use(bodyParser.json());


mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    dbName: 'meanStack'
}).then(()=>{
    console.log('Database Connection is ready...')
    app.use('/employees',routes);
    app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})
})
.catch((err)=> {
    console.log(err);
})





