const mongoose=require('mongoose');

const FmetricsSchema=new mongoose.Schema({

    date: {type:String, requred:true},
    animalname: {type:String, required:true},
    animalnumber: {type:String,required:true},
    dfservice: {type:String,required:true},
    dopen: {type:String,required:true},
    calvingInterval:{type:String,required:true},
    conceptionrate: {type:String,required:true},
    serviceperpreg:{type:String,required:true}

},{timestamps:true});

module.exports=mongoose.model('Fmetrics',FmetricsSchema);