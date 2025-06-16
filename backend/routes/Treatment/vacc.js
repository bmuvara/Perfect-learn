const mongoose=require('mongoose');
const Vaccination = require('../../models/Treatment/vacc');
const express=require('express')
const router=express.Router()

router.post('/addvRecord', async (req,res,next)=>{
  
    const{ animalname, animalnumber, dob, species, breed, vaccdate, vaccused, doseadminstered, nextduedate, vetname, comment}=req.body
  try{
   console.log(req.body);
   const record=new Vaccination({animalname, animalnumber, dob, species, breed, vaccdate, vaccused, doseadminstered, nextduedate, vetname, comment});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);

  
  }
  
  });


  //Fetch all reports
router.get('/getvRecord', async(req,res) => {

    try{
  
      const vaccinationrecord=await Vaccination.find();
      res.json(vaccinationrecord);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching Reports:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

  module.exports=router

