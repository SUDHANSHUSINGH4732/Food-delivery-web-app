import React, { Component } from 'react'
import Vegan from "./Vegan.png"
import {Link} from 'react-router-dom'

import shiva_img from "./res_img/shiva.jpg"
import ishu_img from "./res_img/ishu.jpg"
import foodpoit_img from "./res_img/foodpoint.jpg"
import aditya_img from "./res_img/aditya.jpg"
import ishan_img from "./res_img/ishan.jpg"
import mba_img from "./res_img/mba.jpg"
import ayush_img from "./res_img/ayush.jpg"
import pizza_47_img from "./res_img/pizza_47.jpg"
import pizza_express_img from "./res_img/express.jpg"
import testy_bits_img from "./res_img/testy.jpg"
import sudhanshu_img from "./res_img/sudhanshu.jpg"


export class Cart extends Component {
     
  constructor(){

    super()
    this.total=0
    this.state={
        price_Pizza:100,
        price_Burger:65,
        price_Chilli_Paneer:250,
        price_Chole_bhature:10,
        price_Pasta:120,
        price_Chaap:90,
        price_Moms:60,
        price_Ice_Cream:35,
        price_Sweet_corn:55,
        price_Rasgulla:30,
        price_Kaju_Katli:50,
        num_Pizza:1,
        num_Burger:1,
        num_Chilli_Paneer:1,
        num_Chole_bhature:1,
        num_Pasta:1,
        num_Chaap:1,
        num_Moms:1,
        num_Ice_Cream:1,
        num_Sweet_corn:1,
        num_Rasgulla:1,
        num_Kaju_Katli:1,
        total_price:0,
        
        
    }
  }
   






  funinc_crt=(item)=>{
     if (item==="Pizza"){
      this.setState({
      num_Pizza:this.state.num_Pizza+1,
      
      price_Pizza:100*(this.state.num_Pizza+1),
    } )
     }


     if (item==="Burger"){
      this.setState({
        num_Burger:this.state.num_Burger+1,
        
        price_Burger:65*(this.state.num_Burger+1),
      } )
     }


     if (item==="Chilli-Paneer"){
      this.setState({
        num_Chilli_Paneer:this.state.num_Chilli_Paneer+1,
        
          price_Chilli_Paneer:250*(this.state.num_Chilli_Paneer+1),
      } )
     }


     if (item==="Chole-bhature"){
      this.setState({
        num_Chole_bhature:this.state.num_Chole_bhature+1,
        
        price_Chole_bhature:10*(this.state.num_Chole_bhature+1),
      } )
     }


     if (item==="Pasta"){
      this.setState({
        num_Pasta:this.state.num_Pasta+1,
        
        price_Pasta:120*(this.state.num_Pasta+1),
      } )
     }


     if (item==="Chaap"){
      this.setState({
        num_Chaap:this.state.num_Chaap+1,
        
        price_Chaap:90*(this.state.num_Chaap+1),
      } )
     }


     if (item==="Moms"){
      this.setState({
        num_Moms:this.state.num_Moms+1,
        
        price_Moms:60*(this.state.num_Moms+1),
      } )
     }

     if (item==="Ice-Cream"){
      this.setState({
        num_Ice_Cream:this.state.num_Ice_Cream+1,
        
        price_Ice_Cream:35*(this.state.num_Ice_Cream+1),
      } )
     }


     if (item==="Sweet-corn"){
      this.setState({
        num_Sweet_corn:this.state.num_Sweet_corn+1,
        
        price_Sweet_corn:55*(this.state.num_Sweet_corn+1),
      } )
     }

     if (item==="Rasgulla"){
      this.setState({
        num_Rasgulla:this.state.num_Rasgulla+1,
        
        price_Rasgulla:30*(this.state.num_Rasgulla+1),
      } )
     }

     if (item==="Kaju-Katli"){
      this.setState({
        num_Kaju_Katli:this.state.num_Kaju_Katli+1,
        
        price_Kaju_Katli:50*(this.state.num_Kaju_Katli+1),
      } )
     }
    

    
    

  }

  fundec_crt=(item)=>{
    if (item==="Pizza"){
      this.setState({
      num_Pizza:this.state.num_Pizza-1,
      
      price_Pizza:100*(this.state.num_Pizza-1),
    } )

    if(this.state.num_Pizza-1===0){
      this.props.displyitems.Pizza="none"
      this.props.numdec()

    }
     }


     if (item==="Burger"){
      this.setState({
        num_Burger:this.state.num_Burger-1,
        
        price_Burger:65*(this.state.num_Burger-1),
      } )

      if(this.state.num_Burger-1===0){
        this.props.displyitems.Burger="none"
        this.props.numdec()
  
      }
     }


     if (item==="Chilli-Paneer"){
      this.setState({
        num_Chilli_Paneer:this.state.num_Chilli_Paneer-1,
        
          price_Chilli_Paneer:250*(this.state.num_Chilli_Paneer-1),
      } )

      if(this.state.num_Chilli_Paneer-1===0){
        this.props.displyitems.Chilli_Paneer="none"
        
        this.props.numdec()
      }
     }


     if (item==="Chole-bhature"){
      this.setState({
        num_Chole_bhature:this.state.num_Chole_bhature-1,
        
        price_Chole_bhature:10*(this.state.num_Chole_bhature-1),
      } )

      if(this.state.num_Chole_bhature-1===0){
        this.props.displyitems.Chole_bhature="none"
        
        this.props.numdec()
      }
     }


     if (item==="Pasta"){
      this.setState({
        num_Pasta:this.state.num_Pasta-1,
        
        price_Pasta:120*(this.state.num_Pasta-1),
      } )

      if(this.state.num_Pasta-1===0){
        this.props.displyitems.Pasta="none"
        
        this.props.numdec()
      }
     }


     if (item==="Chaap"){
      this.setState({
        num_Chaap:this.state.num_Chaap-1,
        
        price_Chaap:90*(this.state.num_Chaap-1),
      } )

      if(this.state.num_Chaap-1===0){
        this.props.displyitems.Chaap="none"
        this.props.numdec()
  
      }
     }


     if (item==="Moms"){
      this.setState({
        num_Moms:this.state.num_Moms-1,
        
        price_Moms:60*(this.state.num_Moms-1),
      } )
      if(this.state.num_Moms-1===0){
        this.props.displyitems.Moms="none"
        this.props.numdec()
  
      }
     }

     if (item==="Ice-Cream"){
      this.setState({
        num_Ice_Cream:this.state.num_Ice_Cream-1,
        
        price_Ice_Cream:35*(this.state.num_Ice_Cream-1),
      } )
      if(this.state.num_Ice_Cream-1===0){
        this.props.displyitems.Ice_Cream="none"
        this.props.numdec()
  
      }
     }


     if (item==="Sweet-corn"){
      this.setState({
        num_Sweet_corn:this.state.num_Sweet_corn-1,
        
        price_Sweet_corn:55*(this.state.num_Sweet_corn-1),
      } )
      if(this.state.num_Sweet_corn-1===0){
        this.props.displyitems.Sweet_corn="none"
        this.props.numdec()
  
      }
     }

     if (item==="Rasgulla"){
      this.setState({
        num_Rasgulla:this.state.num_Rasgulla-1,
        
        price_Rasgulla:30*(this.state.num_Rasgulla-1),
      } )
      if(this.state.num_Rasgulla-1===0){
        this.props.displyitems.Rasgulla="none"
        this.props.numdec()
  
      }
     }

     if (item==="Kaju-Katli"){
      this.setState({
        num_Kaju_Katli:this.state.num_Kaju_Katli-1,
        
        price_Kaju_Katli:50*(this.state.num_Kaju_Katli-1),
      } )
      
      if(this.state.num_Kaju_Katli-1===0){
        this.props.displyitems.Kaju_Katli="none"
        this.props.numdec()
      }
     }
    


  }
  
  funtotal=()=>{
     this.total=0
    // for loop is for delete all element in oder object

    for (const key in this.props.order){
      delete this.props.order[key]
    }
    
    if (this.props.displyitems.Pizza==="block"){
  
        this.total=this.total+this.state.price_Pizza
        this.props.order.Pizza=this.state.num_Pizza
      
     }

    if (this.props.displyitems.Burger==="block"){
      
        this.total=this.total+this.state.price_Burger
        this.props.order.Burger=this.state.num_Burger
        
      
    }
    if (this.props.displyitems.Chilli_Paneer==="block"){
      
        this.total=this.total+this.state.price_Chilli_Paneer
        this.props.order.Chilli_Paneer=this.state.num_Chilli_Paneer
        
      
    }
    if (this.props.displyitems.Chole_bhature==="block"){
      
        this.total=this.total+this.state.price_Chole_bhature
        this.props.order.Chole_bhature=this.state.num_Chole_bhature
        
      
    }
    if (this.props.displyitems.Pasta==="block"){
      
        this.total=this.total+this.state.price_Pasta
        this.props.order.Pasta=this.state.num_Pasta  
      
    }
    if (this.props.displyitems.Chaap==="block"){
      
        this.total=this.total+this.state.price_Chaap
        
        this.props.order.Chaap=this.state.num_Chaap
    }
    if (this.props.displyitems.Moms==="block"){
       
      
        this.total=this.total+this.state.price_Moms
        
        this.props.order.Moms=this.state.num_Moms
    }
    if (this.props.displyitems.Ice_Cream==="block"){
      
      
        this.total=this.total+this.state.price_Ice_Cream
        
        this.props.order.Ice_Cream=this.state.num_Ice_Cream
    }

    if (this.props.displyitems.Sweet_corn==="block"){
      
        this.total=this.total+this.state.price_Sweet_corn
        
        this.props.order.Sweet_corn=this.state.num_Sweet_corn
    }
    if (this.props.displyitems.Rasgulla==="block"){
         
      
        this.total=this.total+this.state.price_Rasgulla
        
        this.props.order.Rasgulla=this.state.num_Rasgulla
    }
    if (this.props.displyitems.Kaju_Katli==="block"){
      
        this.total=this.total+this.state.price_Kaju_Katli
        
        this.props.order.Kaju_Katli=this.state.num_Kaju_Katli
    }

    this.setState(
      {
       total_price:this.total
      }
    )
  
   
  
  
  }


   

  render() {
    return (

      <div  className='Cartmain' onMouseOver={()=>this.funtotal()}>
        
        <div className='mx-auto cart_second' style={{backgroundColor:"#ecdbec",height:"500px",width:"60%", overflow:"scroll", borderRadius:"20px",   } }    >
       
    



         {/*  for restaurant form which we oder */}

<div className='sticky-top'>
    
    <div className="card mb-3" style={{maxWidth:"820px", height:"100px ",display: this.props.displyres.Shiva_Cafe }}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={shiva_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Shiva Cafe</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>



<div className="card mb-3" style={{maxWidth:"860px", height:"100px ",display: this.props.displyres.Ishu_Restaurant
}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={ishu_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ishu Restaurant</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>

<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Food_Point}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={foodpoit_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Food Point</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>





<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Aaditya_Pizza}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={aditya_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Aaditya_Pizza</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>






<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Tasty_Bits}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={testy_bits_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Tasty Bits</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>





<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Pizza_47}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={pizza_47_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Pizza 47</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>



<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Pizza_Express}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={pizza_express_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Pizza_Express</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>




<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Sudhanshu_Restaurant}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={sudhanshu_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Sudhanshu Restaurant</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>





<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display:this.props.displyres.Ishan_Bhature_Wala}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={ishan_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ishan Bhature Wala</h5>
        <p className="card-text"> Bharute,Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>




<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.MBA_chai_Wala}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={mba_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">M.B.A chai Wala</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>




<div className="card mb-3" style={{maxWidth:"830px", height:"100px ",display: this.props.displyres.Ayush_Restaurant}}>
    <div className="row g-0">
    <div  className="col-md-4">
      <img  style={{maxWidth:"800px", height:"100px"} }src={ayush_img} className="img-fluid rounded-start" alt=""/>
    </div>
    <div  className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Ayush Restaurant</h5>
        <p className="card-text">Buger ,Pizza ,pasta ,and many more</p>
        </div>
    </div>
</div>
</div>







</div>


{/* for added itmes  */}
      <div >

      

       <div style={{border:"solid black 1px", display:this.props.displyitems.Pizza}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Pizza</h5>
        
        <div className='d-inline' style={{marginLeft:"300px"}} >
        <h5  className='d-inline me-5'> {this.state.num_Pizza} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button  onClick={()=>this.fundec_crt("Pizza")}type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Pizza")}  type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Pizza}</h5>
         </div> 
       
       
        </div>
          



        <div style={{border:"solid black 1px",display:this.props.displyitems.Burger}} className=' item_cart mb-2'>
          
          <img className=' d-inline' src={Vegan} alt=""  />
          <h5  className='d-inline me-5'>Burger </h5> 
          <div className='d-inline' style={{marginLeft:"281px"}} >
          <h5  className='d-inline me-5'> {this.state.num_Burger} </h5>
            
          <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
          <button onClick={()=>this.fundec_crt("Burger")} type="button" className="btn btn-secondary">-</button>
              
          <button onClick={()=>this.funinc_crt("Burger")} type="button" className="btn btn-secondary">+</button>
    
           </div>
           <h5 className='d-inline'>₹{this.state.price_Burger}</h5>
           </div>
          </div>





          <div style={{border:"solid black 1px",display:this.props.displyitems.Chilli_Paneer}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'> Chilli Paneer</h5> 
        <div className='d-inline' style={{marginLeft:"230px"}} >
        <h5  className='d-inline me-5'> {this.state.num_Chilli_Paneer} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button  onClick={()=>this.fundec_crt("Chilli-Paneer")}type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Chilli-Paneer")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Chilli_Paneer}</h5>
          </div>
        </div>






        <div style={{border:"solid black 1px",display:this.props.displyitems.Chole_bhature}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Chole bhature</h5>
        <div className='d-inline' style={{marginLeft:"220px"}} > 
        <h5  className='d-inline me-5'> {this.state.num_Chole_bhature} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Chole-bhature")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Chole-bhature")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Chole_bhature}</h5>
          </div>
        </div>






        <div style={{border:"solid black 1px",display:this.props.displyitems.Pasta}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Pasta </h5> 
        <div className='d-inline' style={{marginLeft:"298px"}} >
        <h5  className='d-inline me-5'> {this.state.num_Pasta} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Pasta")} type="button" className="btn btn-secondary">-</button>
            
        <button  onClick={()=>this.funinc_crt("Pasta")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Pasta}</h5>
        </div>
        </div>





        <div style={{border:"solid black 1px",display:this.props.displyitems.Chaap}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Chaap </h5>
        <div className='d-inline' style={{marginLeft:"290px"}} > 

        <h5  className='d-inline me-5'> {this.state.num_Chaap}</h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Chaap")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Chaap")}  type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Chaap}</h5>
        </div>
        </div>




        <div style={{border:"solid black 1px",display:this.props.displyitems.Moms}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Moms </h5> 
        <div className='d-inline' style={{marginLeft:"291px"}} >
        <h5  className='d-inline me-5'> {this.state.num_Moms}</h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Moms")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Moms")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Moms}</h5>
          </div>
        </div>





        <div style={{border:"solid black 1px",display:this.props.displyitems.Ice_Cream}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'> Ice Cream</h5>
        <div className='d-inline' style={{marginLeft:"252px"}} > 
        <h5  className='d-inline me-5'> {this.state.num_Ice_Cream}</h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Ice-Cream")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Ice-Cream")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Ice_Cream}</h5>
        </div>
        </div>







        <div style={{border:"solid black 1px",display:this.props.displyitems.Sweet_corn}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Sweet corn </h5> 
        <div className='d-inline' style={{marginLeft:"248px"}} >
        <h5  className='d-inline me-5'> {this.state.num_Sweet_corn} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Sweet-corn")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Sweet-corn")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Sweet_corn}</h5>
        </div>
        </div>





        <div style={{border:"solid black 1px",display:this.props.displyitems.Rasgulla}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'> Rasgulla</h5>
        <div className='d-inline' style={{marginLeft:"265px"}} > 
        <h5  className='d-inline me-5'> {this.state.num_Rasgulla} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Rasgulla")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Rasgulla")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Rasgulla}</h5>
         </div>
        </div>





        <div style={{border:"solid black 1px",display:this.props.displyitems.Kaju_Katli}} className=' item_cart mb-2'>
          
        <img className=' d-inline' src={Vegan} alt=""  />
        <h5  className='d-inline me-5'>Kaju Katli </h5> 
        <div className='d-inline' style={{marginLeft:"263px"}} >
        <h5  className='d-inline me-5'> {this.state.num_Kaju_Katli} </h5>
          
        <div className="btn-group d-inline me-5" role="group" aria-label="Basic example" >
        <button onClick={()=>this.fundec_crt("Kaju-Katli")} type="button" className="btn btn-secondary">-</button>
            
        <button onClick={()=>this.funinc_crt("Kaju-Katli")} type="button" className="btn btn-secondary">+</button>
  
         </div>
         <h5 className='d-inline'>₹{this.state.price_Kaju_Katli}</h5>
        </div>
        </div>



          
        
        </div>



            

        </div>

       <Link to="/form"> <button onClick={()=>this.props.funtaotal_payment(this.total)} style={{marginLeft:"650px",marginTop:"10px"}} type="button" className="btn btn-primary btn-lg">Total-{this.state.total_price}</button></Link>
      </div>
    )
  }
}

export default Cart
