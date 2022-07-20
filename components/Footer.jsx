import React from 'react';

import {  AiOutlineTwitter , AiFillLinkedin} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
    <p>2022 NeoTech made by Som Kamoji</p>
    <p className="icons">
      <a href="https://twitter.com/SomKamoji"><AiOutlineTwitter /></a>
      
      <a href="https://www.linkedin.com/in/som-kamoji-83220519b/"><AiFillLinkedin/></a>
    </p>
  </div>
  )
}

export default Footer