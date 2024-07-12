import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import {FlippingCard, StylishCard} from './Card'

const Home = () => {
    return (
        <>
            <Navbar />
            <Carousel />
            <div className='FlippingCards'>
            <FlippingCard/>
            </div>
            <StylishCard/>
        </>
    )
}

export default Home