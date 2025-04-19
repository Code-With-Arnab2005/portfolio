import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger)

const ShowSection = () => {
    
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    
    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
          sectionRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5 }
        );
    
        // Animations for each app showcase
        const cards = [project1Ref.current, project2Ref.current, project3Ref.current];
    
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              delay: 0.3 * (index + 1),
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
              },
            }
          );
        });
      }, []);



  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
            {/* Left */}
            <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper'>
                    <img src="/images/project1.png" alt="" />
                </div>
                <div className='text-content'>
                    <h2>Resume Tracking System</h2>
                    <p className='text-white-50 md:text-xl'>This is made using NextJS Full Stack React Framework and MongoDB database to store all details, ML is used to predict ATS score of an applicant's resume</p>
                </div>
            </div>
            {/* Right */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    <div className='image-wrapper bg-amber-200'>
                        <img src="/images/mega_blog.png" alt="" />
                    </div>
                    <h2>Blog App</h2>
                    <p className='text-white-50 md:text-xl'>This is a blogging app with posts sharing features</p>
                </div>

                <div className='project' ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src="/images/easy_attendance.png" alt="" />
                    </div>
                    <h2>Attendance Taking App</h2>
                    <p className='text-white-50 md:text-xl'>This website is made using react, tailwind in for interactive user experience and backened is made by node-js, express, for database Mongodb is used</p>
                </div>
            </div>
        </div>

        <div className='w-[30%] mt-10'>
          <Link to={'/projects'}>
            <button className='w-[30vw] rounded-lg text-black hover:bg-black hover:text-white font-bold bg-white border-2 hover:cursor-pointer border-yellow-500 px-6 py-3'>See  MY  All  Projects</button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ShowSection
