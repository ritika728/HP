import React from 'react';
import emailjs  from 'emailjs-com';
import './contact.css'
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@mui/icons-material/Email';
import { Link } from '@material-ui/core';

const Contact = () => {

  function sendemail(e){
    e.preventDefault();
    emailjs.sendForm("service_x99udhd","template_0l41cmy",e.target,"z9tEO6YDiLq_fhA2g").then(res=> alert("Email sent successfully!")).catch(err=>alert("ERROR! Please try again"));
  }

  return (

    <div>
        <div className='container' id="CONTACT">
        <div className='container1'>
              <div className='title'>
                <h1 style={{ fontSize:"50px"}}>CONTACT ME</h1>
              </div>
              <form onSubmit={sendemail}>
                <div className="total">
                <div className="socialsmain">
                <h1 style={{marginBottom:"65px"}}>GETTING IN TOUCH IS EASY!</h1>
                <h5 style={{marginTop:"-20px", marginBottom:"40px"}}>
                  In case, you want to help us by donating money or by volunteering to join us, please contact us. You'll receive a response within 24 hours. Your feedback is important, please drop of your suggestions and feedbacks here. Thank you!
                </h5>
               </div>
                <div className="all">
                <div className="box">
                    <div className="form">
                      <input className="input"
                        type='text'
                        name='name'
                        placeholder='Your Name*'
                        required 
                      />
                       </div>
                    <div className="form">
                      <input className="input"
                        name='email'
                        id='email'
                        placeholder='Your Email*'
                        required
                      />
                  </div>
                  <div className="form">
                      <input className="input"
                        name='number'
                        id='number'
                        placeholder='Your Phone Number*'
                        required
                      />
                  </div>
                  </div>
                <div className="block">
                  <textarea className="message"
                    name='message'
                    id='message'
                    placeholder ='Your Message*'
                    required
                  ></textarea>
                </div>
                </div>
                </div>
                <div className="contactbtn">
            <button type='submit'className="submit">SUBMIT
                </button>
              </div>
              </form>
            </div>
            
              <div className="socials">
                  <Link href="mailto:ritikamalik100102@gmail.com?"style={{marginLeft:"0px"}}className="icons" target="_blank"><EmailIcon/></Link>
                  <Link href="https://twitter.com/Ritika287" className="icons" target="_blank"><TwitterIcon/></Link>
                  <Link href="https://github.com/ritika728" className="icons" target="_blank"><GitHubIcon/></Link>
                  <Link href="https://www.linkedin.com/in/ritika-malik-must/" target="_blank" className="icons"><LinkedInIcon/></Link>
               </div>
          </div>
          </div>
  )
}

export default Contact;
