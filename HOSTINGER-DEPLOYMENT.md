# Hostinger Git Deployment Guide

## Project: elektronen-mikroskop.com

This guide provides step-by-step instructions for deploying your Next.js application to Hostinger using Git deployment.

---

## 🚀 Quick Start - Node.js Web App Deployment ✅

**CONFIRMED WORKING**: Hostinger supports Next.js via Node.js Web App deployment.

### Deployment Method: Hostinger Node.js Web App
Hostinger has a **Node.js Web App** deployment feature that:
- ✅ Supports Node.js builds
- ✅ Runs `npm run build` automatically
- ✅ Deploys static exports from the `out/` directory
- ✅ Works with Next.js static export configuration

### Quick Deployment Steps
1. Log in to Hostinger hPanel
2. Navigate to **Node.js Web App** (NOT the basic Git section)
3. Create new Node.js application
4. Configure:
   - **Repository**: `https://github.com/pepeprojects/elektronen-mikroskop.git`
   - **Branch**: `main`
   - **Build Command**: `npm run build` (standard Next.js)
   - **Output Directory**: `out/` (Next.js static export output)
   - **Node.js Version**: 20 or latest available
5. Deploy and monitor build logs
6. Visit your domain to verify

### Build Process
Hostinger automatically runs:
1. `npm install` - Installs dependencies
2. `npm run build` - Builds Next.js static site to `out/` directory
3. Serves files from `out/` directory

**No custom build script needed** - standard Next.js deployment works perfectly!

---

## ✅ Pre-Deployment Checklist

### Current Configuration Status

- ✅ **Next.js 16.1.1** with App Router
- ✅ **Static Export** configured (`output: 'export'`)
- ✅ **Images unoptimized** for static hosting
- ✅ **Trailing slashes** enabled
- ✅ **Production build tested** locally and successful
- ✅ **Git repository** pushed to GitHub (main branch)

### Build Output
- Build directory: `out/`
- Entry point: `out/index.html`
- Assets: `out/_next/`, `out/images/`, `out/favicons/`

---

## 📋 Hostinger Deployment Steps

### Step 1: Access Hostinger Git Section

1. Log in to **Hostinger Control Panel** (hPanel)
2. Navigate to **Websites** section
3. Select your website (elektronen-mikroskop.com)
4. Click **Manage**
5. In the left sidebar, search for **"Git"** or scroll to find it

### Step 2: Connect GitHub Repository

In the **"Create a New Repository"** section, configure:

#### Repository Settings:
- **Repository Address**: `https://github.com/pepeprojects/elektronen-mikroskop.git`
- **Branch**: `main`
- **Install Path**: Leave **empty** (deploys to `/public_html` root)

#### ⚠️ Important Prerequisites:
- The install path directory (`/public_html`) **must be empty**
- Delete any default files (e.g., `index.html`, placeholder pages) before deployment
- Hostinger will fail deployment if the directory contains files

### Step 3: Configure Build Process

Since Hostinger's Git deployment documentation doesn't specify Node.js build command configuration, you have **two deployment options**:

---

## 🔧 Deployment Option A: Post-Build Manual Deploy

This approach builds locally and pushes the static output. Use this if Hostinger doesn't support Node.js builds.

### A1. Create Build Branch

```bash
# Build the project locally
npm run build

# Create a deployment branch with only the static files
git checkout -b hostinger-deploy
```

### A2. Modify .gitignore for Deploy Branch

Create a temporary `.gitignore` that allows `out/` directory:

```bash
# Temporarily remove out/ from gitignore
git rm --cached .gitignore
# Create new .gitignore without out/ exclusion or commit out/ directly
```

### A3. Commit Built Files

```bash
git add out/
git commit -m "Add production build for Hostinger deployment"
git push origin hostinger-deploy
```

### A4. Deploy on Hostinger

- Use branch: `hostinger-deploy`
- Install path: `/out` (so files go to `/public_html/out`)
- Then configure Hostinger to serve from `/public_html/out`

**Note**: You'll need to rebuild and push to this branch for each deployment.

---

## 🚀 Deployment Option B: Server-Side Build ✅ CONFIGURED

**Status**: Build script ready. Requires Hostinger Node.js support confirmation.

If Hostinger supports Node.js and custom build commands:

### B1. Check Node.js Availability

Contact Hostinger support to confirm:
- Node.js version available (need v18+)
- Ability to run custom build commands
- NPM package installation support

### B2. Build Script ✅ READY

The build script has been added to `package.json`:

```json
{
  "scripts": {
    "hostinger:deploy": "npm install && npm run build && cp -r out/* ."
  }
}
```

This script:
1. Installs all npm dependencies
2. Builds the Next.js static site to `out/` directory
3. Copies all built files from `out/` to deployment root for serving

A deployment configuration file `.hostinger-deploy.json` has also been created to help Hostinger identify the build requirements.

### B3. Configure Hostinger Git Deployment

In Hostinger hPanel Git section, configure:

- **Repository URL**: `https://github.com/pepeprojects/elektronen-mikroskop.git`
- **Branch**: `main`
- **Install Path**: `/public_html` (leave empty or set to root)
- **Build Command**: `npm run hostinger:deploy` (if Hostinger allows custom commands)
- **Node.js Version**: 20 or latest available

**Note**: If Hostinger's UI doesn't have a field for build commands, the deployment may run automatically based on detecting `package.json`. Check deployment logs after first push.

---

## 🔄 Continuous Deployment Setup

### Enable Automatic Deployments

Once the repository is connected in Hostinger:

1. **Enable Auto-Deploy**: Toggle "Automatic deployment on each commit push"
2. **Webhook URL**: Copy the webhook URL provided by Hostinger
3. **GitHub Webhook** (Optional but recommended):
   - Go to your GitHub repo → Settings → Webhooks
   - Add webhook with Hostinger's URL
   - Set to trigger on `push` events to `main` (or `hostinger-deploy`)

---

## 📝 Post-Deployment Configuration

### 1. Verify File Structure

After deployment, check that files are in correct location:
```
/public_html/
├── index.html
├── _next/
├── images/
├── favicons/
├── browserconfig.xml
└── site.webmanifest
```

### 2. Configure Web Server

Ensure `.htaccess` or server config handles:

#### A. Trailing Slashes (Already configured in Next.js)
```apache
# May need to add to .htaccess if issues occur
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

#### B. 404 Error Page
```apache
ErrorDocument 404 /404.html
```

#### C. MIME Types for Modern Assets
```apache
AddType application/javascript .js .mjs
AddType text/css .css
AddType image/svg+xml .svg
```

### 3. Test Deployment

Visit your site and verify:
- ✅ Homepage loads correctly
- ✅ Logo displays (Next.js Image component)
- ✅ Beams overlay animation works (Three.js/WebGL)
- ✅ Header transparency and scroll behavior
- ✅ Source Sans 3 font loads
- ✅ All static assets load (favicons, images)
- ✅ Mobile responsive design
- ✅ 404 page works

---

## 🐛 Troubleshooting

### Issue: Build Files Not Serving

**Solution**: Verify Hostinger is pointing to correct directory
- Check if install path needs adjustment
- Ensure files are in `/public_html` root
- Verify no subfolder nesting issues

### Issue: 404 on Page Refresh

**Solution**: Configure server to handle client-side routing
- Add `.htaccess` rewrite rules (see Post-Deployment section)
- Or use Next.js `trailingSlash: true` (already configured)

### Issue: Assets Not Loading

**Solution**: Check asset paths
- Verify `basePath` in `next.config.mjs` if deploying to subdirectory
- Check browser console for 404 errors on assets
- Ensure relative paths are correct

### Issue: WebGL/Three.js Not Working

**Solution**: Check JavaScript loading
- Verify `.js` files have correct MIME type
- Check browser console for errors
- Ensure `unoptimized: true` for images (already configured)

---

## 📊 Deployment Checklist

Before going live:

- [ ] Backup current Hostinger `/public_html` directory
- [ ] Clear `/public_html` directory completely
- [ ] Set up Git repository connection in Hostinger
- [ ] Configure correct branch (`main` or `hostinger-deploy`)
- [ ] Deploy and wait for build completion
- [ ] Verify all pages load correctly
- [ ] Test on mobile devices
- [ ] Check WebGL animations work
- [ ] Verify fonts load correctly
- [ ] Test 404 error page
- [ ] Set up automatic deployments (if desired)
- [ ] Configure domain DNS (if not already done)
- [ ] Test SSL certificate

---

## 🔗 Useful Links

- [Hostinger Git Deployment Guide](https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Repository](https://github.com/pepeprojects/elektronen-mikroskop)

---

## 📞 Support

If you encounter issues:
- **Hostinger Support**: Contact via hPanel live chat or ticket system
- **Next.js Issues**: Check [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- **Build Logs**: Review Hostinger deployment logs in Git section

---

## 🎯 Recommended Approach - Node.js Web App ✅ CONFIRMED

**For elektronen-mikroskop.com**, using **Hostinger Node.js Web App deployment**:

### Deployment Successful ✅
- ✅ Node.js Web App feature confirmed working
- ✅ Standard Next.js build process (`npm run build`)
- ✅ Static export from `out/` directory
- ✅ No custom build scripts required

### Continuous Deployment Workflow
Once configured, your deployment workflow is:

1. **Make changes** to your code locally
2. **Commit changes** to git
3. **Push to GitHub**: `git push origin main`
4. **Hostinger auto-deploys**:
   - Pulls latest code from GitHub
   - Runs `npm install`
   - Runs `npm run build`
   - Serves files from `out/` directory
5. **Site is live** within minutes

### First-Time Setup (Already Complete)
- ✅ GitHub repository connected
- ✅ Node.js Web App configured
- ✅ Build command set to `npm run build`
- ✅ Output directory set to `out/`
- ✅ Deployment successful

### Post-Deployment Verification Checklist

Visit **elektronen-mikroskop.com** and verify:

**Visual Elements:**
- [ ] Homepage loads correctly
- [ ] Logo (LOGO.svg) displays in header
- [ ] Beams overlay animation works (Three.js/WebGL)
- [ ] Header transparency over Hero section
- [ ] Header transitions to solid white on scroll
- [ ] Source Sans 3 font loads correctly
- [ ] All product category icons display (Heroicons)
- [ ] Contact box displays with phone/email links

**Functionality:**
- [ ] Mobile menu hamburger works
- [ ] All internal links work
- [ ] Impressum modal opens and closes
- [ ] Click-to-call phone link works
- [ ] Mailto email link works
- [ ] Smooth scroll behavior

**Assets:**
- [ ] All favicons load (check browser tab)
- [ ] Hero background image loads (SEM_image_of_textile)
- [ ] No 404 errors in browser console
- [ ] All CSS/JS bundles load from `_next/static/`

**Mobile/Responsive:**
- [ ] Test on mobile device
- [ ] Responsive layout works
- [ ] Touch interactions work
- [ ] Animations perform smoothly

**SEO & Metadata:**
- [ ] Page title displays correctly in browser tab
- [ ] Meta description present (view source)
- [ ] Open Graph tags present
- [ ] Favicons display on all platforms

---

*Last Updated: December 25, 2025*
*Next.js Version: 16.1.1*
*Node.js Version: v20.11.0*
