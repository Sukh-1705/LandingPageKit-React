# Sukh Landing Kit - Premium React Landing Page Template

A modern, responsive landing page template built with React 18, TypeScript, and Tailwind CSS. Perfect for SaaS, startups, and digital products.

## ✨ Features

- **Modern Design**: Clean, professional black theme with excellent typography
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **TypeScript**: Built with TypeScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Component-Based**: Modular components for easy customization
- **Performance Optimized**: Fast loading with Vite build tool
- **SEO Ready**: Optimized meta tags and semantic HTML
- **Customizable**: Easy to modify colors, content, and branding

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone or download the template**
```bash
git clone <repository-url>
cd sukh-landing-kit
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## 📁 Project Structure

```
sukh-landing-kit/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── layout/       # Layout components
│   │   └── sections/     # Page sections
│   ├── lib/
│   │   └── utils.ts      # Utility functions
│   ├── styles/
│   │   └── globals.css   # Global styles
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    50: '#f8fafc',
    500: '#000000',
    900: '#000000',
  }
}
```

### Content
Update content in the following files:
- `src/components/sections/Hero.tsx` - Hero section
- `src/components/sections/Features.tsx` - Features section  
- `src/components/sections/Pricing.tsx` - Pricing section
- `src/components/layout/Header.tsx` - Navigation
- `src/components/layout/Footer.tsx` - Footer

### Branding
- Replace `public/favicon.svg` with your logo
- Update title and meta tags in `index.html`
- Change project name in `package.json`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your repository to Vercel
2. Vercel will automatically detect the Vite configuration

### Other Platforms
Upload the contents of the `dist/` folder to any static hosting service.

## 📝 License

This template is licensed under the MIT License. See LICENSE file for details.

## 🤝 Support



## 🎯 Perfect For

- SaaS landing pages
- Startup websites
- Product launches
- Portfolio sites
- Agency websites
- Digital product sales

---

**Built with ❤️ by Sukh UI Design** 