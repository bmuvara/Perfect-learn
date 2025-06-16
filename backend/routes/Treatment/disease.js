const mongoose=require('mongoose');
const Disease = require('../../models/Treatment/disease');
const express=require('express')
const router=express.Router()

router.post('/adddRecord', async (req,res,next)=>{
  
    const{ animalname, animalnumber, dob, species, breed, signsobserved, suspecteddisease , treatmentgiven , treatmentdate, doseused, doseadminstered, nextduedate, vetname, comment
}=req.body
  try{
   console.log(req.body);
   const record=new Disease({animalname, animalnumber, dob, species, breed, signsobserved, suspecteddisease , treatmentgiven , treatmentdate, doseused, doseadminstered, nextduedate, vetname, comment
});
   await record.save();
   res.json({message:'Report created Successfully'})
  
  
  
  }catch(error){
    next(error);

  
  }
  
  });


  //Fetch all reports
router.get('/getdRecord', async(req,res) => {

    try{
  
      const diseaserecord=await Disease.find();
      res.json(diseaserecord);
  
    }
   catch(err){
     /*  res.status(500).json({message:err.message}) */
     console.error('Error fetching Reports:', err);
     res.status(500).json({ message: 'Internal Server Error' });
  
   }
  }
  )

  module.exports=router


