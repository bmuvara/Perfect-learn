const mongoose=require('mongoose');
const Deworming = require('../../models/Treatment/deworming');
const express=require('express')
const router=express.Router()

router.post('/adddRecord', async (req,res,next)=>{
  
    const{ animalname, animalnumber, dob, species, breed, date, dewormerused, doseadminstered, nextduedate, vetname, comment}=req.body
  try{
   console.log(req.body);
   const record=new Deworming({animalname, animalnumber, dob, species, breed, date, dewormerused, doseadminstered, nextduedate, vetname, comment});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);

  
  }
  
  });


  //Fetch all reports
router.get('/getdRecord', async(req,res) => {

    try{
  
      const dewormingrecord=await Deworming.find();
      res.json(dewormingrecord);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching Reports:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

  module.exports=router


