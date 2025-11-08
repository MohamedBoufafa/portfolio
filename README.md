# AI Engineer Portfolio - React + TypeScript

A modern, innovative, and interactive portfolio website built with React, TypeScript, and cutting-edge web technologies. Features 3D animations, particle effects, smooth transitions, and a beautiful UI designed specifically for AI Engineers.

## 🚀 Features

### Innovative Design & Interactions
- **3D Animated Sphere** - Interactive Three.js 3D visualization in the hero section
- **Particle Background** - Dynamic particle network that responds to mouse movements
- **Smooth Animations** - Framer Motion powered animations throughout
- **Modern UI/UX** - Gradient colors, glassmorphism effects, and contemporary design
- **Theme Toggle** - Switch between themes (dark/light mode support ready)
- **Responsive Design** - Fully responsive across all devices

### Sections
1. **Hero** - Eye-catching introduction with 3D animation
2. **About** - Personal introduction with animated statistics
3. **Skills** - Showcase technical expertise with icons and tags
4. **Projects** - Display development projects with links
5. **AI Models** - Highlight AI/ML models with performance metrics
6. **Contact** - Interactive contact form and social links

### Technology Stack
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe code
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Smooth animations
- **Three.js** - 3D graphics via React Three Fiber
- **Particles.js** - Interactive particle effects
- **React Icons** - Beautiful icon library

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Setup

1. **Navigate to the portfolio folder**
```bash
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 🎨 Customization Guide

### 1. Personal Information

**File: `src/components/Hero.tsx`**
- Line 25: Change "Your Name" to your actual name
- Line 33: Update your title/role
- Line 41: Customize your tagline

### 2. About Section

**File: `src/components/About.tsx`**
- Lines 13-18: Update statistics (projects, models, years, satisfaction)
- Lines 35-47: Write your personal bio

### 3. Skills

**File: `src/components/Skills.tsx`**
- Lines 15-50: Customize skills array with your expertise
  - Update titles, descriptions, and tags
  - Icons: `brain`, `language`, `eye`, `code`, `database`, `cloud`

### 4. Projects

**File: `src/components/Projects.tsx`**
- Lines 15-38: Update projects array
  - Add your project details
  - Include GitHub and demo links
  - Customize tags

**To add more projects**, copy a project object and add it to the array.

### 5. AI Models

**File: `src/components/AIModels.tsx`**
- Lines 15-52: Update models array
  - Add your model details
  - Include performance metrics
  - Add research paper links
  - Customize tags

### 6. Contact Information

**File: `src/components/Contact.tsx`**
- Lines 44-63: Update contact information
  - Email
  - LinkedIn URL
  - GitHub URL
  - Personal website

**Note:** The contact form currently shows a success message. To make it functional:
- Integrate with a backend API (modify `handleSubmit` function)
- Use a service like Formspree, EmailJS, or Netlify Forms
- Or set up your own backend

### 7. Colors & Theme

**File: `src/index.css`**
- Lines 9-18: Customize CSS variables for colors
```css
:root {
  --primary: #6366f1;        /* Main brand color */
  --secondary: #8b5cf6;      /* Secondary color */
  --accent: #f59e0b;         /* Accent color */
  --success: #10b981;        /* Success/metric color */
}
```

### 8. 3D Scene Customization

**File: `src/components/Scene3D.tsx`**
- Line 20: Change sphere color (currently `#6366f1`)
- Line 22: Adjust distortion effect (0-1 range)
- Line 23: Modify animation speed

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## 🌐 Deployment

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
- Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/)
- Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

Or connect your GitHub repository on [Vercel](https://vercel.com/)

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/portfolio/',
  // ... rest of config
})
```

4. **Deploy**
```bash
npm run deploy
```

## 🎯 Performance Tips

1. **Optimize Images**: Compress and use WebP format
2. **Lazy Loading**: Components are already optimized with Intersection Observer
3. **Code Splitting**: Vite handles this automatically
4. **Particles**: Reduce particle count for mobile (check `ParticlesBackground.tsx`)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🛠️ Troubleshooting

### Issue: "Cannot find module" errors
**Solution:** Delete `node_modules` and reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: 3D scene not rendering
**Solution:** Check browser WebGL support at [get.webgl.org](https://get.webgl.org/)

### Issue: Particles causing lag
**Solution:** Reduce particle count in `src/components/ParticlesBackground.tsx` (line 60)

## 📄 Project Structure

```
portfolio/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Scene3D.tsx
│   │   ├── ParticlesBackground.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── AIModels.tsx
│   │   ├── Contact.tsx
│   │   └── *.css          # Component styles
│   ├── types/
│   │   └── index.ts       # TypeScript types
│   ├── App.tsx            # Main app component
│   ├── App.css
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Support

If you have questions or need help customizing the portfolio:
1. Check the customization guide above
2. Review the code comments
3. Refer to documentation:
   - [React](https://react.dev/)
   - [Framer Motion](https://www.framer.com/motion/)
   - [Three.js](https://threejs.org/)
   - [Vite](https://vitejs.dev/)

## ⭐ Show Your Support

If you find this portfolio template helpful, please give it a star on GitHub!

## 📄 License

MIT License - feel free to use this for personal or commercial projects.

---

**Built with ❤️ using React, TypeScript, and modern web technologies**
