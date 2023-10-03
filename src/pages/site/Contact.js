import React from 'react';
import { tabTitle } from '../../GeneralFunctions';

const Contact = () => {
  const pageTitle = "Contact - Aftab Web Development";
  tabTitle(pageTitle);
  
  return (
    <div id='contact' className='page'>
      <h1 className='page-title'>{pageTitle}</h1>
      <address>
        <p><strong>Email:</strong> <a href="mailto:aftab2060@gmail.com">aftab2060@gmail.com</a></p>
        <p><strong>Phone No:</strong> <a href="tel:+8801720390878">+8801720390878</a></p>
        <p><strong>Mailing Address:</strong> 22/Kha/2, Dakeshwari Road, Ploashi, Cawkbazaar, Dhaka-1211</p>
      </address>
    </div>
  )
}

export default Contact
