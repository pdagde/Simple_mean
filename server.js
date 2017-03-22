var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    meetupsController = require("./server/controllers/meetups-controller.js");

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/',function(req,res){
 res.sendfile(__dirname+'/client/views/index.html');
})
app.use("/js",express.static(__dirname+'/client/js'));

app.get('/api/meetups',meetupsController.list);
app.post('/api/meetups',meetupsController.create);


app.listen(5000,function(){
 console.log("Welcome to Mean.. i m learning")  
})

