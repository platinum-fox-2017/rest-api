const express = require('express');
const router = express.Router();

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:"Sign in to get an access token based on credentials"
    })
});


module.exports = router;