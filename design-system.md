# AuDRI Design System
**Audit Realtime Intelligence · v1.0 · Light Mode**

> A precise, professional system for building compliance intelligence interfaces. Dense, focused, built to communicate authority.

---

## Table of Contents

1. [Brand & Philosophy](#1-brand--philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing](#4-spacing)
5. [Border Radius](#5-border-radius)
6. [Shadows](#6-shadows)
7. [Grid & Layout](#7-grid--layout)
8. [Z-Index Stack](#8-z-index-stack)
9. [Icons](#9-icons)
10. [Animation & Motion](#10-animation--motion)
11. [Components — Buttons](#11-components--buttons)
12. [Components — Tags & Chips](#12-components--tags--chips)
13. [Components — Entry (Inputs)](#13-components--entry-inputs)
14. [Components — Controls](#14-components--controls)
15. [Components — Dropdowns](#15-components--dropdowns)
16. [Components — Toasts](#16-components--toasts)
17. [Components — Alerts](#17-components--alerts)
18. [Components — Cards & Surfaces](#18-components--cards--surfaces)
19. [Components — Data Table](#19-components--data-table)
20. [Components — Navigation](#20-components--navigation)
21. [Components — KPI / Stat Cards](#21-components--kpi--stat-cards)
22. [Line Art & Illustration](#22-line-art--illustration)
23. [Do / Don't Rules](#23-do--dont-rules)

---

## 1. Brand & Philosophy

| Property | Value |
|---|---|
| **Product** | AuDRI — Audit Realtime Intelligence |
| **Company** | Glifiq · glifiq.com |
| **Contact** | info@glifiq.com |
| **Mode** | Light only (v1.0) |
| **Primary colour** | `#F58550` (RGB 245 133 80) |
| **Tone** | Professional, precise, low-noise. Authority through restraint. **Quiet Luxury.** |

**Core principle:** Compliance software communicates trust. Every visual decision should reduce cognitive load and increase confidence. The system uses "Quiet Luxury" aesthetics—premium, understated, and high-performance—to communicate reliability. Features fluid, frame-perfect animations to guide focus without distraction.

---

## 2. Color System

### Primary — Brand Orange

| Token | Hex | Usage |
|---|---|---|
| `--color-primary` | `#F58550` | Primary actions, active states, brand emphasis |
| `--color-primary-hover` | `#E5723D` | Button hover |
| `--color-primary-active` | `#D4611E` | Button active / pressed |
| `--color-primary-subtle` | `#FDF1EA` | Tinted backgrounds, active chip fills |
| `--color-primary-muted` | `#FDDCC8` | Borders on tinted surfaces |
| `--color-primary-mid` | `#F5A07A` | Mid-ramp, gradients |

### Neutrals — Warm Gray

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#FAFAF9` | Page background |
| `--color-surface` | `#FFFFFF` | Card, input, dropdown backgrounds |
| `--color-surface-raised` | `#F5F4F2` | Hover states, table row hover, panel backgrounds |
| `--color-surface-overlay` | `#EFEFED` | Progress track, skeleton, overlay tints |
| `--color-border` | `#E8E6E2` | Default borders — dividers, input borders, card edges |
| `--color-border-strong` | `#D1CEC9` | Stronger borders — hover, focus rings |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#18171A` | All primary copy, headings, table data |
| `--color-text-secondary` | `#5C5A60` | Labels, secondary copy, nav links |
| `--color-text-tertiary` | `#9A9898` | Captions, placeholders, hints, icon default colour |
| `--color-text-disabled` | `#C4C2BE` | Disabled input placeholders |
| `--color-text-inverse` | `#FFFFFF` | Text on dark/filled surfaces |
| `--color-text-brand` | `#F58550` | Brand-coloured inline text |

### Semantic — Pastel

All semantic colours are soft/pastel to avoid alarming UIs. Each has four tones: base (icon/dot), subtle (background fill), border, text.

| Variant | Base | Subtle | Border | Text |
|---|---|---|---|---|
| **Success** | `#1E8E3E` | `#E6F4EA` | `#CEEAD6` | `#137333` |
| **Warning** | `#F9AB00` | `#FEF7E0` | `#FEEFC3` | `#915D05` |
| **Danger** | `#D93025` | `#FCE8E6` | `#FAD2CF` | `#A50E0E` |
| **Info** | `#1A73E8` | `#E8F0FE` | `#D2E3FC` | `#174EA6` |

---

## 3. Typography

### Fonts

| Role | Family | Weights used |
|---|---|---|
| **Sans** | Plus Jakarta Sans | 300, 400, 500, 600, 700 |
| **Mono** | JetBrains Mono | 300, 400, 500 |

**Load via Google Fonts:**
```
https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400;500
```

### Type Scale

| Class | Size | px | Weight | Leading | Tracking | Usage |
|---|---|---|---|---|---|---|
| `.display-xl` | 3.75rem | 60 | 600 | 1.15 | −0.03em | Hero headlines |
| `.display-lg` | 3rem | 48 | 600 | 1.15 | −0.03em | Section heroes |
| `.display-md` | 2.25rem | 36 | 600 | 1.3 | −0.02em | Large section titles |
| `.heading-xl` | 1.875rem | 30 | 600 | 1.3 | −0.02em | Page titles |
| `.heading-lg` | 1.5rem | 24 | 600 | 1.3 | −0.02em | Section headings |
| `.heading-md` | 1.25rem | 20 | 600 | 1.3 | −0.02em | Card headings |
| `.heading-sm` | 1.125rem | 18 | 600 | 1.3 | −0.01em | Sub-headings |
| `.heading-xs` | 1rem | 16 | 600 | 1.3 | −0.01em | Small headings |
| `.body-lg` | 0.875rem | 14 | 400 | 1.6 | — | Primary body copy |
| `.body-md` | 0.8125rem | 13 | 400 | 1.45 | −0.01em | Default body |
| `.body-sm` | 0.75rem | 12 | 400 | 1.45 | — | Secondary body |
| `.label-lg` | 0.75rem | 12 | 500 | — | +0.02em | Form labels, nav items |
| `.label-md` | 0.6875rem | 11 | 500 | — | +0.02em | Section sub-labels |
| `.label-sm` | 0.625rem | 10 | 600 | — | +0.08em | Uppercase caps labels |
| `.caption` | 0.6875rem | 11 | 400 | 1.45 | — | Tertiary / meta |
| `.mono` | inherited | — | 300 | — | — | JetBrains Mono, inline |
| `.mono-sm` | 0.75rem | 12 | 300 | — | — | Data values, code inline |

### Responsive Scaling

```
≤1024px  display-xl → 48px   display-lg → 36px   display-md → 30px
≤640px   display-xl → 36px   display-lg → 30px   display-md → 24px
         heading-xl → 24px   heading-lg → 20px
```

---

## 4. Spacing

Base-8 grid with additional fine-grain steps for dense UIs.

| Token | Value | Common use |
|---|---|---|
| `--space-1` | 2px | Hairline gaps, icon offsets |
| `--space-2` | 4px | Tight gaps |
| `--space-3` | 6px | Badge internal gap, chip padding |
| `--space-4` | 8px | Default small gap |
| `--space-5` | 10px | Button vertical padding |
| `--space-6` | 12px | Card internal gaps |
| `--space-7` | 14px | — |
| `--space-8` | 16px | Grid gutter, standard gap |
| `--space-10` | 20px | Section sub-gap |
| `--space-12` | 24px | Card body padding (horizontal) |
| `--space-14` | 28px | Card body padding (vertical) |
| `--space-16` | 32px | Section spacing |
| `--space-20` | 40px | Large section gap |
| `--space-24` | 48px | Section padding |
| `--space-32` | 64px | — |
| `--space-40` | 80px | Hero padding |
| `--space-48` | 96px | — |
| `--space-56` | 112px | — |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Small badges, code inline, checkbox |
| `--radius-md` | 6px | Buttons, inputs, dropdown items, nav links |
| `--radius-lg` | 8px | Cards, dropdowns, toasts, alerts, tables |
| `--radius-xl` | 12px | Larger cards, modals |
| `--radius-2xl` | 16px | Hero elements |
| `--radius-full` | 9999px | Pills, chips, toggles, avatar circles |

---

## 6. Shadows

Shadows are crisp and layered — two-layer with subtle spread.

| Token | Value | Usage |
|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.05)` | Micro elevations |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.07), 0 1px 2px rgba(0,0,0,0.04)` | Input focus halos, secondary buttons |
| `--shadow-md` | `0 4px 8px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04)` | Card hover |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)` | Dropdowns, toasts |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)` | Modals, popovers |
| `--shadow-brand` | `0 4px 16px rgba(245,133,80,0.24)` | Primary button hover |

---

## 7. Grid & Layout

### Breakpoints

| Name | Width | Columns | Gutter | Margin |
|---|---|---|---|---|
| Desktop | > 1024px | **12** | 16px | 48px |
| Tablet | 641–1024px | **8** | 16px | 24px |
| Mobile | ≤ 640px | **4** | 12px | 16px |

**Max content width:** `1280px`

### Column classes

```
Desktop:  .col-1  through  .col-12
Tablet:   .col-t-1  through  .col-t-8
Mobile:   .col-m-1  through  .col-m-4
```

**Usage pattern:**
```html
<div class="grid-container">
  <div class="grid">
    <div class="col-8 col-t-8 col-m-4"> … </div>
    <div class="col-4 col-t-8 col-m-4"> … </div>
  </div>
</div>
```

---

## 8. Z-Index Stack

| Token | Value | Usage |
|---|---|---|
| `--z-base` | 0 | Default flow |
| `--z-raised` | 10 | Cards, popped elements |
| `--z-dropdown` | 100 | Dropdown menus |
| `--z-sticky` | 200 | Sticky nav |
| `--z-overlay` | 300 | Backdrop overlays |
| `--z-modal` | 400 | Modal dialogs |
| `--z-drawer` | 401 | Contextual drawers |
| `--z-toast` | 500 | Toast notifications |

---

## 9. Icons

**Library:** Material Symbols Rounded
**Google Fonts URL:**
```
https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200
```

**Default variation settings:**
```css
font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20;
```

- FILL `0` — always unfilled / outline
- Weight `300` — light stroke, matches the type weight
- GRAD `0` — neutral gradient
- Optical size `20` — optimised for small UI sizes

### Size classes

| Class | Size | Usage |
|---|---|---|
| `.icon-sm` | 14px | Inside buttons (sm), table actions, inline text |
| `.icon-md` | 18px | Default icon size, nav items |
| `.icon-lg` | 22px | Sidebar items, prominent labels |
| `.icon-xl` | 28px | Icon showcase, alert icons |
| `.icon-2xl` | 36px | Empty states, hero icons |

### ⚠️ Known icon issues

`shield_check` — renders as **two separate glyphs** (shield + underscore + check) at weight 300 unfilled. **Do not use.** Use `security` for a shield and `check_circle` separately.

### Recommended icons for AuDRI

| Icon name | Use case |
|---|---|
| `security` | Shield / protection |
| `check_circle` | Compliance pass |
| `gavel` | Regulatory / legal |
| `fact_check` | Audit / verification |
| `policy` | SOP / policy document |
| `verified` | Certified status |
| `description` | Document / file |
| `inventory_2` | Claim file |
| `analytics` | Trend / analysis |
| `trending_up` / `trending_down` | KPI deltas |
| `rule` | Rules engine |
| `error` | Violation |
| `warning` | Risk / caution |
| `location_on` | State / jurisdiction |
| `timer` | Timeliness |
| `supervisor_account` | Supervisor approval |
| `history` | Audit trail |
| `download` | Export |
| `cloud_upload` | Upload SOP |
| `settings` | Configuration |
| `notifications` | Alerts |

---

## 10. Animation & Motion

### Duration tokens

| Token | Value | Feel |
|---|---|---|
| `--dur-instant` | 60ms | Hover states, micro-feedback |
| `--dur-fast` | 120ms | Focus rings, colour transitions |
| `--dur-snappy` | 250ms | Toast entry, quick reveals |
| `--dur-normal` | 300ms | Default transitions |
| `--dur-moderate` | 400ms | Panels entering, dropdowns, drawer slide |
| `--dur-slow` | 600ms | Large surface transitions |
| `--dur-lazy` | 800ms | Background processes, skeletons |

### Easing tokens

| Token | Curve | Use |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default for layout changes |
| `--ease-decelerate` | `cubic-bezier(0, 0, 0.2, 1)` | Standard entry |
| `--ease-accelerate` | `cubic-bezier(0.4, 0, 1, 1)` | Standard exit |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | **Premium choice** — Modal, Sidebar, Drawer entrance |
| `--ease-spring` | `cubic-bezier(0.32, 2.0, 0.44, 1)` | UI affordances — toggles, radio dots |
| `--ease-crisp` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | Smooth, soft transitions |
| `--ease-sharp` | `cubic-bezier(0.12, 0, 0.39, 0)` | Snapping |

### Keyframes defined

`fade-in`, `fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale-in`, `scale-up`, `slide-in-right`, `slide-in-left`, `slide-in-up`, `spin`, `pulse-ring`, `shimmer`, `draw-line`, `blink`

### Animation utility classes

```
.anim-fade-in     fade-in    200ms decelerate
.anim-fade-up     fade-up    300ms decelerate
.anim-fade-down   fade-down  300ms decelerate
.anim-scale-in    scale-in   300ms spring
.anim-spin        spin       1s linear infinite
```

### Stagger delay classes

`.delay-1` (60ms) → `.delay-6` (360ms) in 60ms increments.

### Motion rules

| ✅ Do | ❌ Don't |
|---|---|
| **Frame-Sync Strategy**: Wait 30ms after mount to trigger animations for frame registration | Never animate more than 3 elements simultaneously |
| **Liquid Logic**: Use non-linear scaling (0.95 → 1.02) for active indicators | Never use `bounce`, `wobble`, or playful keyframes |
| Page load: single staggered `fade-up` with 60ms increments | Never flash or repaint data abruptly |
| Hover: 60ms instant feel | Never use motion as decoration |
| Modal/Drawer entry: `out-expo` curve over 400ms | — |
| Toast: `toast-in` at 250ms, `toast-out` at 400ms | — |

---

## 11. Components — Buttons

### Base class

```css
.btn {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 10px 20px;
  font-size: 12px; font-weight: 500; letter-spacing: −0.01em;
  border-radius: 6px; border: 1.5px solid transparent;
  transition: all 120ms standard-easing;
}
```

### Types (use these — not size variants for type differentiation)

| Class | Background | Border | Text | Use when |
|---|---|---|---|---|
| `.btn-primary` | `#F58550` | `#F58550` | White | Single high-emphasis CTA per view |
| `.btn-secondary` | White | `#E8E6E2` | Primary text | Paired with primary, mid-emphasis |
| `.btn-ghost` | Transparent | Transparent | Secondary text | Tertiary actions, inline links |
| `.btn-outline` | Transparent | `#E8E6E2` | Secondary text | Filters, grouped buttons, toggleable |
| `.btn-danger` | `#FAEAEA` | Transparent | `#E06060` | Destructive — soft version |
| `.btn-danger-solid` | `#E06060` | `#E06060` | White | Irreversible destructive action |

### Size modifiers

| Class | Padding | Font | Radius | Use |
|---|---|---|---|---|
| `.btn-xs` | 4px 10px | 11px | 4px | Table row inline actions |
| `.btn-sm` | 8px 16px | 12px | 6px | Secondary toolbar actions |
| `.btn-md` | 10px 20px | 12px | 6px | **Default** — use in most places |
| `.btn-lg` | 12px 28px | 14px | 8px | Section-level actions |
| `.btn-xl` | 16px 40px | 16px | 8px | Marketing / landing CTAs only |

### Icon-only buttons

Add `.btn-icon` to any type/size combination. **Always** pair with `data-tooltip`.

```html
<button class="btn btn-secondary btn-icon btn-md" data-tooltip="Settings">
  <span class="material-symbols-rounded icon-md">settings</span>
</button>
```

### Segmented / button group

```html
<div class="btn-group" id="myGroup" style="display:flex; border:1.5px solid #E8E6E2; border-radius:6px; overflow:hidden">
  <button class="btn-group-item" data-group="myGroup" onclick="selectBtnGroup(this)">Option 1</button>
  <button class="btn-group-item active" data-group="myGroup" onclick="selectBtnGroup(this)">Option 2</button>
  <button class="btn-group-item" data-group="myGroup" onclick="selectBtnGroup(this)">Option 3</button>
</div>
```

Active item: `background: #FDF1EA`, `color: #D4611E`, `font-weight: 600`

### Disabled state

Apply `disabled` attribute + `style="opacity:0.38; cursor:not-allowed"`. Never fake disabled with CSS classes alone.

### Rules

- One `.btn-primary` per view
- Never put two icons in a button — leading icon only
- Icon size inside buttons: `.icon-sm` (14px)
- Brand CTA (`.btn-xl`) is for marketing surfaces only — never inside the app shell

---

## 12. Components — Tags & Chips

### Tags (`.tag`) — status indicators

Tags use a pure-CSS dot — no icon font dependency. Built as `<div>` to avoid inline formatting context issues.

```html
<!-- With dot -->
<div class="tag tag-success"><span class="tag-dot"></span>Compliant</div>
<div class="tag tag-danger"><span class="tag-dot"></span>Violation</div>
<div class="tag tag-warning"><span class="tag-dot"></span>Pending</div>
<div class="tag tag-info"><span class="tag-dot"></span>Under Review</div>
<div class="tag tag-brand"><span class="tag-dot"></span>New</div>
<div class="tag tag-neutral"><span class="tag-dot"></span>Closed</div>

<!-- Label only (no dot) -->
<div class="tag tag-success">Compliant</div>
```

**Anatomy:**
- Padding: `5px 10px`
- Border-radius: `6px`
- Font: 11px / 600 / 0.04em tracking / uppercase
- Dot: `6px × 6px`, `border-radius: 50%`
- Gap between dot and label: `6px`

| Class | Background | Border | Text | Dot |
|---|---|---|---|---|
| `.tag-success` | `#EBF7F1` | `#A8D8BC` | `#1F6644` | `#2EAD6A` |
| `.tag-danger` | `#FAEAEA` | `#E8AAAA` | `#7A2020` | `#D94F4F` |
| `.tag-warning` | `#FDF4E3` | `#F0CC88` | `#7A4A10` | `#E09030` |
| `.tag-info` | `#EBF1FC` | `#A4BEE8` | `#1E3F7A` | `#4A7ED4` |
| `.tag-brand` | `#FDF1EA` | `#FDDCC8` | `#A03A10` | `#F58550` |
| `.tag-neutral` | `#F5F4F2` | `#D1CEC9` | `#5C5A60` | `#9A9898` |

### Chips (`.chip`) — filter toggles

```html
<span class="chip active">
  <span class="material-symbols-rounded icon-sm">location_on</span>California
</span>
<span class="chip">Workers' Comp</span>
```

- Padding: `6px 12px`, border-radius: pill
- Default: `#FFFFFF` bg, `#E8E6E2` border, secondary text
- Active / hover: `#FDF1EA` bg, `#F58550` border, brand text
- Font: 11px / 500

---

## 13. Components — Entry (Inputs)

### Base input

```css
.input {
  padding: 10px 16px;
  border: 1.5px solid #E8E6E2;
  border-radius: 6px;
  font-size: 13px;
  transition: border-color 120ms, box-shadow 120ms;
}
.input:hover   { border-color: #D1CEC9; }
.input:focus   { border-color: #F58550; box-shadow: 0 0 0 3px rgba(245,133,80,0.12); }
.input-error   { border-color: #E06060; }
```

### Variants

| Variant | HTML | Notes |
|---|---|---|
| **Text** | `<input type="text">` | Default |
| **Search** | `<input type="search">` | Leading search icon via `.input-wrapper` |
| **Password** | `<input type="password">` | Leading lock icon + eye toggle button |
| **Textarea** | `<textarea>` | Same border/focus styles; `resize: vertical` |
| **Disabled** | `disabled` attr | `opacity: 0.45`, `cursor: not-allowed` |
| **Error** | `.input-error` class | Red border + `.input-error-msg` below |

### Input with leading icon

```html
<div class="input-wrapper">
  <span class="material-symbols-rounded input-icon icon-sm">search</span>
  <input class="input" type="search" placeholder="Search claims…">
</div>
```

Left-padding on input auto-set to `28px` to clear icon.

### Input group (label + hint)

```html
<div class="input-group">
  <label class="input-label">Claim Number</label>
  <input class="input" type="text" placeholder="…">
  <span class="input-hint">Descriptive hint text</span>
</div>
```

`.input-label`: 11px / 500 / secondary text
`.input-hint`: 11px / 400 / tertiary text
`.input-error-msg`: 11px / 400 / danger text

---

## 14. Components — Controls

### Toggle

```html
<label class="toggle">
  <input type="checkbox" checked>
  <div class="toggle-track">
    <div class="toggle-thumb"></div>
  </div>
  <span class="toggle-label">Realtime monitoring</span>
</label>
```

- Track: `32px × 18px`, `border-radius: full`
- Thumb: `10px × 10px` circle
- Off state: `#EFEFED` track, `#9A9898` thumb
- On state: `#F58550` track, `#FFFFFF` thumb
- Transition: thumb slides 14px on `--ease-spring` at 200ms

### Checkbox

```html
<label class="checkbox-wrap">
  <input type="checkbox" checked>
  <div class="checkbox-box"></div>
  <span class="body-sm">Label text</span>
</label>
```

- Box: `15px × 15px`, `border-radius: 4px`
- Checked: `#F58550` fill, white checkmark via CSS `::after`
- Unchecked: white fill, `#D1CEC9` border

### Radio

```html
<div id="myGroup">
  <label class="radio-wrap" onclick="selectRadio(this,'myGroup')">
    <div class="radio-box active"><div class="radio-dot"></div></div>
    <span class="body-sm">Option label</span>
  </label>
</div>
```

- Box: `16px × 16px` circle
- Active: `#FDF1EA` fill, `#F58550` border, dot scales in on `--ease-spring`
- Dot: `6px`, `#F58550`
- JS: `selectRadio(labelEl, groupId)` clears siblings, activates clicked

---

## 15. Components — Dropdowns

All dropdowns are custom — no native `<select>` appearance used anywhere.

### Anatomy

```html
<div class="dropdown" id="dd1">
  <button class="dropdown-trigger" onclick="toggleDD('dd1')">
    <span class="material-symbols-rounded icon-sm">location_on</span>
    <span id="dd1-label">All States</span>
    <span class="material-symbols-rounded dd-chevron icon-sm">expand_more</span>
  </button>

  <div class="dropdown-menu" id="dd1-menu">
    <div class="dd-label">Section label</div>
    <div class="dd-item active" onclick="selectDD('dd1','Option A',this)">
      <span class="material-symbols-rounded dd-icon icon-sm">check</span>
      Option A
      <span class="material-symbols-rounded dd-check icon-sm">check</span>
    </div>
    <div class="dd-separator"></div>
    <div class="dd-item danger" onclick="closeDD('dd1')">
      <span class="material-symbols-rounded dd-icon icon-sm">delete</span>
      Danger action
    </div>
  </div>
</div>
```

### States

| State | Trigger class | Menu class |
|---|---|---|
| Closed | `.dropdown-trigger` | `.dropdown-menu` (opacity 0, translateY −6px) |
| Open | `.dropdown-trigger.open` | `.dropdown-menu.open` (opacity 1, translateY 0) |

### Item types

| Class | Colour | Use |
|---|---|---|
| `.dd-item` | Primary text | Default option |
| `.dd-item.active` | Brand orange | Currently selected |
| `.dd-item.danger` | Danger red | Destructive action |

### JS API

```js
toggleDD(id)         // opens if closed, closes if open, closes all others
closeDD(id)          // explicitly closes
selectDD(id, label, el)  // updates label, sets active, closes
```

Clicks outside any dropdown automatically close all open menus.

---

## 16. Components — Toasts

Toasts use light pastel backgrounds matching semantic colour — **no dark background, no left accent bar**.

```html
<div class="toast toast-success">
  <span class="material-symbols-rounded toast-icon icon-md">check_circle</span>
  <div class="toast-content">
    <p class="toast-title">Title text</p>
    <p class="toast-body">Supporting detail</p>
  </div>
  <button><!-- close --></button>
</div>
```

### Variants

| Class | Background | Border | Text | Icon |
|---|---|---|---|---|
| `.toast-success` | `#E6F4EA` | `#CEEAD6` | `#137333` | `check_circle` |
| `.toast-error` | `#FCE8E6` | `#FAD2CF` | `#A50E0E` | `error` |
| `.toast-warning` | `#FEF7E0` | `#FEEFC3` | `#915D05` | `warning` |
| `.toast-info` | `#E8F0FE` | `#D2E3FC` | `#174EA6` | `info` |
| `.toast-neutral` | `#FFFFFF` | `#E8E6E2` | `#5C5A60` | `notifications` |

**Positioning:** fixed, `bottom: 24px`, `right: 24px`, z-index 500
**Entry:** `toast-in` (scale/fade) at 250ms snappy
**Exit:** `toast-out` (fade-and-shrink) at 400ms moderate
**Resizing:** `transition: all` @ 400ms out-expo for automatic layout adjustments
**Auto-dismiss:** 4 seconds

---

## 17. Components — Alerts

Inline alerts — for persistent contextual messages within a view.

```html
<div class="alert alert-danger">
  <span class="material-symbols-rounded">error</span>
  <div>
    <p class="alert-title">Title</p>
    <p class="body-sm">Supporting copy.</p>
  </div>
</div>
```

| Class | Background | Border | Text |
|---|---|---|---|
| `.alert-success` | `#EBF7F1` | `#A8D8BC` | `#1F6644` |
| `.alert-warning` | `#FDF4E3` | `#F0CC88` | `#7A4A10` |
| `.alert-danger` | `#FAEAEA` | `#E8AAAA` | `#7A2020` |
| `.alert-info` | `#EBF1FC` | `#A4BEE8` | `#1E3F7A` |

Padding: `16px 24px`, border-radius: `8px`, gap: `16px`

---

## 18. Components — Cards & Surfaces

```html
<!-- Base card -->
<div class="card card-body">…</div>

<!-- Hoverable card -->
<div class="card card-body card-hover">…</div>

<!-- Raised panel -->
<div class="panel">…</div>
```

| Class | Background | Border | Radius | Shadow |
|---|---|---|---|---|
| `.card` | `#FFFFFF` | `1px #E8E6E2` | 8px | None |
| `.card-hover` (hover) | — | `#D1CEC9` | — | `shadow-md` + translateY(−1px) |
| `.panel` | `#F5F4F2` | `1px #E8E6E2` | 8px | None |

### Padding

| Class | Padding |
|---|---|
| `.card-body` | `28px 32px` |
| `.card-body-sm` | `20px 24px` |

### Accordion — Collapsible Cards

Accordions are designed to look like contained cards when collapsed, providing a clean surface-based hierarchy.

| State | Background | Border | Animation |
|---|---|---|---|
| **Collapsed** | `#FFFFFF` | `#E8E6E2` | — |
| **Hover** | `#F5F4F2` header | `#D1CEC9` | `box-shadow` shift |
| **Expanded** | `#FFFFFF` (base) | `#D1CEC9` | **CSS Grid** height transition |

**Rules:**
- Content background must match header background (pure white) for a seamless look.
- Use `grid-template-rows: 0fr` to `1fr` for the expansion to avoid "dead-air" transition issues.
- Standard expansion duration: 400ms `out-expo`.

---

## 19. Components — Data Table

```html
<div class="table-wrap">
  <table>
    <thead>
      <tr><th>Claim ID</th><th>Status</th></tr>
    </thead>
    <tbody>
      <tr>
        <td><span class="mono-sm">WC-2024-00194</span></td>
        <td><div class="tag tag-danger"><span class="tag-dot"></span>Violation</div></td>
      </tr>
    </tbody>
  </table>
</div>
```

| Property | Value |
|---|---|
| Wrapper border | `1px #E8E6E2`, `border-radius: 8px`, `overflow: hidden` |
| `th` background | `#F5F4F2` |
| `th` font | 11px / 600 / tertiary text / uppercase / +0.02em |
| `th` padding | `8px 12px` |
| `td` padding | `10px 12px` |
| Row separator | `1px solid #E8E6E2` |
| Row hover | `background: #F5F4F2` |
| Numeric data | `.mono-sm` class (JetBrains Mono 12px) |
| Status column | `.tag` component |

---

## 20. Components — Navigation

### Top nav

```html
<nav class="nav-top" id="nav">
  <div class="nav-inner">
    <a class="nav-logo" href="#">…</a>
    <div class="nav-links">
      <a class="nav-link active" href="#section">Label</a>
    </div>
    <div class="nav-actions">…</div>
  </div>
</nav>
```

| Property | Value |
|---|---|
| Height | `44px` |
| Background | `rgba(250,250,249,0.88)` + `backdrop-filter: blur(12px)` |
| Border | `1px solid #E8E6E2` bottom |
| Position | `sticky`, top `0`, z-index `200` |
| Scrolled state | adds `shadow-sm` |
| Nav link padding | `6px 10px`, `border-radius: 6px` |
| Active link | `#18171A` text |

### Sidebar

| Property | Value |
|---|---|
| Width | `280px` |
| Background | `#FFFFFF` (Solid / Non-blurred) |
| Border | `1px solid #E8E6E2` right |
| Item padding | `0px` (managed by internal clickable area) |
| Active Indicator | **Liquid Logic**: `activeBg` (subtle orange) scaling 0.95 → 1.02 |
| Section label | 10px / 600 / uppercase / tertiary / monospaced |

### Drawer — Contextual Overlays

Drawers provide a premium contextual layer for detailed data review.

| Property | Value |
|---|---|
| Width | `400px` (Desktop) |
| Entrance | Slide from side (`translateX`) |
| Easing | `out-expo` (400ms) |
| Blur | `blurBackground={true}` supported on overlay |

---

## 21. Components — KPI / Stat Cards

```html
<div class="stat-card">
  <p class="stat-label">Audit Coverage</p>
  <p class="stat-value">100<span>%</span></p>
  <div class="stat-delta up">
    <span class="material-symbols-rounded icon-sm">trending_up</span>
    vs 3% manual
  </div>
  <div class="progress-track">
    <div class="progress-fill" style="width:100%"></div>
  </div>
</div>
```

| Property | Value |
|---|---|
| Padding | `28px 32px` |
| `.stat-label` | 10px / 600 / uppercase / tertiary |
| `.stat-value` | 30px / 600 / −0.03em tracking |
| `.stat-delta.up` | `#4CAF80` |
| `.stat-delta.down` | `#E06060` |
| Progress track | `4px` height, `#EFEFED` bg, `border-radius: full` |
| Progress fill | `#F58550` default; semantic colours for states |
| Fill transition | `width` 450ms decelerate |

---

## 22. Line Art & Illustration

AuDRI uses SVG line illustrations only — no raster images, no filled shapes.

### Style rules

| Property | Value |
|---|---|
| Stroke cap | `round` |
| Stroke join | `round` |
| Fill | `none` (always) |
| `vector-effect` | `non-scaling-stroke` |
| Primary stroke | `#F58550` |
| Muted stroke | `#D1CEC9` |
| Grid / structural | `#E8E6E2` |
| Text SVG | `#18171A` |

### CSS classes

| Class | Stroke | Fill |
|---|---|---|
| `.line-primary` | `#F58550` | none |
| `.line-muted` | `#D1CEC9` | none |
| `.line-text` | `#18171A` | none |
| `.line-light` | `#E8E6E2` | none |
| `.line-fill-sub` | `#FDDCC8` border | `#FDF1EA` fill |
| `.line-animated` | — | stroke-dasharray animation |

### Animated draw-on

```css
.line-animated {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw-line 1.2s cubic-bezier(0, 0, 0.2, 1) forwards;
}
```

---

## 23. Do / Don't Rules

### Colour

| ✅ Do | ❌ Don't |
|---|---|
| Use semantic colours only for their intended meaning | Use danger red for emphasis or attention |
| Keep primary orange to actions and key data points | Use orange in body copy |
| Use warm grays consistently across all surfaces | Mix cool grays with the warm palette |

### Typography

| ✅ Do | ❌ Don't |
|---|---|
| Use negative letter-spacing on headings (−0.02 to −0.03em) | Use default tracking on large display text |
| Use JetBrains Mono for all numeric data values | Use Plus Jakarta Sans for numbers in tables |
| Use `.label-sm` (uppercase caps) for section markers | Use `.label-sm` for body copy |

### Buttons

| ✅ Do | ❌ Don't |
|---|---|
| One `.btn-primary` per screen | Stack two primary buttons side by side |
| Use a single leading icon | Put icons on both sides of button text |
| Always add `data-tooltip` to icon-only buttons | Use icon-only buttons without tooltips |
| Use `.btn-danger` for confirmation-requiring actions | Use danger style for standard navigation |

### Icons

| ✅ Do | ❌ Don't |
|---|---|
| Use `security` for shield/protection concepts | Use `shield_check` (renders incorrectly at weight 300) |
| Keep all icons at weight 300, unfilled | Mix filled and unfilled icons in the same view |
| Size icons to match surrounding text scale | Use `icon-xl` icons inside buttons |

### Tags & Status

| ✅ Do | ❌ Don't |
|---|---|
| Use `.tag` divs for all status indicators | Use `<span>` with icon fonts for status (cascade issues) |
| Use the dot variant for at-a-glance scanning | Use label-only tags where dot adds meaning |
| Map one colour consistently to one state | Use different colours for the same state in different views |

### Motion

| ✅ Do | ❌ Don't |
|---|---|
| Enter elements with `fade-up` or `scale-in` | Use bounce or elastic easing — this is compliance software |
| Exit elements with accelerate easing | Animate more than 3 elements simultaneously |
| Use spring easing only for UI affordances (toggle, radio dot) | Use `--ease-spring` on page transitions |

### Layout

| ✅ Do | ❌ Don't |
|---|---|
| Respect the 12/8/4 column grid | Full-bleed elements without `grid-container` margins |
| Use `1280px` max-width on all content | Let content span edge-to-edge on wide screens |
| Use `--space-*` tokens for all spacing | Arbitrary pixel values not in the spacing scale |

---

*AuDRI Design System — v1.0 — Glifiq · glifiq.com*