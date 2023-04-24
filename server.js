const exp=require('express')
const app=exp()
const mongoclient=require("mongodb").MongoClient
require("dotenv").config()
//importing path
const path=require('path')

//connecting to react application
app.use(exp.static(path.join(__dirname,'./build')))
app.use(exp.json())

//connecting database
mongoclient.connect(process.env.DB_connection_url)
.then((client)=>{
        // getting db 
        let db_obj=client.db("spotifyclone")
        //creating collections
        let usercollections=db_obj.collection("usercollections")
        //sharing collections to api's
        app.set("usercollections",usercollections)
        console.log("DB Connection successful !!..")
})
.catch(err=>console.log("err in database connection",err))

//importing userapi
const userapi=require('./APIS/Userapi')
//executing middleware according to path
app.use('/user',userapi)
//handling the page refresh
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})


//middleware for handling invalid paths
app.use((request,response)=>{
    console.log(error)
    response.send({message:"error occured",reason:`Invalid url ${request.url}`})
})


//middleware for handling errors
app.use((error,request,response,next)=>{
    console.log(error)
    response.send({message:"Error occured",reason:`${error.message}`})
})

//running server
app.listen(process.env.Port,()=>console.log(`server is running on port no : ${process.env.Port}....`))