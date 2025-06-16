const mongoose=require('mongoose');

const FeedcostSchema=new mongoose.Schema ({
    date:{type:String,require:true},
    feedtype:{type:String,require:true},
    quantity:{type:String,require:true},
    unitprice:{type:String,require:true},
    totalcost:{type:String,require:true},
    comment:{type:String,require:true},

},{timestamps:true})

module.exports=mongoose.model('Feedcost',FeedcostSchema)

