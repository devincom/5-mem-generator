import React from 'react'
import memIcon from '../images/troll-face.png';

export default function Header() {
  return (
    <nav className='header'>
      <img src={memIcon} alt="troll-face" className='header--image'/>
      <h1 className='header--title'>Meme Generator</h1>
      <h2 className='header--project'>Project - 3 </h2>
    </nav>
  )
}
