"use client"

import React, { useState } from 'react'
import './header.css'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { TiAdjustBrightness } from "react-icons/ti";

export default function Header() {
  const [toggle, setToggle] = useState(false)

  const handleBtnBg = () => {
    const btn = document.querySelector(".toggle-btn")
    btn.addEventListener('click', function() {
      btn.classList.add('btn-bg')
      setTimeout(function() {
        btn.classList.remove('btn-bg')
      }, 300)
    })
  }

  const handleToggle = () => {
    setToggle(!toggle)
    
    if (toggle) {
      document.body.classList.add("bright-bg")
      document.body.classList.remove("dark-bg")
    } else {
      document.body.classList.add("dark-bg")
      document.body.classList.remove("white-bg")
    }

    handleBtnBg ()
  }

  return (
    <div className='header'>
        <p className="heading">القرآن</p>
        <button onClick={handleToggle} className='toggle-btn'>
          {
            toggle ? <BsFillMoonStarsFill /> : <TiAdjustBrightness />
          }
        </button>
    </div>
  )
}
