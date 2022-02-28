import React from 'react'
import ImageCards from './ImageCards';
import WomInTech from '../assets/images/lady1.jpg';
import WomInTech2 from '../assets/images/lady2.jpg';
import WomInTech3 from '../assets/images/lady3.jpg';
import WomInTech4 from '../assets/images/lady4.jpg';

const Events = () => {
  return (
    <div className="events container mt-3 pb-3">
        <ImageCards image={WomInTech} />
        <ImageCards image={WomInTech2}/>
        <ImageCards image={WomInTech3}/>
        <ImageCards image={WomInTech4}/>
    </div>
  )
}

export default Events