"use client";

import { useState, useEffect } from "react";

// ———— Product images ————————————————————————————————————————————
// Served from /public/images/ — ship with the Next.js project.
const PRODUCT_IMG_HERO = "/images/product-clean.png";           // clean isometric product on white — main hero
const PRODUCT_IMG_CLEAN = "/images/product-clean.png";          // same clean shot — used for feature sidebar + buy bar thumb
const PRODUCT_IMG_LIFESTYLE_CAR = "/images/lifestyle-car.png";  // car dashboard lifestyle shot — anti-theft card
const PRODUCT_IMG_TRACK_ANYWHERE = "/images/track-anywhere.png";// Track Anywhere Anytime infographic — travel card
const PRODUCT_IMG_FIND_MY = "/images/never-lose.png";           // Never Lose It Again branded — peace of mind card
const PRODUCT_IMG_PACK = "/images/track-247.png";               // Track What Matters 24/7 — bundle cards
const PRODUCT_IMG_GPS_TRACKER = "/images/gps-tracker.png";      // GPS Tracker Worldwide Coverage branded infographic

// ———— Bundles ————————————————————————————————————————————————————
const BUNDLES = [
  { id: "1x", qty: 1, label: "Single", tag: "Try it out", price: 49, compareAt: 79, perUnit: 49, popular: false, shipping: "Free shipping" },
  { id: "2x", qty: 2, label: "Double Pack", tag: "Most popular", price: 79, compareAt: 158, perUnit: 39.5, popular: true, shipping: "Free shipping + priority" },
  { id: "4x", qty: 4, label: "Family Pack", tag: "Best value · save $145", price: 139, compareAt: 316, perUnit: 34.75, popular: false, shipping: "Free shipping + priority + 1 extra battery" },
];

// ———— Reviews ————————————————————————————————————————————————————
const REVIEWS = [
  { name: "Marcus T.", location: "Gold Coast, QLD", rating: 5, title: "Recovered my ute within 4 hours", body: "Had it stashed under the wheel arch. Someone tried to take the ute from a servo carpark — Find My pinged me instantly. Police had it back before lunch.", tag: "Anti-theft" },
  { name: "Sarah W.", location: "Melbourne, VIC", rating: 5, title: "Peace of mind for my mum", body: "Mum has early dementia. Slipped one in her handbag and one in the car. Can check she's home safe without calling her ten times a day. Genuinely life-changing.", tag: "Family" },
  { name: "James R.", location: "Sydney, NSW", rating: 5, title: "Airline lost my bag — I found it first", body: "Bag went to Singapore when I was flying to Perth. Told the airline exactly where it was. Had it back in 36 hours instead of a week.", tag: "Travel" },
  { name: "Priya K.", location: "Brisbane, QLD", rating: 5, title: "Magnets are no joke", body: "I was sceptical. Tested it on the underside of my car going 110 on the M1 and over speed bumps. Did not move an inch. Build quality is legit.", tag: "Build quality" },
  { name: "David L.", location: "Perth, WA", rating: 5, title: "Better than AirTag for my use case", body: "Already had AirTags but they kept falling off the bike. The magnetic clip on the NaviGuard is in a different league. No more slide-off.", tag: "vs AirTag" },
  { name: "Emma C.", location: "Adelaide, SA", rating: 5, title: "Zero setup, just works", body: "Opened it, held it near my iPhone, and it was paired in 8 seconds. No app to download. That alone is worth the money.", tag: "Easy setup" },
];

// ———— FAQ ——————————————————————————————————————————————————————
const FAQS = [
  { q: "Does NaviGuard work without a subscription?", a: "Yes. Zero monthly fees — ever. It connects directly to Apple's Find My network using your existing iPhone, iPad, or Mac. One purchase, lifetime use." },
  { q: "Do I need to download an app?", a: "No. It uses the Find My app that's already on your Apple device. Open Find My, tap 'Items', and you'll see your NaviGuard right there alongside your AirPods and other Apple devices." },
  { q: "How strong are the magnets really?", a: "Industrial-grade neodymium. Rated to hold through highway speeds, speed bumps, and rough terrain. Mounts securely to any ferrous metal surface — car chassis, bike frames, tool boxes, filing cabinets." },
  { q: "What's the battery life?", a: "Up to 12 months on a single user-replaceable CR2032 battery. You'll get a notification in Find My when it starts running low — no surprise dead trackers." },
  { q: "Is it waterproof?", a: "Rated IP67 — protected against rain, splashes, and submersion up to 1 metre for 30 minutes. Safe for outdoor gear, bikes left in the rain, and under-vehicle mounting." },
  { q: "Can I track it from anywhere in the world?", a: "Yes. Apple's Find My network has over a billion active devices globally. If any Apple device is near your NaviGuard, it anonymously reports the location to you — even on the other side of the world." },
  { q: "Does it work with Android?", a: "NaviGuard uses Apple Find My, so you'll need at least one Apple device (iPhone, iPad, or Mac) in the household to set it up and see locations. Other household members can be added via Find My sharing." },
  { q: "What's the return policy?", a: "30-day satisfaction guarantee. If it's not for you, send it back for a full refund. No questions, no restocking fees." },
  { q: "How fast is shipping to Australia?", a: "Free express shipping Australia-wide. Orders placed before 2pm AEST typically arrive within 2–4 business days." },
];

export default function Home() {
  const [selectedBundle, setSelectedBundle] = useState("2x");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [time, setTime] = useState({ h: 4, m: 37, s: 22 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 4; m = 37; s = 22; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");
  const current = BUNDLES.find((b) => b.id === selectedBundle)!;

  return (
    <main className="min-h-screen bg-bg text-text">
      {/* ════════ ANNOUNCEMENT BAR (dark) ════════ */}
      <div className="bg-bg-dark text-white text-[11px] md:text-xs font-medium tracking-wider py-2.5 overflow-hidden">
        <div className="flex whitespace-nowrap marquee gap-14">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-14 shrink-0">
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" />Free express shipping Australia-wide</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" />30-day money-back guarantee</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" />No subscription, ever</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" />12,000+ Australians protected</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-accent" />Works with Apple Find My</span>
            </div>
          ))}
        </div>
      </div>

      {/* ════════ NAV ════════ */}
      <nav className="sticky top-0 z-40 backdrop-blur-xl bg-white/85 border-b border-border">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="16" cy="16" r="6" fill="var(--accent)" />
              <circle cx="16" cy="16" r="2" fill="white" />
            </svg>
            <span className="font-extrabold text-[17px] tracking-tight">
              NaviGuard<sup className="text-accent text-[10px] ml-0.5">™</sup>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-text-soft font-medium">
            <a href="#how" className="hover:text-text transition">How it works</a>
            <a href="#compare" className="hover:text-text transition">vs AirTag</a>
            <a href="#reviews" className="hover:text-text transition">Reviews</a>
            <a href="#faq" className="hover:text-text transition">FAQ</a>
          </div>
          <a href="#buy" className="btn-primary px-4 md:px-5 py-2 rounded-lg text-[13px]">
            Shop Now
          </a>
        </div>
      </nav>

      {/* ════════ HERO (DARK — the one "wow" moment) ════════ */}
      <section className="relative overflow-hidden bg-bg-dark text-white">
        <div className="absolute inset-0 grid-pattern-dark opacity-50 pointer-events-none" />
        <div className="absolute inset-0 glow-blue pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-28 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — copy */}
          <div className="rise">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-dark bg-white/5 text-[11px] font-medium tracking-wider text-white/80 mb-7">
              <span className="radar-dot" />
              <span>Works with Apple Find My</span>
            </div>

            <h1 className="font-display font-black tracking-[-0.035em] leading-[0.94] text-[46px] sm:text-[62px] lg:text-[80px]">
              Never lose
              <br />
              <span className="font-serif italic font-normal" style={{color: '#5eb3ff'}}>what you love.</span>
            </h1>

            <p className="mt-7 text-white/70 text-lg md:text-xl max-w-lg leading-relaxed">
              The discreet magnetic tracker trusted by 12,000+ Australians. Connects directly to Apple Find My.{" "}
              <span className="text-white font-semibold">No subscription, ever.</span>
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {["No monthly fees", "12-month battery", "IP67 waterproof", "Industrial magnets"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-border-dark text-sm text-white/90">
                  <svg className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="btn-primary px-7 py-4 rounded-full text-[15px] inline-flex items-center justify-center gap-2">
                Shop Now — From $34.75
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#how" className="px-7 py-4 rounded-full border border-white/20 hover:bg-white/5 transition text-[15px] font-semibold text-center">
                How it works →
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>
                <span className="text-white font-semibold">4.8/5</span> · 2,400+ verified reviews
              </span>
            </div>
          </div>

          {/* RIGHT — product visual */}
          <div className="relative rise" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* halo */}
              <div className="absolute inset-10 rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, rgba(0,113,227,0.5) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-16 rounded-full border border-white/5" />

              {/* live indicator */}
              <div className="absolute top-[18%] right-[12%] z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-border-dark text-[11px] font-medium text-white">
                  <span className="radar-dot" />
                  Tracking · Live
                </div>
              </div>

              {/* product container */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full aspect-square rounded-3xl overflow-hidden bg-white border border-border-dark">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={PRODUCT_IMG_HERO} alt="NaviGuard tracker" className="w-full h-full object-contain p-6" />
                </div>
              </div>
            </div>

            {/* floating spec chips */}
            <div className="hidden md:flex absolute -bottom-4 -left-2 lg:left-4 items-center gap-3 bg-white/10 backdrop-blur-xl border border-border-dark rounded-xl px-4 py-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 2a8 8 0 018 8c0 5-8 12-8 12s-8-7-8-12a8 8 0 018-8z"/></svg>
              </div>
              <div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider">Accuracy</div>
                <div className="font-semibold text-white">±2 meters globally</div>
              </div>
            </div>
            <div className="hidden md:flex absolute -top-2 -right-2 lg:right-4 items-center gap-3 bg-white/10 backdrop-blur-xl border border-border-dark rounded-xl px-4 py-3 text-xs">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3v8a7 7 0 0014 0V3"/></svg>
              </div>
              <div>
                <div className="text-white/60 text-[10px] uppercase tracking-wider">Mount</div>
                <div className="font-semibold text-white">Magnetic · any metal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TRUST BAR (light) ════════ */}
      <section className="border-b border-border bg-bg-soft">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-7">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
            <div className="flex flex-wrap items-center gap-4 text-text-dim">
              <span className="text-[10px] uppercase tracking-[0.2em] text-text-faded font-semibold">As featured on</span>
              <div className="flex items-center gap-5 font-serif italic text-xl text-text">
                <span>Forbes</span>
                <span className="text-text-faded">·</span>
                <span>Men&apos;s Health</span>
                <span className="text-text-faded">·</span>
                <span>TechCrunch</span>
                <span className="text-text-faded">·</span>
                <span>Gizmodo</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-text-dim text-xs">
              <span className="radar-dot" />
              <span>
                <span className="text-text font-semibold">147 orders</span> in the last 24 hours
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PROBLEM AGITATION (light) ════════ */}
      <section className="border-b border-border py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">01 · The reality</div>
            <h2 className="font-display font-black tracking-[-0.025em] text-[38px] md:text-[56px] leading-[0.95]">
              Every 6 minutes,
              <br />
              something you own
              <br />
              <span className="font-serif italic font-normal text-text-dim">disappears forever.</span>
            </h2>
            <p className="mt-6 text-text-soft text-lg max-w-xl">
              Cars get stolen. Luggage gets lost. Kids wander. The moment you realise it&apos;s gone is the moment it&apos;s already too late — unless you&apos;re already tracking it.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {[
              { stat: "1 every 11 minutes", title: "A car is stolen in Australia", body: "Most thefts happen from driveways and carparks in under 60 seconds. Police recovery rate: 58%. With a tracker: 94%.", img: PRODUCT_IMG_LIFESTYLE_CAR, tag: "Anti-theft", imgMode: "cover" as const },
              { stat: "28 million", title: "Bags lost by airlines in 2024", body: "One in every 140 checked bags is mishandled. Some never come home. Know where yours actually is — not where the airline says it is.", img: PRODUCT_IMG_TRACK_ANYWHERE, tag: "Travel", imgMode: "contain" as const },
              { stat: "1 in 3", title: "Families with a wandering loved one", body: "Elderly parents, kids, pets. The worst kind of silence is not knowing. A tracker in a bag or pocket means you always know they're safe.", img: PRODUCT_IMG_FIND_MY, tag: "Peace of mind", imgMode: "contain" as const },
            ].map((card, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-white border border-border card-lift">
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.title}
                    className={`w-full h-full ${card.imgMode === "cover" ? "object-cover group-hover:scale-105" : "object-contain p-4"} transition duration-500`}
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur border border-border text-[10px] font-semibold uppercase tracking-wider text-accent shadow-sm">
                    {card.tag}
                  </div>
                </div>
                <div className="p-6 border-t border-border">
                  <div className="text-[11px] uppercase tracking-[0.15em] text-danger font-bold mb-2">▲ {card.stat}</div>
                  <h3 className="font-display font-bold text-xl tracking-tight mb-2 text-text">{card.title}</h3>
                  <p className="text-text-soft text-sm leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-serif italic text-2xl md:text-3xl text-text-soft max-w-2xl mx-auto">
              &ldquo;The best time to protect what matters was yesterday.
              <br />
              The second best time is <span className="text-accent not-italic font-sans font-bold">right now</span>.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ════════ HOW IT WORKS (light) ════════ */}
      <section id="how" className="border-b border-border py-20 md:py-28 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">02 · How it works</div>
            <h2 className="font-display font-black tracking-[-0.025em] text-[38px] md:text-[56px] leading-[0.95]">
              From box to tracking
              <br />
              in <span className="font-serif italic font-normal text-accent">under 60 seconds.</span>
            </h2>
            <p className="mt-6 text-text-soft text-lg">
              No app to download. No account to create. If you have an iPhone, you&apos;re already set up.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Unbox & pair", body: "Hold your NaviGuard near your iPhone. Tap 'Connect' when the popup appears. Done in 8 seconds." },
              { step: "02", title: "Mount it anywhere", body: "Industrial magnets snap securely to any metal surface. Car chassis. Bike frame. Tool box. Hidden in seconds." },
              { step: "03", title: "Track from anywhere", body: "Open Find My on your iPhone, iPad, or Mac. See exact location globally — accurate to 2 metres." },
            ].map((step, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-8 card-lift">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center text-accent font-display font-black text-xl">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight mb-3 text-text">{step.title}</h3>
                <p className="text-text-soft leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ BUY SECTION (light) ════════ */}
      <section id="buy" className="border-b border-border py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">03 · Protect your own</div>
            <h2 className="font-display font-black tracking-[-0.025em] text-[38px] md:text-[56px] leading-[0.95]">
              Pick your <span className="font-serif italic font-normal text-accent">pack.</span>
            </h2>
            <p className="mt-6 text-text-soft text-lg">
              Most customers buy two — one for the car, one for the luggage.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-danger/30 bg-danger/5">
              <span className="w-1.5 h-1.5 rounded-full bg-danger blink" />
              <span className="text-[12px] font-semibold tracking-wider text-danger">
                SALE ENDS IN {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {BUNDLES.map((bundle) => {
              const isSelected = selectedBundle === bundle.id;
              const savings = bundle.compareAt - bundle.price;
              return (
                <button
                  key={bundle.id}
                  onClick={() => setSelectedBundle(bundle.id)}
                  className={`relative text-left rounded-2xl p-6 transition-all ${
                    isSelected
                      ? "bg-white border-2 border-accent shadow-[0_20px_50px_-20px_rgba(0,113,227,0.35)]"
                      : "bg-white border-2 border-border hover:border-border-strong"
                  }`}
                >
                  {bundle.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-text-faded font-semibold mb-1">
                        {bundle.tag}
                      </div>
                      <div className="font-display font-black text-2xl tracking-tight text-text">
                        {bundle.qty}× NaviGuard
                      </div>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${isSelected ? "border-accent bg-accent" : "border-border-strong"}`}>
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="currentColor">
                          <path d="M4.5 8.5L2 6l1-1 1.5 1.5L9 2l1 1-5.5 5.5z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="relative h-36 rounded-xl overflow-hidden bg-white border border-border mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={PRODUCT_IMG_PACK} alt={`${bundle.qty} pack`} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur text-[10px] font-bold text-text shadow-sm">
                      ×{bundle.qty}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="font-display font-black text-3xl text-text">${bundle.price}</span>
                    <span className="text-text-faded line-through text-sm">${bundle.compareAt}</span>
                  </div>
                  <div className="text-text-dim text-xs mb-4">
                    ${bundle.perUnit.toFixed(2)} each · save ${savings}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-text-soft pt-3 border-t border-border">
                    <svg className="w-3.5 h-3.5 text-accent shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {bundle.shipping}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-10 max-w-5xl mx-auto rounded-2xl bg-white border border-border shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-white border border-border overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PRODUCT_IMG_CLEAN} alt="selected" className="w-full h-full object-contain p-1" />
              </div>
              <div>
                <div className="font-display font-bold text-lg text-text">
                  {current.qty}× NaviGuard — ${current.price}
                </div>
                <div className="text-text-dim text-xs flex items-center gap-3 mt-1">
                  <span className="line-through">${current.compareAt}</span>
                  <span className="text-accent font-semibold">
                    Save ${current.compareAt - current.price} ({Math.round((1 - current.price / current.compareAt) * 100)}% off)
                  </span>
                </div>
              </div>
            </div>
            <a href="#" className="btn-primary w-full md:w-auto px-8 py-4 rounded-full text-[15px] flex items-center justify-center gap-2 whitespace-nowrap">
              Add to Cart — ${current.price}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                <circle cx="7" cy="17" r="2" />
                <circle cx="15" cy="17" r="2" />
              </svg>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto text-center">
            {[
              { t: "Free Express Shipping", s: "AU-wide" },
              { t: "30-Day Guarantee", s: "Full refund" },
              { t: "Secure Checkout", s: "256-bit SSL" },
              { t: "12,000+ Customers", s: "4.8★ rated" },
            ].map((g, i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-bg-soft">
                <div className="font-semibold text-sm text-text">{g.t}</div>
                <div className="text-text-faded text-xs mt-0.5">{g.s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FEATURES (dark accent section) ════════ */}
      <section className="py-20 md:py-28 bg-bg-dark text-white">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">04 · Built different</div>
              <h2 className="font-display font-black tracking-[-0.025em] text-[40px] md:text-[56px] leading-[0.95]">
                Not another
                <br />
                <span className="font-serif italic font-normal text-white/70">AirTag clone.</span>
              </h2>
              <p className="mt-6 text-white/70 text-lg max-w-md">
                Every detail engineered for the one moment you&apos;ll actually need it — when something disappears and you need it back.
              </p>

              <div className="mt-8 aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-border-dark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PRODUCT_IMG_CLEAN} alt="NaviGuard detail" className="w-full h-full object-contain p-8" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: "Industrial magnets", desc: "Neodymium N52 — rated to hold at highway speeds. Mount under vehicles, inside tool boxes, or on any metal surface.", icon: "magnet" },
                { title: "Apple Find My", desc: "Direct integration with Apple's 1-billion-device network. No bridge apps. No lag. See exact location globally.", icon: "apple" },
                { title: "Zero subscription", desc: "No monthly fees. No premium tiers. One purchase, lifetime protection. Competitors charge $10/month — we charge $0.", icon: "dollar" },
                { title: "IP67 waterproof", desc: "Rain, mud, splashes, submerged up to 1m. Safe under vehicles, in outdoor gear, in weather most devices can't handle.", icon: "water" },
                { title: "12-month battery", desc: "User-replaceable CR2032. Find My sends you a low-battery alert — no dead trackers when you need them most.", icon: "battery" },
                { title: "Discreet matte", desc: "Non-reflective black housing. Designed to disappear. Thieves won't see it, and neither will anyone else.", icon: "eye" },
              ].map((f, i) => (
                <div key={i} className="rounded-xl border border-border-dark bg-white/[0.03] p-6 hover:bg-white/[0.06] transition">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center mb-4">
                    <FeatureIcon name={f.icon} />
                  </div>
                  <h3 className="font-display font-bold text-lg tracking-tight mb-2 text-white">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ COMPARISON (light) ════════ */}
      <section id="compare" className="border-b border-border py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">05 · Stack it up</div>
            <h2 className="font-display font-black tracking-[-0.025em] text-[38px] md:text-[56px] leading-[0.95]">
              Cheaper than AirTag.
              <br />
              <span className="font-serif italic font-normal text-text-dim">Better where it counts.</span>
            </h2>
          </div>

          <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
            <div className="grid grid-cols-[1.3fr_1fr_1fr] md:grid-cols-[1.5fr_1fr_1fr] text-sm">
              <div className="p-4 md:p-6 border-b border-border text-[10px] uppercase tracking-[0.15em] text-text-faded font-semibold">Feature</div>
              <div className="p-4 md:p-6 border-b border-l border-border bg-accent-soft relative">
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-accent text-white text-[9px] font-bold uppercase tracking-wider">Best</div>
                <div className="font-display font-black text-base text-text">NaviGuard™</div>
                <div className="text-text-dim text-xs">from $34.75</div>
              </div>
              <div className="p-4 md:p-6 border-b border-l border-border">
                <div className="font-display font-bold text-base text-text-dim">Apple AirTag</div>
                <div className="text-text-faded text-xs">$45+</div>
              </div>

              {([
                ["Apple Find My network", true, true],
                ["No subscription", true, true],
                ["Built-in magnetic mount", true, false],
                ["IP67 waterproof rating", true, true],
                ["User-replaceable battery", true, true],
                ["Discreet matte finish", true, false],
                ["Works without extra accessories", true, false],
                ["Rugged industrial housing", true, false],
                ["12,000+ AU customers", true, "–"],
                ["Free AU shipping", true, false],
              ] as [string, boolean | string, boolean | string][]).map(([label, mine, theirs], i) => (
                <div key={i} className="contents">
                  <div className="p-4 md:p-5 border-t border-border text-text-soft">{label}</div>
                  <div className="p-4 md:p-5 border-t border-l border-border bg-accent-soft/50"><Check value={mine} /></div>
                  <div className="p-4 md:p-5 border-t border-l border-border"><Check value={theirs} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <a href="#buy" className="btn-primary px-7 py-4 rounded-full text-[15px] inline-flex items-center gap-2">
              Get Mine Now
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ════════ REVIEWS (light) ════════ */}
      <section id="reviews" className="border-b border-border py-20 md:py-28 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">06 · Real Australians</div>
              <h2 className="font-display font-black tracking-[-0.025em] text-[38px] md:text-[56px] leading-[0.95]">
                2,400+ reviews.
                <br />
                <span className="font-serif italic font-normal text-text-dim">One recurring theme.</span>
              </h2>
            </div>
            <div className="flex items-center gap-5">
              <div className="text-right">
                <div className="font-display font-black text-4xl text-text">4.8<span className="text-text-faded text-xl">/5</span></div>
                <div className="flex gap-0.5 mt-1 justify-end">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-text-dim text-xs mt-1">Verified reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REVIEWS.map((review, i) => (
              <div key={i} className="rounded-2xl border border-border bg-white p-6 card-lift">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-text-faded font-bold px-2 py-0.5 rounded bg-bg-muted">
                    {review.tag}
                  </span>
                </div>
                <h4 className="font-display font-bold text-base mb-2 text-text">&ldquo;{review.title}&rdquo;</h4>
                <p className="text-text-soft text-sm leading-relaxed mb-5">{review.body}</p>
                <div className="flex items-center justify-between text-xs pt-4 border-t border-border">
                  <div>
                    <div className="font-semibold text-text">{review.name}</div>
                    <div className="text-text-faded">{review.location}</div>
                  </div>
                  <div className="flex items-center gap-1 text-success text-[10px] font-bold">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    VERIFIED
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FAQ (light) ════════ */}
      <section id="faq" className="border-b border-border py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-semibold mb-4">07 · Answers</div>
            <h2 className="font-display font-black tracking-[-0.025em] text-[38px] md:text-[56px] leading-[0.95]">
              Questions,
              <br />
              <span className="font-serif italic font-normal text-text-dim">answered.</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-xl border border-border bg-white overflow-hidden hover:border-border-strong transition">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-5 flex items-center justify-between text-left gap-4">
                  <span className="font-semibold text-base tracking-tight text-text">{faq.q}</span>
                  <span className={`w-7 h-7 shrink-0 rounded-full border flex items-center justify-center transition ${openFaq === i ? "bg-accent border-accent text-white rotate-45" : "border-border-strong text-text-dim"}`}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M7 2v10M2 7h10" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 -mt-1 text-text-soft leading-relaxed text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FINAL CTA (dark) ════════ */}
      <section className="py-24 md:py-32 bg-bg-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-dark opacity-40 pointer-events-none" />
        <div className="absolute inset-0 glow-blue pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-dark bg-white/5 text-[11px] font-medium tracking-wider text-white/80 mb-6">
            <span className="radar-dot" />
            30-Day Satisfaction Guarantee
          </div>

          <h2 className="font-display font-black tracking-[-0.03em] text-[44px] md:text-[72px] leading-[0.92]">
            Some things,
            <br />
            you can&apos;t replace.
            <br />
            <span className="font-serif italic font-normal" style={{color: '#5eb3ff'}}>Don&apos;t lose them.</span>
          </h2>
          <p className="mt-8 text-white/70 text-lg max-w-lg mx-auto">
            The cheapest insurance you&apos;ll ever buy. Before the next car gets stolen, the next flight delays your bag, or the next &ldquo;have you seen my keys&rdquo; panic — get one of these.
          </p>
          <div className="mt-10 flex justify-center">
            <a href="#buy" className="btn-primary px-8 py-5 rounded-full text-[15px] inline-flex items-center justify-center gap-2">
              Protect Mine Now — From ${BUNDLES[2].perUnit.toFixed(2)}
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="mt-6 text-white/50 text-xs tracking-wider">
            Ships same day · Free express AU shipping · 30-day returns
          </div>
        </div>
      </section>

      {/* ════════ FOOTER (light) ════════ */}
      <footer className="border-t border-border bg-bg-soft">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="var(--accent)" strokeWidth="2" />
                  <circle cx="16" cy="16" r="6" fill="var(--accent)" />
                  <circle cx="16" cy="16" r="2" fill="white" />
                </svg>
                <span className="font-extrabold text-[17px] tracking-tight text-text">
                  NaviGuard<sup className="text-accent text-[10px] ml-0.5">™</sup>
                </span>
              </div>
              <p className="text-text-soft text-sm leading-relaxed max-w-xs">
                Peace of mind in your pocket. Trusted by 12,000+ Australians to protect what matters most.
              </p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-faded font-semibold mb-4">Shop</div>
              <ul className="space-y-2 text-sm text-text-soft">
                <li><a href="#buy" className="hover:text-text transition">Single</a></li>
                <li><a href="#buy" className="hover:text-text transition">Double Pack</a></li>
                <li><a href="#buy" className="hover:text-text transition">Family Pack</a></li>
                <li><a href="#" className="hover:text-text transition">Replacement Battery</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-faded font-semibold mb-4">Support</div>
              <ul className="space-y-2 text-sm text-text-soft">
                <li><a href="#faq" className="hover:text-text transition">FAQ</a></li>
                <li><a href="#" className="hover:text-text transition">Shipping &amp; Returns</a></li>
                <li><a href="#" className="hover:text-text transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-text transition">Track Order</a></li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-faded font-semibold mb-4">Company</div>
              <ul className="space-y-2 text-sm text-text-soft">
                <li><a href="#" className="hover:text-text transition">About Us</a></li>
                <li><a href="#reviews" className="hover:text-text transition">Reviews</a></li>
                <li><a href="#" className="hover:text-text transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-text transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-text-faded">
            <div>© {new Date().getFullYear()} NaviGuard™. Apple and Find My are trademarks of Apple Inc.</div>
            <div className="flex items-center gap-3 tracking-wider">
              <span>256-bit SSL</span>
              <span>·</span>
              <span>Secure checkout</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Check({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-text-faded text-lg">—</span>;
  }
  return <span className="text-text-faded text-sm">{value}</span>;
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    magnet: (<svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 3v8a7 7 0 0014 0V3h-4v8a3 3 0 01-6 0V3H5z"/><path d="M5 3h4M15 3h4"/></svg>),
    apple: (<svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>),
    dollar: (<svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>),
    water: (<svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2s-6 7-6 12a6 6 0 0012 0c0-5-6-12-6-12z" strokeLinejoin="round"/></svg>),
    battery: (<svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M21 11v2" strokeLinecap="round"/><rect x="6" y="10" width="8" height="4" fill="currentColor"/></svg>),
    eye: (<svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" strokeLinejoin="round"/><circle cx="12" cy="12" r="3"/></svg>),
  };
  return icons[name] ?? null;
}
