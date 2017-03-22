var Meetup = require('../models/meetup');

module.exports.create = function(req,res){
    var meetup = new Meetup(req.body);
    meetup.save(function(err,result){
        res.json(result);
    });
}

module.exports.list = function(req,res){
        Meetup.find({},function(req,results){
            res.json(results);
        })
    };