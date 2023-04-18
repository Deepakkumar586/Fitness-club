import React from 'react'
import './Join.css'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Join() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9c1q3ek', 'template_4svahsa', form.current, 'NS87pt9dTwlhsITwE')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='Join' id='join-us'>
            {/* left join */}
            <div className='left-join'>
                <hr />
                <div>
                    <span className='stroke-text'>READY TO</span>
                    <span> LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY</span>
                    <span className='stroke-text'>  WITH US ?</span>
                </div>

            </div>

            {/* right jOin */}
            <div className='right-Join'>
                <form ref={form} className='validate-form' onSubmit={sendEmail}>
                    <input type='name' name="user_name" placeholder='Enter your Email address' />

                    <input type='email' name="user_email" placeholder='Enter your Email address' />

                    <button className='btn btn-join'>Join Now</button>

                </form>

            </div>

        </div>
    )
}
