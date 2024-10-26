import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css';
import ShoppingContext from '../context/shopping/ShoppingContext'; 

const Subtotal = () => {
  const navigate = useNavigate();
    const shoppingContext = useContext (ShoppingContext);
    const {basket, getBasketTotal}= shoppingContext;
    console.log(getBasketTotal(basket));

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value => <>
                            <p> Subtotal ({basket.length} items:) <strong>{value}</strong> </p>
                            <small className='subtotal_gift'>
                                <input type='checkbox'/>
                                This order contains a gift 
                            </small>     
                           </>)}

        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        prefix={'$'}
      />
      <button onClick={(e) => navigate ('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
 