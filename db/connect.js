const mongoose = require('mongoose')

const connectionString = "mongodb+srv://shawn0072:9kO48ODqlCCIQqXt@nodeexpressporjects.x5v2wvv.mongodb.net/?retryWrites=true&w=majority"

const connectDB = url =>{
    mongoose
    .connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        }) 
}

module.exports = connectDB

    