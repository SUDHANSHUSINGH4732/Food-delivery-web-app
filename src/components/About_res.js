import React, { Component } from 'react'

export default class About_res extends Component {
  render() {
    return (
      <div className='Abody'>
        


        <header className='Aheader'>
        <h1>{this.props.restaurant_name}</h1>
    </header>

    <section className='about_section'>
        <h2 className='Ah2'>About Us</h2>
        <p children="Ap">Welcome to {this.props.restaurant_name}, where we serve delicious and mouth-watering dishes crafted with passion and love. Our culinary experts use only the finest ingredients to create a dining experience that will leave you coming back for more.</p>
        
        <p children="Ap">At {this.props.restaurant_name}, we believe in the power of good food to bring people together. Whether you're here for a casual meal with friends, a romantic dinner, or a family celebration, we strive to make every dining experience special.</p>

  
        <p children="Ap">Our commitment to quality extends beyond the kitchen. We take pride in providing excellent customer service in a warm and inviting atmosphere. Our team is dedicated to ensuring your satisfaction from the moment you step through our doors.</p>

        <p children="Ap">Join us on a culinary journey and indulge in a symphony of flavors. We look forward to serving you and making your time at Restaurant Name a memorable one.</p>
        <p children="Ap">Whether you're here for a casual meal with friends, a romantic dinner, or a special celebration, we strive to make every dining experience memorable. Our friendly and attentive staff is dedicated to ensuring your satisfaction.</p>
        <p children="Ap">At {this.props.restaurant_name}, we believe in using fresh and locally sourced ingredients to create mouth-watering dishes. Our menu is crafted with care, offering a diverse range of options to satisfy every palate.</p>
       </section>
      </div>
    )
  }
}
