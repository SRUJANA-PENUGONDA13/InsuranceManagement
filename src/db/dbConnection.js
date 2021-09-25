const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, 
    { useNewUrlParser: true,
      useUnifiedTopology: true
    })

const db = mongoose.connection;

db.on('error', function()
{
    return console.log("Connection Error")
})
db.once('open', function() 
{
    console.log("Connected")
})