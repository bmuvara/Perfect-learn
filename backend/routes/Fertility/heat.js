const mongoose=require('mongoose');
const Heat = require('../../models/Fertility/heats');
const express=require('express')
const router=express.Router()

router.post('/addhRecord', async (req,res,next)=>{
  
    const{ date,animalname,animalnumber,heatsigns,insemenation,bullsemen,technician,comment}=req.body
  try{
   console.log(req.body);
   const record=new Heat({date,animalname,animalnumber,heatsigns,insemenation,bullsemen,technician,comment});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);

  
  }
  
  });


  //Fetch all reports
router.get('/gethRecord', async(req,res) => {

    try{
  
      const heatsrecord=await Heat.find();
      res.json(heatsrecord);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching Reports:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

  module.exports=router


