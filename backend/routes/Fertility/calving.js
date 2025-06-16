const mongoose=require('mongoose');
const Calving=require('../../models/Fertility/calving');
const express=require('express');
const router=express.Router();

router.post ('/addcaRecord',async (req,res,next)=>{

    const{date,animalname,animalnumber,calfname,calfnumber,calfsex,birthweigt,calvingease,placenta,metritis,comment}=req.body;
 try{

    console.log(req.body);

    const record= new Calving({date,animalname,animalnumber,calfname,calfnumber,calfsex,birthweigt,calvingease,placenta,metritis,comment})
    await record.save();
    res.json("Calving details added successfully")
 }    
catch(error){
next(error)
}

}
);

// Fetch all reports

router.get ( '/getcaRecord', async (req,res)=>{

    try{

        const calvingrecord= await Calving.find();

        res.json(calvingrecord);


    }
    catch(err){
        console.error ('the error is',err);
        res.status(500).json ({Message:'Internal Server Error'})


    }

}

)

module.exports=router