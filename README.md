# Paulo Mendes - Personal Blog

A personal blog built with Astro, featuring an Xcode Dark theme and optimized for sharing iOS development insights.

## Features

- Xcode Dark theme styling
- Markdown support with syntax highlighting for Swift
- Responsive layout inspired by steipete.me
- Content collections for blog posts
- Netlify-ready deployment

## 🚀 Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Hero.astro
│   ├── content/
│   │   ├── blog/
│   │   │   └── hello-world.md
│   │   └── config.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   └── [...slug].astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── netlify.toml
└── package.json
```

## Adding New Blog Posts

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

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploying to Netlify

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to [Netlify](https://netlify.com)
3. Click "Add new site" and import your repository
4. Netlify will automatically detect the build settings from `netlify.toml`
5. Configure your custom domain `paulomendes.me` in the Netlify dashboard under Domain settings

The `netlify.toml` file is already configured with the correct build command and publish directory.

## Customization

### Update Bio and Avatar

Edit `src/components/Hero.astro` to update your bio text and avatar placeholder.

### Change Theme Colors

The Xcode Dark theme colors are defined in `src/styles/global.css`:

- `--color-keyword`: Title color (pink)
- `--color-variable`: Link color (teal)
- `--color-variable-hover`: Link hover color (lighter teal)
- `--color-text`: Plain text color (white)

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or join the [Discord server](https://astro.build/chat).
