# Elevate Detailing — GitHub Pages website

A responsive, single-page static website built with HTML, CSS and vanilla JavaScript. No build step or framework is required.

## Publish with GitHub Pages
1. Create a GitHub repository (for example `elevate-detailing`).
2. Upload **all files and folders** in this project. Keep `index.html` at the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then click **Save**.
6. Wait for the Pages deployment to finish. GitHub will show the published URL in Settings → Pages.

## Before going live — important
- **Pricing:** The package cards intentionally show `From $—`. Replace with your real prices in `index.html`; do not publish placeholder pricing.
- **Package contents:** Edit the service lists to reflect what you actually provide.
- **Contact:** Replace the phone, service area, and email placeholders in `index.html`.
- **Email form:** In `script.js`, change `BUSINESS_EMAIL` to your actual business email. The form uses the visitor's email app (`mailto:`), not a database or booking system.
- **Google reviews:** Add your public Google Business Profile review URL to `GOOGLE_REVIEWS_URL` in `script.js`. The page currently does not invent or display fake customer reviews.
- **Logo:** `assets/elevate-logo.png` is the supplied logo artwork. The header uses a lightweight text emblem so the navigation remains crisp at small sizes; swap in the logo image if you prefer the full crest in the header.
- **Photos:** The sample car photography uses remote Unsplash image URLs. Replace these with your own work photos for a distinctive and trustworthy portfolio.

## Files
- `index.html` — page content and structure
- `styles.css` — responsive layout, typography and red/white/blue palette
- `script.js` — mobile navigation, package carousel, and email inquiry form
- `assets/elevate-logo.png` — logo artwork
