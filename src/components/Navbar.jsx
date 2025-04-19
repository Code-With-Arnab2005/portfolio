import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='navbar scrolled'>
        <div className="inner">
            <a className='logo' href="#hero">
                Arnab Bhattacharya
            </a>

            <nav className='desktop'>
                <ul>
                    {navLinks.map(({name, link}) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className='underline' />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a className='contact-btn group:' href="#contact">
                <div className='inner'>
                    <span>Contact</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar
