const mongoose=require('mongoose');
const CalvingSchema= new mongoose.Schema({
    date:{type:String,required:true},
    animalname:{type:String,required:true},
    animalnumber:{type:String,required:true},
    calfname:{type:String,required:true},
    calfnumber:{type:String,required:true},
    calfsex:{type:String,required:true},
    birthweigt:{type:String,required:true},
    calvingease:{type:String,required:true},
    placenta: {type:String,required:true},
    metritis:{type:String,required:true},
    comment:{type:String,required:true}
},{timestamps:true});

module.exports=mongoose.model ('Calving',CalvingSchema)