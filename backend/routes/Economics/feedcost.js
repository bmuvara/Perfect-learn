const mongoose=require('mongoose');
const Feedcost=require('../../models/Economics/feedcost');
const express=require('express');
const router=express.Router();

router.post('/addefeRecord',async (req,res,next)=>{

const{date,feedtype,quantity,unitprice,totalcost,comment}=req.body

try{
    console.log (req.body)
    const record= new Feedcost({date,feedtype,quantity,unitprice,totalcost,comment});

    await record.save();

    res.json({messsage:'Feedcost record created successfully'})

}

catch(error){
    next(error)
}


}


)



router.get('/getefeRecord', async (req,res)=>{

    try{

        const feedcost= await Feedcost.find();
        res.json(feedcost);
    }

    catch(err){

           console.error('Error fetching Reports:', err);
        res.status(500).json({message:'Server Internal Error'})

    }


}

)

module.exports=router;