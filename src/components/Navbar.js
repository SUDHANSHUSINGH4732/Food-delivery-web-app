import React, { useState } from 'react'
import Logo from './Logo'
import profilelogo from "./profile-logo.png"
import homelogo from'./home-logo.png'
import bloglogo from './blog-logo.png'
import Cart from "./Shoppingcart.png"
import {Link} from 'react-router-dom'


function Navbar(props) {
  let [num,setnum]=useState(props.items)
   
 var fun_del_or_take=()=>{
   var x=document.getElementById("switcher").checked
    props.fun_del_take(x)

  }



  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><Logo/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-current="page" href="/"> <img id='navbarhomelogo' className='navbarlogo mx-2' src={homelogo} alt="" />
          <label htmlFor="navbarhomelogo">Home</label></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-disabled="true" href='/'><img id='navbarbloglogo' className='navbarlogo mx-2' src={ bloglogo} alt="" />
          <label htmlFor="navbarbloglogo">Blog</label>
          </a>
          
        </li>

        <li className="nav-item mt-1 mx-3" >
           <div className='switch-nav' >
            
            <input onClick={()=>fun_del_or_take()} type="checkbox" id='switcher' />
            {/*  When used together with the <label> element, the for attribute specifies which form element a label is bound to. */}
            <label htmlFor="switcher"></label>
           </div>
        </li>


      </ul>

       

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

        <ul className='profilelogo-ul my-2 mx-2'>
       <li className="nav-item dropdown">
          
          <a href="/" role="button"  data-bs-toggle="dropdown" aria-expanded="false">
            <img className='navbarlogo' src={profilelogo} alt="" />
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sing in </a></li>
            <li><a className="dropdown-item" href="#">Sing up</a></li>
            
            
          </ul>
        </li>
       </ul>
      </form>
       
      <Link to="/Cart"><button type="button" className=" mx-2 btn  position-relative">
    <img className='cart-logo' src={Cart} alt="img" />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
     {props.items}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</Link>
        
    </div>


    
  </div>
  
</nav>
    </div>
  )
}

export default Navbar





