const { timeStamp } = require("console");

const mongoose=require('mongoose');

const HeatSchema= new mongoose.Schema({

    date:{type:String, required:true},
    animalname: {type:String, required:true},
    animalnumber: {type:String, required:true},
    heatsigns: {type: String,required:true},
    insemenation:{type:String,required:true},
    bullsemen: {type:String, required:true},
    technician: {type:String,required:true},
    comment: {type:String,required:true}

},{timeStamp:true} );

module.exports=mongoose.model('Heat',HeatSchema);

