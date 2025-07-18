import React from 'react'
import { navLinks } from '../constants'
import Button from './Button'

const Navbar = () => {
    return (
        <header className='navbar scrolled'>
            <div className="inner">
                <a className='logo' href="#hero">
                    Arnab Bhattacharya
                </a>

                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ name, link }) => (
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
                    <Button
                        className="hidden md:block md:w-60 md:h-16"
                        id="button"
                        text="Contact"
                        target="#contact"
                    />
                </a>
            </div>
        </header>
    )
}

export default Navbar
