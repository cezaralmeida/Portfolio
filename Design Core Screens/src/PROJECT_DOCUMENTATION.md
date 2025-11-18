# Portfolio Website Documentation

## Project Overview

This is a high-fidelity coded prototype for a Product Designer portfolio website, built with React and Tailwind CSS. The portfolio showcases 10+ years of design experience with an elegant, minimal, and sophisticated aesthetic using a neutral color palette.

---

## File Structure

```
├── App.tsx                          # Main application entry point & routing
├── components/
│   ├── Navigation.tsx               # Global navigation with Projects dropdown
│   ├── Footer.tsx                   # Global footer component
│   ├── HomePage.tsx                 # Home page container
│   ├── Hero.tsx                     # Hero section (home page)
│   ├── FeaturedWork.tsx             # Featured work grid (home page)
│   ├── HelpfulResources.tsx         # Resources section (home page)
│   ├── CaseStudyPage.tsx            # LendInvest case study page
│   ├── AboutPage.tsx                # About page with timeline & experience
│   ├── figma/
│   │   └── ImageWithFallback.tsx    # Protected image component
│   └── ui/                          # ShadCN UI component library
├── styles/
│   └── globals.css                  # Global styles, typography, CSS variables
└── guidelines/
    └── Guidelines.md                # Design guidelines reference
```

---

## Core Pages

### 1. Home Page (`/`)
**Components used:**
- `HomePage.tsx` - Main container
- `Hero.tsx` - Hero section with headline and tagline
- `FeaturedWork.tsx` - Grid of featured projects
- `HelpfulResources.tsx` - Resources section

**Content:**
- Hero headline: "Product Design Leader"
- Tagline about driving product success
- 3 featured work cards (LendInvest, Project Two, Project Three)
- Resources preview section

### 2. Case Study Page (`/case-study/lendinvest`)
**Component:** `CaseStudyPage.tsx`

**Structure:**
- **Header:** Project title, role, timeline, team
- **Context:** Problem statement and background
- **Goal:** Project objectives
- **Process:** Multi-step workflow with timeline
- **Outcome:** Results with before/after metrics

**Images:** Uses Unsplash images for visual storytelling

### 3. About Page (`/about`)
**Component:** `AboutPage.tsx`

**Sections:**
- **Introduction:** Personal statement
- **Experience Timeline:** 10+ year career progression
- **Skills:** Categorized by Strategy, Execution, and Leadership
- **Design Philosophy:** Core principles
- **Contact:** Email with copy-to-clipboard functionality

---

## Navigation System

**File:** `/components/Navigation.tsx`

**Features:**
- Logo/name links to home page
- "Projects" dropdown with project links
- "About" direct link
- Desktop-first responsive design
- Sticky positioning on scroll

**How it works:**
- Navigation appears on all pages
- Projects dropdown shows on hover/click
- Currently includes LendInvest project (can be extended)

---

## Routing

**File:** `/App.tsx`

The application uses a simple state-based routing system:

```tsx
const [currentPage, setCurrentPage] = useState('home');
const [showReviewNav, setShowReviewNav] = useState(true);
```

**Available routes:**
- `'home'` → Home page
- `'about'` → About page
- `'case-study-lendinvest'` → LendInvest case study
- Add more by extending the conditional rendering in App.tsx

**Navigation context:**
A `NavigationContext` provides `navigateTo` function to all child components for page transitions.

---

## Styling System

**File:** `/styles/globals.css`

**Key features:**
- Custom CSS variables for colors, spacing, and typography
- Default typography hierarchy (no need for Tailwind font classes)
- Neutral color palette: slate grays, black, white
- Responsive spacing scale

**Typography defaults:**
- h1: 7xl (home hero)
- h2: 5xl (section headers)
- h3: 3xl (subsections)
- h4: xl (card titles)
- Body: base size with optimized line-height

**Color tokens:**
- `--background`: White
- `--foreground`: Near black (#0a0a0a)
- `--muted`: Light gray (#f1f5f9)
- `--accent`: Slate (#64748b)

---

## Key Components Explained

### Navigation.tsx
Global navigation bar with dropdown functionality for projects.

**Props:** None (uses NavigationContext)

**Key features:**
- Hover dropdown for Projects
- Active state indicators
- Responsive layout

### Hero.tsx
Large hero section for home page.

**Key elements:**
- 7xl headline with gradient text
- Supporting tagline
- Generous padding and centered layout

### FeaturedWork.tsx
Grid of project cards.

**Features:**
- 3-column grid (responsive)
- Thumbnail images (Unsplash)
- Project metadata (role, year, domain)
- Click to navigate to case study

### CaseStudyPage.tsx
Detailed project case study template.

**Sections:**
1. Header with metadata
2. Context (problem statement)
3. Goal (objectives)
4. Process (timeline with steps)
5. Outcome (metrics and results)

**Extensibility:** Clone and modify for additional case studies

### AboutPage.tsx
Personal bio and experience overview.

**Sections:**
1. Introduction
2. Experience timeline (chronological)
3. Skills (3 categories)
4. Design philosophy
5. Contact with copy functionality

---

## Images

**Strategy:**
- All project images use Unsplash via the unsplash_tool
- For new images, use `ImageWithFallback` component from `/components/figma/ImageWithFallback.tsx`
- Images are responsive and maintain aspect ratios

**Current images:**
- Home: Featured work thumbnails
- Case study: Process and outcome visuals
- About: Header image

---

## Tech Stack

**Framework:**
- React (with TypeScript)
- Tailwind CSS v4.0

**Key libraries:**
- `lucide-react` - Icons
- ShadCN UI components (pre-installed in `/components/ui`)

**No external dependencies needed for:**
- Routing (custom implementation)
- State management (React useState)
- Styling (Tailwind + custom CSS)

---

## How to Extend

### Adding a New Project/Case Study

1. **Create the case study page:**
   - Duplicate `CaseStudyPage.tsx`
   - Rename to match project (e.g., `CaseStudyProjectTwo.tsx`)
   - Update content, images, and metrics

2. **Add route in App.tsx:**
   ```tsx
   {currentPage === 'case-study-project-two' && <CaseStudyProjectTwo />}
   ```

3. **Update Navigation.tsx:**
   Add new project to dropdown menu:
   ```tsx
   <button onClick={() => navigateTo('case-study-project-two')}>
     Project Two
   </button>
   ```

4. **Update FeaturedWork.tsx:**
   Modify project card to link to new case study

### Adding a New Page (e.g., Resources)

1. **Create component:**
   - Create `/components/ResourcesPage.tsx`
   - Build page structure with sections

2. **Add route in App.tsx:**
   ```tsx
   {currentPage === 'resources' && <ResourcesPage />}
   ```

3. **Add navigation link:**
   Update `Navigation.tsx` to include Resources link

### Modifying Content

**Personal information:**
- Edit `AboutPage.tsx` for bio, timeline, skills
- Edit `Hero.tsx` for headline and tagline

**Project content:**
- Edit `CaseStudyPage.tsx` for LendInvest details
- Edit `FeaturedWork.tsx` for project cards

**Global elements:**
- Edit `Navigation.tsx` for nav items
- Edit `Footer.tsx` for footer content
- Edit `globals.css` for color palette

---

## Design Principles

**Aesthetic:**
- Minimal and elegant
- Sophisticated with modern touch
- Neutral color palette
- Generous whitespace
- Desktop-first (responsive down to mobile)

**Accessibility:**
- Semantic HTML elements
- Proper heading hierarchy
- Sufficient color contrast
- Focus states on interactive elements

**Typography:**
- No explicit font size/weight classes (uses globals.css defaults)
- Clear hierarchy with h1-h6
- Optimized line-height for readability

---

## Review Mode

**Current state:** Review navigation is visible

The floating navigation bar at the bottom allows quick switching between pages for consistency review.

**To remove for production:**
In `/App.tsx`, change:
```tsx
const [showReviewNav, setShowReviewNav] = useState(false);
```

Or delete the review navigation section entirely.

---

## Next Steps

**For concept refinement:**
1. Take screenshots of each page for static presentation
2. Use browser dev tools (F12) → Device toolbar for responsive views
3. Test navigation flow across all pages
4. Review content consistency and voice

**For development handoff:**
1. This prototype is production-ready code
2. Can be deployed as-is or integrated into a larger framework
3. Replace Unsplash images with final assets
4. Add remaining case studies using the template
5. Connect to a real routing library (React Router) if needed

**For additional features:**
- Add transitions/animations between pages
- Implement scroll-triggered animations
- Add dark mode toggle
- Create Resources page with full content
- Add project filtering on a dedicated Projects page

---

## Support

This documentation covers the core structure and functionality of your portfolio prototype. The codebase is clean, modular, and ready for refinement or development.

**Key files to reference:**
- `/App.tsx` - Main routing logic
- `/styles/globals.css` - Design system tokens
- `/components/Navigation.tsx` - Navigation structure
- Individual page components for content

All code follows React and Tailwind best practices, with components designed for easy modification and extension.
