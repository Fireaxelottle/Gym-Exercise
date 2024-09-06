import React from 'react'
import { css } from '@emotion/css'
import { Link } from 'react-router-dom'
import  Logo  from '../assets/Logo.png'

function Navbar() {
  return (   
    <nav className={css`display: grid; justify-content: none; align-items: center; padding: 0 20px; grid-template-columns: 25%  25%`}>
      <Link><img src={Logo} alt="Logo" className={css`height: 40px; width: 50px; margin-right: 30px `} /></Link>
      <ul className={css`display: flex; align-items: flex-end`}>
        <li>
          <Link className="Linkactive" to='/'>Home</Link>
          </li>
        <li>
          <a className="" href='#exercises'>Exercises</a>
          </li>
      </ul>
    </nav>
  )
}

export default Navbar
