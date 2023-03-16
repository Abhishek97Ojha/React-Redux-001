import React, { useContext } from 'react'
import './Service.css'
import { MyContext } from '../App'
const Service = () => {
    const context=useContext(MyContext);
  return (
    <div className='service' style={context.theme}>
        <h1>Our service are not available</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae quas aliquid necessitatibus eius voluptate expedita, sed esse, minus officia recusandae illo hic commodi aliquam officiis culpa sit, modi asperiores?</p>
    </div>
  )
}

export default Service