# Deployment Guide

## Quick Start - Local Testing

The development server should now be running at `http://localhost:5173`

To verify the migration:
1. Open `http://localhost:5173` in your browser
2. Compare with the original site to verify visual appearance
3. Test all interactive elements:
   - Navigation menu
   - Music player controls
   - Video thumbnails (lightbox)
   - Hover effects
   - Responsive design on different screen sizes

## Deploying to Netlify

### Option 1: Deploy via Git (Recommended)

1. **Initialize Git repository:**
   ```bash
   cd amelissa-react
   git init
   git add .
   git commit -m "Initial commit: Migrate to React with Vite"
   ```

2. **Push to GitHub/GitLab:**
   ```bash
   git remote add origin <your-repository-url>
   git branch -M main
   git push -u origin main
   ```

3. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider (GitHub/GitLab)
   - Select your repository
   - Netlify will auto-detect settings from `netlify.toml`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   cd amelissa-react
   netlify deploy --prod
   ```

### Option 3: Drag & Drop Deploy

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Drag the `dist` folder to Netlify:**
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder from your file system
   - Your site will be deployed instantly

## Post-Deployment Checklist

After deployment, verify:
- [ ] All images load correctly
- [ ] CSS styles are applied properly
- [ ] Music player works
- [ ] Navigation functions properly
- [ ] All links work
- [ ] Mobile responsive design works
- [ ] Custom domain is set up (if applicable)
- [ ] HTTPS is enabled (Netlify does this automatically)

## Environment Variables (if needed)

If you need to add environment variables:
1. In Netlify dashboard, go to Site settings → Environment variables
2. Add your variables (e.g., API keys)
3. Prefix with `VITE_` to make them accessible in React

## Custom Domain Setup

1. In Netlify dashboard, go to Domain settings
2. Click "Add custom domain"
3. Follow the instructions to update your DNS records
4. Netlify will automatically provision SSL certificate

## Troubleshooting

### Build fails on Netlify
- Check the build logs in Netlify dashboard
- Verify Node version matches (18+)
- Ensure all dependencies are in package.json

### Images not loading
- Verify images are in the `public` folder
- Check that paths start with `/` (e.g., `/images/logo.png`)

### Styles not applying
- Clear browser cache
- Check browser console for CSS loading errors
- Verify CSS files are in `public/css` folder

### Music player not working
- Check browser console for JavaScript errors
- Verify `core.min.js` and `script.js` are loading
- Ensure jQuery plugins are compatible

## Monitoring and Analytics

To add Google Analytics:
1. Add your tracking code to `index.html`
2. Or use a React analytics package like `react-ga4`

## Performance Optimization

Already included:
- ✅ Vite's optimized build process
- ✅ Code splitting
- ✅ CSS minification
- ✅ Asset caching headers in netlify.toml

Future improvements:
- Consider lazy loading for images
- Add service worker for offline support
- Implement preconnect for external fonts

## Support

If you encounter issues:
1. Check the README.md for project structure
2. Review Netlify deployment logs
3. Check browser console for errors
4. Verify all assets are properly copied to public folder

