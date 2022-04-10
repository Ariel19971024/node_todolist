var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1:27017/hotel';
mongoose.connect(mongoDB).then((db)=>{
    console.log('success');
});
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//mongoose.model('table名稱', { 
//   查詢條件
//   name:{ type:String },   
//});
const User = mongoose.model('posts', { 
    name:{ type:String },
     
});
User.find({ name:'Sheree Cordingly'}, function (err, docs) { 
    if (err){ 
        console.log(err); 
    } 
    else{ 
        console.log("First function call:", docs); 
    } 
}); 
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

