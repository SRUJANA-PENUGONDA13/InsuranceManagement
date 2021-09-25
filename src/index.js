const express = require('express')

// importing user defined router modules
const { policyRouter } = require('./routers/policy.js')
const app = express()

// Database connection
require('./db/dbConnection')

app.use(express.json())
app.use(policyRouter)


const port = process.env.PORT
app.listen(port, ()=>
{
    console.log("Server Started")
})