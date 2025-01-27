import React from 'react'
import './Footer.css'
import youtube_icon from "../../assets/youtube_icon.png"
import twitter_icon from "../../assets/twitter_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import facebook_icon from "../../assets/facebook_icon.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Actions</li>
        <li>Privacy</li>
        <li>Legal notice</li>
        <li>Conserts</li>
        <li>Entertainment</li>
        <li>Carrers</li>
        <li>Help us</li>
        <li>Report a Bug</li>

      </ul>
      <p className='cp-texts'>© 2003-2025 Netflixyz</p>
    </div>
  )
}

export default Footer