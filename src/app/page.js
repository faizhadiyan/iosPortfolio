import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFD]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Image src="/profile-pic.jpg" alt="Faiz Hadiyan" width={180} height={180} className="rounded-full mx-auto shadow-lg mb-8 border-4 border-white" priority />
          <h1 className="text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">iOS Developer</h1>
          <p className="text-2xl text-[#86868B] mb-2">Hi, I'm Faiz Hadiyan</p>
          <p className="text-lg text-[#86868B] mb-8 leading-relaxed max-w-2xl mx-auto">
            Crafting elegant and intuitive iOS applications with Swift and SwiftUI. Passionate about creating delightful user experiences that follow Apple's Human Interface Guidelines.
          </p>

          <div className="flex justify-center space-x-6">
            <a href="/projects" className="bg-[#0071E3] text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-[#0077ED] transition-colors duration-300">
              View Projects
            </a>
            <a href="/contact" className="bg-[#F5F5F7] text-[#1D1D1F] py-3 px-8 rounded-full text-lg font-medium hover:bg-[#E8E8ED] transition-colors duration-300">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-3xl font-semibold text-[#1D1D1F] text-center mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'iOS Development',
                skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit'],
              },
              {
                title: 'Tools & Practices',
                skills: ['Xcode', 'Git', 'CI/CD', 'App Store Connect', 'TestFlight'],
              },
              {
                title: 'Design & Architecture',
                skills: ['MVVM', 'Clean Architecture', 'Human Interface Guidelines'],
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-[#F5F5F7] p-6 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#1D1D1F] mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li key={skillIdx} className="text-[#86868B]">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
