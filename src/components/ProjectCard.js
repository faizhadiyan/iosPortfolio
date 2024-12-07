// src/components/ProjectCard.js
import Image from 'next/image';

export default function ProjectCard({ title, description, image, technologies, appStoreLink, githubLink }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-[#1D1D1F] mb-2">{title}</h2>
        <p className="text-[#86868B] mb-4">{description}</p>

        {technologies && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-[#F5F5F7] rounded-full text-sm text-[#1D1D1F]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex space-x-4">
          {appStoreLink && (
            <a href={appStoreLink} className="flex-1 bg-[#0071E3] text-white py-2 px-4 rounded-full text-center font-medium hover:bg-[#0077ED] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              View in App Store
            </a>
          )}
          {githubLink && (
            <a href={githubLink} className="flex-1 bg-[#F5F5F7] text-[#1D1D1F] py-2 px-4 rounded-full text-center font-medium hover:bg-[#E8E8ED] transition-colors duration-300" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
