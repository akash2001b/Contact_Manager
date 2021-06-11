const express=require('express');
const router=express.Router();


router.post('/',(req,res)=>{
    res.send('Regiter a user');
});


module.exports=router;