const mongoose=require('mongoose');
const Milkdistribution = require('../models/milkdistribution');
const express=require('express')
const router=express.Router()


router.post('/addDistrecord', async (req,res,next)=>{
  
    const{date,custumernumber,custumername,custumerlocation,comment,totalmilk,totalcost}=req.body
  try{
   console.log(req.body);
   const record=new Milkdistribution({date,custumernumber,custumername,custumerlocation,comment,totalmilk,totalcost});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);


  
  }
  
  });

  


  //Fetch all reports
router.get('/getRecord', async(req,res) => {

    try{
  
      const milkrecord=await Milkdistribution.find();
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