# Boltpoint Logistics LLC — Enterprise Logistics Portal

A production-ready, highly secure, HIPAA-compliant logistics and same-day courier company website built for **Boltpoint Logistics**. This application is engineered for speed, technical SEO performance, WCAG AA accessibility, and zero-overhead hosting costs using GitHub and Cloudflare Pages.

## Tech Stack
- **Framework**: React 18+ (SPA Architecture)
- **Bundler & Dev Server**: Vite 6+
- **Styling**: Tailwind CSS v4.0
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Technical SEO**: Dynamic head injections, JSON-LD schemas for local business, sitemap.xml, robots.txt, city-specific SEO pages.

---

## 🚀 Getting Started Locally

### Prerequisite
Ensure you have Node.js (v18+) and npm installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Launch Development Server
```bash
npm run dev
```
The application will boot on `http://localhost:3000`.

### 3. Production Build
To compile static optimized assets to the `dist/` directory:
```bash
npm run build
```

---

## ☁️ Zero-Paid Hosting Deployment (Cloudflare Pages)

Follow these steps to deploy this website directly from a GitHub repository to Cloudflare Pages for **100% free production hosting** with infinite bandwidth, edge protection, and free SSL.

### Part 1: Push Project to GitHub
1. Create a new **Public** or **Private** repository on [GitHub](https://github.com) (e.g., `boltpoint-logistics`).
2. Open your local terminal in the project root and execute:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready logistics website"
   git branch -M main
   git remote add origin https://github.com/your-username/boltpoint-logistics.git
   git push -u origin main
   ```

### Part 2: Deploy on Cloudflare Pages
1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** in the left sidebar, then click **Create Application**.
3. Go to the **Pages** tab and click **Connect to Git**.
4. Authenticate your GitHub account, select your `boltpoint-logistics` repository, and click **Begin Setup**.
5. Configure the Build Settings exactly as follows:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
6. Click **Save and Deploy**. Cloudflare will compile and host your site on a secure sub-domain (e.g., `boltpoint-logistics.pages.dev`). Every future `git push` to your main branch will automatically deploy!

---

## 🌐 Custom Domain & GoDaddy DNS Configuration

To map your custom GoDaddy domain (e.g., `boltpointlogistics.com`) directly to your free Cloudflare Pages deployment:

### Step 1: Add Custom Domain in Cloudflare
1. In your Cloudflare Pages project panel, click the **Custom Domains** tab.
2. Click **Set up a custom domain** and enter your domain name (e.g., `boltpointlogistics.com`). Click **Continue**.

### Step 2: Configure GoDaddy Name Servers (Highly Recommended)
To leverage Cloudflare's full security proxy, edge speed, and automatic SSL, point GoDaddy's Nameservers to Cloudflare:
1. Cloudflare will provide you with two secure Nameservers (e.g., `ashley.ns.cloudflare.com` and `oliver.ns.cloudflare.com`).
2. Log into your **GoDaddy Domain Portfolio**.
3. Select your domain, click **DNS**, then select the **Nameservers** tab.
4. Click **Change Nameservers** and select **I'll use my own nameservers**.
5. Paste the two Nameservers provided by Cloudflare. Click **Save** (it can take up to 4-24 hours to propagate globally).

### Step 3: Alternative CNAME Mapping (If keeping GoDaddy Nameservers)
If you prefer *not* to change nameservers and only want to point the traffic to Cloudflare:
1. Log into your **GoDaddy DNS Zone Manager**.
2. Locate the **CNAME** record with Name `www` (or add a new CNAME record).
3. Set the fields:
   - **Type**: `CNAME`
   - **Name (Host)**: `www`
   - **Value (Points to)**: `your-project-name.pages.dev` (your Cloudflare Pages sub-domain)
   - **TTL**: `1 Hour` (or Default)
4. To handle root domain requests (e.g., pointing `boltpointlogistics.com` to `www.boltpointlogistics.com`), set up a **Domain Forwarding** rule in GoDaddy pointing `http://boltpointlogistics.com` to `https://www.boltpointlogistics.com`.

---

## ♿ WCAG AA & SEO Compliance
- All images are loaded with standard descriptive `alt` tags and referral parameters.
- Text contrast conforms strictly with color visibility parameters.
- Keyboard navigation is fully supported for all menus, accordions, and interactive forms.
- Dynamic `document.title` and canonical metadata prevent double indexation issues.
