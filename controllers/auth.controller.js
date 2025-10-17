const bcrypt = require('bcrypt')
const User = require('../models/user')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')


module.exports.loginPage=((req,res)=>{
    return res.render('index')
})

module.exports.signupPage=((req,res)=>{
    return res.render('./pages/register')
})

module.exports.homePage=((req,res)=>{
    return res.render('./pages/dashboard');
})

module.exports.formPage=((req,res)=>{
    return res.render('./pages/form-basic')
})


module.exports.signup=async(req,res)=>{
    try {
        const {username,email,password,confirmPassword} = req.body;
        if(password !== confirmPassword){
            console.log("Password does not match");
        }
        const hashPassword = await bcrypt.hash(password,10)
        await User.create({
            username,
            email,
            password:hashPassword,
        })
        console.log("user created Successfully");
        return res.redirect('/')        
    } catch (error) {
        console.log(error.message);
        return res.redirect('/signup')
    }
}

module.exports.login=async(req,res)=>{
    try {
        const {email,password} = req.body;
        let user = await User.findOne({email})
        if(user){
            let isValid = await bcrypt.compare(password,user.password);
            if(isValid){
                let payload = {
                    id: user.id,
                    role: user.role
                }
                let token = jwt.sign(payload,process.env.SECRET_KEY)
                res.cookie('token',token)
                console.log("Login Successfully..");
                return res.redirect('/dashboard')
            }else
            {
                return res.redirect('/')
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports.tablePage=async(req,res)=>{
    try {
        const Blogs = await Blog.find();
        return res.render('./pages/tables',{Blogs})
    } catch (error) {
        console.log(error.message);
    }
}


module.exports.logout=((req,res)=>{
    try {
        res.clearCookie('token')
      console.log("Logout Successfully");
      return res.redirect('/')
    } catch (error) {
        console.log(error.message);
        return res.redirect('/dashboard')
    }
    
})
