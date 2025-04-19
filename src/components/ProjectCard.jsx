import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, image, liveLink, githubLink }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300 max-w-sm">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex gap-4 mt-2">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
          >
            <FaExternalLinkAlt /> Website Link
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-gray-100"
          >
            <FaGithub /> GitHub Repository Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;