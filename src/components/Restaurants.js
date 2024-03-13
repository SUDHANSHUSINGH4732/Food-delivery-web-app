import Resimg from "./Restaurentimg.jpg"
import {Link} from 'react-router-dom'
import React, { Component } from 'react'

export class Restaurants extends Component {
  constructor(){
    super()
   
  }
  Restaurant_onclick=()=>{
    this.props.dispalyCart(this.props.Restaurant_id)
    

  }
    
  render() {
    return (
      <>
      
       
     
      <Link to="/Restaurant_items_page" onClick={this.Restaurant_onclick}>
      
      
       <div id={this.props.Restaurant_id} className="d-inline-block mx-4 my-3" >
        <div className="card" style={{width: "28.3rem"}}>
       <img src={this.props.Restaurant_image} className="card-img-top" alt="..."/>
 
  <div className="card-body res-name">
    <h5 className="card-title">{this.props.Restaurant_name}</h5>
    
    <p className="card-text">{this.props.Restaurant_detel}</p>
    <Link to="/About" ><button type="button" className="btn btn-secondary" onClick={this.Restaurant_onclick}>About {this.props.Restaurant_name}</button>
</Link>
  </div>
</div>
</div>

</Link>

      </>
    )
  }
}
Restaurants.defaultProps ={
  Restaurant_detel:"Restaurant_detel",
  Restaurant_name:"Restaurant_name",
  Restaurant_image:Resimg,
  Restaurant_id:"Restaurant_id",

};

export default Restaurants





