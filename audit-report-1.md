# AUDIT REPORT — AuDRI Design System
**Date:** 2026-04-04  
**Project:** `/lib` + `/src`  
**Auditor:** Engineering Quality Lead (AI-assisted full-pass audit)

---

## CRITICAL ISSUES _(must fix before shipping)_

---

### C-01 · ESLint is completely non-functional
**FILE:** `package.json` (root), no `.eslintrc.*` exists  
**LINE:** 9  
**SEVERITY:** critical  
**ISSUE:** `package.json` declares `"lint": "eslint . --ext ts,tsx ..."` and lists `@typescript-eslint/eslint-plugin` + `@typescript-eslint/parser` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` as devDependencies. However, there is **no ESLint configuration file** in the project root (no `.eslintrc.js`, `.eslintrc.json`, `eslint.config.js`, or `eslint` key in `package.json`). Running `npm run lint` exits with `ESLint couldn't find a configuration file`. The lint script is broken.  
**FIX:** Create `.eslintrc.json` in the project root:
```json
{
  "root": true,
  "env": { "browser": true, "es2020": true },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "ecmaVersion": "latest", "sourceType": "module" },
  "plugins": ["react-refresh"],
  "rules": {
    "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

---

### C-02 · `moduleResolution` is `"Node"` — deprecated and inconsistent with Vite
**FILE:** `tsconfig.json`  
**LINE:** 13  
**SEVERITY:** critical  
**ISSUE:** `"moduleResolution": "Node"` is the legacy Node.js 10 resolution algorithm. With `"module": "ESNext"` and Vite as the bundler, this should be `"bundler"` (TypeScript 5+) or at minimum `"node16"`. Using `"Node"` can cause subtle misresolutions of package exports fields and does not correctly model how Vite resolves modules.  
**FIX:** Change line 13:
```json
"moduleResolution": "bundler",
```
Also add `"moduleDetection": "force"` for correctness with ESNext modules.

---

### C-03 · `package.json` is missing a `typecheck` script
**FILE:** `package.json`  
**LINE:** 6–11  
**SEVERITY:** critical  
**ISSUE:** The audit spec requires `typecheck` as a named script. The current scripts are `dev`, `build`, `lint`, and `preview`. There is no way to run `tsc --noEmit` via `npm run typecheck` in CI. The `build` script runs `tsc && vite build`, but that emits files and is heavier than a bare type-check.  
**FIX:** Add to `"scripts"`:
```json
"typecheck": "tsc --noEmit"
```

---

### C-04 · `React.useId()` called conditionally in `Input.tsx` and `Textarea.tsx`
**FILE:** `lib/components/Input.tsx` · Line 30  
**FILE:** `lib/components/Textarea.tsx` · Line 24  
**SEVERITY:** critical  
**ISSUE:** Both files write `const inputId = id || React.useId()`. The `||` short-circuit means `React.useId()` is always called (it is not conditional), but relying on the right-hand operand of `||` looks like conditional hook invocation to React's linter and can confuse developers. More importantly, `React.useId` is called without importing `useId` from `react` — it is called via the `React` namespace, which works but bypasses the hooks linter because the hook isn't imported as a standalone function. The eslint-plugin-react-hooks rule (`rules-of-hooks`) will not flag this as a hook call when using the `React.useId()` namespace form; this means it won't protect against being moved inside a branch in future.  
**FIX:** Import `useId` explicitly and call it unconditionally, then use it as the fallback:
```tsx
import React, { useState, useId } from 'react';
// ...
const generatedId = useId();
const inputId = id ?? generatedId;
```

---

### C-05 · `Dropdown` has no keyboard navigation  
**FILE:** `lib/components/Dropdown.tsx`  
**SEVERITY:** critical  
**ISSUE:** The dropdown menu (`role` is absent, no `role="listbox"`) has no keyboard handling. There is no `onKeyDown` handler on the trigger button or menu items for: Arrow Down/Up to move focus between options, Enter/Space to select, Escape to close. This is a WCAG 2.1 SC 2.1.1 failure and makes the component completely inaccessible to keyboard-only users.  
**FIX:**  
1. Add `role="combobox"` (or `role="button"` + `aria-haspopup="listbox"`) to the trigger button with `aria-expanded={isOpen}`.  
2. Add `role="listbox"` to the `.menu` div.  
3. Add `role="option"` and `aria-selected` to each `.item` button.  
4. Add a `onKeyDown` handler on the container managing: `ArrowDown` → focus next item, `ArrowUp` → focus previous item, `Escape` → close, `Enter`/`Space` → select focused item.  
Example partial fix for the trigger:
```tsx
<button
  type="button"
  aria-haspopup="listbox"
  aria-expanded={isOpen}
  className={...}
  onClick={handleToggle}
  onKeyDown={handleKeyDown}
  disabled={disabled}
>
```

---

### C-06 · `Accordion` header button is missing `aria-controls`
**FILE:** `lib/components/Accordion.tsx`  
**LINE:** 22–31  
**SEVERITY:** critical  
**ISSUE:** The `<button>` has `aria-expanded` but no `aria-controls` pointing to the content panel's `id`. The content panel `div` has no `id`. This breaks the semantic association required by ARIA authoring practices for the accordion pattern.  
**FIX:**
```tsx
const panelId = React.useId();
// on the button:
aria-controls={panelId}
// on the content div:
id={panelId}
role="region"
aria-labelledby={...headingId}
```

---

### C-07 · `KanbanCard` and `NotificationItem` use `role="button"` on a `<div>` without `onKeyDown`
**FILE:** `lib/components/KanbanCard.tsx` · Line 31  
**FILE:** `lib/components/NotificationItem.tsx` · Line 37  
**SEVERITY:** critical  
**ISSUE:** Both components render a `<div role="button" tabIndex={0} onClick={...}>`. A `<div>` with `role="button"` must also handle keyboard activation (`Enter` and `Space` keys). Neither component provides an `onKeyDown` handler. This is a WCAG SC 2.1.1 failure.  
**FIX:** Either change the outer element to a native `<button>` (preferred), or add:
```tsx
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    onClick?.(id);
  }
}}
```

---

## WARNINGS _(should fix, does not block shipping)_

---

### W-01 · Cascade order in `index.css` is wrong: `tokens` before `reset`
**FILE:** `lib/styles/index.css`  
**LINE:** 1–4  
**SEVERITY:** warning  
**ISSUE:** The import order is:
```
1. tokens.css
2. reset.css
3. typography.css
4. animations.css
```
The correct order for a design system is **reset → tokens → typography → animations → component overrides**. `reset.css` comes after `tokens.css`, meaning the reset's `body { ... }` rule runs after tokens are defined, which is fine functionally here (tokens are custom properties and don't conflict), but is architecturally incorrect and misleading. The body's `background-color: var(--color-bg)` in `reset.css` correctly references the token, but if tokens were ever split or deferred, this would break.  
**FIX:** Reorder the imports:
```css
@import './reset.css';
@import './tokens.css';
@import './typography.css';
@import './animations.css';
```

---

### W-02 · Hardcoded `z-index` values not using tokens
**FILE:** `lib/components/ActivityFeed.module.css` · Line 35 (`z-index: 1`)  
**FILE:** `lib/components/DashboardLayout.module.css` · Line 33 (`z-index: 10`)  
**FILE:** `lib/components/Sidebar.module.css` · Line 10 (`z-index: 20`), Line 76 (`z-index: -1`), Line 96 (`z-index: 1`), Line 100 (`z-index: 1`)  
**FILE:** `lib/components/Stepper.module.css` · Lines 15 (`z-index: 1`), 74 (`z-index: 0`), 84 (`z-index: 0`)  
**FILE:** `lib/components/ButtonGroup.module.css` · Line 35 (`z-index: 2`)  
**FILE:** `lib/components/PipelineWorkflow.module.css` · Lines 15, 23, 104  
**FILE:** `lib/components/Avatar.module.css` · Lines 38, 64 (`z-index: 10`)  
**SEVERITY:** warning  
**ISSUE:** The token system defines `--z-base: 0`, `--z-raised: 10`, `--z-dropdown: 100`, `--z-sticky: 200`, `--z-overlay: 300`, `--z-modal: 400`, `--z-toast: 500`. Many component CSS files use raw integer z-index values (`1`, `2`, `10`, `20`, `-1`) instead of these tokens. While some of these are for internal stacking contexts (e.g., `z-index: 1` on a child within an `isolation: isolate` element is fine), the pattern is inconsistent.  
**FIX:** For high-level stacking (Sidebar at `z-index: 20`, DashboardLayout header at `z-index: 10`), replace with tokens:
- `Sidebar.module.css` line 10: `z-index: var(--z-raised);`
- `DashboardLayout.module.css` line 33: `z-index: var(--z-raised);`
Low-level internal stacking (`1`, `0`, `-1` within isolated stacking contexts) can remain as-is with a brief comment.

---

### W-03 · `Drawer` z-index uses `calc(var(--z-modal) + 1)` — needs a dedicated token
**FILE:** `lib/components/Drawer.module.css` · Line 29  
**SEVERITY:** warning  
**ISSUE:** `z-index: calc(var(--z-modal) + 1)` is a reasonable approach but is fragile — if `--z-modal` changes, the intent (drawer panel sits above its own overlay) may break. A dedicated `--z-drawer` token (e.g., `401`) would make this explicit.  
**FIX:** Add `--z-drawer: 401;` to `tokens.css` and use it here.

---

### W-04 · `Tabs.module.css` has hardcoded `#ffffff` for active pill state
**FILE:** `lib/components/Tabs.module.css` · Lines 74, 81  
**SEVERITY:** warning  
**ISSUE:** `.pill_active { background: #ffffff; }` and `.pill_active:hover { background: #ffffff; }` hardcode white instead of using `var(--color-surface)`. If the theme surface token changes (e.g., for a dark mode), these pills will break.  
**FIX:**
```css
.pill_active { background: var(--color-surface); ... }
.pill_active:hover { background: var(--color-surface); }
```

---

### W-05 · No `focus-visible` styles on any interactive component
**FILE:** All component CSS modules  
**SEVERITY:** warning  
**ISSUE:** No component (Button, Chip, Tabs, Sidebar item, Dropdown trigger, Pagination button, Stepper step, etc.) defines a `:focus-visible` CSS rule. The browser's default focus outline is suppressed by the reset (`button { ... }` in `reset.css` removes borders) and no replacement is provided. Users navigating by keyboard will see no focus ring at all on any button in the system. Only `Input` correctly defines a custom focus state (`border-color + box-shadow`).  
**FIX:** Add a global focus-visible policy to `reset.css` or `index.css`:
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
button:focus:not(:focus-visible) {
  outline: none;
}
```
Then add component-specific overrides where the generic ring doesn't look right (e.g., pill-shaped Buttons should use `border-radius: var(--radius-full)`).

---

### W-06 · `Button` and `Chip` use `!important` on active states unnecessarily
**FILE:** `lib/components/Button.module.css` · Lines 99–101  
**FILE:** `lib/components/Chip.module.css` · Lines 24–26  
**SEVERITY:** warning  
**ISSUE:** The `.btn-active` class uses `!important` on `border-color`, `background-color`, and `color`. This is an escape hatch from a specificity problem. Because `active` is applied alongside a variant class (`.btn-secondary`, `.btn-ghost`, etc.), the expected fix is increasing the active selector's specificity rather than using `!important`. Same issue in `.active` in `Chip.module.css`.  
**FIX:** Use compound selectors to win the specificity without `!important`:
```css
/* Button.module.css */
.btn.btn-active {
  border-color: var(--color-primary);
  background-color: var(--color-primary-subtle);
  color: var(--color-primary);
}
/* Chip.module.css */
.chip.active {
  background: var(--color-primary-subtle);
  border-color: var(--color-primary-muted);
  color: var(--color-primary);
}
```

---

### W-07 · `ButtonGroup.module.css` has excessive `!important` usage (11 declarations)
**FILE:** `lib/components/ButtonGroup.module.css` · Lines 2–3, 13–17, 23–25, 29–30  
**SEVERITY:** warning  
**ISSUE:** The entire `ButtonGroup.module.css` is built around fighting the Button's own styles with `!important`. There are 11 `!important` declarations. This is an architectural smell — the Button component's styles are too opinionated (hardcoded `border-radius: 28px` in `.btn`) and cannot be overridden semantically.  
Also, the `ButtonGroup.tsx` passes redundant inline styles (`style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0 }}`), duplicating what the CSS module already does.  
**FIX:** In `Button.module.css`, the base `.btn` should not hardcode `border-radius`; instead, it should set a CSS variable: `border-radius: var(--btn-radius, 28px)`. `ButtonGroup` then sets `--btn-radius: var(--radius-md)` on the container, making overrides clean without `!important`. Also remove the inline `style` prop from `ButtonGroup.tsx`.

---

### W-08 · `Spinner` redefines `@keyframes rotate` and `@keyframes dash` locally
**FILE:** `lib/components/Spinner.module.css` · Lines 15–38  
**SEVERITY:** warning  
**ISSUE:** The audit spec requires all animations to be defined in `lib/styles/animations.css` and not redefined inline in component CSS modules. `Spinner` defines two keyframes (`rotate`, `dash`) directly in its module file.  
Additionally, `Skeleton.module.css` redefines `@keyframes shimmer` (a shimmer keyframe already exists in `animations.css`).  
**FIX:** Move `@keyframes rotate` and `@keyframes dash` to `animations.css` (renamed to avoid collisions, e.g., `spinner-rotate`, `spinner-dash`). Add utility classes `.anim-spinner-rotate` and `.anim-spinner-dash`. Same for `Skeleton`'s shimmer — use the existing `@keyframes shimmer` from `animations.css` and reference it via a global class or import.

---

### W-09 · `PipelineWorkflow` redefines `@keyframes dashmove` locally
**FILE:** `lib/components/PipelineWorkflow.module.css` · Lines 122–126  
**SEVERITY:** warning  
**ISSUE:** Same as W-08. `@keyframes dashmove` is defined in the component module rather than in `animations.css`.  
**FIX:** Move to `animations.css`.

---

### W-10 · `Sidebar.module.css` has hardcoded pixel values that should use spacing tokens
**FILE:** `lib/components/Sidebar.module.css`  
**LINE:** 13 (`padding: 32px 24px 24px`), 18 (`padding: 0 12px 12px`), 24 (`margin-bottom: 24px`), 28 (`font-size: 14px; padding: 12px 16px`), 31 (`margin-bottom: 4px`), 46 (`height: 56px`), 47 (`border-radius: 28px`)  
**SEVERITY:** warning  
**ISSUE:** The Sidebar has multiple hardcoded pixel values that should reference spacing tokens (`--space-*`). For example, `32px` = `--space-16`, `24px` = `--space-12`, `12px` = `--space-6`, `16px` = `--space-8`, `4px` = `--space-2`. The `border-radius: 28px` and `height: 56px` are intentional M3-inspired choices but are duplicated — the height/radius pair should ideally be a single local variable.  
**FIX:** Replace raw pixel values with tokens where a direct match exists.

---

### W-11 · `Tag.module.css` hardcodes `#A03A10` for brand tag text colour
**FILE:** `lib/components/Tag.module.css` · Line 55  
**SEVERITY:** warning  
**ISSUE:** `color: #A03A10` is hardcoded. This should be a token (`--color-primary-text` or similar). If the primary brand colour is adjusted, this text colour won't update automatically.  
**FIX:** Add `--color-primary-text: #A03A10;` to `tokens.css` and reference it here.

---

### W-12 · `Modal` and `Drawer` title font sizes are hardcoded (`18px`, `font-weight: 700`)
**FILE:** `lib/components/Modal.module.css` · Lines 51–53  
**FILE:** `lib/components/Drawer.module.css` · Lines 56–58  
**SEVERITY:** warning  
**ISSUE:** Both hardcode `font-size: 18px; font-weight: 700` for the title. These should reference typ size tokens or at least use `rem` units. `18px` = `1.125rem` which maps to `.heading-sm` in the typography system.  
**FIX:** Remove the `font-size` and `font-weight` declarations from the CSS and apply `className="heading-sm"` to the `<h3>` in both `Modal.tsx` and `Drawer.tsx`.

---

### W-13 · `Modal` uses a hardcoded `300` in its `setTimeout` instead of referencing a constant
**FILE:** `lib/components/Modal.tsx` · Line 33  
**FILE:** `lib/components/Drawer.tsx` · Line 35  
**SEVERITY:** warning  
**ISSUE:** Both use `setTimeout(..., 300)` to match `--dur-normal`. The comment says `// match --dur-normal` but the value is a magic number. If the token value changes, this won't update.  
**FIX:** Since CSS custom properties can't be read in JS at import time, import the `durations` JS token:
```tsx
import { durations } from '@lib/tokens';
// ...
const timer = setTimeout(() => { ... }, parseInt(durations.moderate)); // 300ms
```
Or define a shared constant `TRANSITION_NORMAL_MS = 300` in `tokens.ts`.

---

### W-14 · `Dropdown` `handleSelect` logic has an inverted guard — separators can be selected
**FILE:** `lib/components/Dropdown.tsx` · Lines 62–67  
**SEVERITY:** warning  
**ISSUE:** The selection guard is:
```ts
if (option.danger || !option.separator) {
  onChange(option.value);
  setIsOpen(false);
}
```
The intent is "don't fire onChange for separators", but the condition reads: "fire if it's a danger option OR if it's not a separator". A `separator` item with `danger: false` correctly won't fire. But a `separator` item with `danger: true` **would** still fire `onChange`. The condition should simply be `if (!option.separator)`.  
**FIX:**
```ts
const handleSelect = (option: DropdownOption) => {
  if (!option.separator) {
    onChange(option.value);
    setIsOpen(false);
  }
};
```

---

### W-15 · `DonutChart` transition animates `stroke-dasharray` (a non-composited property)
**FILE:** `lib/components/DonutChart.module.css` · Line 19  
**SEVERITY:** warning  
**ISSUE:** `.indicator { transition: stroke-dasharray var(--dur-slow) var(--ease-standard); }`. Animating `stroke-dasharray` is not GPU-composited and causes paint operations on every frame. The correct approach for a donut animation is to animate `stroke-dashoffset` instead, keeping `stroke-dasharray` fixed at the circumference and only mutating `stroke-dashoffset`.  
**FIX:** In `DonutChart.tsx`, set `strokeDasharray={circumference}` (fixed) and only animate `strokeDashoffset`. In the CSS, change the transition to:
```css
.indicator { transition: stroke-dashoffset var(--dur-slow) var(--ease-standard); }
```
The component's math already computes `offset` correctly — only the CSS transition target needs to change.

---

### W-16 · `ProgressBar` animates `width` — not GPU-composited
**FILE:** `lib/components/ProgressBar.module.css` · Line 14  
**SEVERITY:** warning  
**ISSUE:** `.fill { transition: width var(--dur-slow) var(--ease-decelerate); }` — animating `width` triggers layout and paint on every frame. For a design system component that may appear many times on a dashboard, this is a performance concern.  
**FIX:** Animate `transform: scaleX(...)` instead. Set the element's `width: 100%` and use `transform-origin: left` with `scaleX(progress / 100)` driven via a CSS variable or inline style.

---

### W-17 · `LibraryPage.tsx` sidebar item has incorrect `section` value for Tags
**FILE:** `src/pages/LibraryPage.tsx` · Line 36  
**SEVERITY:** warning  
**ISSUE:** The Tags item is defined as:
```ts
{ id: 'tags', label: 'Tags & Badges', section: 'sell', icon: 'sell' }
```
The `section` field has been set to `'sell'` (the icon name) instead of `'Components'`. This causes the "Tags & Badges" item to appear under a section titled `"sell"` in the sidebar rather than under `"Components"`.  
**FIX:**
```ts
{ id: 'tags', label: 'Tags & Badges', section: 'Components', icon: 'sell' }
```

---

### W-18 · `Avatar` image has no meaningful `alt` fallback when `name` is undefined
**FILE:** `lib/components/Avatar.tsx` · Line 32  
**SEVERITY:** warning  
**ISSUE:** `<img src={src} alt={name} />` — when `name` is `undefined`, this renders `alt={undefined}`, which browsers treat as a missing `alt` attribute. Screen readers will announce the image file URL. The component API marks `name` as optional.  
**FIX:**
```tsx
<img src={src} alt={name ?? ''} className={styles.image} />
```
An empty `alt` correctly marks the image as decorative when no name is available.

---

### W-19 · No `typecheck` script + `"build"` runs `tsc` in emit mode
**FILE:** `package.json` · Line 8  
**SEVERITY:** warning  
**ISSUE:** `"build": "tsc && vite build"` — running `tsc` without `--noEmit` will try to emit `.js` output files alongside sources even though `"noEmit": true` is set in `tsconfig.json`. With `"noEmit": true`, `tsc` standalone is identical to `tsc --noEmit`, but if someone removes that flag from tsconfig in future, the build script will silently produce stale output files.  
**FIX:** Change the build script to be explicit:
```json
"build": "tsc --noEmit && vite build"
```

---

### W-20 · `Button.module.css` `.btn-brand-cta` has hardcoded `padding`, `font-size`, `height`, `border-radius`
**FILE:** `lib/components/Button.module.css` · Lines 90–94  
**SEVERITY:** warning  
**ISSUE:** `.btn-brand-cta` sets `padding: 16px 48px; font-size: 16px; height: 64px; border-radius: 32px` as hardcoded values outside the size token system. This variant bypasses the `size` prop entirely. Also, the box-shadow `0 4px 14px 0 rgba(245, 133, 80, 0.39)` is not using a shadow token.  
**FIX:** Add `--shadow-brand-cta` to `tokens.css` and replace the hardcoded shadow. The padding/height/radius values are intentional for a hero CTA but should at minimum use spacing tokens: `padding: var(--space-8) var(--space-24)`.

---

## SUGGESTIONS _(nice to have, engineering hygiene)_

---

### S-01 · No `forwardRef` on interactive primitive components
**FILE:** `lib/components/Button.tsx`, `lib/components/Input.tsx`, `lib/components/Textarea.tsx`  
**SEVERITY:** suggestion  
**ISSUE:** `Button`, `Input`, and `Textarea` are interactive primitives that consumer applications commonly need to focus programmatically or attach refs to (e.g., for form libraries). None use `React.forwardRef`. This is a design system quality expectation — it's what separates a system from a collection of components.  
**FIX:** Wrap each with `forwardRef`:
```tsx
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return <button ref={ref} ... />;
});
Button.displayName = 'Button';
```

---

### S-02 · Inconsistent boolean prop naming: `disabled` vs `isDisabled` pattern is fine, but `active` on Chip/Button is inconsistent
**FILE:** `lib/components/Button.tsx` · `active?: boolean`  
**FILE:** `lib/components/Chip.tsx` · `active?: boolean`  
**SEVERITY:** suggestion  
**ISSUE:** The codebase uses bare `disabled` (matching HTML convention, acceptable) and bare `active` (matching CSS convention). This is consistent within the library. However, `Accordion` exposes `defaultOpen` while Toggle/Checkbox/Radio expose `checked`. The internal-state vs controlled-state naming is clear. No mixed `isX`/`hasX` pattern was found — the convention is clean.

---

### S-03 · `Badge` is a pure re-export alias of `Tag` — no JSDoc, no standalone module
**FILE:** `lib/components/Badge.tsx`  
**SEVERITY:** suggestion  
**ISSUE:** `Badge.tsx` is 3 lines re-exporting `Tag` as `Badge`. This is fine architecturally, but the `lib/index.ts` then exports both `Tag` and `Badge`, which are literally the same component under two names. This may confuse consumers. Consider documenting the alias explicitly in the JSDoc.  
**FIX:** Add a comment to `Badge.tsx`:
```ts
// Badge is an alias for Tag. Use Tag for semantic status labels, Badge for counts/notification indicators.
```
And extend the `BadgeProps` separately if Badges should ever diverge (e.g., a numeric count variant).

---

### S-04 · Many components are missing JSDoc comments
**FILE:** `lib/components/Accordion.tsx`, `lib/components/Tabs.tsx`, `lib/components/Modal.tsx`, `lib/components/Drawer.tsx`, `lib/components/Breadcrumbs.tsx`, `lib/components/Pagination.tsx`, `lib/components/Stepper.tsx`, `lib/components/Avatar.tsx`, `lib/components/FileUpload.tsx`, `lib/components/RangeSlider.tsx`, `lib/components/EmptyState.tsx`, `lib/components/KanbanCard.tsx`, `lib/components/NotificationItem.tsx`, `lib/components/DashboardLayout.tsx`  
**SEVERITY:** suggestion  
**ISSUE:** Only Button, Input, Textarea, Tag, ProgressBar, StatCard, Table, Nav, Sidebar, Toast, Alert, Dropdown, Spinner, and ChipGroup have JSDoc comments. Roughly half the components are undocumented.  
**FIX:** Add a standard JSDoc block to each undocumented component above the interface definition:
```tsx
/**
 * Accordion component for collapsible content panels.
 * Uncontrolled — manages its own open/closed state via `defaultOpen`.
 */
```

---

### S-05 · `tsconfig.json` path alias `@lib` maps to `lib/index.ts` but `vite.config.ts` maps `@lib` to the `./lib` directory
**FILE:** `tsconfig.json` · Line 20  
**FILE:** `vite.config.ts` · Line 10  
**SEVERITY:** suggestion  
**ISSUE:** In `tsconfig.json`:
```json
"@lib": ["lib/index.ts"],
"@lib/*": ["lib/*"]
```
In `vite.config.ts`:
```ts
'@lib': path.resolve(__dirname, './lib'),
```
When a consumer writes `import { Button } from '@lib'`, TypeScript resolves it to `lib/index.ts` (correct). But when they write `import styles from '@lib/styles/tokens.css'`, TypeScript resolves to `lib/styles/tokens.css` via the `@lib/*` wildcard (correct). Vite resolves `@lib` to the directory, so `@lib/styles/tokens.css` → `lib/styles/tokens.css` (also correct). This is functionally aligned. However, the TypeScript alias `"@lib": ["lib/index.ts"]` (note: singular file, not a directory) means bare `@lib` imports are pinned to `lib/index.ts` in the type checker. This is correct and intentional — just note that it is slightly asymmetric from Vite's directory-level alias.  
**FIX:** No change required, but add a comment in `vite.config.ts`:
```ts
// @lib resolves to the lib/ directory; the barrel file is lib/index.ts
```

---

### S-06 · `ButtonGroup.tsx` passes redundant inline `style` prop
**FILE:** `lib/components/ButtonGroup.tsx` · Line 23  
**SEVERITY:** suggestion  
**ISSUE:** The component passes `style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 0, ...style }}` as an inline style. These properties are already defined in `ButtonGroup.module.css`. This creates double-declaration and can cause conflicts if the consumer spreads `style`.  
**FIX:** Remove the hardcoded properties from the inline style and only spread the consumer's `style`:
```tsx
<div className={clsx(styles.group, className)} style={style}>
```

---

### S-07 · `FileUpload.tsx` line 68 uses an inline `style={{ opacity: 0.5 }}` prop
**FILE:** `lib/components/FileUpload.tsx` · Line 68  
**SEVERITY:** suggestion  
**ISSUE:** `<span style={{ opacity: 0.5 }}>` — this should be a CSS class.  
**FIX:** Add `.fileMeta { opacity: 0.5; color: var(--color-text-tertiary); }` to `FileUpload.module.css`.

---

### S-08 · `PipelineWorkflow.tsx` line 118 uses a multi-property inline `style` on a JSX element
**FILE:** `lib/components/PipelineWorkflow.tsx` · Line 118  
**SEVERITY:** suggestion  
**ISSUE:** `<div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--color-text-tertiary)' }}>` — this should be a CSS module class (e.g., `.hubLabel`).  
**FIX:** Extract to `PipelineWorkflow.module.css`:
```css
.hubLabel {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-text-tertiary);
}
```

---

### S-09 · `PipelineWorkflow.module.css` hub box-shadow uses a hardcoded RGBA value
**FILE:** `lib/components/PipelineWorkflow.module.css` · Line 35  
**SEVERITY:** suggestion  
**ISSUE:** `box-shadow: 0 0 24px rgba(245, 133, 80, 0.15)` hardcodes the primary brand colour instead of referencing `var(--shadow-brand)` or a similar token.  
**FIX:** Reuse the `--shadow-brand` token or create `--shadow-brand-glow: 0 0 24px rgba(245, 133, 80, 0.15)` in `tokens.css`.

---

### S-10 · `Nav.tsx` uses index as the React `key` for links
**FILE:** `lib/components/Nav.tsx` · Line 43  
**SEVERITY:** suggestion  
**ISSUE:** `key={index}` on the mapped link anchor elements. If the `links` array is reordered, React will not correctly reconcile items.  
**FIX:** Use `link.href` or `link.label` as the key:
```tsx
<a key={link.href} ...>
```

---

### S-11 · `Tabs.module.css` has a dead comment left in production code
**FILE:** `lib/components/Tabs.module.css` · Line 71  
**SEVERITY:** suggestion  
**ISSUE:** `/* This is hard to do with just CSS on the button itself without more DOM, so I'll skip separators for now and focus on the pill geometry. */` — a developer note left in a production CSS module.  
**FIX:** Remove the comment.

---

### S-12 · `index.css` places `.material-symbols-rounded` inside a `:root {}` rule incorrectly
**FILE:** `lib/styles/index.css` · Lines 6–25  
**SEVERITY:** suggestion  
**ISSUE:** The `.material-symbols-rounded` class selector and `.icon-*` utilities are nested inside a `:root {}` block. CSS class selectors inside `:root` only match the `<html>` element's children that are direct descendants of `:root`... actually, nesting class selectors inside `:root` in standard CSS is not valid outside of CSS nesting (which `@supports selector(...)` guards for). In practice, Vite/PostCSS with CSS nesting support may handle this, but it is non-standard and could break without a PostCSS nesting plugin. The `:root {}` wrapper serves no purpose here.  
**FIX:** Move these classes to the top level:
```css
.material-symbols-rounded { ... }
.icon-sm { --icon-size: 14px; }
/* etc. */
```

---

### S-13 · `Dropdown.tsx` Separator items are rendered as `<button>` elements with an `onClick`
**FILE:** `lib/components/Dropdown.tsx` · Line 107  
**SEVERITY:** suggestion  
**ISSUE:** Separator entries are identified by `option.separator === true`. In the render loop, all non-separator, non-header items are rendered as `<button>` elements with `onClick={() => handleSelect(option)}`. Separators are already caught before this and rendered as a `<div>`. Headers are also caught. However, if a malformed `DropdownOption` lacks both `header` and `separator` but also lacks a meaningful `value` (empty string), it will still render as a clickable button calling `onChange("")`. Consider adding a runtime guard or enforcing via TypeScript discriminated unions.  
**FIX:** Use a discriminated union type for `DropdownOption`:
```ts
export type DropdownOption =
  | { kind: 'item'; value: string; label: string; icon?: string; danger?: boolean; shortcut?: string }
  | { kind: 'separator' }
  | { kind: 'header'; header: string };
```

---

### S-14 · Token duplication between `tokens.css` and `tokens.ts`
**FILE:** `lib/tokens.ts` and `lib/styles/tokens.css`  
**SEVERITY:** suggestion  
**ISSUE:** The colour, spacing, radius, shadow, duration, and easing values are defined twice — once in `tokens.css` (CSS custom properties) and once in `tokens.ts` (JS constants). These can drift. For example, `tokens.css` defines `--color-text-danger: #A50E0E` and `--color-danger-text: #A50E0E` (a duplicate!) which `tokens.ts` does not replicate. The JS tokens object also does not include `dot` colours from the semantic palettes.  
**FIX (for the duplicate):** Remove either `--color-text-danger` or `--color-danger-text` from `tokens.css` (line 44 or 45) — they are identical values. Use `--color-danger-text` consistently (matching the `success`/`warning`/`info` naming pattern).

---

### S-15 · `AnimationsSection.tsx` — `AnimBox` is a one-off component defined inline in a section file
**FILE:** `src/pages/sections/AnimationsSection.tsx` · Lines 5–20  
**SEVERITY:** suggestion  
**ISSUE:** `AnimBox` is a local component defined inside a section file. This is fine for a demo-only page, but it's the only section that does this. The rest use plain JSX. When the section is large enough to define a local component, it could be a named export within the same file or a sibling `AnimBox.tsx`.  
**FIX:** No action required — acceptable for a demo page. Document that demo-only subcomponents are permitted in `src/pages/sections/`.

---

### S-16 · Google Fonts are not loaded with `display=swap` for the icons font
**FILE:** `index.html` · Line 13  
**SEVERITY:** suggestion  
**ISSUE:** The two text font calls (line 11) use `display=swap`. However, the Material Symbols Rounded icon font (line 13) does not have `display=swap`. Icon fonts loaded without `display=swap` can cause a flash of invisible content (FOIC) while the font loads. The text that forms icons (like `sync`, `check_circle`) will be invisible for the font download duration.  
**FIX:**
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" />
```

---

### S-17 · Token deviation note: `--color-text-danger` duplicate in `tokens.css`
**FILE:** `lib/styles/tokens.css` · Lines 44–45  
**SEVERITY:** suggestion  
**ISSUE:** Lines 44 and 45 define two identical custom properties with the same value:
```css
--color-text-danger: #A50E0E;
--color-danger-text: #A50E0E;
```
`--color-text-danger` does not follow the `--color-{semantic}-{role}` namespace convention. `--color-danger-text` is consistent with `--color-success-text`, `--color-warning-text`, `--color-info-text`. The `--color-text-danger` variant appears to be a legacy alias.  
**FIX:** Remove line 44 (`--color-text-danger`). Grep the codebase to ensure no component uses `var(--color-text-danger)` — none were found in this audit.

---

## SUMMARY

| | |
|---|---|
| **Total files audited** | 91 (79 component files, 5 style files, 1 `index.ts`, 1 `tokens.ts`, 1 `index.html`, 1 `vite.config.ts`, 1 `tsconfig.json`, 1 `package.json`, 1 `App.tsx`, 1 `LibraryPage.tsx`) |
| **Critical** | 7 |
| **Warnings** | 20 |
| **Suggestions** | 17 |

---

### Overall Assessment

The AuDRI Design System is **well-structured and above average for a first-version component library**. The TypeScript coverage is comprehensive — every component has explicit interface definitions with union types for variant props, no `any` was found, and `strict: true` is enabled. The CSS token system is consistent and well-scoped; the component CSS modules correctly reference tokens for colours, spacing, radius, shadows, and animation timing throughout. The `clsx` composition pattern is applied uniformly, and the controlled component pattern (`value` + `onChange`) is consistently implemented across Toggle, Checkbox, Radio, Dropdown, RangeSlider, and Tabs.

The most significant problems are: **(1)** the ESLint config is entirely absent, meaning the lint tooling declared in `package.json` does not work at all; **(2)** keyboard accessibility is materially incomplete — no focus-visible styles exist on any button-class component, the Dropdown has no arrow-key navigation, and two components use `role="button"` on divs without keyboard handlers; **(3)** the `moduleResolution` setting in `tsconfig.json` is outdated. The animation duplication in Spinner and Skeleton module files is an architectural inconsistency worth cleaning up.

The component architecture itself is cohesive. Prop naming is consistent (`label`, `onChange`, `disabled`, `className` appear uniformly), the file naming convention (`ComponentName.tsx` / `ComponentName.module.css`) is perfectly followed across all 40 components, and the barrel export in `lib/index.ts` correctly covers every component file. The library page's intersection observer-driven sidebar is an elegant solution. Code is readable, well-decomposed, and avoids premature abstraction.
