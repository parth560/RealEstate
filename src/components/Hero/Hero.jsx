import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <section className='hero-warpper'>
        <div className="paddings innerWidth flexCenter hero-container">

{/* left-side */}
        <div className='hero-left'>
            <div className="hero-title">
                <h1> 
                    Discover <br/>
                    Most Suitable <br/>
                    Property
                </h1>
            </div>

            <div className="flexColStart hero-des">
                <span>Find the variety of properties which suits your requirements</span>
                <span>Forget all the hassle of finding your new home</span>
            </div>

            <div className="search-bar">
                Search-bar
            </div>
        </div>

{/* right-side */}

        <div className='flexCenter hero-right'>
            <div className="image-container">
                <img src='./hero-image.png' alt=''/>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Hero