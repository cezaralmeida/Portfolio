import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    client: "LendInvest",
    title: "Property Finance Platform Redesign",
    industry: "Fintech",
    date: "2024",
    image: "https://images.unsplash.com/photo-1592698765727-387c9464cd7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFic3RyYWN0fGVufDF8fHx8MTc2MzM5ODQ3OHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    client: "Cultural Institution",
    title: "Digital Exhibition Experience",
    industry: "Culture",
    date: "2023",
    image: "https://images.unsplash.com/photo-1704040686684-be330b48412e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMyOTA5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    client: "Retail Platform",
    title: "E-commerce UX Optimization",
    industry: "Retail",
    date: "2023",
    image: "https://images.unsplash.com/photo-1657757996603-acec063f1d9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzaWduJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MzM5ODQ3N3ww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export default function FeaturedWork() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24" id="projects">
      <div className="mb-16">
        <h2 className="text-neutral-900 mb-2">Selected Work</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group cursor-pointer"
          >
            <div className="mb-6 overflow-hidden bg-neutral-100">
              <ImageWithFallback
                src={project.image}
                alt={`${project.client} - ${project.title}`}
                className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex items-start justify-between gap-8">
              <div>
                <h3 className="text-neutral-900 mb-2 group-hover:text-neutral-600 transition-colors">
                  {project.client}
                </h3>
                <p className="text-neutral-600">
                  {project.title}
                </p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-neutral-500 text-sm">{project.industry}</p>
                <p className="text-neutral-500 text-sm">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
