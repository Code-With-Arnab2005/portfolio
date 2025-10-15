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
        { label: 'Certificates', onClick: () => document.getElementById('certificate')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Development Journey', onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Skills', onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Contact Me', onClick: () => document.getElementById('contactme')?.scrollIntoView({ behavior: 'smooth' }) },
        { label: 'Give Feedback', onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
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

                <a target='_blank' href="https://drive.google.com/file/d/1h9Bb3ZTikA9XIishZ4y-RaWhUcjBLgQD/view?usp=sharing">
                    <button className='text-black px-4 py-3 hover:cursor-pointer rounded-lg bg-white-50'>RESUME</button>
                </a>
                
                <a className='contact-btn group:' href="#contact">
                    <Button
                        className="hidden md:block w-60 h-16"
                        id="button"
                        text="Contact Me"
                        target="#contactme"
                    />
                </a>


                <div className='text-center hover:cursor-pointer transition-all delay-100'>
                    <HeroDropdown options={options} />
                </div>
            </div>
        </header>
    )
}

export default Navbar
