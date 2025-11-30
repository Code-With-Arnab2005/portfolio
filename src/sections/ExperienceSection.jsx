import React, { useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import { experiences } from "../constants";
import ExperienceCard from "../components/ExperienceCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
      },
    });

    gsap.utils.toArray(".exp-card").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="flex-center section-padding">
      <main className="text-white w-full">
        <div className="mb-20">
          <TitleHeader
            title="My Work Experience"
            sub="💼 Internships and Professional Roles I have completed"
          />
        </div>

        <div className="border-2 border-gray-500 rounded-lg px-4 sm:px-6 lg:px-20 py-14 grid gap-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              className="exp-card"
              company={exp.company}
              role={exp.role}
              duration={exp.duration}
              description={exp.description}
              tech={exp.tech}
              certificateUrl={exp.certificateUrl}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default ExperienceSection;