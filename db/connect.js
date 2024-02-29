const mongoose = require('mongoose')

const connectDB = async (uri)=>{
    try {
        await mongoose.connect(uri, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useindAndModify: false
        });
        console.log('MongoDB connected successfully')
    }catch(error){
        console.error(error);
    }
}

module.exports = connectDB;
