import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { certificates, projects } from '../constants';
import TitleHeader from '../components/TitleHeader';
import CertificateCard from '../components/CertificateCard';

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
        <section id='certificate' ref={sectionRef} className="flex-center section-padding">
            <main className="text-white">
                <div className="mb-20">
                    <TitleHeader
                        title="My Certificates"
                        sub="🚀 Here are the certificates I have got in my domain"
                    />
                </div>

                <div className="border-2 border-gray-500 px-4 sm:px-6 lg:px-20 py-16 rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                    {certificates.map((certificate, index) => (
                        <CertificateCard
                            title={certificate.title}
                            imageUrl={certificate.image}
                            issuedBy={certificate.issuedBy}
                            issueDate={certificate.issuedDate}
                            certificateUrl={certificate.url}
                        />
                    ))}
                </div>
            </main>
        </section>
    )
}

export default ShowSection
