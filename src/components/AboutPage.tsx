import Navigation from "./Navigation";
import Footer from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const skills = [
  {
    category: "Design Practice",
    items: ["User Research", "Information Architecture", "Interaction Design", "Prototyping", "Usability Testing", "Design Systems", "Accessibility (WCAG 2.1)"]
  },
  {
    category: "Strategy & Process",
    items: ["Product Strategy", "Design Leadership", "Stakeholder Management", "Workshop Facilitation", "Agile/Lean UX", "Data-Informed Decision Making"]
  },
  {
    category: "Tools & Technology",
    items: ["Figma", "FigJam", "Adobe Creative Suite", "Miro", "HTML/CSS", "React (basic)", "Analytics Platforms"]
  }
];

const experience = [
  {
    role: "Senior Product Designer",
    company: "LendInvest",
    period: "2022 - Present",
    description: "Leading end-to-end design for property finance platform, managing design system and mentoring junior designers. Delivered 5 major features resulting in 52% increase in application completion rates."
  },
  {
    role: "Product Designer",
    company: "Cultural Heritage Foundation",
    period: "2020 - 2022",
    description: "Designed inclusive digital experiences for museum and gallery platforms. Collaborated with curators and accessibility experts to create WCAG 2.1 AAA compliant experiences reaching 500K+ visitors annually."
  },
  {
    role: "Product Designer",
    company: "Retail Technology Group",
    period: "2018 - 2020",
    description: "Redesigned e-commerce checkout flow reducing cart abandonment by 35%. Led discovery and research initiatives across multi-brand platform serving 2M+ monthly users."
  },
  {
    role: "UX Designer",
    company: "Digital Innovation Agency",
    period: "2015 - 2018",
    description: "Worked with clients across fintech, healthcare, and education sectors. Conducted user research, created prototypes, and collaborated with cross-functional teams to deliver data-driven design solutions."
  },
  {
    role: "Junior Designer",
    company: "Creative Studio",
    period: "2014 - 2015",
    description: "Supported senior designers in user research, wireframing, and visual design. Contributed to projects for startup and enterprise clients across various industries."
  }
];

export default function AboutPage() {
  const handleEmailClick = () => {
    const email = "cezar.almeida@example.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-8">
            <h1 className="text-neutral-900 mb-8 text-6xl">
              About
            </h1>
            <div className="space-y-6 text-neutral-600 text-xl leading-relaxed">
              <p>
                I'm a Product Designer with over 10 years of experience creating scalable, 
                data-informed digital products that balance user needs with business objectives.
              </p>
              <p>
                My approach centers on inclusive design practices and measurable outcomes. 
                I believe great design emerges from deep user understanding, collaborative 
                iteration, and a commitment to accessibility.
              </p>
              <p>
                Throughout my career, I've partnered with cross-functional teams across fintech, 
                retail, and cultural sectors—transforming complex challenges into intuitive, 
                elegant experiences that serve diverse audiences.
              </p>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-neutral-100 aspect-[3/4]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1656313826909-1f89d1702a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1pbmltYWx8ZW58MXx8fHwxNjMzNjAyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cezar Almeida"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-neutral-200">
        <div className="mb-16">
          <h2 className="text-neutral-900 mb-2 text-4xl">Experience</h2>
        </div>
        
        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="grid grid-cols-12 gap-12">
              <div className="col-span-3">
                <div className="text-neutral-900 mb-1">{job.role}</div>
                <div className="text-neutral-600">{job.company}</div>
                <div className="text-neutral-500 text-sm mt-2">{job.period}</div>
              </div>
              <div className="col-span-9">
                <p className="text-neutral-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-neutral-200">
        <div className="mb-16">
          <h2 className="text-neutral-900 mb-2 text-4xl">Skills</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-12">
          {skills.map((skillGroup, index) => (
            <div key={index}>
              <h3 className="text-neutral-900 mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-neutral-600">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Approach/Philosophy Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-neutral-200">
        <div className="mb-16">
          <h2 className="text-neutral-900 mb-2 text-4xl">Design Philosophy</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h3 className="text-neutral-900 mb-4">User-Centered, Data-Informed</h3>
            <p className="text-neutral-600 leading-relaxed">
              Every design decision starts with understanding user needs through research, 
              then validates solutions through testing and metrics. Empathy drives direction; 
              data confirms impact.
            </p>
          </div>
          <div>
            <h3 className="text-neutral-900 mb-4">Inclusive by Default</h3>
            <p className="text-neutral-600 leading-relaxed">
              Designing for accessibility isn't an afterthought—it's fundamental to creating 
              experiences that serve diverse audiences. WCAG compliance and inclusive practices 
              are embedded in every stage of my process.
            </p>
          </div>
          <div>
            <h3 className="text-neutral-900 mb-4">Collaborative & Transparent</h3>
            <p className="text-neutral-600 leading-relaxed">
              Great design happens when diverse perspectives come together. I believe in early 
              stakeholder involvement, clear documentation, and open communication throughout 
              the design process.
            </p>
          </div>
          <div>
            <h3 className="text-neutral-900 mb-4">Systems Thinking</h3>
            <p className="text-neutral-600 leading-relaxed">
              Individual features exist within larger ecosystems. I design with scalability 
              in mind, creating patterns and systems that maintain consistency while allowing 
              for growth and evolution.
            </p>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="bg-neutral-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMzMyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Design workspace"
            className="w-full aspect-[21/9] object-cover"
          />
        </div>
      </section>

      {/* Recognition & Education */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-neutral-200">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <h2 className="text-neutral-900 mb-8 text-4xl">Recognition</h2>
            <div className="space-y-6 text-neutral-600">
              <div>
                <div className="text-neutral-900 mb-1">Awwwards Site of the Day</div>
                <div className="text-neutral-500 text-sm">Cultural Heritage Foundation, 2021</div>
              </div>
              <div>
                <div className="text-neutral-900 mb-1">Featured in UX Collective</div>
                <div className="text-neutral-500 text-sm">Article: "Designing for Financial Literacy", 2023</div>
              </div>
              <div>
                <div className="text-neutral-900 mb-1">Speaker, Design Matters Conference</div>
                <div className="text-neutral-500 text-sm">London, 2022</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-neutral-900 mb-8 text-4xl">Education</h2>
            <div className="space-y-6 text-neutral-600">
              <div>
                <div className="text-neutral-900 mb-1">MA Interaction Design</div>
                <div className="text-neutral-500 text-sm">London College of Communication, 2014</div>
              </div>
              <div>
                <div className="text-neutral-900 mb-1">BA Graphic Design</div>
                <div className="text-neutral-500 text-sm">University of Arts, 2012</div>
              </div>
              <div>
                <div className="text-neutral-900 mb-1">Certified Accessibility Specialist</div>
                <div className="text-neutral-500 text-sm">IAAP WAS Certification, 2020</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-8 py-24 border-t border-neutral-200">
        <div className="mb-16">
          <h2 className="text-neutral-900 mb-2 text-4xl">Get in Touch</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-16">
          <div>
            <p className="text-neutral-600 text-xl leading-relaxed mb-8">
              I'm currently open to new opportunities and collaborations. Whether you're 
              looking for a product designer to join your team or want to discuss a project, 
              I'd love to hear from you.
            </p>
            <div className="space-y-4">
              <div>
                <div className="text-neutral-500 text-sm mb-1">Email</div>
                <button
                  onClick={handleEmailClick}
                  className="text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer"
                  title="Click to copy email"
                >
                  cezar.almeida@example.com
                </button>
              </div>
              <div>
                <div className="text-neutral-500 text-sm mb-1">LinkedIn</div>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  linkedin.com/in/cezaralmeida
                </a>
              </div>
              <div>
                <div className="text-neutral-500 text-sm mb-1">Location</div>
                <div className="text-neutral-600">London, United Kingdom</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center bg-neutral-50 border border-neutral-200 p-12">
            <div className="text-center">
              <div className="text-neutral-900 mb-2 text-2xl">Available for</div>
              <div className="text-neutral-600">
                Full-time roles • Consulting • Speaking
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
