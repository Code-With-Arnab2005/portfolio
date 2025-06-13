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
                <div className="tech-grid">
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

                    {/* This is for the img part */}
                    {techStackImgs.map((techStackIcon, index) => (
            <div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {/* <div className="tech-card-animated-bg" /> */}
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="padding-x w-full">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack
