const mongoose=require('mongoose');

const LabourcostSchema= new mongoose.Schema({

    date: {type:String,required:true},
    labourid: {type:String,required:true},
    labourtype: {type:String,required:true},
    taskperformed: {type:String,required:true},
    hoursworked: {type:String,required:true},
    wagerate: {type:String,required:true},
    dailylcost: {type:String,required:true},
    comment: {type:String,required:true}

},{timestamps:true})

module.exports=mongoose.model('Labourcost',LabourcostSchema)



