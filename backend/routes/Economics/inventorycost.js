const mongoose=require('mongoose');
const express=require('express');
const Inventory=require('../../models/Economics/inventorycost');
const router=express.Router();


router.post('/addincRecord', async(req,res,next)=>{

const{itemd,category,quantity,unitmeasure,unitcost,totalcost,salvagecost,age,depreciation,purchasedate,supplier,storagelocation,remarks,source
}=req.body

try{
    console.log(req.body);

    const record= new Inventory({itemd,category,quantity,unitmeasure,unitcost,totalcost,salvagecost,age,depreciation,purchasedate,supplier,storagelocation,remarks,source })

     await record.save();

     res.json({message:'The inventory Cost has been created successfully'});

}
catch(error){

    next(error);
}

}
)



router.get('/getincRecord', async (req,res)=>{

    try{

        const inventorycost=await Inventory.find();

        res.json(inventorycost);
    }

    catch(err)
    {
        console.error('Error',err)
        res.statusCode(500).json({message:'Server Internal error'})
    
    }
}



)

module.exports=router;