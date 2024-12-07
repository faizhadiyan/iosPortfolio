'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

export default function ProjectDetails({ title, description, image, appStoreLink, githubLink, technologies, features, challenges, solutions, architecture, screenshots, role, timeline, impact }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'technical', label: 'Technical Details' },
    { id: 'challenges', label: 'Challenges & Solutions' },
    { id: 'impact', label: 'Impact & Results' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative aspect-video bg-[#F5F5F7]">{image && <Image src={image} alt={title} fill className="object-cover" priority />}</div>

      {/* Project Header */}
      <div className="p-4 sm:p-6 md:p-8 border-b border-[#F5F5F7]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F]">{title}</h1>
          <div className="flex flex-wrap gap-3">
            {appStoreLink && (
              <a href={appStoreLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[#0071E3] text-white rounded-full hover:bg-[#0077ED] transition-colors text-sm sm:text-base">
                <span className="mr-2">View in App Store</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-[#F5F5F7] text-[#1D1D1F] rounded-full hover:bg-[#E8E8ED] transition-colors text-sm sm:text-base">
                <span className="mr-2">View Source</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-base sm:text-lg text-[#86868B]">{description}</p>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-[#F5F5F7] sticky top-0 bg-white z-10">
        {/* Mobile Navigation */}
        <div className="md:hidden px-4 py-2 relative" ref={menuRef}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-full flex items-center justify-between px-4 py-2 bg-[#F5F5F7] rounded-full text-[#1D1D1F]">
            <span className="text-sm font-medium">{tabs.find((tab) => tab.id === activeTab)?.label}</span>
            <svg className={`w-5 h-5 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 px-4 py-2 bg-white shadow-lg rounded-lg border border-[#F5F5F7]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-colors ${activeTab === tab.id ? 'bg-[#F5F5F7] text-[#0071E3] font-medium' : 'text-[#86868B] hover:bg-[#F5F5F7]'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex px-8" aria-label="Project navigation">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-4 py-3
                  text-sm font-medium rounded-full
                  transition-all duration-200
                  ${activeTab === tab.id ? 'bg-[#0071E3] text-white shadow-md' : 'text-[#86868B] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Content Sections */}
      <div className="p-4 sm:p-6 md:p-8">
        {activeTab === 'overview' && (
          <div className="space-y-6 sm:space-y-8">
            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-[#0071E3] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm sm:text-base text-[#86868B]">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {technologies?.map((tech, index) => (
                  <span key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F5F5F7] text-[#86868B] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {role && (
              <section>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">My Role</h2>
                <p className="text-sm sm:text-base text-[#86868B]">{role}</p>
              </section>
            )}

            {timeline && (
              <section>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Project Timeline</h2>
                <p className="text-sm sm:text-base text-[#86868B]">{timeline}</p>
              </section>
            )}
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="space-y-6 sm:space-y-8">
            {architecture && (
              <section>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Architecture</h2>
                <div className="prose text-sm sm:text-base text-[#86868B] max-w-none">{architecture}</div>
              </section>
            )}

            {screenshots && screenshots.length > 0 && (
              <section>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Technical Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {screenshots.map((screenshot, index) => (
                    <div key={index} className="relative aspect-video bg-[#F5F5F7] rounded-lg overflow-hidden">
                      <Image src={screenshot.url} alt={screenshot.caption} fill className="object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 bg-black bg-opacity-50">
                        <p className="text-white text-xs sm:text-sm">{screenshot.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="space-y-6 sm:space-y-8">
            {challenges?.map((challenge, index) => (
              <section key={index}>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Challenge {index + 1}</h2>
                <p className="text-sm sm:text-base text-[#86868B] mb-4">{challenge}</p>
                <h3 className="text-base sm:text-lg font-medium text-[#1D1D1F] mb-2">Solution</h3>
                <p className="text-sm sm:text-base text-[#86868B]">{solutions[index]}</p>
              </section>
            ))}
          </div>
        )}

        {activeTab === 'impact' && (
          <div className="space-y-6 sm:space-y-8">
            {impact && (
              <section>
                <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] mb-4">Impact & Results</h2>
                <div className="prose text-sm sm:text-base text-[#86868B] max-w-none">{impact}</div>
              </section>
            )}
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="p-4 sm:p-6 md:p-8 border-t border-[#F5F5F7]">
        <Link href="/projects" className="inline-flex items-center text-[#0071E3] hover:text-[#0077ED] transition-colors text-sm sm:text-base">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
