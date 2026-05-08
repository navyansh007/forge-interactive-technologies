# Forge Interactive — Site TODO

Pre-launch items only. Ordered by priority.

---

## 1. CONTENT (real data needed before going live)

### 1.1 Social links
`components/Footer.tsx` — LinkedIn, GitHub, and Twitter/X links use `href="#"` as placeholders.
Add real profile URLs, or remove these links entirely if the profiles don't exist yet.

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

---

## 3. UX POLISH

### 3.1 Active nav state
`components/Nav.tsx` — `pathname` is already available but not used to style the active link.
The current page should be visually distinct: `color: var(--offwhite)` on the item whose `href` matches `pathname`.

### 3.2 Service cards have no interaction
`components/Services.tsx` — cards are hoverable but clicking does nothing.
Each card should either open the Calendly popup or scroll to a relevant section.

### 3.3 Calendly embed background flash
`app/contact/CalendlyInline.tsx` — brief white flash before Calendly's dark theme applies.
Fix: set `background: "#0a0a0a"` on the wrapper div so the flash blends with the page.
