# Media Kit Setup Guide

## Quick Setup

The Media Kit download button has been added to both desktop and mobile versions of the website. To make it functional, you need to add the ZIP file.

## Option 1: Manual Download (Recommended)

1. **Download files from Google Drive:**
   - Visit: https://drive.google.com/drive/folders/1Sb-5WDo2Er8ximL-Bt6maTjGQr3mHfXq?usp=drive_link
   - Click the three dots (⋮) at the top right
   - Select "Download" - this will automatically create a ZIP file

2. **Rename and place the file:**
   ```bash
   # Rename the downloaded ZIP to: amelissa-media-kit.zip
   # Move it to: public/media-kit/amelissa-media-kit.zip
   ```

3. **Verify the setup:**
   - The file should be at: `amelissa-react/public/media-kit/amelissa-media-kit.zip`
   - Test the download button on your website

## Option 2: Using Google Drive CLI (Advanced)

If you have `gdown` installed:

```bash
# Install gdown (if not already installed)
pip install gdown

# Navigate to the project directory
cd amelissa-react

# Download the folder (you'll need to get the folder ID)
gdown --folder https://drive.google.com/drive/folders/1Sb-5WDo2Er8ximL-Bt6maTjGQr3mHfXq -O temp-media-kit

# Create ZIP
cd temp-media-kit
zip -r ../public/media-kit/amelissa-media-kit.zip .
cd ..

# Clean up
rm -rf temp-media-kit
```

## What's Been Added

### Desktop Version (`AboutSection.jsx`)
- ✅ Media Kit button added after the keywords section
- ✅ Beautiful gradient button with download icon
- ✅ Smooth animations and hover effects
- ✅ Positioned centrally below keywords, above gallery

### Mobile Version (`MobileAbout.jsx`)
- ✅ Media Kit button added after the keywords section
- ✅ Touch-optimized button with proper sizing
- ✅ Smooth animations matching the mobile design
- ✅ Full-width button (max 280px) for easy tapping

### Styling
- ✅ Desktop styles in `15_about-section.css`
- ✅ Mobile styles in `mobile.css`
- ✅ Consistent gold gradient matching site theme
- ✅ Download icon with animation on hover/tap

## Button Features

- **Direct Download**: Clicking the button downloads the ZIP file immediately
- **No Redirects**: Users stay on your site (no Google Drive redirect)
- **Accessible**: Proper ARIA labels for screen readers
- **Responsive**: Optimized for both desktop and mobile
- **Animated**: Smooth entrance animations when scrolling

## File Structure

```
amelissa-react/
├── public/
│   └── media-kit/
│       ├── amelissa-media-kit.zip  ← Add your ZIP here
│       └── README.md
├── src/
│   ├── components/
│   │   ├── AboutSection.jsx        ← Updated
│   │   └── mobile/
│   │       └── MobileAbout.jsx     ← Updated
│   └── styles/
│       ├── 15_about-section.css    ← Updated
│       └── mobile.css              ← Updated
└── MEDIA_KIT_SETUP.md              ← This file
```

## Testing

After adding the ZIP file:

1. **Desktop**: 
   - Scroll to the "Get to know AMELISSA" section
   - Look for the "Download Media Kit" button below the keywords
   - Click to test download

2. **Mobile**:
   - Open site on mobile or use browser dev tools (F12 → Device toolbar)
   - Scroll to the About section
   - Tap the "Download Media Kit" button
   - Verify download starts

## Troubleshooting

### Button appears but download doesn't work
- Check that the file exists at: `public/media-kit/amelissa-media-kit.zip`
- Verify the file name is exactly: `amelissa-media-kit.zip`
- Clear browser cache and try again

### File is too large
- Consider compressing images in the media kit
- Recommended max size: 50MB
- Use tools like TinyPNG for images before zipping

### Need to update the media kit
- Simply replace the ZIP file in `public/media-kit/`
- No code changes needed
- Users will automatically get the new version

## Support

If you need to change:
- **Button text**: Edit the `<span>` content in the component files
- **Button style**: Modify the CSS in the respective style files
- **File location**: Update the `href` attribute in both component files

