
const mongoose=require('mongoose');

const PregnancySchema= new mongoose.Schema({

    date: {type: String, requred:true},
    animalname: {type:String, requred:true},
    animalnumber: {type:String, required:true},
    method: {type:String,required:true},
    result: {type:String, required:true},
    expecteddate: {type:String,required:true},
    comment: {type:String, required:true}
}, {timestamps:true});

module.exports=mongoose.model('Pregnancy',PregnancySchema);