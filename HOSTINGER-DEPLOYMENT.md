# Hostinger Git Deployment Guide

## Project: elektronen-mikroskop.com

This guide provides step-by-step instructions for deploying your Next.js application to Hostinger using Git deployment.

---

## 🚀 Quick Start - Option B (Server-Side Build)

**Your setup is configured for automatic server-side builds.**

### Prerequisites
✅ Build script added to [package.json](package.json#L11)
✅ Deployment config created: [.hostinger-deploy.json](.hostinger-deploy.json)
✅ GitHub repository ready: `https://github.com/pepeprojects/elektronen-mikroskop.git`

### Before Deploying
**IMPORTANT**: Contact Hostinger support to confirm:
- Does your hosting plan support Node.js 20+?
- Can you run custom build commands during Git deployment?

### If Node.js is Supported
1. Log in to Hostinger hPanel
2. Navigate to **Git** section
3. Click **Create New Repository**
4. Configure:
   - Repository: `https://github.com/pepeprojects/elektronen-mikroskop.git`
   - Branch: `main`
   - Install path: Leave empty (deploys to `/public_html`)
   - Build command: `npm run hostinger:deploy` (if available)
5. Click **Deploy**
6. Monitor deployment logs
7. Visit your domain to verify

### If Node.js is NOT Supported
Use **Option A** (Manual Build) - see below for instructions.

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

## 🎯 Recommended Approach

**For elektronen-mikroskop.com**, using **Option B (Server-Side Build)**:

### Setup Complete ✅
- ✅ Build script added to package.json: `npm run hostinger:deploy`
- ✅ Deployment config created: `.hostinger-deploy.json`
- ✅ Node.js version specified: v20

### Next Steps for Deployment:

1. **Contact Hostinger Support First** (CRITICAL):
   - Ask: "Does my hosting plan support Node.js 20+ for Git deployments?"
   - Ask: "Can I run custom build commands during Git deployment?"
   - If YES → Continue with Option B below
   - If NO → Use Option A (Manual Build) instead

2. **If Hostinger Supports Node.js** - Follow Option B instructions
3. **If Not Supported** - Follow Option A instructions

### Deployment Workflow:
1. Push changes to `main` branch on GitHub
2. Hostinger automatically pulls latest code
3. Runs `npm run hostinger:deploy` (installs dependencies + builds + copies files)
4. Site is live with latest changes

---

*Last Updated: December 25, 2025*
*Next.js Version: 16.1.1*
*Node.js Version: v20.11.0*
