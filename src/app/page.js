import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-8">
      {/* Introduction */}
      <div className="text-center max-w-4xl">
        <Image src="/profile-pic.jpg" alt="Your Profile Picture" width={150} height={150} className="rounded-full mx-auto shadow-lg mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I’m Faiz</h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          I’m a dedicated professional with expertise in ios developer. Passionate about creating sustainable solutions, I leverage my technical skills to bridge gaps in technology.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="about" className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition">
            Learn More
          </a>
          <a href="projects" className="bg-gray-200 text-gray-800 py-3 px-6 rounded-full shadow-lg hover:bg-gray-300 transition">
            My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
