import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
function Contact(){
    
    const form = useRef();
    (function(){
        emailjs.init("-Jzs-A9jcAD-jh_ql");
    })();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_14i7kjj', 'template_2q504pw', form.current, '-Jzs-A9jcAD-jh_ql')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return(
        <div className="contact">
            
            <h3 className="title">Contact Me</h3>
            <div className="form">
            <form ref={form} onSubmit={sendEmail}>
                <p>Let's get in touch! &#128150;</p>
                <input type="text" name="name" id="name" placeholder="Your Name" required/>
                <input type="text" name="email" id="email" placeholder="Your Email" required/>
                <input type="text" name="title" id="title" placeholder="Title" required/>
                <textarea id="message" name="message" rows="4" placeholder="Your Message"  required></textarea>
                <button type="submit">Send</button>
            </form>
            </div>
        </div>
    )
}

export default Contact;