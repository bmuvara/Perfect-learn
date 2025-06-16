const mongoose=require('mongoose');
const Costreturn=require('../../models/Economics/costreturn');
const express=require('express');
const router=express.Router();

router.post('/addcoRecord', async (req,res,next)=>{

     const{date,item,unit,quantity,price,totalvalue,incomeyn,costyn,typecost,comment}=req.body
  try{
   
  const record= new Costreturn({date,item,unit,quantity,price,totalvalue,incomeyn,costyn,typecost,comment})
  
  await record.save();

  res.json({messega:'Cost and return record successfully'})

  }
  catch(err){
    next(err)
  

  }

}

)




router.get('/getcoRecord', async(req,res)=>{

    try{

       const  costrecord=await Costreturn.find();
       res.json(costrecord);
    }

    catch(err){

        console.error('Error fetching Reports:', err);
        res.status(500).json({Message:'Server Internal error'})
    }
}
)

module.exports=router;