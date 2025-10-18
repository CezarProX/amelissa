# 🐙 GitHub Repository Setup Guide

## ✅ Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `amelissa`
   - **Description**: `Official website for vocal artist Amelissa - Built with React & Vite`
   - **Visibility**: Choose **Public** or **Private**
   - ⚠️ **DO NOT** check "Initialize with README" (we already have one)
   - ⚠️ **DO NOT** add .gitignore or license (already included)
3. Click **"Create repository"**

## ✅ Step 2: Push Your Code

After creating the repository on GitHub, you'll see a page with instructions. Use these commands:

### If you see "Quick setup" page:

Copy your repository URL (it will look like):
- HTTPS: `https://github.com/YOUR_USERNAME/amelissa.git`
- SSH: `git@github.com:YOUR_USERNAME/amelissa.git`

### Then run these commands:

```bash
cd "/Users/cezar/Documents/Projects/proiect mircea/amelissa-react"

# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/amelissa.git

# Push to GitHub
git push -u origin main
```

If you get an error about "main" branch, try:
```bash
git branch -M main
git push -u origin main
```

## ✅ Step 3: Verify

Visit your repository at:
```
https://github.com/YOUR_USERNAME/amelissa
```

You should see all your files! 🎉

---

## 🔐 Authentication

If GitHub asks for credentials:

### Option A: Personal Access Token (Recommended)
1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name: "Amelissa Website"
4. Check scope: `repo` (full control of private repositories)
5. Click "Generate token"
6. Copy the token (you won't see it again!)
7. Use this token as your password when pushing

### Option B: SSH Key (More secure)
1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```
2. Add to GitHub: https://github.com/settings/keys
3. Use SSH URL instead of HTTPS

---

## 📋 Quick Commands Reference

```bash
# Check current remote
git remote -v

# Add remote (HTTPS)
git remote add origin https://github.com/YOUR_USERNAME/amelissa.git

# Add remote (SSH)
git remote add origin git@github.com:YOUR_USERNAME/amelissa.git

# Push to GitHub
git push -u origin main

# Check status
git status

# View commit history
git log --oneline
```

---

## 🚀 Future Updates

After initial setup, to push new changes:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push
```

---

## 🔧 Troubleshooting

### Error: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/amelissa.git
```

### Error: "failed to push some refs"
```bash
git pull origin main --rebase
git push -u origin main
```

### Error: "Permission denied"
- Make sure you're using the correct GitHub username
- Check your authentication (token or SSH key)

---

## 📝 Notes

- Your local repository is already initialized ✅
- Initial commit is already created ✅
- All files are staged and committed ✅
- `.gitignore` is configured to exclude sensitive files ✅
- `deploy.js` with FTP credentials is excluded from Git ✅

**Next step**: Just create the GitHub repo and push! 🚀

