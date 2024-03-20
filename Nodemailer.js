const { json } = require("express");
const nodemailer = require("nodemailer");

const sendMail= async(data, restaurant_email)=>{
var oderdata=JSON.stringify(data.order)
  
oderdata=oderdata.replace(",","\n")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "foodexpress9936@gmail.com",
    pass:"************" ,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'foodexpress9936@gmail.com', // sender address
    to:  restaurant_email, // list of receivers
    subject: "order", // Subject line
    text: "", // plain text body
    html: `
    
    
       <h5> order Information</h5>
          <ul>

            <li>phone_on:${data.phone_no}  </li>
            <li>adderss:${data.address}  </li>
            <li>eamil: ${data.email} </li>
            <li>oder_type: ${data.order_type} </li>
            <li>restaurant_name:${data.restaurant_name} </li>
            <li>order:${oderdata} </li>
            <li>Total payment:${data.total_payment} </li>
            
          </ul>
          <img src="./email-img.jpg" alt="" />
          `
    
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error);

}
module.exports=sendMail
