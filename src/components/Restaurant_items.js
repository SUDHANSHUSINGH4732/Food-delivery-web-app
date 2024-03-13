
import React, { Component } from 'react'

export class Restaurant_items extends Component {
  constructor(props){
    super()
     
    this.state={
      bg:{backgroundColor:"#282c34"},
      chek:false, 
      text:"Add"

    }
    


  }



addfun=()=>{
  var x= document.getElementById(this.props.id).checked
  
  
  
  if(x===true){
    this.setState(
      {
        text:"Added",
        // this.itemsno=this.itemsno+1
        bg:{backgroundColor:"#6c757d"},
        
        chek:true,}

    )
    this.props.numinc()
    this.props.fun_displyitems(this.props.id)
    
  }
  else{
this.setState(
  {
    text:"Add",
    bg:{backgroundColor:"#282c34"},
    chek:false,
  }
)
this.props.numdec()
this.props.fun_hideitems(this.props.id)

  }
  
}
  render() {
    return (
      <div>
         <div className="card mb-3 mt-3 mx-4" style={{maxWidth:"99%",backgroundColor:"#f8e7f5" }}>
  <div className="row g-0">
    <div className="col-md-4 " >
        <a href="/" ><img  src={this.props.img} className="img-fluid rounded-start res-item-img" alt="..."/></a>
      
    </div>
    <div className="col-md-8">
      <div className="card-body res-item-name">
        <a href="/"><h5 className="card-title  ">{this.props.item_name}</h5></a>
        
        <p className="card-text">{this.props.item_detel}</p>
        
        <input type="checkbox" onClick={this.addfun}  id={this.props.id} />
        <label htmlFor={this.props.id} id='additeml' style={this.state.bg} >{this.state.text} </label>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}


Restaurant_items.defaultProps ={
  item_detel:"item_detel",
  item_name:"item_name",
};
export default Restaurant_items




