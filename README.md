# NaviGuard — High-Conversion Landing Page

Next.js 16 + Tailwind v4 single-page conversion site for the NaviGuard Apple Find My magnetic tracker. Built to replace the current naviguard.store product/homepage with a custom-designed, higher-converting alternative.

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploying to Vercel

Same flow you use for your other projects:

```bash
# if you already have a repo
git init
git add .
git commit -m "initial: naviguard landing page"
git remote add origin https://github.com/aryonramos/naviguard.git
git push origin main --force

# then on vercel.com → Import Project → select repo
# (answer "n" to "Link to existing project?" to avoid overwriting anything)
```

Or deploy directly with the CLI:

```bash
rm -rf .vercel   # if redeploying to a fresh project
vercel --prod
```

## 1. Replace Product Images (2 minutes)

Open `app/page.tsx`. At the top of the file you'll see six placeholder image URLs:

```ts
const PRODUCT_IMG_HERO = "https://images.unsplash.com/...";        // main hero shot
const PRODUCT_IMG_DETAIL = "https://images.unsplash.com/...";      // feature section + buy bar thumb
const PRODUCT_IMG_LIFESTYLE_CAR = "https://images.unsplash.com/..."; // anti-theft card
const PRODUCT_IMG_LIFESTYLE_LUGGAGE = "https://images.unsplash.com/..."; // travel card
const PRODUCT_IMG_LIFESTYLE_BIKE = "https://images.unsplash.com/...";    // peace of mind card
const PRODUCT_IMG_PACK = "https://images.unsplash.com/...";         // bundle cards
```

Replace each URL with your actual NaviGuard product/lifestyle images. Two ways to get them:

**Option A — Use your live Shopify images:**
Go to naviguard.store, right-click any product image → "Copy image address". Paste into the matching constant. These are CDN-hosted on Shopify's `cdn.shopify.com` which is already whitelisted in `next.config.ts`.

**Option B — Host them yourself:**
Drop images in `public/images/` and reference as `/images/hero.jpg` etc.

## 2. Wire the Add-to-Cart Buttons to Shopify

Since you're keeping Shopify as the backend, the CTAs need to send users to your Shopify checkout. Two options:

**Option A — Direct add-to-cart link (recommended):**
Get your product variant IDs from Shopify admin → Products → NaviGuard → right-click the variant → inspect → look for `id="..."`. Then update the buttons to:

```tsx
<a href="https://naviguard.store/cart/add?id=VARIANT_ID&quantity=1" ...>
```

Or let users pick quantity via the bundle selector by passing it through:

```tsx
<a href={`https://naviguard.store/cart/add?id=VARIANT_ID&quantity=${current.qty}`} ...>
```

**Option B — Redirect to the Shopify product page:**
Just point every CTA at `https://naviguard.store/products/naviguard` and let them finish checkout on the existing Shopify flow.

Find these in `app/page.tsx`:
- `href="#buy"` — scroll-to-bundle links (keep as-is)
- `href="#"` on the main "Add to Cart" button — **replace this**
- Hero CTA `href="#buy"` — keep or replace depending on preference

## 3. Meta Pixel / Analytics

Add your Meta Pixel / GA4 / Vercel Analytics to `app/layout.tsx`:

```tsx
// inside <body>
<Script src="https://connect.facebook.net/en_US/fbevents.js" strategy="afterInteractive" />
```

Or use Vercel's built-in analytics:

```bash
npm install @vercel/analytics
```

Then add `<Analytics />` to layout.tsx.

## What's In the Page — Conversion Rationale

Every section earns its place:

| Section | Purpose |
|---|---|
| **Announcement bar** (marquee) | Establish free shipping + guarantee before user scrolls |
| **Hero** | Emotional hook ("Never lose what you love") + HUD product shot = premium feel |
| **Trust bar** | "As featured on" logos + live order counter = instant credibility |
| **Problem agitation** | 3 cards hit anti-theft / travel / family → covers every buyer archetype |
| **How it works** | 60-second setup removes friction objection |
| **Bundle selector** | 1x/2x/4x ladder with countdown = AOV boost + urgency |
| **Features grid** | 6 specific reasons to buy vs competitors |
| **Comparison table** | Direct vs AirTag — answers "why not just buy an AirTag" |
| **Reviews** | Location-tagged AU testimonials across use cases |
| **FAQ** | Kills last objections (subscription, battery, android, returns) |
| **Final CTA** | Emotional close + guarantee reminder |

## Customizing Colors / Theme

All theme colors are CSS variables in `app/globals.css`:

```css
:root {
  --accent: #e8ff3a;     /* volt yellow — swap if you want a different accent */
  --bg: #0a0a0b;          /* near-black background */
  --text: #f5f5f4;
  ...
}
```

Want to try a different accent? Common high-converting options:
- `#e8ff3a` (volt yellow — current)
- `#00ff88` (tactical green)
- `#ff4b3a` (alert red — urgency heavy)
- `#4a9eff` (trust blue)

Just swap `--accent` and `--accent-dim` and the whole site re-themes.

## Project Structure

```
app/
├── globals.css    # theme variables, fonts, animations
├── layout.tsx     # root layout + metadata
└── page.tsx       # the entire landing page (single file by design)
next.config.ts     # image domains whitelist
```

Kept as a single page file on purpose — easy to edit, one source of truth, faster to iterate on ad creatives by A/B testing headline/copy variants.

## Notes

- Countdown timer resets on page refresh (visual urgency, not real scarcity — don't promise something that isn't true in your ads)
- "147 orders in last 24 hours" is static copy; replace with a real social proof plugin if you want it live
- Reviews shown are placeholders — swap with real Trustpilot/Judge.me quotes before going live
- The "As featured on" bar is placeholder — only keep publications you've actually been featured in (FTC compliant)
