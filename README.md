# 🚀 Modern Developer Portfolio

A stunning, high-performance, mobile-first personal portfolio website built with Next.js, React, Tailwind CSS, and Framer Motion.

![Portfolio Preview](./preview.png)

## ✨ Features

### Core Features
- 🎨 **Modern Dark Theme** - Premium dark-mode friendly UI with gradient accents
- 📱 **Mobile-First Design** - Fully responsive across all devices
- ⚡ **High Performance** - Optimized with Next.js App Router and Turbopack
- 🎭 **Smooth Animations** - Powered by Framer Motion and GSAP
- 🌊 **Premium Scrolling** - Lenis smooth scroll integration
- ♿ **Accessible** - Built with accessibility best practices

### Sections
1. **Hero Section** - Animated name reveal, professional title, and CTAs
2. **About Me** - Professional summary with highlight cards and stats
3. **Skills / Tech Stack** - Categorized skills with animated progress bars
4. **Projects Showcase** - Filterable project grid with hover effects
5. **Certificates** - Professional certifications with modal viewer
6. **Contact** - Validated contact form with React Hook Form & Zod

### Extra Enhancements
- 🌟 Animated particle background
- 🎯 Custom cursor (desktop)
- 📊 Scroll progress indicator
- ⏳ Loading screen animation
- 🔍 SEO optimized with sitemap and robots.txt
- 🎉 404 and error pages

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16, React 19 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Animations** | Framer Motion, GSAP |
| **Smooth Scroll** | Lenis |
| **Forms** | React Hook Form, Zod |
| **Icons** | Lucide React |

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles & CSS variables
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── error.tsx           # Error page
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt config
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── providers/          # Context providers (SmoothScroll)
│   └── ui/                 # Reusable UI components (shadcn/ui + custom)
├── data/
│   └── portfolio.ts        # Portfolio content data
└── lib/
    └── utils.ts            # Utility functions (cn)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Update Your Information

Edit `src/data/portfolio.ts` to customize:
- Personal details (name, title, email, etc.)
- About section content
- Skills and proficiency levels
- Projects
- Certificates
- Social links

### Styling

The design system uses CSS variables defined in `globals.css`:
- Primary color (purple): `--primary`
- Secondary color (pink): `--secondary`
- Accent color (teal): `--accent`

### Adding Projects

Add new projects to the `projectsData` array in `src/data/portfolio.ts`:

```typescript
{
  id: 7,
  title: 'Your Project',
  description: 'Project description',
  tech: ['Tech1', 'Tech2'],
  liveUrl: 'https://...',
  githubUrl: 'https://...',
  category: 'fullstack', // 'frontend' | 'backend' | 'fullstack'
  featured: true
}
```

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## 🔧 Configuration

### Environment Variables

No environment variables required for basic setup. For production:

```env
# Optional: Analytics, Form submission API, etc.
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [GSAP](https://greensock.com/gsap/) - Advanced animations
- [Lenis](https://lenis.studiofreight.com/) - Smooth scrolling
- [Lucide](https://lucide.dev/) - Icons

---

Made with ❤️ and lots of ☕
