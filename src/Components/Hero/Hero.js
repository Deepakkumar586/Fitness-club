import React from 'react'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png";
import hero_image_black from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from 'framer-motion';


import './Hero.css'

const Hero = () => {
    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='hero'>
            <div className='blur blur-hero'></div>
            <div className='left-h'>
                <Header />
                {/* best Add */}
                <div className='best-add'>
                    <motion.div
                        initial={{ left: '130px' }}
                        whileInView={{ left: '6px' }}
                        transition={{ ...transition, type: 'twin' }}
                    >

                    </motion.div>
                    <span>The Best fitness Club</span>
                </div>

                {/* Hero heading */}
                <div className='text-hero'>
                    <div>
                        <span className='stroke-text'>Shape  </span>
                        <span>Your  </span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div className='about-zim'>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>

                </div>
                {/* some figgures add experience */}
                <div className='Figure'>
                    <div>
                        <span>+  100</span>
                        <span>Expert zim</span>
                    </div>

                    <div>
                        <span>+ 78</span>
                        <span> Members also joined</span>
                    </div>

                    <div>
                        <span>+ 30 </span>
                        <span>Fitness program</span>
                    </div>
                </div>
                {/* two button  */}
                <div className='hero-button'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>
            <div className='right-h'>
                <button className='btn'>Join Now</button>


                <motion.div className='heart-rate'
                    initial={{ right: '-1rem' }}
                    transition={transition}
                    whileInView={{ right: '4rem' }}>

                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                {/* Images all right side hero */}
                <img src={hero_image} alt="" className='hero-image' />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_black} alt="" className='hero-image-black' />

                {/* calories image */}
                <motion.div initial={{ right: '55rem' }}
                    transition={transition}
                    whileInView={{ right: '40rem' }}
                    className='calories'>
                    <img src={Calories} aly="calories" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Hero
