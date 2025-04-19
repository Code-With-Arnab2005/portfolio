import React from "react";
import { projects } from "../constants/index.js"; // Update path as needed
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white px-4 sm:px-6 lg:px-20 py-16">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-center border-b-2 border-gray-700 inline-block pb-2">
          My Projects
        </h1>
        <Link to={"/"}>
          <button className='w-[15vw] rounded-lg text-black hover:bg-black hover:text-white font-bold bg-white border-2 hover:cursor-pointer border-yellow-500 px-6 py-3'>Go To Portfolio</button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </main>
  );
};

export default Projects;
