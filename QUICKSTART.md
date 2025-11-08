# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

### 3. Customize Your Content

Edit these files to add your information:

#### **Personal Info** → `src/components/Hero.tsx`
- Your name (line 25)
- Your title (line 33)
- Your tagline (line 41)

#### **About Me** → `src/components/About.tsx`
- Statistics (lines 13-18)
- Bio text (lines 35-47)

#### **Skills** → `src/components/Skills.tsx`
- Update skills array (lines 15-50)

#### **Projects** → `src/components/Projects.tsx`
- Update projects array (lines 15-38)
- Add GitHub/demo links

#### **AI Models** → `src/components/AIModels.tsx`
- Update models array (lines 15-52)
- Add performance metrics

#### **Contact** → `src/components/Contact.tsx`
- Update contact info (lines 44-63)

## 🎨 Customize Colors

**File:** `src/index.css` (lines 9-18)

```css
--primary: #6366f1;     /* Change this */
--secondary: #8b5cf6;   /* And this */
--accent: #f59e0b;      /* And this */
```

## 📦 Build for Production

```bash
npm run build
```

The output will be in the `dist` folder.

## 🌐 Deploy

**Netlify:** Drag `dist` folder to netlify.com  
**Vercel:** Run `vercel` command or connect GitHub  
**GitHub Pages:** See full README for instructions

## ⚡ Tips

- Edit one section at a time
- Save and see changes live
- Check the console for any errors
- Read the full README.md for detailed instructions

**Need help?** Check README.md for comprehensive documentation!
