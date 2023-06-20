const router = require('express').Router()
const User=require('../models/User')
const CryptoJS=require('crypto-js')
const jwt=require('jsonwebtoken')

//register

router.post('/register',async(req,res)=>{

    const newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(req.body.password,'secret').toString(),
        mobile:req.body.mobile,
    })

    try{
        const savedUser=await newUser.save();
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }
})

//login

router.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json("Invalid credentials");
      }
  
      const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET).toString(CryptoJS.enc.Utf8);
      const validPassword = hashedPassword !== req.body.password;
      if (validPassword) {
        return res.status(401).json('Wrong password');
      }
  
      const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "10d" });
      const { password, ...others } = user._doc;
      console.log(accessToken,"🐾🐾");
      return res.status(200).json({ ...others, accessToken });
    } catch (err) {
      return res.status(500).json(err);
    }
  });
  
  


module.exports=router