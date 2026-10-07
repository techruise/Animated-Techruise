# 🚀 Vercel Deployment Checklist

## ✅ Production Readiness (Complete)

- ✅ TypeScript: Zero errors (`npx tsc --noEmit`)
- ✅ Production build: Passes cleanly (`npm run build`)
- ✅ All routes: Static generation working (/, /contact, /404)
- ✅ No hardcoded paths: No Windows paths or localhost references
- ✅ 3D components: All use `dynamic` with `ssr: false`
- ✅ Metadata: `metadataBase` set with `NEXT_PUBLIC_SITE_URL`
- ✅ Favicon: Added to `/public/favicon.ico`
- ✅ Scripts: Correct dev, build, start, lint
- ✅ Node version: Engines field set to `>=18.17.0`
- ✅ Dependencies: All production deps installed, package-lock.json in sync

---

## 📦 Files Created/Updated

- ✅ `.gitignore` — Excludes node_modules, .next, .env*, logs
- ✅ `.env.example` — Template for NEXT_PUBLIC_SITE_URL
- ✅ `README.md` — Complete setup and deployment guide
- ✅ `package.json` — Fixed lint script, added engines field
- ✅ `app/layout.tsx` — Added metadataBase with env variable

---

## 🔐 Security Check

- ✅ No `.env` files tracked (only `.env.example`)
- ✅ No API keys or secrets in code
- ✅ `.gitignore` properly configured

---

## 📋 Manual GitHub Setup Steps

Since Git and GitHub CLI are not installed on your system, follow these steps:

### 1. Install Git (if needed)
Download from: https://git-scm.com/download/win

Or use winget:
```powershell
winget install --id Git.Git -e --source winget
```

### 2. Initialize Git Repository
Open a new terminal/PowerShell window in the project folder:

```bash
cd "C:\Users\Ali Hunain\Documents\Projects\techruise-website"

# Initialize git
git init

# Set default branch to main
git branch -M main

# Add all files
git add .

# First commit
git commit -m "Initial commit: Techruise premium 3D website"
```

### 3. Create GitHub Repository

**Option A: Via GitHub.com (Recommended)**
1. Go to https://github.com/new
2. Repository name: `techruise-website`
3. Description: "Premium 3D AI SaaS marketing website built with Next.js, Three.js, and Tailwind CSS"
4. Visibility: Choose **Public** or **Private**
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

**Option B: Via GitHub CLI (if you install it later)**
```bash
gh repo create techruise-website --public --source=. --remote=origin --push
```

### 4. Push to GitHub

After creating the repo on GitHub.com, run:

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/techruise-website.git

# Push code
git push -u origin main
```

---

## 🚢 Deploy to Vercel

### Step 1: Import Project
1. Go to https://vercel.com/new
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your `techruise-website` repository
4. Vercel will auto-detect Next.js framework

### Step 2: Configure Build Settings
Vercel auto-fills these (no changes needed):
- **Framework Preset:** Next.js
- **Build Command:** `next build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

### Step 3: Add Environment Variable
1. Expand **"Environment Variables"** section
2. Add:
   - **Key:** `NEXT_PUBLIC_SITE_URL`
   - **Value:** `https://techruise-website.vercel.app` (or your custom domain)
   - **Environment:** Production, Preview, Development (select all)

### Step 4: Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. Visit your live site! 🎉

---

## 🌐 Add Custom Domain (Optional)

After successful deployment:

1. Go to your project dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., `techruise.com`)
4. Follow Vercel's DNS instructions
5. Update environment variable:
   - Change `NEXT_PUBLIC_SITE_URL` to `https://techruise.com`
   - Redeploy

---

## 🔄 Future Updates

To deploy updates:

```bash
# Make changes to your code
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel automatically redeploys on every push to `main`.

---

## ✅ Final Verification

Before deploying, verify locally:

```bash
# Clean build test
rm -rf .next node_modules
npm install
npm run build
npm start
# → Visit http://localhost:3000
```

If localhost:3000 works perfectly, Vercel deployment will work!

---

## 📞 Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com

---

**Current Status:** ✅ Ready for GitHub and Vercel deployment
**Next Step:** Initialize git and push to GitHub (see steps above)
