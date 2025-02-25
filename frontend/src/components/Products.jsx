import React from 'react'
import '../Styles/Products.css'
import axios from "axios";

const Products = ({products}) => {
    const checkOutHandler = async (amount) => {
        const {data: keyData} = await axios.get("api/v1/getKey")
        const {key} = keyData;
        console.log(key)

        const {data: orderData} = await axios.post("/api/v1/payment/process", {amount})
        const {order} = orderData;
        console.log(order);

        const options = {
            key,
            amount,
            currency: 'INR',
            name: 'Razorpay-templete',
            description: 'Test Transaction',
            order_id: order.id,
            callback_url: '/api/vi/paymentVerification',
            prefill: {
              name: 'Shivaji Patil',
              email: 'shivajirp@example.com',
              contact: '8999793736'
            },
            theme: {
              color: '#F37254'
            },
          };
        
        const rzp = new Razorpay(options);
        rzp.open();
    }


  return (
      <div className='products-container'>
        {products.map((item) => (
            <div className='product-card' key={item.id}>
                <img src={item.image} alt="Product" className='product-image'/>
                <h3 className='product-title'>{item.title}</h3>
                <p className='product-price'>Price <strong>{item.price}</strong>/-</p>
                <button className='pay-button' onClick={() => {checkOutHandler(item.price)}} >Pay({item.price})</button>
            </div>
        ))}
    </div>
  )
}

export default Products
