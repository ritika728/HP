import * as React from 'react';
import './About.css'
import Imagee from '../../assets/imagee.jpg'
export default function About() {
  return (
    
      <div className='top-heading' id="ABOUT">
        <h1>WHO ARE WE ?</h1>
      <div className='mabout'>
        <div className='inspera'><p>Inspera is a group of people, who are working towards the betterment of society by trying to help the people who are addicted to Alcohol, Cigarettes and drugs. There are many citizens out there who want to work on themselves, who want to leave this addiction but are always unable to accomplish their goal. We are here to support them in various ways. For those who are financially incapable of getting themselves admitted in the rehabilitation centers, are connected to their nearby NGOs, who takes in charge of their overall expenses. </p></div>
        <div className='mphoto'>
          <img src={Imagee} alt="no" />
        </div>
        </div>    
      </div>
      
      
  );
}