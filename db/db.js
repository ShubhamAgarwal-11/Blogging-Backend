const { error } = require('console');
const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('db connected successfully.')
    })
    .catch((error)=>{
        console.log(`error while connecting to db:- ${error}`)
        process.exit(1);
    })
}

module.exports = connectDB