import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProjectCard title="Awesome App" description="An amazing app that does wonderful things." image="/images/awesome-app.png" link="https://example.com" />
        <ProjectCard title="Another Cool App" description="A tool to solve complex problems." image="/images/cool-app.png" link="https://example.com" />
        {/* Add more ProjectCards as needed */}
      </div>
    </main>
  );
}
