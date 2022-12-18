import React from 'react'
import './drawer.css'
import { useRef } from 'react'
import { Link } from 'react-router-dom';
const Drawer = () => {
  return (
    <div>
      <div className='drawer'>
        <div className='drawer__header'>
            <h3>Pandora Movies</h3>
            <h6>Home of Avatar and thousands movie</h6>
        </div>
        <div className='drawer__tiles'>
            <Link className='linktiles' to='/'><h3>Home</h3></Link>
        </div>
        <div className='drawer__tiles'>
            <Link className='linktiles' to='/movies'><h3>Movies</h3></Link>
        </div>
        <div className='drawer__tiles'>
            <Link className='linktiles' to='/series'><h3>Series</h3></Link>
        </div>
      </div>
    </div>
  )
}

export default Drawer
