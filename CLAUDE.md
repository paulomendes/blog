# Paulo Mendes Personal Blog

A personal blog built with Astro, featuring an Xcode Dark theme with FiraCode font and animated link effects.

## 🎨 Design Features

### Theme
- **Xcode Dark Theme** color scheme
- **FiraCode** monospace font used throughout the entire site
- Color palette:
  - Background: `#1f1f24`
  - Text: `#ffffff`
  - Titles/Keywords: `#fc5fa3` (pink)
  - Links/Variables: `#67b7a4` (teal)
  - Link Hover: `#8dd0bf` (brighter teal)
  - Secondary: `#a0a0a0` (gray)
  - Border: `#2d2d30`

### Animations
- **Dotted underline animation** on all links
  - Expands from center to edges on hover
  - 0.2s transition
  - 3px dotted border
  - Matches link colors (teal → brighter teal)

### Layout
- Inspired by [steipete.me](https://steipete.me/)
- Hero section with:
  - Avatar placeholder (gradient circle with initials)
  - Bio section
  - Social links (GitHub, LinkedIn)
- Single-column blog post listing
- Responsive design optimized for readability

## 🏗️ Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation header
│   │   └── Hero.astro            # Hero section with bio and social links
│   ├── content/
│   │   ├── blog/
│   │   │   └── hello-world.md    # First blog post
│   │   └── config.ts             # Content collections config
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Base layout with header/footer
│   │   └── BlogPost.astro        # Blog post layout with metadata
│   ├── pages/
│   │   ├── blog/
│   │   │   └── [...slug].astro   # Dynamic blog post routes
│   │   └── index.astro           # Home page with post listing
│   └── styles/
│       └── global.css            # Global styles and theme
├── netlify.toml                  # Netlify deployment config
└── astro.config.mjs              # Astro configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit http://localhost:4321

### Build

```bash
npm run build
```

Output will be in `dist/` directory.

### Preview

```bash
npm run preview
```

## 📝 Adding New Blog Posts

Create a new `.md` file in `src/content/blog/` with the following frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'A brief description of your post'
pubDate: 2025-11-25
readTime: '5 min read'
---

Your content here...
```

### Markdown Features
- Full markdown support
- Syntax highlighting for code blocks (optimized for Swift)
- Inline code styling
- Blockquotes, lists, and more

## 🎯 Key Features

### Content Collections
Uses Astro's Content Collections API for type-safe blog posts with automatic validation.

### Syntax Highlighting
Code blocks use GitHub Dark theme via Shiki, matching the overall dark aesthetic.

### Font Loading
FiraCode is loaded via jsdelivr CDN with multiple font weights:
- Regular (400)
- Medium (500)
- Bold (700)

### Link Styling
All links feature:
- No underline by default
- Animated dotted underline on hover
- Color transitions
- Smooth animations

## 🌐 Deployment

### Netlify
Configured for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- Automatic 404 handling

### Domain Setup
Site is configured for `paulomendes.me` domain.

To deploy:
1. Push to GitHub
2. Connect repository to Netlify
3. Configure custom domain in Netlify settings

## 🔧 Customization

### Update Bio and Avatar
Edit `src/components/Hero.astro`:
- Change bio text
- Update avatar placeholder (replace with actual image if desired)

### Change Theme Colors
Modify CSS variables in `src/styles/global.css`:

```css
:root {
  --color-bg: #1f1f24;
  --color-text: #ffffff;
  --color-keyword: #fc5fa3;
  --color-variable: #67b7a4;
  --color-variable-hover: #8dd0bf;
  --color-secondary: #a0a0a0;
  --color-border: #2d2d30;
  --font-mono: 'Fira Code', ui-monospace, 'SF Mono', Monaco, 'Menlo', 'Consolas', 'Courier New', monospace;
}
```

### Modify Link Animations
Edit the `a::after` pseudo-element in `src/styles/global.css` to adjust:
- Animation duration (`transition`)
- Dot size (`border-bottom`)
- Position (`bottom`)

## 📦 Dependencies

- **Astro** v5.16.0 - Static site generator
- **FiraCode** - Monospace font

## 🤝 Social Links

- GitHub: [github.com/paulomendes](https://github.com/paulomendes)
- LinkedIn: [linkedin.com/in/paulomendes42](https://www.linkedin.com/in/paulomendes42/)

## 📄 License

Built with Astro and Claude Code.

---

Generated with [Claude Code](https://claude.com/claude-code)
