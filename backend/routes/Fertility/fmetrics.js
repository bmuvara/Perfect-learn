const mongoose=require('mongoose');
const Fmetrics = require('../../models/Fertility/fmetrics');
const express=require('express')
const router=express.Router()

router.post('/addfmRecord', async (req,res,next)=>{
  
    const{ date,animalname,animalnumber,dfservice,dopen,calvingInterval,conceptionrate,serviceperpreg,comment}=req.body
  try{
   console.log(req.body);
   const record=new Fmetrics({date,animalname,animalnumber,dfservice,dopen,calvingInterval,conceptionrate,serviceperpreg,comment});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);

  
  }
  
  });


  //Fetch all reports
router.get('/getfmRecord', async(req,res) => {

    try{
  
      const fmetricsrecord=await Fmetrics.find();
      res.json(fmetricsrecord);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching Reports:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

  module.exports=router


