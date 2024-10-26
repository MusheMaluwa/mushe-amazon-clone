import React from 'react';
import ReactDOM from 'react-dom/client';  // Correct import for React 18
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {ShoppingState} from './context/shopping/ShoppingState'

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ShoppingState>
          <App />
        </ShoppingState>       
    </BrowserRouter>
  </React.StrictMode>
);


