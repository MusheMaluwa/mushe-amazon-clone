import './App.css';
import {useContext, useEffect} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js'
import { Elements} from '@stripe/react-stripe-js'
import Home from "./components/Home";
import Products from "./components/Products";
import Header from './components/layout/Header';
import ProductsDetails from './components/ProductsDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import ShoppingContext from './context/shopping/ShoppingContext';
import { auth } from './Firebase';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

const promise = loadStripe(
  'pk_test_51PqaIiP0FHqckE33XtrntauFQIFbFmpoVaXjicD7PtNI3RU31HXdXQ9LXbIRfwy7nFbckYJLJwoAG2pTLXWCrO6B00JBdxPbtS'
);

const App = () => {
  const shoppingContext = useContext(ShoppingContext);
  const { setUser}= shoppingContext;
 useEffect(() => {
    auth.onAuthStateChanged((authUser) => { 
      console.log("User is ->", authUser);

      if(authUser) {
        setUser( authUser);
      } else {
        setUser( null);
      }
    })
  }, [setUser])

  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>

          <Route path="/home" element={<Home />}/>

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductsDetails />} />

          <Route path="/checkout" element={ <Checkout /> } />
          
          <Route path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            } 
          />

          <Route path="/login" element={<Login/>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
export default App;
