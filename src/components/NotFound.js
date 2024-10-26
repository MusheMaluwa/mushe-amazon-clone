import React from 'react'
import './NotFound.css'
 import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not_found'>
        <Link to='/'>
            <div>
                <img className='img_top'
                    src="https://m.media-amazon.com/images/G/53/x-locale/common/small-logo._CB626597994_.jpg"
                    alt=""
                />
            </div>
            <div>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZP33k8-h2lGoGhsxS1WRTcHoTIPawLKxyQ&s"
                    alt=""
                />
            </div>  
        </Link>
         
    </div>
  )
}

export default NotFound
