'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function ProjectCard({ title, description, image, link, appStoreLink, githubLink, technologies, features, slug }) {
  const [isHovered, setIsHovered] = useState(false);
  const projectPath = `/projects/${slug}`;

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Link href={projectPath} className="block">
        <div className="relative aspect-video bg-[#F5F5F7] overflow-hidden">
          <Image src={image} alt={title} fill className={`object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`} />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-[#1D1D1F] hover:text-[#0071E3] transition-colors">{title}</h2>
            <div className="flex space-x-3">
              {appStoreLink && (
                <button onClick={() => window.open(appStoreLink, '_blank', 'noopener,noreferrer')} className="text-[#0071E3] hover:text-[#0077ED] transition-colors" aria-label={`View ${title} on App Store`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </button>
              )}
              {githubLink && (
                <button onClick={() => window.open(githubLink, '_blank', 'noopener,noreferrer')} className="text-[#0071E3] hover:text-[#0077ED] transition-colors" aria-label={`View ${title} source code on GitHub`}>
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
          <p className="text-[#86868B] mb-6">{description}</p>
          {features && features.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-[#1D1D1F] mb-2">Key Features</h3>
              <ul className="list-disc list-inside text-[#86868B] space-y-1">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-[#F5F5F7] text-[#86868B] rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
