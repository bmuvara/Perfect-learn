const mongoose=require('mongoose');

const CostreturnSchema= new mongoose.Schema({
    date: {type:String,required:true},
    item: {type:String,required:true},
    unit: {type:String,required:true},
    quantity: {type:String,required:true},
    price: {type:String,required:true},
    totalvalue: {type:String,required:true},
    incomeyn: {type:String,required:true},
    costyn: {type:String,required:true},
    typecost: {type:String,required:true},
    comment: {type:String,required:true},
},{timestamps:true})

module.exports=mongoose.model('Costreturn',CostreturnSchema)


