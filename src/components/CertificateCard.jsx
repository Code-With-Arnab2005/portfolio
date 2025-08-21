import React from "react";

const CertificateCard = ({
  title,
  imageUrl,
  issuedBy,
  issueDate,
  certificateUrl,
}) => {
  return (
    <a
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-50 object-cover"
        loading="lazy"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Issued by <span className="font-medium">{issuedBy}</span>
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Date: {issueDate}
        </p>
      </div>
    </a>
  );
};

export default CertificateCard;
