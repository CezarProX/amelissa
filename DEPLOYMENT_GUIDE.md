# 🚀 Deployment Guide for amelissa.ro

## Quick Deploy (Automated)

### First Time Setup:
```bash
npm install basic-ftp --save-dev
```

### Deploy in 2 Commands:
```bash
npm run build
node deploy.js
```

---

## Manual Deployment (Using FileZilla)

### Step 1: Install FileZilla
Download from: https://filezilla-project.org/

### Step 2: Build Your Project
```bash
cd amelissa-react
npm run build
```
This creates a `dist` folder with all production files.

### Step 3: Configure FileZilla

1. Open FileZilla
2. Click **File** → **Site Manager**
3. Click **New Site** and name it "Amelissa"
4. Enter these details:
   - **Protocol**: FTP - File Transfer Protocol
   - **Host**: `amelissa.ro`
   - **Port**: 21
   - **Encryption**: Use explicit FTP over TLS if available
   - **Logon Type**: Normal
   - **User**: `amelissa`
   - **Password**: `u516l4XUtv`
5. Click **Connect**

### Step 4: Upload Files

1. On the **left side** (Local site): Navigate to your `amelissa-react/dist` folder
2. On the **right side** (Remote site): Navigate to `public_html` folder
3. Select **all files and folders** inside the `dist` folder
4. Right-click → **Upload**
5. Wait for all files to transfer (you'll see progress at the bottom)

### Step 5: Verify
Visit https://amelissa.ro in your browser!

---

## Using cPanel File Manager (Alternative)

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Create a ZIP
1. Go to your `amelissa-react/dist` folder
2. Select all contents
3. Create a ZIP file (name it `amelissa-site.zip`)

### Step 3: Upload via cPanel
1. Go to https://cpanel.amelissa.ro
2. Login:
   - Username: `amelissa`
   - Password: `u516l4XUtv`
3. Click **File Manager**
4. Navigate to `public_html`
5. Click **Upload** button
6. Upload your `amelissa-site.zip`
7. Right-click the ZIP → **Extract**
8. Delete the ZIP file after extraction

### Step 4: Verify
Visit https://amelissa.ro in your browser!

---

## Important Notes

### Before First Deployment:
- Make sure `public_html` is empty or backup existing files
- The `index.html` file should be in the root of `public_html`

### File Structure on Server:
```
public_html/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── images/
├── css/
├── js/
└── fonts/
```

### For Updates:
1. Make your changes locally
2. Run `npm run build`
3. Upload the new `dist` contents (overwrite existing files)

### Troubleshooting:

**Problem**: White screen after deployment
- **Solution**: Check browser console for errors. Make sure all paths are correct.

**Problem**: Images not loading
- **Solution**: Verify images folder uploaded correctly. Check file permissions (should be 644 for files, 755 for folders).

**Problem**: FTP connection failed
- **Solution**: Try using `s4.hostgate.ro` as host instead of `amelissa.ro`

**Problem**: 404 errors on refresh
- **Solution**: Add `.htaccess` file (see below)

### Add .htaccess for React Router (if needed):
Create a file named `.htaccess` in `public_html` with this content:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

---

## Contact Information

**Hosting Provider**: HostGate
**Domain**: amelissa.ro
**cPanel**: https://cpanel.amelissa.ro
**Support**: Contact your hosting provider if you encounter server issues

---

## Quick Reference

| What | Value |
|------|-------|
| FTP Host | amelissa.ro or s4.hostgate.ro |
| FTP User | amelissa |
| FTP Password | u516l4XUtv |
| Upload Directory | public_html |
| cPanel URL | https://cpanel.amelissa.ro |
| Live Site | https://amelissa.ro |

---

**Last Updated**: October 18, 2025

