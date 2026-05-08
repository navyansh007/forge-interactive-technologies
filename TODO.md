# Forge Interactive — Site TODO

Pre-launch items only. Ordered by priority.

---

## 1. CONTENT (real data needed before going live)

### 1.1 Social links
`components/Footer.tsx:30–33` — LinkedIn, GitHub, and Twitter/X links use `href="#"` as placeholders.
Add real profile URLs, or remove these links entirely if the profiles don't exist yet.

### 1.2 Team member content
`app/about/page.tsx` — three of four team slots show "Team member details coming soon."
Replace with real names, roles, and bios before launch. Navyansh Kesarwani's slot is already filled.

### 1.3 Stats numbers
`components/Stats.tsx` — current figures (47 projects, 12+ industries, 98% retention, 3× performance gain) are placeholders.
Confirm real numbers or adjust to whatever is defensible before the site goes public.

---

## 2. MISSING PAGES / FEATURES

### 2.1 OG image
`app/opengraph-image.tsx` does not exist. Without it, social link previews (Slack, Twitter, LinkedIn) will have no image.

Create using Next.js `ImageResponse`:
- Background: `#0A0A0A`
- "FORGE." wordmark centered, Space Grotesk 700
- Accent dot in orange (`#F5A623`)
- Tagline: `"Software. AI. Blockchain."`
- Size: 1200×630

Then add to `app/layout.tsx` openGraph:
```ts
images: [{ url: "/opengraph-image", width: 1200, height: 630 }]
```

### 2.2 Favicon
`app/favicon.ico` is the default Next.js favicon. Replace before launch:
- Custom mark: minimal "F" or the orange accent square
- Include: 32×32 and 16×16 ICO + `public/apple-touch-icon.png` at 180×180

---

## 3. UX POLISH

### 3.1 Active nav state
`components/Nav.tsx` — `pathname` is already available (line 28) but not used to style the active link.
The current page should be visually distinct. Suggested: `color: var(--offwhite)` on the item whose `href` matches `pathname`.

### 3.2 Proof section heading
`components/Proof.tsx` — no section label or heading above the testimonial cards.
Every other homepage section has the `// label` + heading pattern. Add:
- Label: `// What clients say`
- Heading: `"The work speaks. So do the clients."`

### 3.3 Service cards have no interaction
`components/Services.tsx` — cards are visually hoverable but clicking does nothing.
Each card should either open the Calendly popup directly, or scroll to a relevant case study.
Currently there is no `onClick` or affordance that the cards are interactive.

### 3.4 Work filter inside hero
`app/work/page.tsx` — the filter pills render inside the hero section padding, which makes the hierarchy read as part of the heading rather than a standalone control.
Move the filter bar to its own strip below the hero, separated by a `border-top: 1px solid var(--border)`.

### 3.5 Calendly embed background flash
`app/contact/CalendlyInline.tsx` — there is a brief white flash on the container before Calendly's dark `background_color` param takes effect.
Fix: add `background: "#0a0a0a"` to the wrapper div so the flash blends with the page.
