# Deployment Guide

Complete guide for deploying the Pinnacle Technologies website to production.

## Table of Contents

- [Pre-Deployment Checklist](#pre-deployment-checklist)
- [Deployment Platforms](#deployment-platforms)
- [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
- [Environment Variables](#environment-variables)
- [Custom Domain Setup](#custom-domain-setup)
- [CI/CD Pipeline](#cicd-pipeline)
- [Performance Monitoring](#performance-monitoring)
- [Rollback Procedures](#rollback-procedures)

---

## Pre-Deployment Checklist

Before deploying to production, ensure:

### Code Quality

- [ ] All tests passing (`npm run test:run`)
- [ ] No TypeScript errors (`npm run build`)
- [ ] ESLint passing (`npm run lint`)
- [ ] Code formatted (`npm run format`)

### Content Review

- [ ] All case studies reviewed for accuracy
- [ ] Client permissions verified
- [ ] "Supported via Tyler Technologies" disclaimer present where needed
- [ ] Images optimized and properly sized
- [ ] All links tested (internal and external)

### Performance

- [ ] Build completes successfully
- [ ] Bundle size under target (<200KB First Load JS)
- [ ] Images using `next/image`
- [ ] No console errors or warnings

### SEO

- [ ] Meta tags on all pages
- [ ] Structured data validated (Google Rich Results Test)
- [ ] Sitemap generated (if applicable)
- [ ] robots.txt configured

### Accessibility

- [ ] Keyboard navigation tested
- [ ] Screen reader tested
- [ ] Color contrast verified (WCAG AA)
- [ ] Focus states visible

### Security

- [ ] Security headers configured
- [ ] No sensitive data in code
- [ ] Environment variables set correctly
- [ ] CSP headers tested

---

## Deployment Platforms

### Recommended: Vercel

**Pros:**
- Built for Next.js (same company)
- Automatic deployments from Git
- Edge network with global CDN
- Automatic HTTPS
- Preview deployments for branches
- Built-in analytics

**Cons:**
- Vendor lock-in
- Pricing can scale with traffic

### Alternative: Netlify

**Pros:**
- Good Next.js support
- Generous free tier
- Form handling built-in

**Cons:**
- Not as optimized for Next.js as Vercel

### Alternative: Self-Hosted

**Pros:**
- Full control
- Potentially lower cost at scale

**Cons:**
- Requires DevOps setup
- Manual scaling
- More maintenance

---

## Vercel Deployment (Recommended)

### Initial Setup

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Link project:**
   ```bash
   vercel link
   ```

### Deploy to Production

```bash
# Deploy to production
vercel --prod
```

### Deploy Preview (Staging)

```bash
# Deploy preview (test before production)
vercel
```

### Via Git Integration (Recommended)

1. **Connect repository to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository

2. **Configure build settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Automatic deployments:**
   - Push to `main` → Production deploy
   - Push to any branch → Preview deploy
   - Pull Request → Preview deploy with comment

### Build Configuration

Vercel automatically detects Next.js, but you can customize in `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

---

## Environment Variables

### Required Variables

Currently, no environment variables are required for the site to function.

### Optional Variables

**For Formspree (Contact Form):**
```
# Not needed - configured client-side in contact page
# Update the form action URL directly in src/app/contact/page.tsx
```

**For Analytics (when added):**
```
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=pinntech.com
```

**For Sentry (when added):**
```
NEXT_PUBLIC_SENTRY_DSN=your-sentry-dsn
SENTRY_AUTH_TOKEN=your-auth-token
```

### Setting Environment Variables in Vercel

1. Go to Project Settings
2. Click "Environment Variables"
3. Add variables for:
   - Production
   - Preview
   - Development

```bash
# Or via CLI
vercel env add VARIABLE_NAME
```

---

## Custom Domain Setup

### Vercel Domain Configuration

1. **Add domain in Vercel:**
   - Project Settings → Domains
   - Add domain: `pinntech.com`
   - Add domain: `www.pinntech.com`

2. **Configure DNS:**

   **For apex domain (pinntech.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation:**
   - Usually 1-24 hours
   - Check status in Vercel dashboard

4. **SSL Certificate:**
   - Automatically provisioned by Vercel
   - Renews automatically

### Redirect Configuration

**Redirect www to apex (or vice versa):**

In `next.config.ts`:

```typescript
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.pinntech.com' }],
      destination: 'https://pinntech.com/:path*',
      permanent: true,
    },
  ]
}
```

---

## CI/CD Pipeline

### GitHub Actions (Optional)

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm run test:run

      - name: Build
        run: npm run build
```

### Vercel Build Checks

Vercel runs these automatically:
- TypeScript type checking
- Next.js build
- Deploy preview

**Configure in Vercel:**
- Settings → Git
- Enable "Build Command Override" if needed

---

## Performance Monitoring

### Vercel Analytics

**Enable in Vercel:**
1. Project Settings → Analytics
2. Enable Web Analytics (free tier)

**Metrics tracked:**
- Core Web Vitals
- Real User Monitoring (RUM)
- Page load times

### Plausible Analytics (Recommended)

**Setup:**

1. Sign up at [plausible.io](https://plausible.io)
2. Add script to `layout.tsx`:

```tsx
<script
  defer
  data-domain="pinntech.com"
  src="https://plausible.io/js/script.js"
/>
```

**Benefits:**
- Privacy-focused (no cookies)
- GDPR compliant
- Lightweight (< 1KB)

### Lighthouse CI

Run Lighthouse on every deploy:

```yaml
# In .github/workflows/ci.yml
- name: Run Lighthouse
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      https://your-preview-url.vercel.app
    uploadArtifacts: true
```

**Target Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Rollback Procedures

### Vercel Rollback

1. **Via Dashboard:**
   - Go to Deployments
   - Find last working deployment
   - Click "..." menu
   - Select "Promote to Production"

2. **Via CLI:**
   ```bash
   # List deployments
   vercel ls

   # Promote specific deployment
   vercel promote [deployment-url]
   ```

### Git Revert

```bash
# Revert last commit
git revert HEAD

# Push to trigger new deployment
git push origin main
```

### Emergency Rollback

If site is completely down:

1. **Disable automatic deployments** (Vercel settings)
2. **Manually promote last working deployment**
3. **Fix issue in separate branch**
4. **Test thoroughly**
5. **Re-enable automatic deployments**

---

## Post-Deployment Verification

After every deployment, verify:

### Functionality
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] All page routes load
- [ ] Contact form submits (if configured)
- [ ] Case studies display properly

### Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals in Vercel Analytics
- [ ] Verify page load times

### SEO
- [ ] Meta tags present
- [ ] Structured data valid (Google Rich Results Test)
- [ ] Robots.txt accessible
- [ ] Sitemap accessible (if applicable)

### Security
- [ ] HTTPS working
- [ ] Security headers present (check with securityheaders.com)
- [ ] No mixed content warnings

### Monitoring
- [ ] Analytics tracking
- [ ] Error monitoring (if Sentry enabled)
- [ ] Uptime monitoring

---

## Troubleshooting

### Build Failures

**TypeScript errors:**
```bash
# Run locally first
npm run build

# Check TypeScript errors
npx tsc --noEmit
```

**Dependency issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Deployment Issues

**Preview URL not loading:**
- Check Vercel build logs
- Verify all dependencies installed
- Check for environment variable issues

**Production deploy failed:**
- Check Git integration settings
- Verify branch protection rules
- Review Vercel deployment logs

### Performance Issues

**Slow page loads:**
- Check bundle size in build output
- Verify images are optimized
- Review network tab in DevTools

**High Core Web Vitals:**
- Check Largest Contentful Paint (LCP)
- Verify First Input Delay (FID)
- Review Cumulative Layout Shift (CLS)

---

## Maintenance

### Regular Tasks

**Weekly:**
- Check analytics for errors
- Review Core Web Vitals

**Monthly:**
- Update dependencies
- Review security advisories
- Check for broken links

**Quarterly:**
- Full accessibility audit
- Performance review
- SEO audit

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update patch versions
npm update

# Update major versions (test thoroughly!)
npm install package@latest
```

---

## Contact & Support

**Technical Issues:**
- Check Vercel status: [vercel-status.com](https://www.vercel-status.com)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

**Deployment Support:**
- Vercel support: support@vercel.com
- Internal team documentation

**Emergency Contact:**
- On-call developer (internal)
- Escalation procedures (internal)
