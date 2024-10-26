import React from 'react'
import './Products.css'
import Product from './Product'

const Products = () => {
  return (
    <> 
      <div className='products_row'>
        <Product
        
         id='123' 
         title='Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8core CPU and 7core GPU, 8GB, 256GB) - Space Gray'
         image="https://m.media-amazon.com/images/I/31YYs4lTaNL._FMpng_SY85_.png"
         rating={4}
         price={25.99}
         /> 
        <Product 
         id='234' 
         title='Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8core CPU and 7core GPU, 8GB, 256GB) - Space Gray'
         image="https://m.media-amazon.com/images/I/31YYs4lTaNL._FMpng_SY85_.png"
         rating={2}
         price={59.99}
         /> 
      </div>
      <div className='products_row'>
        <Product 
         id='345' 
         title='Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8core CPU and 7core GPU, 8GB, 256GB) - Space Gray'
         image="https://m.media-amazon.com/images/I/31YYs4lTaNL._FMpng_SY85_.png"
         rating={3}
         price={567.8}
         /> 
        <Product 
         id='4' 
         title='Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8core CPU and 7core GPU, 8GB, 256GB) - Space Gray'
         image="https://m.media-amazon.com/images/I/31YYs4lTaNL._FMpng_SY85_.png"
         rating={1}
         price={349.9}
         />
        <Product 
         id='5' 
         title='Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8core CPU and 7core GPU, 8GB, 256GB) - Space Gray'
         image="https://m.media-amazon.com/images/I/31YYs4lTaNL._FMpng_SY85_.png"
         rating={5}
         price={323.8}
         />
      </div>
      <div className='products_row'>
        <Product 
         id='1' 
         title='Apple 2020 MacBook Air (13-inch, Apple M1 chip with 8core CPU and 7core GPU, 8GB, 256GB) - Space Gray'
         image="https://m.media-amazon.com/images/I/31YYs4lTaNL._FMpng_SY85_.png"
         rating={3}
         price={456.99}
         /> 
      </div>

    </>
 
  )
}

export default Products
