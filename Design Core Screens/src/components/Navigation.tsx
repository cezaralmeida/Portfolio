import { useState } from "react";

const projects = [
  { name: "LendInvest", href: "#lendinvest" },
  { name: "Cultural Institution", href: "#cultural" },
  { name: "Retail Platform", href: "#retail" }
];

export default function Navigation() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  return (
    <nav className="border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-neutral-900">Cezar Almeida</span>
        </div>
        <div className="flex items-center gap-12">
          <div 
            className="relative"
            onMouseEnter={() => setIsProjectsOpen(true)}
            onMouseLeave={() => setIsProjectsOpen(false)}
          >
            <a 
              href="#projects" 
              className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              Projects
            </a>
            
            {isProjectsOpen && (
              <div className="absolute top-full left-0 mt-6 pt-2">
                <div className="bg-white border border-neutral-200 rounded-sm shadow-lg min-w-[240px]">
                  {projects.map((project, index) => (
                    <a
                      key={index}
                      href={project.href}
                      className="block px-6 py-3 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors text-sm"
                    >
                      {project.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <a 
            href="#about" 
            className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
