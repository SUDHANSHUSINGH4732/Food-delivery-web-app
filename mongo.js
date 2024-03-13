const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/Food-Express")
.then(
    ()=>{
        console.log("connected")
    }
)
.catch(()=>{
    console.log("failed")
})
const newSchema=new mongoose.Schema({
    order_type:{
      type:String,
      required:true

    },
    order:{

        type:Object,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    phone_no:{
        type:Number,
        required:true,
    },
    total_payment:{
        type:Number,
        required:true,  
    },
    restaurant_name:{
        type:String,
        required:true,  
    }
})
const collection=mongoose.model("ODER",newSchema)
module.exports=collection