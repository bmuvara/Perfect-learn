const mongoose=require('mongoose');
const express=require('express');
const Feeding=require('../../models/Feeding/feeding');
const router=express.Router();


router.post('/addfeRecord', async(req,res,next)=>{

    const{date,animalgroup,feedingredient,quantity,drymatter,totaldm,comment}=req.body

    try{

        console.log(req.body);
        const record=new Feeding({date,animalgroup,feedingredient,quantity,drymatter,totaldm,comment});
        await record.save();
        res.json({message:'Feed Record created successfuly'})

    }

    catch(error){

        next(error)
    }
}

)





router.get('/getfeRecord',async(req,res)=>
{

try{

    const feeding=await Feeding.find();
    res.json(feeding);


}

catch(err)
{
    console.error('Error on fetching report',err);
    res.status(500).json({message:'Internal Server Error'})

}

}

)

module.exports=router;