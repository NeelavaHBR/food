const express = require("express")

const router = express.Router()

const user= require("../models/User")
const { body, validationResult } = require('express-validator');

router.post("/createuser",[
body('email').isEmail(),
// password must be at least 5 chars long
body('name').isLength({ min: 5 }),
body('password',"icorrect password").isLength({ min: 5 })],
async(req, res)=>{
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
    }

    try {
        await user.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location,
        })
    res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router;