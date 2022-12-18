import React from 'react'
import './drawer.css'
import { useRef } from 'react'
const Drawer = () => {
  return (
    <div>
      <div className='drawer'>
        <div className='drawer__header'>
            <h3>Pandora Movies</h3>
            <h6>Home of Avatar and thousands movie</h6>
        </div>
        <div className='drawer__tiles'>
            <h3>Home</h3>
        </div>
        <div className='drawer__tiles'>
            <h3>Movies</h3>
        </div>
        <div className='drawer__tiles'>
            <h3>Series</h3>
        </div>
      </div>
    </div>
  )
}

export default Drawer
