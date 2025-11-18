# Portfolio Website - Complete Export Package

This file contains all the code needed to recreate this portfolio in any React/Tailwind environment (v0, Bolt, CodeSandbox, etc.).

---

## 📦 Package Dependencies

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "latest",
    "tailwindcss": "^4.0.0"
  }
}
```

---

## 🎨 `/styles/globals.css`

```css
@import "tailwindcss";

@theme {
  --font-family-sans: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  
  --color-background: #ffffff;
  --color-foreground: #0a0a0a;
  --color-card: #ffffff;
  --color-card-foreground: #0a0a0a;
  --color-popover: #ffffff;
  --color-popover-foreground: #0a0a0a;
  --color-primary: #0a0a0a;
  --color-primary-foreground: #fafafa;
  --color-secondary: #f1f5f9;
  --color-secondary-foreground: #0a0a0a;
  --color-muted: #f1f5f9;
  --color-muted-foreground: #64748b;
  --color-accent: #f1f5f9;
  --color-accent-foreground: #0a0a0a;
  --color-destructive: #ef4444;
  --color-destructive-foreground: #fafafa;
  --color-border: #e2e8f0;
  --color-input: #e2e8f0;
  --color-ring: #0a0a0a;
  --radius: 0.5rem;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-family-sans);
  background-color: var(--color-background);
  color: var(--color-foreground);
  line-height: 1.6;
}

h1 {
  font-size: 4.5rem;
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
}

h2 {
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 600;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.875rem;
  line-height: 1.3;
  font-weight: 600;
}

h4 {
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 600;
}

h5 {
  font-size: 1.125rem;
  line-height: 1.4;
  font-weight: 500;
}

p {
  font-size: 1rem;
  line-height: 1.7;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
}
```

---

## 🚀 `/App.tsx`

```tsx
import React, { createContext, useContext, useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CaseStudyPage from './components/CaseStudyPage';

type Page = 'home' | 'about' | 'case-study-lendinvest';

interface NavigationContextType {
  navigateTo: (page: Page) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [showReviewNav, setShowReviewNav] = useState(true);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <NavigationContext.Provider value={{ navigateTo }}>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        
        <main className="flex-1">
          {currentPage === 'home' && <HomePage />}
          {currentPage === 'about' && <AboutPage />}
          {currentPage === 'case-study-lendinvest' && <CaseStudyPage />}
        </main>

        <Footer />

        {/* Review Navigation - Remove for production */}
        {showReviewNav && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  currentPage === 'home' ? 'bg-white text-black' : 'hover:bg-white/10'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('case-study-lendinvest')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  currentPage === 'case-study-lendinvest' ? 'bg-white text-black' : 'hover:bg-white/10'
                }`}
              >
                Case Study
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-4 py-2 rounded-full transition-colors ${
                  currentPage === 'about' ? 'bg-white text-black' : 'hover:bg-white/10'
                }`}
              >
                About
              </button>
              <button
                onClick={() => setShowReviewNav(false)}
                className="ml-2 px-3 py-2 hover:bg-white/10 rounded-full"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </NavigationContext.Provider>
  );
}
```

---

## 🧭 `/components/Navigation.tsx`

```tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigation } from '../App';

export default function Navigation() {
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const { navigateTo } = useNavigation();

  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => navigateTo('home')}
            className="text-xl hover:opacity-70 transition-opacity"
          >
            Cezar Aflorei
          </button>

          <div className="flex items-center gap-8">
            <div 
              className="relative"
              onMouseEnter={() => setShowProjectsDropdown(true)}
              onMouseLeave={() => setShowProjectsDropdown(false)}
            >
              <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                Projects
                <ChevronDown className="w-4 h-4" />
              </button>

              {showProjectsDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg py-2 min-w-[200px]">
                  <button
                    onClick={() => navigateTo('case-study-lendinvest')}
                    className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors"
                  >
                    LendInvest
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-slate-400">
                    Project Two
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors text-slate-400">
                    Project Three
                  </button>
                </div>
              )}
            </div>

            <button 
              onClick={() => navigateTo('about')}
              className="hover:opacity-70 transition-opacity"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

---

## 🦶 `/components/Footer.tsx`

```tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="text-slate-600">© 2025 Cezar Aflorei</p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:hello@example.com"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## 🏠 `/components/HomePage.tsx`

```tsx
import React from 'react';
import Hero from './Hero';
import FeaturedWork from './FeaturedWork';
import HelpfulResources from './HelpfulResources';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <HelpfulResources />
    </>
  );
}
```

---

## 🦸 `/components/Hero.tsx`

```tsx
import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
      <div className="max-w-4xl">
        <h1 className="mb-6">
          Product Design Leader
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl">
          I drive product success through strategic design that balances user needs with business goals. 
          With 10+ years of experience, I transform complex challenges into elegant solutions.
        </p>
      </div>
    </section>
  );
}
```

---

## 💼 `/components/FeaturedWork.tsx`

```tsx
import React from 'react';
import { useNavigation } from '../App';

export default function FeaturedWork() {
  const { navigateTo } = useNavigation();

  const projects = [
    {
      id: 'lendinvest',
      title: 'LendInvest',
      description: 'Redesigning the investment platform for modern property investors',
      role: 'Lead Product Designer',
      year: '2023',
      domain: 'FinTech',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      route: 'case-study-lendinvest' as const
    },
    {
      id: 'project-two',
      title: 'Project Two',
      description: 'Coming soon',
      role: 'Product Designer',
      year: '2024',
      domain: 'SaaS',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      route: null
    },
    {
      id: 'project-three',
      title: 'Project Three',
      description: 'Coming soon',
      role: 'Product Designer',
      year: '2024',
      domain: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      route: null
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
      <h2 className="mb-12">Featured Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => project.route && navigateTo(project.route)}
            className={`group ${project.route ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div className="aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden mb-4">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover ${
                  project.route ? 'group-hover:scale-105' : ''
                } transition-transform duration-300`}
              />
            </div>
            
            <h4 className="mb-2">{project.title}</h4>
            <p className="text-slate-600 mb-3">{project.description}</p>
            
            <div className="flex gap-3 text-sm text-slate-500">
              <span>{project.role}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <span>{project.domain}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 📚 `/components/HelpfulResources.tsx`

```tsx
import React from 'react';

export default function HelpfulResources() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 bg-slate-50 -mx-6 lg:-mx-8 px-6 lg:px-8">
      <div className="max-w-4xl">
        <h2 className="mb-6">Helpful Resources</h2>
        <p className="text-xl text-slate-600 mb-8">
          Throughout my career, I've developed frameworks, templates, and guides that help teams 
          deliver better products. I share these resources to help other designers and product teams.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-slate-800 transition-colors">
          View Resources
        </button>
      </div>
    </section>
  );
}
```

---

## 📖 `/components/CaseStudyPage.tsx`

```tsx
import React from 'react';

export default function CaseStudyPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="mb-16">
        <h1 className="mb-6">LendInvest Platform Redesign</h1>
        <p className="text-xl text-slate-600 mb-8">
          Transforming a complex property investment platform into an intuitive, 
          scalable experience that drives user confidence and business growth.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
          <div>
            <div className="text-sm text-slate-500 mb-1">Role</div>
            <div>Lead Product Designer</div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Timeline</div>
            <div>6 months</div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Year</div>
            <div>2023</div>
          </div>
          <div>
            <div className="text-sm text-slate-500 mb-1">Team</div>
            <div>5 people</div>
          </div>
        </div>
      </header>

      {/* Context */}
      <section className="mb-16">
        <h2 className="mb-6">Context</h2>
        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            LendInvest is a leading property investment platform in the UK, connecting investors 
            with opportunities in the property market. The platform had grown organically over years, 
            resulting in a fragmented user experience that didn't reflect the sophistication of 
            the investment products offered.
          </p>
          <p>
            Users struggled with complex investment flows, unclear risk communication, and 
            inconsistent interface patterns. This created friction in the investment decision-making 
            process and limited the platform's ability to scale to new market segments.
          </p>
        </div>
      </section>

      {/* Image */}
      <div className="mb-16">
        <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=675&fit=crop"
            alt="Platform overview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Goal */}
      <section className="mb-16">
        <h2 className="mb-6">Goal</h2>
        <div className="bg-slate-50 p-8 rounded-lg">
          <p className="text-lg mb-6">
            Redesign the investment platform to:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-slate-400 mr-3">→</span>
              <span>Simplify the investment journey while maintaining compliance and transparency</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-3">→</span>
              <span>Build trust through clear risk communication and performance data</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-3">→</span>
              <span>Create a scalable design system to support rapid product expansion</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-3">→</span>
              <span>Increase investment completion rates by 40%</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="mb-16">
        <h2 className="mb-6">Process</h2>
        
        <div className="space-y-12">
          {/* Step 1 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                1
              </div>
              <h3>Research & Discovery</h3>
            </div>
            <p className="text-slate-600 ml-11">
              Conducted user interviews with 25 investors, analyzed 6 months of behavioral data, 
              and ran competitive analysis across 8 investment platforms. Identified key pain points 
              in portfolio overview, investment decision-making, and account management.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                2
              </div>
              <h3>Information Architecture</h3>
            </div>
            <p className="text-slate-600 ml-11">
              Restructured the platform's navigation and content hierarchy. Introduced a dashboard-first 
              approach that prioritized portfolio performance and investment opportunities. 
              Simplified the IA from 40+ pages to 15 core experiences.
            </p>
          </div>

          {/* Image */}
          <div className="ml-11">
            <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
                alt="Process work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                3
              </div>
              <h3>Design System Development</h3>
            </div>
            <p className="text-slate-600 ml-11">
              Built a comprehensive design system with 60+ components, focusing on financial data 
              visualization, form patterns, and responsive layouts. Established clear guidelines 
              for risk communication and legal compliance.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                4
              </div>
              <h3>Prototype & Testing</h3>
            </div>
            <p className="text-slate-600 ml-11">
              Created high-fidelity prototypes for key flows. Ran 3 rounds of usability testing 
              with 15 users per round, iterating on navigation patterns, investment flow, and 
              dashboard widgets. Achieved 92% task completion rate in final testing.
            </p>
          </div>

          {/* Step 5 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
                5
              </div>
              <h3>Implementation & Iteration</h3>
            </div>
            <p className="text-slate-600 ml-11">
              Worked closely with engineering to implement the design system and core experiences. 
              Launched in phases over 4 months, monitoring analytics and user feedback to refine 
              the experience post-launch.
            </p>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="mb-16">
        <h2 className="mb-6">Outcome</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-sm text-slate-500 mb-2">Investment Completion</div>
            <div className="text-3xl mb-1">+47%</div>
            <div className="text-sm text-slate-600">vs. old platform</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-sm text-slate-500 mb-2">User Satisfaction</div>
            <div className="text-3xl mb-1">4.6/5</div>
            <div className="text-sm text-slate-600">App Store rating</div>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg">
            <div className="text-sm text-slate-500 mb-2">Support Tickets</div>
            <div className="text-3xl mb-1">-35%</div>
            <div className="text-sm text-slate-600">reduction</div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="mb-4">
            The redesigned platform successfully transformed LendInvest's digital experience, 
            making property investment more accessible and trustworthy. The new design system 
            enabled the team to ship new features 3x faster while maintaining consistency.
          </p>
          <p>
            Most importantly, the platform helped democratize property investment by removing 
            barriers that previously intimidated new investors, while still serving the needs 
            of sophisticated users with advanced portfolio management tools.
          </p>
        </div>
      </section>

      {/* Final Image */}
      <div>
        <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop"
            alt="Final design"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </article>
  );
}
```

---

## 👤 `/components/AboutPage.tsx`

```tsx
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function AboutPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@example.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="mb-16">
        <div className="aspect-[21/9] bg-slate-100 rounded-lg overflow-hidden mb-8">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=514&fit=crop"
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="mb-6">About Me</h1>
        <p className="text-xl text-slate-600">
          I'm a Product Design Leader with 10+ years of experience transforming complex business 
          challenges into elegant, user-centered solutions. I specialize in building design systems, 
          leading cross-functional teams, and driving product strategy through design.
        </p>
      </header>

      {/* Experience */}
      <section className="mb-16">
        <h2 className="mb-8">Experience</h2>
        
        <div className="space-y-8">
          <div className="border-l-2 border-slate-200 pl-6">
            <div className="text-sm text-slate-500 mb-2">2021 - Present</div>
            <h3 className="mb-2">Lead Product Designer</h3>
            <div className="text-slate-600 mb-3">LendInvest • London, UK</div>
            <p className="text-slate-600">
              Leading design for the UK's leading property investment platform. Built a design 
              system from scratch, redesigned core investment flows, and established design 
              operations for a team of 8 designers.
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-6">
            <div className="text-sm text-slate-500 mb-2">2018 - 2021</div>
            <h3 className="mb-2">Senior Product Designer</h3>
            <div className="text-slate-600 mb-3">Monzo Bank • London, UK</div>
            <p className="text-slate-600">
              Designed features used by millions of users across savings, investments, and 
              lending products. Collaborated with product, engineering, and data teams to 
              drive growth initiatives.
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-6">
            <div className="text-sm text-slate-500 mb-2">2016 - 2018</div>
            <h3 className="mb-2">Product Designer</h3>
            <div className="text-slate-600 mb-3">Deliveroo • London, UK</div>
            <p className="text-slate-600">
              Designed restaurant-facing tools and internal operations platforms. Helped scale 
              the design team from 3 to 15 designers across multiple product areas.
            </p>
          </div>

          <div className="border-l-2 border-slate-200 pl-6">
            <div className="text-sm text-slate-500 mb-2">2014 - 2016</div>
            <h3 className="mb-2">UX Designer</h3>
            <div className="text-slate-600 mb-3">Skyscanner • Edinburgh, UK</div>
            <p className="text-slate-600">
              Worked on search, booking flows, and mobile app experiences. Conducted extensive 
              user research across European and Asian markets.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="mb-4">Strategy</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Product Strategy</li>
              <li>User Research</li>
              <li>Design Systems</li>
              <li>Information Architecture</li>
              <li>Service Design</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Execution</h3>
            <ul className="space-y-2 text-slate-600">
              <li>UI/UX Design</li>
              <li>Prototyping</li>
              <li>Interaction Design</li>
              <li>Visual Design</li>
              <li>Design QA</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Leadership</h3>
            <ul className="space-y-2 text-slate-600">
              <li>Team Management</li>
              <li>Mentoring</li>
              <li>Stakeholder Management</li>
              <li>Design Operations</li>
              <li>Process Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-16">
        <h2 className="mb-8">Design Philosophy</h2>
        
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="mb-2">User-Centered, Business-Minded</h4>
            <p className="text-slate-600">
              Great design serves both users and business goals. I focus on understanding the 
              full context—user needs, business constraints, technical feasibility—to create 
              solutions that drive real impact.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="mb-2">Systems Thinking</h4>
            <p className="text-slate-600">
              I believe in building scalable systems rather than one-off solutions. Design systems, 
              processes, and frameworks create consistency and enable teams to move faster.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-lg">
            <h4 className="mb-2">Collaborative Design</h4>
            <p className="text-slate-600">
              The best work happens when designers, product managers, engineers, and stakeholders 
              work together. I prioritize clear communication, shared understanding, and 
              cross-functional collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mb-16">
        <h2 className="mb-8">Get In Touch</h2>
        
        <div className="bg-slate-50 p-8 rounded-lg">
          <p className="text-slate-600 mb-6">
            I'm always interested in hearing about new opportunities, collaborations, or just 
            chatting about design. Feel free to reach out.
          </p>
          
          <div className="flex items-center gap-3">
            <a 
              href="mailto:hello@example.com"
              className="text-lg hover:opacity-70 transition-opacity"
            >
              hello@example.com
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-2 hover:bg-slate-200 rounded transition-colors"
              title="Copy email"
            >
              {emailCopied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}
```

---

## 🖼️ `/components/figma/ImageWithFallback.tsx`

**Note:** This is a protected component. Only include if your target environment doesn't have it.

```tsx
import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export function ImageWithFallback({ src, alt, ...props }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
        {alt}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
}
```

---

## 🎯 ShadCN Components Needed

If your environment supports ShadCN, you won't need to add these manually. Otherwise, this portfolio uses:

- **None currently** - The portfolio is built with custom components only

---

## ✅ Setup Instructions

### For v0.dev:
1. Create a new project
2. Copy `/styles/globals.css` → Replace the default styles
3. Copy `/App.tsx` → Replace the default App
4. Create each component file in `/components/`
5. All images use Unsplash URLs - they should work immediately

### For Bolt.new:
1. Start a new React + Tailwind project
2. Replace the contents of `src/App.tsx` with the App.tsx code above
3. Create the `/components` folder structure
4. Copy each component file
5. Replace `src/index.css` or `src/App.css` with the globals.css content

### For CodeSandbox:
1. Choose "React" template
2. Install dependencies: `lucide-react`
3. Follow the same component structure as above
4. Update `styles.css` with globals.css content

---

## 📝 Notes

- All components use TypeScript for type safety
- Navigation uses React Context for state management
- Images are from Unsplash and should load automatically
- Review navigation can be removed by setting `showReviewNav` to `false` in App.tsx
- The design is fully responsive with mobile breakpoints

---

## 🚀 Next Steps After Import

1. **Customize content:**
   - Update personal information in components
   - Replace placeholder projects
   - Add real images

2. **Extend functionality:**
   - Add more case studies by duplicating CaseStudyPage.tsx
   - Create Resources page
   - Add project filtering

3. **Deploy:**
   - Vercel, Netlify, or any static hosting
   - All dependencies are included
   - No backend needed

---

**Ready to copy and paste!** 🎉
