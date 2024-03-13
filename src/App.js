
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Restaurant_items from './components/Restaurant_items';
import Restaurants from './components/Restaurants';
import Cart from './components/Cart';
import Restaurant_page from './components/Restaurant_page';
import Restaurant_items_page from './components/Restaurant_items_page';
import Form from './components/Form';
import About_res from './components/About_res';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import axios from 'axios';







export class App extends Component {
  constructor(){
    super()
    this.order={}
    this.order_type="Delevery"
    this.name=""
    this.email=""
    this.phone_no=0
    this.address=""
    this.restaurant_name=""
    this.restaurant_email=""
    
     

    this.state={
      itemsno:0,
      total_payment:0,
      delvery_takeaway:false,
      restaurant_name_a:"",
      

    }
    


  }

// for send data in backend
payment_done= async()=>{
  
  try{ await axios.post("http://localhost:8000/",{
    order:this.order,
    order_type:this.order_type,
    name:this.name,
    email: this.email,
    phone_no:this.phone_no,
    address:this.address,
    restaurant_email: this.restaurant_email,
    total_payment:this.state.total_payment,
    restaurant_name: this.restaurant_name,



  })
   

  }
  catch{
   console.log("eorr")

  }




}


// form 

onsubmitform=(data)=>{
  this.name=data.name
  this.email=data.email
  this.phone_no=data.phone_no
  this.address=data.address
}



//   for dispaly res name in cart
 displyres={
  Shiva_Cafe:"none",
  Ishu_Restaurant:"none",
  Food_Point:"none",
  Aaditya_Pizza:"none",
  Tasty_Bits:"none",
  Pizza_47:"none",
  Pizza_Express:"none",
  Sudhanshu_Restaurant:"none",
  Ishan_Bhature_Wala:"none",
  MBA_chai_Wala:"none",
  Ayush_Restaurant:"none",


 }

dispalyCart=(idcart)=>{
  
  
  
  
  this.displyitems={
    Pizza:"none",
    Burger:"none",
    Chilli_Paneer:"none",
    Chole_bhature:"none",
    Pasta:"none",
    Chaap:"none",
    Moms:"none",
    
    Ice_Cream:"none",
    Sweet_corn:"none",
    Rasgulla:"none",
    Kaju_Katli:"none",
    
  }
  this.setState({
    itemsno:0,
  })












  if (idcart==="Shiva-Cafe"){
    this.displyres.Shiva_Cafe="Block"
    this.restaurant_name="Shiva-Cafe"
    this.restaurant_email="shiva.sachan1255@gmail.com"
    this.setState({
      restaurant_name_a:"Shiva-Cafe"
    })
  }
  else{
    this.displyres.Shiva_Cafe="none"
  }

  if (idcart==="Ishu-Restaurant"){
    this.displyres.Ishu_Restaurant="Block"
    this.restaurant_name="Ishu-Restaurant"
    
    this.restaurant_email="ishu.singh7827@gmail.com"
    this.setState({
      restaurant_name_a:"Ishu-Restaurant"
    })
  }
  else{
    this.displyres.Ishu_Restaurant="none"
    this.restaurant_name="Shiva-Cafe"
  }
  
  if (idcart==="Food-Point"){
    this.displyres.Food_Point="Block"
    this.restaurant_name="Food-Point"
    this.restaurant_email="hodcs.ieccollege.com"
    this.setState({
      restaurant_name_a:"Food-Point"
    })
  }
  else{
    this.displyres.Food_Point="none"
  }
  if (idcart==="Aaditya-Pizza"){
    this.displyres.Aaditya_Pizza="Block"
    this.restaurant_name="Aaditya-Pizza"
    this.restaurant_email="adityakrsingh2703@gmail.com"
    this.setState({
      restaurant_name_a:"Aaditya-Pizza"
    })
  }
  else{
    this.displyres.Aaditya_Pizza="none"
  }

  if (idcart==="Tasty-Bits"){
    this.displyres.Tasty_Bits="Block"
    this.restaurant_name="Tasty-Bits"
    this.restaurant_email=""
    this.setState({
      restaurant_name_a:"Tasty-Bits"
    })
  }
  else{
    this.displyres.Tasty_Bits="none"
  }

  if (idcart==="Pizza-47"){
    this.displyres.Pizza_47="Block"
    this.restaurant_name="Pizza-47"
    this.restaurant_email="sunilyadav.cs@ieccollege.com"
    this.setState({
      restaurant_name_a:"Pizza-47"
    })
  }
  else{
    this.displyres.Pizza_47="none"
  }

  if (idcart==="Pizza-Express"){
    this.displyres.Pizza_Express="Block"
    this.restaurant_name="Pizza-Express"
    this.restaurant_email=""
    this.setState({
      restaurant_name_a:"Pizza-Express"
    })
  }
  else{
    this.displyres.Pizza_Express="none"
  }

  if (idcart==="Sudhanshu-Restaurant"){
    this.displyres.Sudhanshu_Restaurant="Block"
    this.restaurant_name="Sudhanshu-Restaurant"
    this.restaurant_email="inderssingh4732@gmail.com"
    this.setState({
      restaurant_name_a:"Sudhanshu-Restaurant"
    })
  }
  else{
    this.displyres.Sudhanshu_Restaurant="none"
  }
  if (idcart==="Ishan-Bhature-Wala"){
    this.displyres.Ishan_Bhature_Wala="Block"
    this.restaurant_name="Ishan-Bhature-Wala"
    this.restaurant_email="ishaanchoudhary29768@gmail.com"
    this.setState({
      restaurant_name_a:"Ishan-Bhature-Wala"
    })
  }
  else{
    this.displyres.Ishan_Bhature_Wala="none"
  }

  if (idcart==="MBA-chai-Wala"){
    this.displyres.MBA_chai_Wala="Block"
    this.restaurant_name="MBA-chai-Wala"
    this.restaurant_email=""
    this.setState({
      restaurant_name_a:"MBA-chai-Wala"
    })
  }
  else{
    this.displyres.MBA_chai_Wala="none"
  }
  if (idcart==="Ayush-Restaurant"){
    this.displyres.Ayush_Restaurant="block"
    this.restaurant_name="Ayush-Restaurant"
    this.restaurant_email="sid993510@gmail.com"
    this.setState({
      restaurant_name_a:"Ayush-Restaurant"
    })
  }
  else{
    this.displyres.Ayush_Restaurant="none" 
  }
   
   

}


//  for disply items in cart
displyitems={
  Pizza:"none",
  Burger:"none",
  Chilli_Paneer:"none",
  Chole_bhature:"none",
  Pasta:"none",
  Chaap:"none",
  Moms:"none",
  
  Ice_Cream:"none",
  Sweet_corn:"none",
  Rasgulla:"none",
  Kaju_Katli:"none",

}
fun_displyitems=(id)=>{
if ( id==="Pizza"){
    
  this.displyitems.Pizza="block"
   
}
if (  id==="Burger"){
  this.displyitems.Burger="block"
  

}
if (  id==="Chilli-Paneer"){
  this.displyitems.Chilli_Paneer="block"

}
if (  id==="Chole-bhature"){
  this.displyitems.Chole_bhature="block"


}
if (  id==="Pasta"){
  this.displyitems.Pasta="block"
  

}
if (  id==="Chaap"){
  this.displyitems.Chaap="block"
  

}
if (  id==="Moms"){
  this.displyitems.Moms="block"

}
if (  id==="Ice-Cream"){
  this.displyitems.Ice_Cream="block"

}
if (  id==="Sweet-corn"){
  this.displyitems.Sweet_corn="block"

}
if ( id==="Rasgulla"){
  this.displyitems.Rasgulla="block"

}
if (  id==="Kaju-Katli"){
  this.displyitems.Kaju_Katli="block"

}
}
  
fun_hideitems=(id)=>{
  if ( id==="Pizza"){
    this.displyitems.Pizza="none"
     
  }
  if (  id==="Burger"){
    this.displyitems.Burger="none"
    
  
  }
  if (  id==="Chilli-Paneer"){
    this.displyitems.Chilli_Paneer="none"
  
  }
  if (  id==="Chole-bhature"){
    this.displyitems.Chole_bhature="none"
  
  }
  if (  id==="Pasta"){
    this.displyitems.Pasta="none"
  
  }
  if (  id==="Chaap"){
    this.displyitems.Chaap="none"
  
  }
  if (  id==="Moms"){
    this.displyitems.Moms="none"
  
  }
  if (  id==="Ice-Cream"){
    this.displyitems.Ice_Cream="none"
  
  }
  if (  id==="Sweet-corn"){
    this.displyitems.Sweet_corn="none"
  
  }
  if ( id==="Rasgulla"){
    this.displyitems.Rasgulla="none"
  
  }
  if (  id==="Kaju-Katli"){
    this.displyitems.Kaju_Katli="none"
  
  }


}

funtaotal_payment=(pay)=>{
  this.setState({
    total_payment:pay
  })
  
}

fun_del_take=(s)=>{
if(s===true){
  this.setState({
    delvery_takeaway:true,
  })
  this.order_type="Take_away"
  
  }
  else{
    this.setState({
      delvery_takeaway:false,
    })
    this.order_type="Delevery"
  }
 
}



// 
numinc=()=>{
  
    this.setState(
      {
        itemsno:this.state.itemsno+1,
        
        }

    )}
  
numdec=()=>{
  
    this.setState(
      {
        itemsno:this.state.itemsno-1,
      
      }
    )
    
      
}
  



  render() {
    return (
      <>
      <Router>
      <div>
         <Navbar items={this.state.itemsno} fun_del_take={this.fun_del_take} />

         <div>
          <Routes>
           <Route  path="/" element={<Restaurant_page dispalyCart={this.dispalyCart}/>}/>


           <Route  path="/Restaurant_items_page" element={<Restaurant_items_page numinc={this.numinc} numdec={this.numdec} fun_displyitems={this.fun_displyitems} fun_hideitems={this.fun_hideitems}   />}/>


           <Route  path="/Cart" element={<Cart displyres={this.displyres} displyitems={this.displyitems}  funtaotal_payment={this.funtaotal_payment} del_or_take={this.state.delvery_takeaway
            } order={this.order} numdec={this.numdec} />}/>

            <Route  path="/form" element={<Form total_payment={this.state.total_payment} onsubmitform={this.onsubmitform}  payment_done={this.payment_done}/>}/>

            <Route path='/About' element={<About_res restaurant_name={this.state.restaurant_name_a}/>}/>
           </Routes>

          </div>
          
        
        </div>
        </Router>
        </>
    )
  }
}

export default App



