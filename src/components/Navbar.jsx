import React from 'react'
import { navLinks } from '../constants'
import Button from './Button'
import HeroDropdown from './HeroDropdown'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const options = [
        { label: 'Projects', onClick: () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'DSA/CP', onClick: () => document.getElementById('dsa')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Development Journey', onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Skills', onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Contact Me', onClick: () => document.getElementById('contactme')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Contact', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
    ];


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
                        className="hidden md:block w-60 h-16"
                        id="button"
                        text="Contact"
                        target="#contact"
                    />
                </a>
                <div className='md:hidden'>
                    <HeroDropdown options={options} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
