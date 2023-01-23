import React from 'react'
import "./HeroSection.css"
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
    const words = ["Proficient in creating responsive and user-friendly interfaces using HTML, CSS, and JavaScript"]
  return (
    <section className='herosection'>
        <div className="wrapper">
            <h1>HI,</h1>
            <h2>I'm Iqbal Rizan, a Junior Front-End Engineering</h2>
            <Typewriter options={{
                strings : words,
                autoStart : true,
                loop : true,
                delay : 20,
                wrapperClassName : "typewritter"
            }} />
    
        </div>

    </section>
  )
}

export default HeroSection