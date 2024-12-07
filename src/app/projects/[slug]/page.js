import ProjectDetails from '../../../components/ProjectDetails';
import Link from 'next/link';

// This would typically come from a database or CMS
const projectsData = {
  'ios-app-name-1': {
    title: 'iOS App Name 1',
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
  'ios-app-name-2': {
    title: 'iOS App Name 2',
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
};

// Generate static params for all projects at build time
export function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug: slug,
  }));
}

export default function ProjectPage({ params }) {
  const project = projectsData[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#FBFBFD] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1D1D1F] mb-4">Project Not Found</h1>
          <p className="text-[#86868B] mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="inline-block bg-[#0071E3] text-white px-6 py-3 rounded-full hover:bg-[#0077ED] transition-colors">
            View All Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FBFBFD] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <ProjectDetails {...project} />
      </div>
    </main>
  );
}
