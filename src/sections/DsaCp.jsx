import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleHeader from '../components/TitleHeader';

gsap.registerPlugin(ScrollTrigger);

// Example data – replace with your real stats
const dsaData = [
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/Arnab_Bhattacharya_2005/',
    img: 'https://cdn.simpleicons.org/leetcode/06b6d4',
    problemsSolved: 100,
    // contests: 'Participated in 30+ contests',
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/Arnab_Bhattacharya',
    img: 'https://cdn.simpleicons.org/codeforces/06b6d4',
    rating: '1211 (Max:1247, Pupil)',
    contests: '40+ contests',
  },
  {
    name: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/user/arnabbhattacharya2005/',
    img: 'https://cdn.simpleicons.org/geeksforgeeks/06b6d4',
    problemsSolved: 120,
    contests: 'GFG Weekly, Biweekly',
  },
  {
    name: 'Coding Ninjas',
    url: 'https://www.codingninjas.com/studio/profile/arnabbhattacharya2005',
    img: 'https://cdn.simpleicons.org/codingninjas/06b6d4',
    problemsSolved: 20,
    // contests: 'CN Studio Leaderboard',
  },
];

const DSASection = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        }
      );
    });
  }, []);

  return (
    <section id="dsa" ref={sectionRef} className="flex-center section-padding">
      <main className="text-white w-full md:px-10 px-5">
        <div className="mb-20">
          <TitleHeader
            title="My DSA & CP Profile Highlights"
            sub="🎯 Problem Solving Strength & Contest Participation"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 border-2 border-gray-500 px-4 sm:px-6 lg:px-20 py-16 rounded-lg">
          {dsaData.map((profile, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="hover:scale-105 transition duration-300 p-6 rounded-2xl flex flex-col items-center text-center bg-[#111111]"
            >
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full mb-3"
                style={{ backgroundColor: profile.bg || 'transparent' }}
              >
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-cyan-400 hover:underline mb-2"
              >
                {profile.name}
              </a>

              {profile.problemsSolved && (
                <p className="text-sm text-gray-300">
                  <strong>{profile.problemsSolved}+</strong> Problems Solved
                </p>
              )}

              {profile.rating && (
                <p className="text-sm text-gray-300">
                  <strong>Rating:</strong> {profile.rating}
                </p>
              )}

              {profile.contests && (
                <p className="text-sm text-gray-400 mt-1">{profile.contests}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default DSASection;
