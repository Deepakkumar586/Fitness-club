import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import rightArrow from '../../assets/rightArrow.png'

const Program = () => {
    return (
        <div>
            <div className='Program' id="program">
                {/* header program */}
                <div className='programs-header'>
                    <span className='stroke-text'>Explore Our</span>
                    <span>Programs</span>
                    <span className='stroke-text'> to shape</span>
                </div>
            </div>
            <div className='program-categories'>
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>join Now</span>
                            <img src={rightArrow} alt="" />
                        </div>


                    </div>

                ))}
            </div>

        </div>
    )
}

export default Program
