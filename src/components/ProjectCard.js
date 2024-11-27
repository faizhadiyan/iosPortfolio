// src/components/ProjectCard.js
export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2">{description}</p>
        <a href={link} className="text-blue-500 mt-4 inline-block" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </div>
    </div>
  );
}
