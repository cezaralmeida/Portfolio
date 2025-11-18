import Navigation from "./Navigation";
import Footer from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero / Header Section */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="max-w-4xl">
          {/* Project Metadata */}
          <div className="flex items-center gap-6 mb-8 text-sm text-neutral-500">
            <span>LendInvest</span>
            <span>•</span>
            <span>Fintech</span>
            <span>•</span>
            <span>2024</span>
          </div>
          
          {/* Title */}
          <h1 className="text-neutral-900 mb-6 text-6xl">
            Property Finance Platform Redesign
          </h1>
          
          {/* Brief description */}
          <p className="text-neutral-600 text-xl leading-relaxed">
            Redesigning the end-to-end lending experience for property investors and developers, 
            streamlining complex financial processes into an intuitive, accessible platform.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <div className="bg-neutral-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1701589212543-b3cabb5423c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9wZXJ0eSUyMGludmVzdG1lbnQlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjMzOTg3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="LendInvest Platform"
            className="w-full aspect-[16/9] object-cover"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-8 pb-32">
        
        {/* Context Section */}
        <div className="mb-32">
          <h2 className="text-neutral-900 mb-6 text-4xl">Context</h2>
          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              LendInvest is a leading UK property finance platform connecting investors with 
              property developers seeking funding. The existing platform had grown organically 
              over five years, resulting in fragmented user journeys and declining completion rates.
            </p>
            <p>
              With increasing competition in the fintech space and user expectations evolving, 
              LendInvest needed to reimagine their platform to maintain market leadership while 
              improving accessibility for first-time property investors.
            </p>
          </div>
        </div>

        {/* The Goal Section */}
        <div className="mb-32">
          <h2 className="text-neutral-900 mb-6 text-4xl">The Goal</h2>
          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              Increase loan application completion rates by 40% while reducing user support 
              requests by 30%. The redesign needed to demystify complex financial concepts 
              without oversimplifying for experienced users.
            </p>
            <div className="grid grid-cols-3 gap-8 my-12 py-8 border-y border-neutral-200">
              <div>
                <div className="text-neutral-900 text-3xl mb-2">40%</div>
                <div className="text-neutral-600 text-sm">Target increase in completion rates</div>
              </div>
              <div>
                <div className="text-neutral-900 text-3xl mb-2">30%</div>
                <div className="text-neutral-600 text-sm">Reduction in support tickets</div>
              </div>
              <div>
                <div className="text-neutral-900 text-3xl mb-2">2.5x</div>
                <div className="text-neutral-600 text-sm">Faster onboarding time</div>
              </div>
            </div>
            <p>
              Key success metrics included time-to-complete, error rates, and user confidence 
              scores measured through post-application surveys.
            </p>
          </div>
        </div>

        {/* Process Image */}
        <div className="mb-32">
          <div className="bg-neutral-100 mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1735639013995-086e648eaa38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjMzOTg3OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Research workshop"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          <p className="text-neutral-500 text-sm">Discovery workshops with stakeholders and users</p>
        </div>

        {/* The Process Section */}
        <div className="mb-32">
          <h2 className="text-neutral-900 mb-6 text-4xl">The Process</h2>
          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              The project followed a structured four-phase approach over six months, 
              combining qualitative research with iterative design and testing.
            </p>
            
            {/* Process Steps */}
            <div className="space-y-8 my-12">
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-neutral-900 mb-2">1. Discovery & Research</h3>
                <p className="text-neutral-600">
                  Conducted 25 user interviews across investor segments, analysed 6 months of 
                  analytics data, and mapped existing user journeys. Identified three critical 
                  pain points: unclear progress indication, overwhelming financial jargon, 
                  and repetitive data entry.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-neutral-900 mb-2">2. Ideation & Strategy</h3>
                <p className="text-neutral-600">
                  Facilitated cross-functional workshops with product, engineering, and legal teams. 
                  Developed three concept directions, testing with 15 users to validate 
                  the progressive disclosure approach for complex financial forms.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-neutral-900 mb-2">3. Design & Iteration</h3>
                <p className="text-neutral-600">
                  Created high-fidelity prototypes focusing on micro-interactions and clear 
                  information hierarchy. Ran four rounds of usability testing with modifications 
                  made between each round based on user feedback and task completion data.
                </p>
              </div>
              
              <div className="border-l-2 border-neutral-900 pl-6">
                <h3 className="text-neutral-900 mb-2">4. Implementation & Validation</h3>
                <p className="text-neutral-600">
                  Partnered with engineering for phased rollout, starting with 10% of users. 
                  Monitored key metrics daily, making real-time adjustments to copy and 
                  visual hierarchy based on observed user behavior.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Image */}
        <div className="mb-32">
          <div className="bg-neutral-100 mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1651129526361-d31cd025e662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzMzcyNjY4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Final dashboard interface"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          <p className="text-neutral-500 text-sm">Redesigned application dashboard with progressive disclosure</p>
        </div>

        {/* The Outcome Section */}
        <div className="mb-32">
          <h2 className="text-neutral-900 mb-6 text-4xl">The Outcome</h2>
          <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
            <p>
              The redesigned platform exceeded initial targets, launching successfully in Q2 2024 
              after six months of development. User feedback was overwhelmingly positive, with 
              particular praise for the clarity of financial explanations and intuitive progress tracking.
            </p>
            
            {/* Results Grid */}
            <div className="grid grid-cols-2 gap-8 my-12 p-8 bg-neutral-50 border border-neutral-200">
              <div>
                <div className="text-neutral-900 text-4xl mb-2">52%</div>
                <div className="text-neutral-600">Increase in application completion</div>
                <div className="text-neutral-500 text-sm mt-2">Exceeded 40% target</div>
              </div>
              <div>
                <div className="text-neutral-900 text-4xl mb-2">38%</div>
                <div className="text-neutral-600">Reduction in support requests</div>
                <div className="text-neutral-500 text-sm mt-2">Exceeded 30% target</div>
              </div>
              <div>
                <div className="text-neutral-900 text-4xl mb-2">3.2x</div>
                <div className="text-neutral-600">Faster average completion time</div>
                <div className="text-neutral-500 text-sm mt-2">From 45min to 14min</div>
              </div>
              <div>
                <div className="text-neutral-900 text-4xl mb-2">4.8/5</div>
                <div className="text-neutral-600">Average user satisfaction score</div>
                <div className="text-neutral-500 text-sm mt-2">Up from 3.2/5</div>
              </div>
            </div>
            
            <p>
              Beyond metrics, the project established a scalable design system and patterns that 
              have been adopted across other LendInvest products. The accessible, data-informed 
              approach became a template for future platform enhancements.
            </p>
          </div>
        </div>

        {/* Data Visualization Image */}
        <div className="mb-20">
          <div className="bg-neutral-100">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1762427354251-f008b64dbc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGNoYXJ0fGVufDF8fHx8MTc2MzI5MDczM3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Performance metrics visualization"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
        </div>

      </section>

      {/* Next Project Navigation */}
      <section className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <a 
            href="#next-project" 
            className="flex items-center justify-between group cursor-pointer"
          >
            <div>
              <div className="text-neutral-500 text-sm mb-2">Next Project</div>
              <div className="text-neutral-900 text-2xl group-hover:text-neutral-600 transition-colors">
                Cultural Institution — Digital Exhibition Experience
              </div>
            </div>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className="transition-transform group-hover:translate-x-2"
            >
              <path 
                d="M9 18L15 12L9 6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
