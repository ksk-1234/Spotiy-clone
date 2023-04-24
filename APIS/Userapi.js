const exp=require("express")
const userapi=exp.Router()
const expressAsyncHandler=require("express-async-handler")
require("dotenv").config()
userapi.use(exp.json())
//importing bcryptjs
const bcryptjs=require("bcryptjs")
//importing jsonwebtoken to create token
const jwt=require("jsonwebtoken")

//router for login
userapi.post('/login',expressAsyncHandler(async(request,response)=>{

    //getting usercollections
    let usercollections=request.app.get("usercollections")
    //getting usercredentials from usercollections
    let usercred=request.body
    //finding user exists or not
    console.log(usercred.username)
    let userdb=await usercollections.findOne({username:usercred.username})
    if(userdb===null){
        response.send({message:"User Not Found"})
    }
    else{
        //comparing password
        let status=await bcryptjs.compare(usercred.password,userdb.password)
        if(status===false){
            response.send({message:"Invalid password"})
        }
        else{
            //creating token
            console.log(process.env.Secret_key)
            let token=jwt.sign({username:userdb.username},process.env.Secret_key,{expiresIn:11000})
            //sending token to user
            response.send({message:"Login Successful",payload:token,userobj:userdb})
        }
    }
}))

//router for register
userapi.post('/register',expressAsyncHandler(async(request,response)=>{

    //getting usercollections
    let usercollections=request.app.get("usercollections")
    //userobj from client
    let newuserobj=request.body
    //searching for the user
    let userobj=await usercollections.findOne({username:newuserobj.username})
    if(userobj!=null){
        response.send({message:"User Already Exists"})
    }
    else{
        //hashing the password
       let hashedpassword=await bcryptjs.hash(newuserobj.password,10)
       newuserobj.password=hashedpassword
       //inserting into the usercollections
       await usercollections.insertOne(newuserobj)
       response.send({message:"User Created Successfully"})
    }
}))

//exporting userapi
module.exports=userapi;