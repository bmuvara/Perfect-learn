const mongoose=require('mongoose');
const Milkrecord = require('../models/milkrecords');
const express=require('express')
const router=express.Router()


router.post('/addRecord', async (req,res,next)=>{
  
    const{cownumber,cowname,date,milkingperiod,total,comment}=req.body
  try{
   console.log(req.body);
   const record=new Milkrecord({cownumber,cowname,date,milkingperiod,total,comment});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);


  
  }
  
  });



  //Fetch all reports
router.get('/getRecord', async(req,res) => {

    try{
  
      const milkrecord=await Milkrecord.find();
      res.json(milkrecord);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching Reports:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

  module.exports=router