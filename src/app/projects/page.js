import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      slug: 'swift-sync-pro',
      title: 'SwiftSync Pro',
      description: 'A sophisticated iOS application that demonstrates modern Swift development practices and intuitive user experience design.',
      image: '/screenshots/app1-sync.svg',
      link: '/projects/swift-sync-pro',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'SwiftUI', 'Core Data'],
      features: ['Real-time data synchronization', 'Offline-first architecture', 'Custom animations and transitions', 'iCloud integration'],
    },
    {
      slug: 'vision-ai',
      title: 'VisionAI',
      description: 'An innovative iOS app showcasing advanced iOS frameworks and clean architecture principles.',
      image: '/screenshots/app2-ml.svg',
      link: '/projects/vision-ai',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'CoreML', 'Vision'],
      features: ['Machine learning integration', 'Custom UI components', 'Push notifications', 'Background processing'],
    },
    {
      slug: 'healthkit-connect',
      title: 'HealthKit Connect',
      description: 'A comprehensive health tracking app integrating with Apple HealthKit for personalized wellness insights.',
      image: '/window.svg',
      link: '/projects/healthkit-connect',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'HealthKit', 'Charts'],
      features: ['Health data tracking', 'Custom analytics', 'Goal setting', 'Progress visualization'],
    },
    {
      slug: 'arkit-explorer',
      title: 'ARKit Explorer',
      description: 'An augmented reality experience showcasing the power of ARKit with interactive 3D content.',
      image: '/globe.svg',
      link: '/projects/arkit-explorer',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'ARKit', 'SceneKit'],
      features: ['3D object recognition', 'Spatial mapping', 'Interactive AR elements', 'Real-time physics'],
    },
    {
      slug: 'swiftui-weather',
      title: 'SwiftUI Weather',
      description: 'A beautiful weather app built with SwiftUI featuring dynamic animations and real-time updates.',
      image: '/project1-placeholder.svg',
      link: '/projects/swiftui-weather',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['SwiftUI', 'CoreLocation', 'WeatherKit'],
      features: ['Live weather data', 'Custom animations', 'Location services', 'Weather alerts'],
    },
    {
      slug: 'cryptotracker-pro',
      title: 'CryptoTracker Pro',
      description: 'Real-time cryptocurrency tracking app with custom charts and price alerts.',
      image: '/project2-placeholder.svg',
      link: '/projects/cryptotracker-pro',
      appStoreLink: '#',
      githubLink: '#',
      technologies: ['Swift', 'Charts', 'WebSocket'],
      features: ['Real-time price updates', 'Custom chart views', 'Price alerts', 'Portfolio tracking'],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1D1D1F] mb-4">iOS Projects</h1>
          <p className="text-[#86868B] max-w-2xl mx-auto">A collection of iOS applications I&apos;ve developed, showcasing my expertise in Swift, SwiftUI, and modern iOS development practices.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </main>
  );
}
