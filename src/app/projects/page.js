import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'iOS App Name 1',
      description: 'A sophisticated iOS application that demonstrates modern Swift development practices and intuitive user experience design.',
      image: '/project1-placeholder.svg',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'SwiftUI', 'Core Data'],
      features: ['Real-time data synchronization', 'Offline-first architecture', 'Custom animations and transitions', 'iCloud integration'],
    },
    {
      title: 'iOS App Name 2',
      description: 'An innovative iOS app showcasing advanced iOS frameworks and clean architecture principles.',
      image: '/project2-placeholder.svg',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'UIKit', 'CloudKit'],
      features: ['Machine learning integration', 'Custom UI components', 'Push notifications', 'Background processing'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1D1D1F] mb-4">iOS Projects</h1>
          <p className="text-[#86868B] max-w-2xl mx-auto">A collection of iOS applications I&apos;ve developed, showcasing my expertise in Swift, SwiftUI, and modern iOS development practices.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
