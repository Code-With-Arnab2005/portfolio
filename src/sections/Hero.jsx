import React from 'react';
import { words } from "../constants/index.js";
import Button from '../components/Button.jsx';
import HeroExperience from '../components/HeroModels/HeroExperience.jsx';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AnimatedCounter from '../components/AnimatedCounter.jsx';

const Hero = () => {

    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 70,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.4,
                duration: 1,
                ease: 'power2.inOut'

            }
        )
    }, [])

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout'>
                {/* hero content */}
                <header className='flex justify-between md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>
                                Shaping
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {
                                            words.map((word, ind) => (
                                                <span key={ind} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                    <img src={word.imgPath}
                                                        alt={word.text}
                                                        className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                                    />
                                                    <span>{word.text}</span>
                                                </span>
                                            ))
                                        }
                                    </span>
                                </span>
                            </h1>
                            <h1>Into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                            Hi, I'm Arnab, a developer based in India with a passion for code.
                        </p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="See my Work"
                            target="#work"
                        />
                    </div>

                    {/* Profile Picture */}
                    <div className="hidden sm:flex flex-1 justify-center items-center">
                        <img
                            src="/images/profile_pic.jpg"
                            alt="Profile Picture"
                            className="w-50 h-50 md:w-120 md:h-120 object-cover object-top rounded-xl shadow-xl border-2 border-white transition-transform duration-300 hover:scale-105"
                        />

                    </div>

                </header>

                {/* 3d model */}
                {/* <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure> */}

            </div>

            <AnimatedCounter />
        </section>
    )
}

export default Hero
