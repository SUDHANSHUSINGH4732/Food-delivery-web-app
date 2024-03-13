import React, { Component } from 'react'
import Restaurant_items from './Restaurant_items'
import burgur from "./item_img/burgur.png"
import pizza from "./item_img/pizza.png"
import kaju_katli from "./item_img/Kaju_katli.png"
import rasgula from "./item_img/rasgula.png"
import chilli_panir from "./item_img/chilli_panner.png"
import chole_bhature from "./item_img/chole_bhature.png"
import pasta from "./item_img/pasta.png"
import chap from "./item_img/chaap.png"
import momos from "./item_img/moms.png"
import ice_crem from "./item_img/ice_crem.png"
import sweet_corn from "./item_img/sweet_corn.png"
export class Restaurant_items_page extends Component {
  render() {
    return (
      <div>
        <Restaurant_items id="Pizza" numinc={this.props.numinc} numdec={this.props.numdec} item_name="Pizza"  item_detel=" crispy crust, luscious tomato sauce, melted cheese, and an array of delectable toppings" fun_displyitems={this.props.fun_displyitems}  fun_hideitems={this.props.fun_hideitems}  img={pizza} />


        <Restaurant_items id="Burger" numinc={this.props.numinc} numdec={this.props.numdec}
        item_name="Burger" item_detel="nestled between soft buns, adorned with fresh lettuce, juicy tomatoes, and a symphony of condiments"
         
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        img={burgur}     
             />


        <Restaurant_items id="Chilli-Paneer" numinc={this.props.numinc} numdec={this.numdec}
        item_name="Chilli Paneer" item_detel="This savory delight perfectly balances the creamy richness of paneer with the fiery kick of chillies"
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        img={chilli_panir}
        />


        <Restaurant_items id="Chole-bhature" numinc={this.props.numinc} numdec={this.props.numdec}
        item_name="Chole bhature" item_detel="deep-fried bhaturas paired with a hearty, spiced chickpea curry known as chole"
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        img={chole_bhature}
        />

        <Restaurant_items id="Pasta" numinc={this.props.numinc} numdec={this.props.numdec}
        item_name="Pasta" item_detel="Passata, a staple in Italian cuisine, is a smooth, strained tomato sauce that captures the essence of ripe tomatoes"
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        img={pasta}
        />

        <Restaurant_items id="Chaap" numinc={this.props.numinc} numdec={this.props.numdec}
        item_name="Chaap" item_detel=" features marinated and grilled soy or wheat protein, offering a meaty texture"
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        img ={chap}
        />

        <Restaurant_items id="Moms" numinc={this.props.numinc} numdec={this.props.numdec}
        item_name="Moms" item_detel=" the unsung architects of warmth and comfort, weave the threads of love into every hug"
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        
        img={momos}
        />

        <Restaurant_items id="Ice-Cream" numinc={this.props.numinc} numdec={this.props.numdec}
        item_name="Ice Cream" item_detel="frozen symphony of creamy indulgence, delights taste buds with its myriad flavors"
        fun_displyitems={this.props.fun_displyitems}
        fun_hideitems={this.props.fun_hideitems}
        img={ice_crem}
        />

        <Restaurant_items id="Sweet-corn" numinc={this.props.numinc} numdec={this.props.numdec}
         item_name="Sweet corn" item_detel="nature's golden kernels, bursts with sweetness and crunch, offering a delectable contrast in salads, soups"
         fun_displyitems={this.props.fun_displyitems}
         fun_hideitems={this.props.fun_hideitems}
          img={sweet_corn}
         />
        

        <Restaurant_items id="Rasgulla" numinc={this.props.numinc} numdec={this.props.numdec}
         item_name="Rasgulla" item_detel="a beloved Indian dessert, features spongy and delicate cheese balls soaked in a fragrant sugar syrup"
         fun_displyitems={this.props.fun_displyitems}
         fun_hideitems={this.props.fun_hideitems}
         img={rasgula}
         />

        <Restaurant_items id="Kaju-Katli" numinc={this.props.numinc} numdec={this.props.numdec}
         item_name="Kaju Katli" item_detel=" a sublime Indian confection, showcases a smooth blend of cashews, sugar, and ghee"
         fun_displyitems={this.props.fun_displyitems}
         fun_hideitems={this.props.fun_hideitems}
         img={kaju_katli}
         />

        
      </div>

      
    )
  }
}

export default Restaurant_items_page
