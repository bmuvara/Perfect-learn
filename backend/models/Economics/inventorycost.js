
const mongoose=require('mongoose');

const InventorySchema= new mongoose.Schema({
    itemd:{type:String,required:true},
    category:{type:String,required:true},
    quantity:{type:String,required:true},
    unitmeasure:{type:String,required:true},
    unitcost:{type:String,required:true},
    totalcost:{type:String,required:true},
    salvagecost:{type:String,required:true},
    age:{type:String,required:true},
    depreciation:{type:String,required:true},    
    purchasedate:{type:String,required:true},   
    supplier:{type:String,required:true},
    storagelocation:{type:String,required:true},
    remarks:{type:String,required:true},
    source:{type:String,required:true}     

},{timeStamps:true})

module.exports=mongoose.model('Inventory',InventorySchema);

