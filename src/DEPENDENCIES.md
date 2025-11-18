# Dependencies & Installation

## NPM Install Command

```bash
npm install lucide-react
```

That's it! This portfolio only needs one external dependency.

---

## Complete package.json

```json
{
  "name": "portfolio-cezar-aflorei",
  "version": "1.0.0",
  "description": "Product Designer Portfolio - High-fidelity prototype",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "lucide-react": "^0.462.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.2",
    "vite": "^6.0.0"
  }
}
```

---

## What's Included

### Core Dependencies
- **react** `^18.3.1` - React library (already included in most environments)
- **react-dom** `^18.3.1` - React DOM renderer (already included)
- **lucide-react** `^0.462.0` - Icon library (only external dependency needed)

### Build Tools (already configured)
- **tailwindcss** `^4.0.0` - CSS framework
- **vite** - Development server and build tool
- **typescript** - Type checking

---

## For Different Environments

### v0.dev
```bash
# No installation needed - just paste the code
# lucide-react is pre-installed
```

### Bolt.new
```bash
npm install lucide-react
```

### CodeSandbox
```bash
# Add to dependencies in package.json:
"lucide-react": "latest"
```

### Local Development
```bash
# Clone or create project
npm install

# Install the one required package
npm install lucide-react

# Start dev server
npm run dev
```

---

## Icons Used

The portfolio uses these icons from lucide-react:

- `ChevronDown` - Navigation dropdown arrow
- `Copy` - Copy email button
- `Check` - Email copied confirmation

---

## No Other Dependencies Needed

This portfolio is intentionally minimal:
- ✅ No animation libraries (uses CSS transitions)
- ✅ No router library (custom context-based routing)
- ✅ No state management library (React useState)
- ✅ No form libraries
- ✅ No UI component libraries beyond what's included
- ✅ All images via Unsplash URLs (no image processing needed)

---

## Quick Start

```bash
# 1. Install dependencies
npm install lucide-react

# 2. Start development
npm run dev

# 3. Build for production
npm run build
```

That's all you need! 🚀
