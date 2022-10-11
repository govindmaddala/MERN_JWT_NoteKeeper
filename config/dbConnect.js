const mongoose = require('mongoose');

const connect = ()=>{
    mongoose.connect(process.env.MONGO_URI, {}, (err)=>{
        if (err){
            console.log(err);
        }
    })
}

module.exports = connect;