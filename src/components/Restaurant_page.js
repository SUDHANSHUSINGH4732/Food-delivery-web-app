import React, { Component } from 'react'
import Restaurants from './Restaurants'
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


export class Restaurant_page extends Component {



  
  render() {
    return (
      <div>
        <Restaurants Restaurant_name="Shiva Cafe" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Shiva-Cafe"  dispalyCart={this.props.dispalyCart} Restaurant_image={shiva_img} />
        
        <Restaurants  Restaurant_name="Ishu Restaurant" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Ishu-Restaurant" 
         dispalyCart={this.props.dispalyCart} Restaurant_image={ishu_img} />

        <Restaurants  Restaurant_name="Food Point" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Food-Point" 
         dispalyCart={this.props.dispalyCart}  Restaurant_image={foodpoit_img} />

        <Restaurants  Restaurant_name="Aaditya Pizza" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Aaditya-Pizza" 
        dispalyCart={this.props.dispalyCart} Restaurant_image={aditya_img}  />

        <Restaurants  Restaurant_name="Tasty Bits" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Tasty-Bits"  dispalyCart={this.props.dispalyCart} Restaurant_image={testy_bits_img} />

        <Restaurants  Restaurant_name="Pizza 47" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Pizza-47"  dispalyCart={this.props.dispalyCart} Restaurant_image={pizza_47_img} />

        <Restaurants  Restaurant_name="Pizza Express" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Pizza-Express" dispalyCart={this.props.dispalyCart} Restaurant_image={pizza_express_img} />

        <Restaurants  Restaurant_name="Sudhanshu Restaurant" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Sudhanshu-Restaurant" dispalyCart={this.props.dispalyCart} Restaurant_image={sudhanshu_img}  />

        <Restaurants  Restaurant_name="Ishan Bhature Wala" Restaurant_detel=" Bhatura,Buger ,Pizza ,pasta ,and many more " Restaurant_id="Ishan-Bhature-Wala" dispalyCart={this.props.dispalyCart} Restaurant_image={ishan_img}  />

        <Restaurants  Restaurant_name="M.B.A chai Wala" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="MBA-chai-Wala" dispalyCart={this.props.dispalyCart} Restaurant_image={mba_img}  />

        <Restaurants  Restaurant_name="Ayush Restaurant" Restaurant_detel="Buger ,Pizza ,pasta ,and many more " Restaurant_id="Ayush-Restaurant" dispalyCart={this.props.dispalyCart} Restaurant_image={ayush_img}  />

     
    </div>
    )
  }
}

export default Restaurant_page
