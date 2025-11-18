export default function Footer() {
  const handleEmailClick = () => {
    const email = "cezar@example.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between">
          <div className="text-neutral-500 text-sm">
            © 2024 Cezar Almeida
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={handleEmailClick}
              className="text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer text-sm"
              title="Click to copy email"
            >
              Email
            </button>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
