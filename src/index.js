const express = require('express')
const cors = require('cors');

// importing user defined router modules
const { policyRouter } = require('./routers/policy.js')
const app = express()

// Database connection
require('./db/dbConnection')

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
app.use(express.json())
app.use(policyRouter)


const port = process.env.PORT
app.listen(port, ()=>
{
    console.log("Server Started")
})