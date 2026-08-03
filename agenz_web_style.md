# AGENZ — Document System Visual Style (Web / Monochrome)

A clean, modern-SaaS document system for client-facing PDFs — proposals,
quotations, invoices, contracts, meeting minutes, and reports.

This is the **operational counterpart** to `agenz_visual_style.md`. Where the V4.0
editorial system is loud, warm, and photographic (for social/brand), this system
is quiet, precise, and functional (for business documents).

> **Principle:** "Quiet confidence. Let the numbers speak."

Monochrome by design — black, white, and grey only. No color. The restraint reads
as premium and pairs cleanly with the silver chrome AGENZ mark.

---

## 1. Positioning

The document system should feel:

- clean
- precise
- premium
- trustworthy
- easy to skim
- unmistakably modern

It is **not**: decorative, colorful, playful, corporate-stiff, or template-generic.

Every document is a white page with a single black hairline bar at the top, a clear
type hierarchy, and generous whitespace. Nothing shouts.

---

## 2. Color System

Monochrome. Black + white + a short grey ramp. No accent color.

| Role | Name | Hex |
|---|---|---|
| Background | White | `#FFFFFF` |
| Ink (headings, key text) | Near-Black | `#111418` |
| Body / secondary | Slate Grey | `#586873` |
| Muted labels | Cool Grey | `#5B6870` |
| Faint (chrome, footers) | Light Grey | `#93A1A9` |
| Hairlines / borders | Line Grey | `#E6E8EA` |
| Soft fill (callouts, chips, table header) | Mist | `#F4F5F6` |
| Soft border | Mist Line | `#E2E5E7` |

**The accent is black.** The 6px top bar, section-heading marks, bullet dots, and
callout side-bars are all `#111418`. On a dark bar (invoice totals), the currency
mark flips to white for legibility.

**Strict rules**
- No color. If a document needs emphasis, use weight or the black accent, not hue.
- Never pure-black `#000` for text — use `#111418`.
- Keep the page white. No tints behind full sections; only small `#F4F5F6` cards.

---

## 3. Typography

**Geist only.** One typeface across the whole system — mixed-case headings, uppercase
micro-labels. No serif, no condensed display, no mono.

### Headings — Geist Bold, mixed case
- Cover title: ~30–33pt, weight 700, tight tracking (`-1px`), mixed case.
- Section headings (`h2`): ~15.5pt, weight 700, mixed case.
- Never all-caps for headings. The loudness comes from **size and weight**, not caps.

### Body — Geist Regular
- 10.5pt, line-height ~1.55, `#586873` for secondary / `#111418` for primary.
- Short paragraphs (2–3 lines). Skimmable over dense.

### Micro-labels — Geist, UPPERCASE, letter-spaced
- Masthead chrome, meta chips, table headers, footer, eyebrows.
- 7.5–8.5pt, `letter-spacing: 1–2px`, weight 600–700, grey.
- This is the only place text is uppercase.

Vendored fonts live in `brand/fonts/` (`Geist-Variable.ttf`).

---

## 4. Layout & Components

### Top bar (signature)
A 6px solid black bar across the very top of **every page**. The single most
recognizable element of the system.

### Masthead chrome
A thin row under the bar: brand lockup left, reference/document-id right, uppercase
letter-spaced grey. Optional chrome AGENZ mark as a small rounded badge (~24–26px)
beside the "AGENZ" wordmark, with ~9px gap.

### Cover block
Big bold mixed-case title, grey one-line subtitle, then **meta pill chips**
(`Prepared for` / `Attn` / `Date`) — rounded `#F4F5F6` chips with grey text and a
black label. Closed by a 2px black rule.

### Section headings
Each `h2` carries a short **30×3px black accent mark** directly above it — the
system's quiet "bullet." Headings never use bottom borders.

### Bullets
Custom black dot (`7px`) with a soft light-grey halo. Em-dashes are not used here
(those belong to the editorial system).

### Tables
- Rounded (`10px`), thin `#E6E8EA` border, subtle shadow for depth.
- Header row: `#F4F5F6` fill, uppercase grey micro-labels.
- Numeric columns right-align automatically; text columns stay left.
- Total row: `#F4F5F6` fill, 2px black top border, bold.
- Invoice totals use an inverted **black bar** with white figures.

### Callouts (notes)
A `#F4F5F6` card with a 3px **black left border** and rounded corners. Used for
pricing notes, disclaimers, and context. Can be pushed to the next page with top
spacing when a document needs the pricing table and its note separated.

### Timeline (phases)
Left-bordered blocks (3px black), bold phase name + uppercase duration label.

### Footer
Uppercase, letter-spaced, light-grey — sender · email · brand.

---

## 5. Pagination Rules

- Headings never strand at a page bottom (kept with the following block).
- Tables, lists, callouts, and timeline phases never split across pages.
- Orphan/widow control on all paragraphs.
- Sections can be forced to a fresh page, and notes can be pushed to the next page
  with top margin, when a document needs the breathing room.

---

## 6. Logo Usage

- The **chrome AGENZ monkey mark** (`brand/logo/agenz-mark.webp`) sits as a small
  rounded badge in the masthead, paired with the "AGENZ" wordmark.
- It is optional — many documents run wordmark-only for a cleaner header.
- The mark's own dark/metallic background reads intentionally as a premium badge on
  the white page; never stretch or recolor it.

---

## 7. When to Use Which System

| | Editorial V4.0 (`agenz_visual_style.md`) | Document System (this) |
|---|---|---|
| Canvas | Soft Ivory `#F4F1EB` | White `#FFFFFF` |
| Display | Anton, ALL-CAPS condensed | Geist, mixed-case bold |
| Accent | Denim / Sky Blue, warm | Black (monochrome) |
| Voice | Instrument Serif italic | None — sans only |
| Use for | Social, brand, pitch decks | Proposals, invoices, contracts, reports |
| Feeling | Loud, warm, photographic | Quiet, precise, premium |

---

## 8. Final Perception

A client should open the PDF and feel:

- "This is clean and serious."
- "Easy to read, nothing wasted."
- "These people are organized and premium."
- "I trust the numbers on this page."

*Taste through restraint. The black bar, the white space, and the numbers do the work.*
