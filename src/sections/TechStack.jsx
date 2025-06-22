import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from "../components/Models/TeckIcons";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const TechStack = () => {

    // useGSAP(() => {
    //     gsap.fromTo('.tech-card',
    //         {
    //             y: 50,
    //             opacity: 0
    //         },
    //         {
    //             y: 0,
    //             opacity: 1,
    //             duration: 1,
    //             ease: 'power2.inOut',
    //             stagger: 0.2,
    //             scrollTrigger: {
    //                 trigger: '#skills',
    //                 start: 'top center'
    //             }
    //         }
    //     )
    // })

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="How I Can Contribute & My Key Skills"
                    sub="🤝 What I Bring to the Table"
                />
                <div className="tech-grid border-2 border-gray-500 px-4 sm:px-6 lg:px-20 py-16 rounded-lg">

                    {/* This is for the img part */}
                    {techStackImgs.map((techStackIcon, index) => (
                        <div
                        key={index}
                        className="hover:scale-105 transition duration-200 card-border tech-card flex flex-col items-center justify-center p-4 rounded-4xl w-30 h-30"
                        >
                            <div className="w-15 h-15 flex justify-center items-center">
                                <img
                                    src={techStackIcon.imgPath}
                                    alt={techStackIcon.name}
                                    className="w-full h-full object-contain"
                                    />
                            </div>
                            <p className="text-sm text-center mt-2">{techStackIcon.name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default TechStack

{/* {techStackIcons.map((techStackIcon) => (
    <div
        key={techStackIcon.name}
        className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
    >
        <div className="tech-card-animated-bg" />
        <div className="tech-card-content">
            <div className="tech-icon-wrapper">
                <TechIcon model={techStackIcon} />
            </div>
            <div className="padding-x w-full">
                <p>{techStackIcon.name}</p>
            </div>
        </div>
    </div>
))} */}
