import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Form extends Component {

      constructor(){
        super()
        this.email="";
        this.name="";
        this.phone_no=0;
        this.address=""
        this.form_detels={}
        this.state={
            form_dis:"flex",
            pay_dis:"none",
            padingtop:"40px"
        }
      }

      fun_sumit_or_not=()=>{
        
       this.setState({
        form_dis:"none",
        pay_dis:"block",
        padingtop:"0px"
       })
       this.props.onsubmitform(this.form_detels)
}



  render() {
       return (
      <div className='form_main'>
        <div className='mx-auto formbox' style={{marginTop:"100px",  paddingTop:this.state.padingtop }} >



        
        <form  style={{display:this.state.form_dis}}   method="post" className="myform ">
          
          <input type="text"  className= "myinput" name="name" placeholder="Enter your name.." onChange={(e)=>{ this.form_detels.name= e.target.value} } />
          
          <input type="phone" className= "myinput" name="phone" placeholder="Enter your phone number" onChange={(e)=>{this.form_detels.phone_no=  e.target.value} } />

          <input type="email" className="myinput" name="email" placeholder="Enter your email.." onChange={(e)=>{this.form_detels.email=  e.target.value} }/>

          <input type="address" className= "myinput" name="address" placeholder="Enter your address" onChange={(e)=>{ this.form_detels.address= e.target.value} }/>
          
          <button onClick={this.fun_sumit_or_not } type="button" className="btn btn-primary">submit</button>


        </form>

         <div className='payment' style={{display:this.state.pay_dis}}>
             
              
        <Link to="https://razorpay.me/@shudhanshusingh"><button 
         type="button" className="btn-pay btn btn-primary" onClick={this.props.payment_done}>PAY-{this.props.total_payment} </button> </Link> 

         </div>
    

        </div>



      </div>
    )
  }
}

export default Form
