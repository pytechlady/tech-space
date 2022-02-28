import React from 'react'
import Banner from '../component/Banner';
import Cards from '../component/Cards';
import Events from '../component/Events';

const Services = () => {
    return (
        <div>
            <Banner/>
                <Events />
            <Cards heading="heading 1"/>
            <Cards heading="heading 2"/>
        </div>
    )      
}

export default Services
