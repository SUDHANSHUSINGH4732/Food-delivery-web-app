//  for connet ract to node we have to install axios, cors,mongoose for connect to database,nodemon,express for nodejs 

// Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.


// Using Axios we make API requests in our application. Once the request is made we get the data in Return, and then we use this data in our project.
const express=require("express")
const cors=require("cors")
const collection=require("./mongo")
const app=express()
const sendMail=require("./Nodemailer")
const sendMail_custumer=require("./node_mailer_cos")
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())


app.post("/",async(req,res)=>{

    
    const order=req.body.order;
    const email=req.body.email;
    const phone_no=req.body.phone_no;
    const name=req.body.name;
    const address=req.body.address;
    const order_type=req.body.order_type;
    const total_payment=req.body.total_payment;
    const restaurant_name=req.body.restaurant_name;
    var  restaurant_email=req.body.restaurant_email;

    const data={
         order:order,
         name:name,
         email:email,
         phone_no:phone_no,
         address:address,
         order_type:order_type,
         total_payment:total_payment,
         restaurant_name:restaurant_name
    }
    await collection.insertMany(data)
    await sendMail(data, restaurant_email)
    await sendMail_custumer(data,email)
   
    //  we can also save data in data base using below methord 

    //    const data = new collection(req.body)
//    data.save()
}) 

app.listen(8000 ,()=>{
    console.log("conected to port 8000")
})