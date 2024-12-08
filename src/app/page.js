import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0071E3] to-[#00A0FF] rounded-full opacity-10 blur-xl"></div>
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image src="/images/profile-photo.png" alt="Profile" width={192} height={192} priority className="object-cover" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-[#1D1D1F] mb-6">iOS Developer &amp; Mobile App Specialist</h1>
          <p className="text-xl text-[#86868B] max-w-3xl mx-auto mb-8">Hi, I&apos;m Faiz Hadiyan. I craft elegant and user-friendly iOS applications that deliver exceptional experiences. Let&apos;s build something amazing together.</p>
          <Link href="/contact" className="inline-block bg-[#0071E3] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0077ED] transition-colors duration-300">
            Get in Touch
          </Link>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-[#1D1D1F] text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-4">iOS Development</h3>
              <ul className="space-y-2 text-[#86868B]">
                <li>Swift &amp; SwiftUI</li>
                <li>UIKit</li>
                <li>Core Data</li>
                <li>CloudKit</li>
                <li>Push Notifications</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-4">Tools &amp; Technologies</h3>
              <ul className="space-y-2 text-[#86868B]">
                <li>Xcode</li>
                <li>Git &amp; GitHub</li>
                <li>CocoaPods</li>
                <li>Swift Package Manager</li>
                <li>TestFlight</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-[#1D1D1F] mb-4">Best Practices</h3>
              <ul className="space-y-2 text-[#86868B]">
                <li>Clean Architecture</li>
                <li>MVVM Pattern</li>
                <li>Unit Testing</li>
                <li>UI Testing</li>
                <li>Code Documentation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section>
          <h2 className="text-3xl font-bold text-[#1D1D1F] text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/projects/swiftsync-pro" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="aspect-video bg-[#F5F5F7] relative">
                  <Image src="/screenshots/app1-sync.svg" alt="SwiftSync Pro Screenshot" layout="fill" objectFit="cover" className="group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">SwiftSync Pro</h3>
                  <p className="text-[#86868B]">A powerful iOS application showcasing modern Swift development practices and intuitive user experience.</p>
                </div>
              </div>
            </Link>
            <Link href="/projects/vision-ai" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
                <div className="aspect-video bg-[#F5F5F7] relative">
                  <Image src="/screenshots/app2-ml.svg" alt="VisionAI Screenshot" layout="fill" objectFit="cover" className="group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">VisionAI</h3>
                  <p className="text-[#86868B]">An innovative iOS application leveraging machine learning and advanced iOS frameworks.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-block bg-[#0071E3] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0077ED] transition-colors duration-300">
              View All Projects
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
