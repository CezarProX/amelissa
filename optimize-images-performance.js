import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = path.join(__dirname, 'public', 'images', 'optimized');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image optimization configurations
const sizes = {
  hero: {
    mobile: 800,
    tablet: 1200,
    desktop: 1920,
  },
  cover: {
    mobile: 400,
    tablet: 600,
    desktop: 800,
  },
  photo: {
    mobile: 600,
    tablet: 900,
    desktop: 1200,
  },
};

// Quality settings
const quality = {
  webp: 85,
  jpeg: 85,
  png: 90,
};

async function optimizeImage(inputPath, outputPath, width, format = 'webp') {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Don't upscale images
    const targetWidth = Math.min(width, metadata.width || width);

    let processedImage = image.resize(targetWidth, null, {
      fit: 'inside',
      withoutEnlargement: true,
    });

    // Apply format-specific optimization
    switch (format) {
      case 'webp':
        processedImage = processedImage.webp({ quality: quality.webp });
        break;
      case 'jpeg':
      case 'jpg':
        processedImage = processedImage.jpeg({ quality: quality.jpeg, progressive: true });
        break;
      case 'png':
        processedImage = processedImage.png({ quality: quality.png, compressionLevel: 9 });
        break;
    }

    await processedImage.toFile(outputPath);
    
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(outputPath)}: ${(inputSize / 1024 / 1024).toFixed(2)}MB → ${(outputSize / 1024 / 1024).toFixed(2)}MB (${savings}% saved)`);
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
  }
}

async function processImages() {
  console.log('🚀 Starting image optimization...\n');

  // Hero images (Homepage copy.jpg)
  const heroImage = path.join(inputDir, 'Homepage copy.jpg');
  if (fs.existsSync(heroImage)) {
    console.log('📸 Optimizing hero image:');
    await optimizeImage(heroImage, path.join(outputDir, 'hero-mobile.webp'), sizes.hero.mobile);
    await optimizeImage(heroImage, path.join(outputDir, 'hero-tablet.webp'), sizes.hero.tablet);
    await optimizeImage(heroImage, path.join(outputDir, 'hero-desktop.webp'), sizes.hero.desktop);
    // Fallback JPEG
    await optimizeImage(heroImage, path.join(outputDir, 'hero-desktop.jpg'), sizes.hero.desktop, 'jpeg');
    console.log('');
  }

  // Cover images
  const coverImages = [
    'Cover Piesa 1.jpg',
    'Cover 2nd Song 1080x1080.png',
  ];

  console.log('🎵 Optimizing cover images:');
  for (const coverImage of coverImages) {
    const inputPath = path.join(inputDir, coverImage);
    if (fs.existsSync(inputPath)) {
      const baseName = path.basename(coverImage, path.extname(coverImage));
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}-mobile.webp`), sizes.cover.mobile);
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}-tablet.webp`), sizes.cover.tablet);
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}-desktop.webp`), sizes.cover.desktop);
      // Fallback
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}.webp`), 800);
    }
  }
  console.log('');

  // Release covers
  const coversDir = path.join(inputDir, 'covers');
  if (fs.existsSync(coversDir)) {
    console.log('💿 Optimizing release covers:');
    const coverFiles = fs.readdirSync(coversDir).filter(f => 
      /\.(jpg|jpeg|png)$/i.test(f) && !f.includes('.ico')
    );
    
    for (const file of coverFiles) {
      const inputPath = path.join(coversDir, file);
      const baseName = path.basename(file, path.extname(file));
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}.webp`), 800);
    }
    console.log('');
  }

  // Photo session images
  const photoDir = path.join(inputDir, 'amelissa');
  if (fs.existsSync(photoDir)) {
    console.log('📷 Optimizing photo session images:');
    const photoFiles = fs.readdirSync(photoDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
    
    for (const file of photoFiles) {
      const inputPath = path.join(photoDir, file);
      const baseName = path.basename(file, path.extname(file));
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}-mobile.webp`), sizes.photo.mobile);
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}-tablet.webp`), sizes.photo.tablet);
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}-desktop.webp`), sizes.photo.desktop);
    }
    console.log('');
  }

  // Small logo images
  console.log('🎨 Optimizing logos and small images:');
  const logoImages = [
    'Amelissa Logo alb.png',
    'Amelissa-logo-negru.png',
    'logo-default-1486x277.png',
    'logo-inverse-892x110.png',
  ];

  for (const logoImage of logoImages) {
    const inputPath = path.join(inputDir, logoImage);
    if (fs.existsSync(inputPath)) {
      const baseName = path.basename(logoImage, path.extname(logoImage));
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}.webp`), 600);
      // Keep PNG for transparency
      await optimizeImage(inputPath, path.join(outputDir, `${baseName}.png`), 600, 'png');
    }
  }

  console.log('\n✨ Image optimization complete!\n');
  
  // Calculate total savings
  const originalSize = await calculateDirectorySize(inputDir);
  const optimizedSize = await calculateDirectorySize(outputDir);
  const totalSavings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
  
  console.log(`📊 Total Savings:`);
  console.log(`   Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Optimized: ${(optimizedSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Saved: ${totalSavings}% 🎉\n`);
}

async function calculateDirectorySize(dir) {
  let totalSize = 0;
  
  function walk(directory) {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        walk(filePath);
      } else {
        totalSize += stats.size;
      }
    });
  }
  
  walk(dir);
  return totalSize;
}

processImages().catch(console.error);

