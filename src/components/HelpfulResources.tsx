export default function HelpfulResources() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 border-t border-neutral-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-neutral-900 mb-2">Helpful Resources</h3>
          <p className="text-neutral-600">
            Notes, tools, and insights from my practice
          </p>
        </div>
        <a 
          href="#resources"
          className="text-neutral-900 hover:text-neutral-600 transition-colors cursor-pointer flex items-center gap-2"
        >
          View all
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            className="transition-transform group-hover:translate-x-1"
          >
            <path 
              d="M7.5 15L12.5 10L7.5 5" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
