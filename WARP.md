# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repository Overview

This is a personal portfolio website for Krish Patel (www.krishpatel.com), built as a static site and deployed via GitHub Pages. The site showcases Krish's experience as a **Machine Learning Engineer** specializing in production-grade AI systems, secure LLM pipelines, and MLOps infrastructure for DoD and enterprise clients.

## Architecture

### Core Structure
- **Static Site**: Pure HTML/CSS/JavaScript with no build system or framework dependencies
- **Styling**: Uses Tailwind CSS via CDN (v2.x) for utility-first CSS
- **Icons**: Lucide icons loaded via CDN for consistent iconography
- **Deployment**: GitHub Pages with custom domain (CNAME: www.krishpatel.com)

### Key Files
- `index.html` - Main portfolio page with hero, professional experience, certifications, and technical stack sections
- `script.js` - JavaScript for professional experience cards, certifications display, and technical skills organization
- `style.css` - Modern CSS with dark theme, gradient animations, and glassmorphism effects
- `PATEL_RESUME_AIandML.pdf` - Current ML Engineer resume
- Legacy resume files for reference

### Data Structure
Professional experience, certifications, and technical skills are defined as JavaScript objects in `script.js`. The site features:
- Professional experience cards highlighting DoD and enterprise ML work
- Industry certification showcase with visual icons and validation periods
- Categorized technical skills (ML/AI, Cloud/MLOps, Infrastructure, Monitoring)
- Dark theme with animated gradients and modern glassmorphism design

## Common Development Commands

### Local Development
```bash
# Serve the site locally (Python 3)
python -m http.server 8000

# Alternative with PHP
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Git Operations
```bash
# Standard workflow for GitHub Pages
git add .
git commit -m "Update portfolio content"
git push origin main

# Check deployment status
git log --oneline -5
```

### Content Updates

**Adding New Experience**: Edit the `experiences` array in `script.js`:
```javascript
{
    company: "Company Name",
    role: "ML Engineer Role",
    period: "Date Range",
    location: "Location",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech1", "Tech2"]
}
```

**Updating Technical Skills**: Modify the `technicalSkills` object categories:
```javascript
const technicalSkills = {
    ml: ["Python", "PyTorch", "New ML Tool"],
    cloud: ["AWS SageMaker", "New Cloud Service"],
    // ... other categories
};
```

**Adding Certifications**: Update the `certifications` array with new credentials and their validation periods.

**Resume Updates**: Replace `PATEL_RESUME_AIandML.pdf` and ensure download links reference the correct filename.

## Project-Specific Considerations

### Design System
- Dark theme with black/gray backgrounds and white text
- Purple-blue gradient accents (ml-gradient-text class)
- Glassmorphism effects with backdrop-filter blur
- Animated grid background and gradient text shifts
- Responsive design with mobile-first approach

### TypeScript Configuration
The repository includes TypeScript config files (`tsconfig*.json`) and Tailwind config, suggesting this may have been initially set up for a React/Vite project but currently uses vanilla HTML/CSS/JS. These files are not actively used but indicate potential for future migration.

### Responsive Design
The site uses Tailwind's responsive utilities:
- Mobile-first approach with `sm:`, `md:`, `lg:` breakpoints
- Carousel adapts to different screen sizes
- Skills grid adjusts from 2 columns (mobile) to 4 columns (desktop)

### Performance Considerations
- All external dependencies (Tailwind, Lucide, Inter font) load from CDN
- Modern CSS animations use GPU acceleration with transform and opacity
- Backdrop-filter effects may impact performance on older devices
- Dynamic content generation with JavaScript for experience and skills

## Domain and Hosting
- Custom domain: `www.krishpatel.com` (configured via CNAME file)
- Hosted on GitHub Pages from the main branch
- Any pushes to main branch automatically deploy changes