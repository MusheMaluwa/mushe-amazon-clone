import './Checkout.css'
import React, {useContext} from 'react'
import ShoppingContext from '../context/shopping/ShoppingContext';
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal';


const Checkout = () => {
    const shoppingContext = useContext (ShoppingContext);
    const {basket, user}= shoppingContext;
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img 
                className='checkout_ad'
                src="https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png"
                alt=''
            />
            <div className=''>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your Shopping Basket</h2>

                {basket.map(item =>(<CheckoutProduct
                                        key={item.id} 
                                        id={item.id} 
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />)
                            )
                }
            </div>
        </div>
        <div className='checkout_right'><Subtotal></Subtotal></div>     
    </div>
  )
}

export default Checkout
