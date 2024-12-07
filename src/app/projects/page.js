import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'HealthKit Fitness Tracker',
      description: 'A comprehensive fitness tracking app that integrates with Apple HealthKit. Features include workout tracking, health metrics visualization, and personalized goals.',
      image: '/images/fitness-app.png',
      technologies: ['Swift', 'HealthKit', 'CoreData', 'SwiftUI'],
      appStoreLink: '#',
      githubLink: '#',
    },
    {
      title: 'AR Shopping Experience',
      description: 'An augmented reality shopping app that lets users visualize products in their space before purchasing. Implements ARKit for precise 3D object placement.',
      image: '/images/ar-app.png',
      technologies: ['Swift', 'ARKit', 'SceneKit', 'UIKit'],
      appStoreLink: '#',
      githubLink: '#',
    },
    {
      title: 'Secure Messenger',
      description: 'End-to-end encrypted messaging app with focus on privacy and security. Features include biometric authentication and secure file sharing.',
      image: '/images/messenger-app.png',
      technologies: ['Swift', 'CryptoKit', 'Push Notifications', 'CloudKit'],
      appStoreLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1D1D1F] mb-4">iOS Projects</h1>
          <p className="text-[#86868B] max-w-2xl mx-auto">A collection of iOS applications I've developed, showcasing my expertise in Swift, UIKit, SwiftUI, and various iOS frameworks.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} description={project.description} image={project.image} technologies={project.technologies} appStoreLink={project.appStoreLink} githubLink={project.githubLink} />
          ))}
        </div>
      </div>
    </main>
  );
}
