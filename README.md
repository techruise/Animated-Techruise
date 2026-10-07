# Techruise — Premium 3D AI SaaS Website

A highly animated, premium 3D marketing website for **Techruise**, built with Next.js 16, Three.js / React Three Fiber, Framer Motion, and Tailwind CSS 4.

🔗 **[Live Demo](https://techruise.vercel.app)** (coming soon)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or higher
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/techruise-website.git
cd techruise-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_SITE_URL to http://localhost:3000

# Start development server
npm run dev
# → Open http://localhost:3000
```

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16 | React framework with App Router, SSG |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Three.js | 0.186 | 3D rendering |
| @react-three/fiber | 9 | React renderer for Three.js |
| @react-three/drei | 10 | 3D helpers and components |
| @react-three/postprocessing | 3 | Bloom and effects |
| Framer Motion | 14 | UI animations |
| GSAP | 3 | Scroll-driven animations |
| Lenis | 1.3 | Smooth scrolling |

---

## 📦 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

---

## 🌍 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

This variable is used for:
- Open Graph metadata
- Sitemap generation
- Canonical URLs

For local development, use `http://localhost:3000`.

---

## 📁 Project Structure

```
techruise-website/
├── app/
│   ├── globals.css          # Tailwind 4, design tokens, typography
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Home page
│   ├── contact/page.tsx     # Contact page
│   └── not-found.tsx        # 404 page
├── components/
│   ├── 3d/                  # Three.js/R3F components
│   │   ├── Hero3DScene.tsx  # Main 3D canvas with performance monitoring
│   │   ├── NeuralCore.tsx   # Optimized 3D scene (InstancedMesh, shader particles)
│   │   └── FinalCTAScene.tsx
│   ├── Container.tsx        # Responsive container wrapper
│   ├── Section.tsx          # Section with consistent spacing
│   ├── SectionHeader.tsx    # Reusable section header pattern
│   ├── Navbar.tsx           # Sticky navigation
│   ├── Footer.tsx           # Footer with newsletter
│   └── ...
├── sections/                # Page sections
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   └── ...
├── lib/
│   └── content.ts           # All site copy (edit text here)
├── public/                  # Static assets
└── README.md
```

---

## ✏️ Customizing Content

**All text content** is centralized in [`lib/content.ts`](./lib/content.ts). Edit this file to change:
- Company info
- Hero headline and CTAs
- Services descriptions
- Testimonials
- Pricing tiers
- FAQ
- Footer links

No need to touch individual components to change copy.

---

## 🎨 Customizing Design

### Colors
Edit `app/globals.css` under the `@theme` block:

```css
@theme {
  --color-violet: #7C3AED;
  --color-cyan: #22D3EE;
  --color-magenta: #E879F9;
  /* ... */
}
```

### Typography
Two fonts are used:
- **Orbitron** (display) for headings
- **Inter** (sans) for body text

Change fonts in `app/layout.tsx` by importing different Google Fonts.

### 3D Scene
Customize the neural core in [`components/3d/NeuralCore.tsx`](./components/3d/NeuralCore.tsx):
- Node count and positions
- Ring sizes and colors
- Particle count (desktop: 1000, mobile: 500)
- Animation speeds

---

## 🚢 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/techruise-website)

### Manual Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your `techruise-website` repository
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)

3. **Add Environment Variable**
   - In project settings, go to "Environment Variables"
   - Add: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`
   - Redeploy

4. **Custom Domain (Optional)**
   - Go to project settings → "Domains"
   - Add your custom domain
   - Update `NEXT_PUBLIC_SITE_URL` to match

---

## 📊 Performance

The site is optimized for 60fps on normal laptops:
- **Single WebGL canvas** for entire site
- **InstancedMesh** for 50 nodes (1 draw call)
- **Shader-based particles** (1000 desktop / 500 mobile)
- **Light Bloom only** (disabled on mobile)
- **Auto-quality**: Detects low-power devices and adjusts
- **DPR capped**: Max 1.5 on desktop, 1 on mobile
- **Static film grain**: No animated overlays

---

## 📄 License

This project is private and proprietary.

---

## 🙋 Support

For questions or issues, contact: [your-email@example.com](mailto:your-email@example.com)
