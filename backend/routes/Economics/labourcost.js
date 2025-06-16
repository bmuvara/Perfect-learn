const mongoose=require ('mongoose');
const express=require('express');
const Labourcost=require('../../models/Economics/labourcost');
const router=express.Router();


router.post('/addlcRecord' ,async (req,res,next)=>
{
  const{date,labourid,labourtype,taskperformed,hoursworked,wagerate,dailylcost,comment}=req.body

  try{
    console.log(req.body);

    const record=new Labourcost({date,labourid,labourtype,taskperformed,hoursworked,wagerate,dailylcost,comment});
    await record.save();
    res.json({message:'Labour Cost report created successfully'})

  }

  catch(error){
    next(error);
  }



}



)






router.get('/getlcRecord',async (req,res)=>{

try{

    const labourcost=await Labourcost.find();
    res.json(labourcost);


}
catch(err){
     
    console.error('Error fetching Reports',error);
    res.status(500).json({message:'Internal Server error'})
}


}


)


module.exports=router;