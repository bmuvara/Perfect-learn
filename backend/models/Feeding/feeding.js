const mongoose=require('mongoose');

const FeedingSchema= new mongoose.Schema({

    date:{type:String,required:true},
    animalgroup:{type:String,required:true},
    feedingredient:{type:String,required:true},
    quantity:{type:String,required:true},
    drymatter:{type:String,required:true},
    totaldm:{type:String,required:true},
    comment:{type:String,required:true},

},{timestamps:true})

module.exports=mongoose.model('Feeding',FeedingSchema)



