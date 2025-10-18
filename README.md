# 🎤 Amelissa Official Website

Official website for Romanian vocal artist Amelissa, built with React and Vite.

![Amelissa](public/images/Amelissa-logo-negru.png)

## 🌟 Features

- 🎵 Music player with latest releases
- 📱 Fully responsive design (mobile & desktop)
- 🎨 Modern, beautiful UI with smooth animations
- 📰 News and updates section
- 👤 About section with artist information
- 🎬 YouTube integration for music videos
- ⚡ Fast loading with Vite

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/amelissa.git

# Navigate to project directory
cd amelissa

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

## 📦 Build

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for deployment to amelissa.ro via FTP.

### Quick Deploy
```bash
# Automated deployment (requires basic-ftp)
npm install basic-ftp --save-dev
npm run deploy
```

For detailed deployment instructions, see [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) or [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Custom CSS + Tailwind-like utilities
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Video**: React YouTube

## 📁 Project Structure

```
amelissa-react/
├── public/              # Static assets
│   ├── images/         # Images and logos
│   ├── css/            # Global CSS
│   └── js/             # External scripts
├── src/
│   ├── components/     # React components
│   │   ├── mobile/    # Mobile-specific components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/         # Page components
│   ├── hooks/         # Custom React hooks
│   ├── styles/        # Component styles
│   └── main.jsx       # App entry point
├── dist/              # Production build (generated)
└── package.json
```

## 🎨 Key Components

- **HeroSection**: Landing section with artist introduction
- **MusicReleasesSection**: Latest music releases with player
- **AboutSection**: Artist biography and information
- **NewsSection**: Latest news and updates
- **FixedPlayer**: Persistent music player
- **Mobile Components**: Optimized mobile versions

## 📱 Mobile Optimization

This website is fully optimized for mobile devices with:
- Responsive layouts
- Touch-friendly navigation
- Optimized images
- Mobile-specific components

## 🔧 Development

```bash
# Run linter
npm run lint

# Build for production
npm run build
```

## 📄 License

© 2025 Amelissa. All rights reserved.

## 👥 Contact

For website inquiries, please contact through the official channels on [amelissa.ro](https://amelissa.ro)

---

**Built with ❤️ for Amelissa**
