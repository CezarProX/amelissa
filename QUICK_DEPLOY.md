# ⚡ Quick Deploy Guide

## 🎯 Fastest Way to Deploy

### Option 1: Automated Script (Recommended)

**First time only:**
```bash
npm install basic-ftp --save-dev
```

**Every deployment:**
```bash
npm run deploy
```

That's it! ✨ Your site will be built and uploaded automatically.

---

### Option 2: Manual FileZilla Upload

**Step 1:** Build the site
```bash
npm run build
```

**Step 2:** Open FileZilla and connect
- Host: `amelissa.ro`
- Username: `amelissa`
- Password: `u516l4XUtv`
- Port: `21`

**Step 3:** Upload
- Left side: Navigate to `amelissa-react/dist`
- Right side: Navigate to `public_html`
- Drag all files from dist to public_html

**Step 4:** Visit https://amelissa.ro 🎉

---

## 🔑 Quick Access

| Service | URL | Username | Password |
|---------|-----|----------|----------|
| **Live Site** | https://amelissa.ro | - | - |
| **cPanel** | https://cpanel.amelissa.ro | amelissa | u516l4XUtv |
| **FTP** | amelissa.ro:21 | amelissa | u516l4XUtv |

---

## 📝 Notes

- The `.htaccess` file is automatically included in builds (for React Router support)
- Always run `npm run build` before manual uploads
- The automated script does both build + upload in one command

For detailed instructions, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

