import ProjectDetails from '../../../components/ProjectDetails';
import Link from 'next/link';

// This would typically come from a database or CMS
const projectsData = [
  {
    slug: 'swift-sync-pro',
    title: 'SwiftSync Pro',
    description: 'A sophisticated iOS application that demonstrates modern Swift development practices and intuitive user experience design.',
    image: '/project1-placeholder.svg',
    appStoreLink: '#',
    githubLink: '#',
    technologies: ['Swift', 'SwiftUI', 'Core Data', 'Combine', 'CloudKit'],
    features: ['Real-time data synchronization', 'Offline-first architecture', 'Custom animations and transitions', 'iCloud integration', 'Push notifications', 'Biometric authentication'],
    challenges: ['Implementing seamless offline-first data synchronization while maintaining data consistency.', 'Optimizing battery life while maintaining real-time updates.', 'Ensuring smooth animations on older devices.'],
    solutions: [
      'Developed a custom sync engine using Combine and Core Data, with conflict resolution strategies.',
      'Implemented intelligent background fetch intervals and batch processing.',
      'Created a performance monitoring system and optimized render paths.',
    ],
    architecture: `
      The app follows a clean architecture pattern with three main layers:

      1. Presentation Layer (MVVM)
      - SwiftUI views and view models
      - Custom UI components
      - Navigation coordination

      2. Domain Layer
      - Use cases and business logic
      - Domain models and interfaces
      - Protocol-oriented design

      3. Data Layer
      - Repository implementations
      - Core Data stack
      - Network services
      - Local storage
    `,
    screenshots: [
      {
        url: '/screenshots/app1-arch.svg',
        caption: 'App Architecture Diagram',
      },
      {
        url: '/screenshots/app1-sync.svg',
        caption: 'Sync Engine Flow',
      },
    ],
    role: 'As the lead iOS developer, I was responsible for architecture design, implementation of core features, and coordination with the backend team.',
    timeline: 'Development spanned 6 months, from initial concept to App Store release, with ongoing updates and feature additions.',
    impact: `
      The app has achieved significant impact since its launch:
      
      • 100,000+ downloads in the first month
      • 4.8/5 average rating on the App Store
      • Featured in the App Store's "New Apps We Love"
      • 85% user retention rate after 30 days
      • 40% reduction in data usage compared to previous version
    `,
  },
  {
    slug: 'vision-ai',
    title: 'VisionAI',
    description: 'An innovative iOS app showcasing advanced iOS frameworks and clean architecture principles.',
    image: '/project2-placeholder.svg',
    appStoreLink: '#',
    githubLink: '#',
    technologies: ['Swift', 'UIKit', 'CloudKit', 'CoreML', 'Vision'],
    features: ['Machine learning integration', 'Custom UI components', 'Push notifications', 'Background processing', 'Advanced camera features', 'Real-time image processing'],
    challenges: ['Implementing complex ML models while maintaining app performance.', 'Creating a custom camera interface with real-time processing.', 'Managing memory usage with large datasets.'],
    solutions: ['Optimized ML model for mobile devices and implemented batch processing.', 'Developed a custom AVFoundation implementation with efficient frame processing.', 'Implemented advanced memory management and caching strategies.'],
    architecture: `
      The app uses a modular architecture with the following components:

      1. Core Modules
      - Camera Module
      - ML Processing Module
      - Data Management Module
      - UI Components Module

      2. Features
      - Real-time processing pipeline
      - Custom camera controls
      - Result visualization
      - Data export

      3. Infrastructure
      - Dependency injection
      - Analytics
      - Error handling
      - Logging
    `,
    screenshots: [
      {
        url: '/screenshots/app2-ml.svg',
        caption: 'ML Processing Pipeline',
      },
      {
        url: '/screenshots/app2-camera.svg',
        caption: 'Custom Camera Interface',
      },
    ],
    role: 'I served as the technical lead, focusing on ML integration, performance optimization, and architecture design.',
    timeline: 'The project was completed in 8 months, including 2 months of ML model training and optimization.',
    impact: `
      Key achievements and metrics:
      
      • Processing over 1M images daily
      • 50% faster processing compared to competitor apps
      • Featured in multiple tech conferences
      • Adopted by 3 major enterprise clients
      • 99.9% uptime since launch
    `,
  },
  {
    slug: 'healthkit-connect',
    title: 'HealthKit Connect',
    description: 'A comprehensive health tracking app integrating with Apple HealthKit for personalized wellness insights.',
    image: '/window.svg',
    appStoreLink: '#',
    githubLink: '#',
    technologies: ['Swift', 'HealthKit', 'Charts', 'CoreMotion', 'CloudKit'],
    features: ['Health data tracking', 'Custom analytics', 'Goal setting', 'Progress visualization', 'Workout tracking', 'Nutrition logging'],
    challenges: ['Ensuring accurate health data synchronization across devices.', 'Implementing privacy-first data handling.', 'Creating intuitive data visualizations for complex health metrics.'],
    solutions: ['Developed a robust HealthKit integration layer with data validation.', 'Implemented end-to-end encryption for sensitive health data.', 'Created custom chart components for health trend analysis.'],
    architecture: `
      The app follows a modular health-tracking architecture:

      1. Health Data Layer
      - HealthKit integration
      - Data validation & processing
      - Secure storage

      2. Analytics Engine
      - Custom metrics calculation
      - Trend analysis
      - Goal tracking

      3. Visualization Layer
      - Custom charts
      - Progress indicators
      - Interactive dashboards
    `,
    screenshots: [
      {
        url: '/screenshots/health-dashboard.svg',
        caption: 'Health Dashboard',
      },
      {
        url: '/screenshots/health-trends.svg',
        caption: 'Health Trends Analysis',
      },
    ],
    role: 'Lead developer responsible for HealthKit integration, data analysis algorithms, and privacy implementation.',
    timeline: 'Developed over 5 months with continuous iterations based on user feedback and health expert consultations.',
    impact: `
      Notable achievements:
      
      • 50,000+ active users tracking daily health metrics
      • 92% user satisfaction rate
      • Featured in health & fitness category
      • 30% improvement in user health goals achievement
      • Recognized for outstanding privacy practices
    `,
  },
  {
    slug: 'arkit-explorer',
    title: 'ARKit Explorer',
    description: 'An augmented reality experience showcasing the power of ARKit with interactive 3D content.',
    image: '/globe.svg',
    appStoreLink: '#',
    githubLink: '#',
    technologies: ['Swift', 'ARKit', 'SceneKit', 'RealityKit', 'Metal'],
    features: ['3D object recognition', 'Spatial mapping', 'Interactive AR elements', 'Real-time physics', 'Custom AR experiences', 'Gesture controls'],
    challenges: ['Optimizing AR performance across different devices.', 'Creating intuitive AR interactions.', 'Handling varying lighting conditions and environments.'],
    solutions: ['Implemented dynamic LOD (Level of Detail) system for 3D models.', 'Developed custom gesture recognizers for AR interactions.', 'Created adaptive lighting and environment detection systems.'],
    architecture: `
      Advanced AR architecture components:

      1. AR Core
      - Scene management
      - Object tracking
      - Physics simulation

      2. Interaction Layer
      - Gesture handling
      - Ray casting
      - Touch processing

      3. Rendering Pipeline
      - Custom shaders
      - Material system
      - Lighting management
    `,
    screenshots: [
      {
        url: '/screenshots/ar-scene.svg',
        caption: 'AR Scene Interaction',
      },
      {
        url: '/screenshots/ar-objects.svg',
        caption: 'AR Object Recognition',
      },
    ],
    role: 'AR specialist focusing on 3D interactions, performance optimization, and custom shader development.',
    timeline: 'Developed over 7 months, including extensive testing in various real-world environments.',
    impact: `
      Project achievements:
      
      • Used in 10+ educational institutions
      • 95% positive user feedback
      • Featured at WWDC demo showcase
      • 40% faster object recognition than competitors
      • Successfully deployed in museum installations
    `,
  },
  {
    slug: 'swiftui-weather',
    title: 'SwiftUI Weather',
    description: 'A beautiful weather app built with SwiftUI featuring dynamic animations and real-time updates.',
    image: '/project1-placeholder.svg',
    appStoreLink: '#',
    githubLink: '#',
    technologies: ['SwiftUI', 'CoreLocation', 'WeatherKit', 'Combine', 'CoreAnimation'],
    features: ['Live weather data', 'Custom animations', 'Location services', 'Weather alerts', 'Hourly forecasts', 'Weather maps'],
    challenges: ['Creating smooth weather transitions and animations.', 'Managing real-time weather data updates.', 'Implementing accurate location-based forecasts.'],
    solutions: ['Developed custom SwiftUI animation system for weather states.', 'Implemented efficient caching and background updates.', 'Created precise location-based weather algorithms.'],
    architecture: `
      Modern SwiftUI-based architecture:

      1. Presentation Layer
      - Custom SwiftUI views
      - Animation system
      - Weather visualizations

      2. Data Layer
      - WeatherKit integration
      - Location services
      - Caching system

      3. Business Logic
      - Weather calculations
      - Forecast processing
      - Alert management
    `,
    screenshots: [
      {
        url: '/screenshots/weather-main.svg',
        caption: 'Main Weather View',
      },
      {
        url: '/screenshots/weather-forecast.svg',
        caption: 'Detailed Forecast',
      },
    ],
    role: 'SwiftUI specialist responsible for UI/UX design, animations, and weather data integration.',
    timeline: 'Completed in 4 months with regular updates based on user feedback and WeatherKit improvements.',
    impact: `
      App performance metrics:
      
      • 200,000+ active users
      • 4.7/5 App Store rating
      • Featured for iOS 16 design
      • 25% better battery efficiency
      • Top 10 in Weather category
    `,
  },
  {
    slug: 'cryptotracker-pro',
    title: 'CryptoTracker Pro',
    description: 'Real-time cryptocurrency tracking app with custom charts and price alerts.',
    image: '/project2-placeholder.svg',
    appStoreLink: '#',
    githubLink: '#',
    technologies: ['Swift', 'Charts', 'WebSocket', 'Core Data', 'StoreKit'],
    features: ['Real-time price updates', 'Custom chart views', 'Price alerts', 'Portfolio tracking', 'Market analysis', 'Trading insights'],
    challenges: ['Handling real-time data streams efficiently.', 'Creating responsive charts with large datasets.', 'Managing complex state with multiple cryptocurrencies.'],
    solutions: ['Implemented efficient WebSocket management system.', 'Developed custom charting engine with data optimization.', 'Created robust state management architecture.'],
    architecture: `
      Financial data architecture:

      1. Market Data Layer
      - WebSocket connections
      - Price aggregation
      - Data normalization

      2. Analysis Engine
      - Technical indicators
      - Trend analysis
      - Alert system

      3. Portfolio Management
      - Transaction tracking
      - Performance analytics
      - Tax reporting
    `,
    screenshots: [
      {
        url: '/screenshots/crypto-dashboard.svg',
        caption: 'Crypto Dashboard',
      },
      {
        url: '/screenshots/crypto-analysis.svg',
        caption: 'Technical Analysis',
      },
    ],
    role: 'Full-stack iOS developer focusing on real-time data handling, financial calculations, and UI performance.',
    timeline: 'Developed over 6 months with continuous integration of new crypto features and market analysis tools.',
    impact: `
      Market performance:
      
      • 150,000+ portfolio tracked
      • 4.8/5 average rating
      • Featured in Finance category
      • 99.99% uptime for price tracking
      • Top 5 crypto app in 10 countries
    `,
  },
];

// Generate static params for all project slugs
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projectsData.find((project) => project.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FBFBFD] flex items-center justify-center p-4">
        <div className="text-center w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1D1D1F] mb-4">Project Not Found</h1>
          <p className="text-[#86868B] mb-8 px-4">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="inline-block bg-[#0071E3] text-white px-6 py-3 rounded-full hover:bg-[#0077ED] transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBFD] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectDetails {...project} />
      </div>
    </main>
  );
}
