const mongoose = require('mongoose');
const mong=mongoose.connect(process.env.MONGO_URL, {
    serverSelectionTimeoutMS: 60000,
    autoCreate: false,
});
if(mong){
    console.log("db connected");
    
}