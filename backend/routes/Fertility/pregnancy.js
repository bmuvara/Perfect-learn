const mongoose=require('mongoose');
const Pregnancy=require('../../models/Fertility/pregnancy');
const express=require('express')
const router=express.Router()

router.post('/addprRecord', async (req,res,next)=>{
  
    const{ date,animalname,animalnumber,method,result,expecteddate,comment}=req.body
  try{
   console.log(req.body);
   const record=new Pregnancy({date,animalname,animalnumber,method,result,expecteddate,comment});
   await record.save();
   res.json({message:'Report created Successfully'})
  }catch(error){
    next(error);
  
  }
  
  });


  //Fetch all reports
router.get('/getprRecord', async(req,res) => {

    try{
  
      const heatsrecord=await Pregnancy.find();
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


