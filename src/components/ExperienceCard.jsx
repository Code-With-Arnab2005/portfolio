const ExperienceCard = ({ company, role, duration, description, tech, certificateUrl }) => {
  return (
    <div className="bg-[#0A0F1A] border border-gray-600 rounded-xl p-7 hover:border-yellow-400 transition-all duration-300">
      <h2 className="text-2xl font-bold">{role}</h2>
      <p className="text-white-50 font-semibold mt-1">{company}</p>
      <p className="text-white-50 mt-2 italic">{duration}</p>

      <p className="mt-5 text-white-50 leading-relaxed">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span key={idx} className="px-3 py-1 bg-[#1a2436] rounded-full text-sm">
            {t}
          </span>
        ))}
      </div>

      {certificateUrl && (
        <a
          href={certificateUrl}
          target="_blank"
          className="text-yellow-400 underline mt-4 block"
        >
          View Certificate
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
