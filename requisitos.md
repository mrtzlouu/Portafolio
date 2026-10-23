# Lourdes Escobar Portfolio — Reference-Faithful Implementation Specification

**Target implementation:** React + TypeScript  
**Primary visual reference:** `Grabación de pantalla 2026-10-21 201131.mp4` (39.2-second desktop recording, 1910 × 896)  
**Document purpose:** Rebuild the portfolio shown in the recording as faithfully as possible, while delivering a maintainable, accessible, responsive, production-ready website.

> **Highest-priority requirement:** The supplied video is the visual and behavioral source of truth. Do not replace the reference with a generic portfolio template or introduce a substantially different art direction. When this document gives recommended implementation details, those recommendations must not override what is visibly demonstrated in the recording.

## 1. Evidence and scope

### 1.1 Confirmed from the supplied recording

- A light, lavender/blue-toned visual system with white surfaces, restrained violet accents, soft atmospheric circles, and gentle gradients.
- A compact fixed/sticky-looking top bar, with a monogram/identity on the left, a centered pill-shaped section navigation, and controls on the right.
- A brief branded loading/intro state showing the monogram, full name, a `PORTFOLIO` descriptor, and progress-like feedback.
- A two-column landing hero: large name/introduction and CTAs on the left, a floating code-editor-inspired visual on the right.
- A short About/positioning section with the prominent heading **“Tecnología, datos y una perspectiva de negocio.”** and three topical feature cards.
- A **“Proyectos destacados”** section with large horizontal image/text project cards, a numeric slide indicator, and previous/next controls.
- A **Tech Stack** section using a two-column grid of four white cards, each featuring a heading, description, technology icons, and small tags.
- A **“Credenciales”** section rendered as a vertical timeline/list of pill-like credential rows, each with an icon, title, supplementary information, a category badge, and a trailing chevron.
- A centered contact callout titled **“¿Construimos algo juntos?”**, CTA buttons, three compact contact-info tiles beneath, and a minimal footer.
- A visible `ES / EN` language control, a theme-style icon control, and a rightmost `Contactar` button.
- Rounded corners, extremely restrained shadows/borders, generous whitespace, dark navy headings, tiny section eyebrow labels, and subtle decorative geometry.

### 1.2 Not established by the recording

The video does **not** prove the original implementation framework, exact CSS values, original font family, complete content for offscreen states, mobile layout, the destinations of every link, form/backend behavior, successful external integrations, dark-theme appearance, or all animation timing. These must be derived by faithful visual matching, supplied content/assets, and functional testing—not invented as if already verified.

### 1.3 Source precedence

1. The provided recording (visible look, copy, layout, sequence, interaction cues).
2. Original brand assets, images, icons, CV, and portfolio data if later supplied.
3. This implementation specification.
4. Reasonable engineering defaults that preserve the reference appearance.

## 2. Project goals and acceptance principle

Recreate the existing portfolio for **Lourdes Escobar** rather than redesign it. The site should communicate software development, data analysis, finance/business perspective, projects, education, and professional contact details while looking visually consistent with the video.

A successful implementation should pass **side-by-side screenshot review** at the desktop reference dimensions before secondary creative enhancements are considered. Visual fidelity takes precedence over adding extra widgets or pages.

## 3. Technology stack

**Required**

- React with TypeScript in `strict` mode.
- Vite for development and production bundling.
- React functional components and typed props/data.
- Modern CSS (CSS Modules, scoped CSS, or well-organized global/component styles); use whichever best reproduces the visuals.
- ESLint, Prettier, and a repeatable production build.

**Optional, only when justified**

- Motion for React to implement subtle intro, reveal, hover, and card transitions.
- GSAP for genuinely complex motion not well served by CSS/Motion.
- React Router only if separate URL-addressable views or project details are required; the recording primarily demonstrates single-page section navigation.
- An icon library, ideally using consistent line weights and visually matching the reference.

Avoid introducing both GSAP and Motion to animate the same properties on the same element. Avoid unnecessary heavy smooth-scroll libraries or custom cursors.

## 4. Site structure and visual sequence

Preserve the following order observed in the video:

1. Optional short **branded intro / loader**.
2. Persistent **header/navigation**.
3. **Hero / Home**.
4. **About** with three subject cards.
5. **Featured Projects** with carousel-like browsing.
6. **Tech Stack** with four category cards.
7. **Credentials** as timeline/list.
8. **Contact callout**, contact details, and footer.

Use the same visible Spanish section names in the default language: `Inicio`, `Sobre mí`, `Proyectos`, `Tech Stack`, `Credenciales`, `Contacto`. The English requirement applies to this **documentation**, not to the default language of the portfolio interface.

## 5. Visual design system

### 5.1 Palette

The video suggests the following **initial approximate tokens**. These are *working estimates*, not claimed pixel-sampled brand specifications. Fine-tune against screenshots and source assets:

```css
:root {
  --page-bg: #f3f3ff;
  --page-bg-accent: #e8eaff;
  --surface: #ffffff;
  --surface-soft: #f0efff;
  --primary: #6258d9;
  --primary-hover: #5148c5;
  --ink: #151939;
  --text: #454967;
  --muted: #858aa8;
  --border: #e3e3f3;
  --shadow-soft: 0 14px 38px rgb(57 52 122 / 7%);
  --radius-card: 16px;
  --radius-pill: 999px;
  --content-width: 1200px;
}
```

Do not change the interface to bright saturated purple, neon cyberpunk, glass-heavy gradients, black backgrounds by default, or other motifs inconsistent with the supplied recording.

### 5.2 Typography

- A modern, clean sans-serif with visually strong bold headings.
- Large, dense, left-aligned heading treatment in the Hero and About.
- Dark navy for primary headlines, dark gray-purple for supporting text.
- Small tracked uppercase eyebrow text for selected section labels.
- Compact, legible navigation and metadata text.
- Preserve the two-line name arrangement in the desktop hero where visible.

The exact font is not identifiable with confidence from the recording alone. Choose a visually close licensed font and verify by comparing screenshots.

### 5.3 Surface and composition rules

- Wide desktop content column with comfortable side margins.
- Header navigation and control clusters occupy a shallow strip at the top.
- Large white/project surfaces with rounded rectangles rather than heavy outlines.
- Pale lavender backdrop with subtle oversized transparent circles/rings and atmospheric gradients.
- Keep card backgrounds predominantly white; use faint lilac inset/icon/tag backgrounds.
- Avoid excessive border treatments and shadow depth.
- Avoid random unrelated decorative illustrations or stock imagery.

## 6. Header / navigation

### Visual requirements

- Small squared white/soft-lilac brand tile bearing the stylized **E** monogram at left.
- Adjacent two-line identity: **Lourdes Escobar** and a compact descriptor.
- Centered, rounded, white pill navigation with six section links.
- Right-side minimal controls: theme toggle-style icon, language selector (`ES`, `EN`), filled violet `Contactar` action.
- Light translucent/solid background maintaining readability while scrolling.

### Behavior

- Clicking a section link scrolls to its corresponding section and accounts for the sticky header offset.
- Current/active link state should be subtle and in keeping with the reference.
- Keyboard navigation, clear focus styles, and correct accessible names.
- Keep the desktop pill treatment; adapt the navigation on mobile without forcing it to overflow.
- A visible theme control must actually switch themes **if retained as interactive**; otherwise remove/disable the nonfunctional control rather than presenting a misleading button.
- `ES / EN` must select genuinely translated interface text if functional; do not leave an inert language switch.

## 7. Branded intro / initial loading state

Visible reference: pale screen, centered E monogram in a small light tile, **LOURDES ESCOBAR**, `PORTFOLIO`, and a slim progress-like indicator.

Implementation guidelines:

- Make the intro brief, understated, and optional for returning visitors.
- Do not create artificial multi-second delays solely for decoration.
- If using real loading progress, connect the indication to real loading state; otherwise present it as a short decorative intro without misleading percentage claims.
- Page content must be available if animation or JavaScript enhancement fails.
- Honor `prefers-reduced-motion` by skipping nonessential transitions.

## 8. Hero section

### Layout

- Two columns on desktop, with roughly balanced text and visual space.
- Left: small academic/professional kicker, very large **Lourdes Escobar** heading (split lines), concise positioning statement, supporting description, two CTA buttons.
- Right: floating code-editor styled window, with a pale shadow/border, three colored window dots, monospace code, and a small lower status/decorative strip.
- Soft blue/lavender gradient surface behind the Hero.

### Copy and links

The recording shows a software/data-oriented positioning statement and buttons labeled approximately **`Ver proyectos`** and **`Descargar CV`**. Reproduce the original text exactly when source copy is available; do not substitute new invented achievements.

### Behavior

- `Ver proyectos` scrolls to the project section.
- `Descargar CV` links to an actual, provided résumé file. If not yet available, visibly mark the link as pending in development; do not ship a broken link.
- The code-window effect should not impair reading or take precedence over the name and CTA.

## 9. About / positioning section

### Required visible structure

- Small section eyebrow/badge.
- Headline: **“Tecnología, datos y una perspectiva de negocio.”**
- One short support paragraph referring to turning ideas/problems into digital solutions.
- Compact `Más sobre mí` action.
- Three topic cards positioned in a row on desktop:
  1. **Desarrollo de Software**
  2. **Análisis & Finanzas**
  3. **Liderazgo & Pitch**

Each card should have a small icon/title and a concise description. Reproduce the content from the original reference/site data when available; uncertain text must remain editable rather than fabricated.

Keep the subtle background circles and spacious transition toward the next section.

## 10. Featured Projects section

### Appearance

- Section eyebrow above title **“Proyectos destacados”**.
- Short descriptive subtitle.
- Small numeric indicator in `current / total` style and compact previous/next arrow buttons on the right.
- Large featured project panels, white backgrounds, softly rounded corners, and generous image/text proportions.
- Desktop project card: illustrative project screenshot on the left, title/description/categories/actions on the right.
- Alternate or maintain layout consistently according to the captured states. Avoid turning these into generic small grid cards.

### Projects visible in the recording

1. **CuencaOS — Plataforma de Datos Hídricos y Territoriales**: a map-and-charts screenshot with explanatory text and multiple small topic tags.
2. **WUJU — 24h Cursor Buildathon**: a laptop/project interface visual with explanatory text and tags.
3. **Gestión Analítica, Costos e Inventarios**: a dashboard screenshot with performance indicators/charts and a short operations/finance-focused description.

These are references to visible project entries; verify formal titles, actual URLs, role, results, and release status before publication.

### Interaction

- Prev/next controls change the visible project deterministically.
- The indicator accurately reflects the current slide and total count.
- The control must support keyboard operation and have accessible labels.
- Keep transitions subtle. Avoid auto-advancing content unless visibly required and justified.
- CTA such as `Ver proyecto` must open an actual matching page/demo or be handled honestly when not yet available.
- Do not fabricate published metrics or achievements.

### Asset quality

Use original screenshots from the actual projects if available. A frame extracted from the recording may aid visual comparison, but should **not** be treated as a production-quality substitute for original assets without approval.

## 11. Tech Stack section

### Layout

A two-column grid of four white rounded technology cards, with spacious gaps. At smaller breakpoints, collapse to a single column.

### Categories visible in the recording

1. **Data Analysis** — Python-oriented analytical tooling (visible Python icon; other tool labels must be validated).
2. **Software Development** — icons/tags for frontend/backend technologies (visible TypeScript, JavaScript, C#, React, and related tooling).
3. **Databases & Cloud** — database/cloud-service visual grouping.
4. **Business & Productivity** — productivity, version control, and business tools.

### Each card must include

- Minimal line icon inside a pale rounded icon tile.
- Short category title.
- One-sentence description.
- Horizontal/lightly wrapped icon grouping.
- Small pale tag chips beneath.

Technology inventories must reflect **actual skills**. Do not add technology names solely because their icons appear trendy.

## 12. Credentials section

### Appearance

- Eyebrow label, large title **“Credenciales”**, and a brief introductory line.
- Vertical dotted/solid timeline rail and circular markers on the left.
- White rounded horizontal credential rows, each with:
  - small icon tile;
  - bold title;
  - smaller issuer or program metadata;
  - pale category badge aligned toward the right;
  - trailing chevron.
- Low-contrast circles in the section background.

### Entries legible in the reference

- **Finalista StartupSTEM 2026**
- **IT Specialist: Programación en Python**
- **Ingeniería en Desarrollo de Software**
- **Bachillerato Técnico en Contaduría**
- **Marketing Digital**
- **English Extension Program (B2+)** (verify exact designation and status from credential evidence before publishing)

The recording is a **visual reference**, not independent proof of awards, qualifications, dates, or verified level. Use the portfolio owner's approved records as the source of truth.

### Interactions

Credential rows may link to actual verification URLs or expandable detail panels. Do not make the chevrons imply an action that does nothing.

## 13. Contact section and footer

### Main callout

- Place a centered white rounded rectangular card on the lavender backdrop.
- Small top label/badge.
- Large heading: **“¿Construimos algo juntos?”**
- Short line expressing openness to collaborations, internships, projects, or data-related work (validate exact final copy).
- Compact action row similar to the reference:
  - `Enviar correo`
  - `Descargar CV`
  - `LinkedIn`
  - `GitHub`
- Filled violet style for the primary action; secondary actions are soft-neutral or outlined.

### Contact detail row

Below the main card, display three separate compact white info tiles featuring, as available:

- Location / availability.
- Email.
- Phone or another approved contact method.

**Do not copy unclear personal contact details from small text in the recording.** Store verified contact data separately and confirm consent before publishing phone numbers or locations.

### Footer

Minimal one-line footer with copyright/name and small `Volver arriba` action. Preserve low visual density.

## 14. Language and theme

- Default UI language: Spanish, matching the supplied recording.
- English UI option: provide complete, human-reviewed translations for section links, CTAs, headings, descriptions, metadata, and accessibility labels.
- Preserve visual composition between languages despite varying string lengths.
- Persist language preference when appropriate.
- Theme toggle, if retained, must have working accessible behavior and a visually complete alternate theme. The **light version** in the recording remains the primary visual acceptance target; the video does not define exact dark-theme appearance.

## 15. Motion and scroll behavior

Use motion sparingly:

- Smooth anchor navigation except for reduced-motion users.
- Brief intro fade/scale.
- Low-amplitude reveal/stagger transitions.
- Gentle code-window float only if visibly aligned with the reference.
- Short card/CTA hover emphasis.
- Subtle carousel transitions.

Rules:

- Avoid dramatic 3D rotations, page-flipping, large parallax, cursor trails, and continuous intense motion.
- Never keep content hidden until an animation triggers if the animation might fail.
- Do not animate the same element/property using conflicting libraries.
- Reduce or disable animation for `prefers-reduced-motion: reduce`.

## 16. Responsive adaptation

Only desktop states are proven by the source video. Mobile layout should **adapt** the same design language rather than invent a different site.

Suggested tests: **320, 375, 430, 768, 1024, 1280, 1440, and 1910 px**.

- Header: collapse the nav to an accessible mobile menu, preserving brand, language, and essential contact actions.
- Hero: stack text above the code window; maintain meaningful typography and CTA sizes.
- About: stack the three cards without excessive padding.
- Projects: stack screenshot and project text vertically; keep arrows/indicator usable.
- Tech Stack: single-column cards on small screens.
- Credentials: allow long names to wrap and place category chips where space allows.
- Contact: stack CTAs and contact info tiles gracefully.
- No horizontal scrolling, clipped text, unusable small controls, or obscured anchor targets.

## 17. Data and TypeScript architecture

The site content should be data-driven, not scattered through JSX.

```ts
export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  role?: string;
  projectUrl?: string;
  repositoryUrl?: string;
  status?: "concept" | "in-progress" | "completed";
}

export interface Credential {
  id: string;
  title: string;
  issuer?: string;
  category?: string;
  date?: string;
  verificationUrl?: string;
}

export interface TechnologyGroup {
  id: string;
  title: string;
  description: string;
  tools: Array<{ name: string; icon?: string }>;
  tags: string[];
}
```

Suggested structure:

```text
src/
  assets/
    branding/
    projects/
    icons/
    documents/
  components/
    layout/Header.tsx
    layout/Footer.tsx
    ui/Button.tsx
    ui/SectionHeading.tsx
    ui/LanguageSwitch.tsx
    ui/ThemeToggle.tsx
    ui/IntroLoader.tsx
    projects/FeaturedProjectsCarousel.tsx
    credentials/CredentialTimeline.tsx
  sections/
    HeroSection.tsx
    AboutSection.tsx
    ProjectsSection.tsx
    TechStackSection.tsx
    CredentialsSection.tsx
    ContactSection.tsx
  data/
    profile.ts
    projects.ts
    technologyGroups.ts
    credentials.ts
    translations.ts
  hooks/
  styles/
    tokens.css
    globals.css
  types/
  App.tsx
  main.tsx
```

This is a suggested structure, not evidence of the recorded site's original folder organization.

## 18. Accessibility

Target WCAG 2.2 AA where applicable.

- Correct semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- One `h1`, assigned to the person's name/hero identity.
- Correct heading nesting.
- Visible `:focus-visible` treatment for all actions.
- Accessible mobile navigation with Escape dismissal, appropriate ARIA attributes, and focus restoration.
- Carousel controls with programmatic accessible labels and usable keyboard focus.
- Language and theme toggles must be announced meaningfully.
- Original project image screenshots need useful alternative descriptions; background circles should be decorative.
- Test contrast on white/lavender surfaces, including small pale chips.
- Use accessible names for icon-only links and buttons.
- Ensure content is readable with 200% zoom and text enlargement.

## 19. SEO and metadata

For the one-page portfolio:

- Clear unique document title mentioning Lourdes Escobar and her professional focus.
- Accurate meta description.
- Canonical using the actual deployment domain (unknown until provided).
- Open Graph and social preview image consistent with this light/violet brand.
- `lang="es"` in Spanish and `lang="en"` when English is active, applied to the document.
- `Person` / `ProfilePage` structured data only with accurate published facts.
- Descriptive image filenames, sitemap, and robots file with actual URLs.
- Avoid generating bogus FAQ markup or claims about expertise.

React + Vite browser-rendered metadata must be checked in the **deployed page source and social previews**. If search/social crawl reliability requires prerendered HTML, add a prerendering strategy rather than assuming client-only meta updates suffice.

## 20. Performance and media

- Prefer the original, optimized screenshots from CuencaOS, WUJU, and the analytics dashboard.
- Use responsive images, WebP/AVIF when appropriate, lazy loading below the fold, and fixed aspect ratios.
- Prioritize the hero's above-the-fold rendering.
- Avoid oversized decorative videos or unnecessarily heavy animation packages.
- Prevent layout shifts during intro completion and carousel transitions.
- Optimize font loading and avoid external network dependencies where possible.
- Review Core Web Vitals: LCP, INP, CLS.
- Suggested Lighthouse goals: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95, subject to actual production testing.

## 21. Analytics, privacy, and security

Analytics are optional. If enabled, measure meaningful non-personal events (project next/previous, project-open clicks, résumé downloads, contact actions, outbound social links, language switch). Never record private email message content or other unnecessary personal data.

- No private secrets in `VITE_` browser environment variables.
- Validate contact details and destinations before release.
- If using a mailto CTA, ensure it points to the approved email address.
- Secure external links opened in new tabs (`rel="noopener noreferrer"`).
- HTTPS in production.
- No misleading or fabricated credentials, project achievements, or deployment metrics.

## 22. QA and testing

### Required functional tests

- Header section links scroll to the correct sections.
- `Contactar` reaches contact section.
- Hero `Ver proyectos` navigates to featured projects.
- Both visible résumé CTAs point to a valid file.
- Project previous/next buttons cycle correctly with indicator updates.
- Each project card opens only the appropriate destination.
- Credentials with chevrons have meaningful interactive behavior or are rendered without misleading affordances.
- Theme and language controls function if presented as buttons.
- All contact/social links open intended destinations.
- `Volver arriba` returns to the page top.
- Reload at anchored sections and browser back/forward behavior are reasonable.

### Required visual QA

Capture and compare at **1910 × 896** (source capture dimensions), including:

1. Intro.
2. Header + Hero.
3. About and feature cards.
4. First featured project.
5. Second featured project.
6. Third featured project.
7. Tech Stack four-card arrangement.
8. Credential timeline.
9. Contact card + contact detail row + footer.

Compare: section heights, text wrapping, margins, card sizes, dominant colors, corner radii, iconography, navigation dimensions, project screenshot cropping, and background shapes. Fix meaningful differences before embellishing.

### Other QA

- Keyboard-only operation and focus visibility.
- Reduced-motion preference.
- Chrome, Firefox, Safari when available.
- Small/mobile viewport screenshots and physical-device smoke tests.
- Broken links and absent assets.
- Console errors and failed network requests.
- SEO/social preview metadata.

## 23. Build and release checks

Recommended scripts:

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run preview
```

Production acceptance requires a clean TypeScript check, successful build, no broken navigation, no missing images, no misleading inactive controls, and completed visual comparisons.

## 24. Definition of Done

### Visual fidelity

- [ ] Intro aligns with the reference without unnecessary delay.
- [ ] Desktop header and navigation match the reference style.
- [ ] Hero typography, two-column structure, code-window visual, and CTAs match.
- [ ] About statement and three cards match.
- [ ] Projects are shown as large split image/text cards with working carousel controls.
- [ ] Tech Stack appears as four consistent category cards.
- [ ] Credentials appear as a compact, readable timeline/list.
- [ ] Contact panel, action buttons, contact tiles, and footer match.
- [ ] Color, spacing, typography, gradients, shapes, icon styles, and radius are consistent throughout.

### Functional quality

- [ ] Every section is navigable.
- [ ] Carousel indicator and buttons work.
- [ ] Language control works or is intentionally excluded until translations exist.
- [ ] Theme control works or is intentionally excluded until implemented.
- [ ] External links have verified targets.
- [ ] CV is downloadable when the corresponding CTA is shown.
- [ ] Mobile layout is usable from 320 px upward.
- [ ] Keyboard and reduced-motion behavior are tested.
- [ ] React + TypeScript checks and production build pass.
- [ ] Metadata and essential technical SEO are validated.
- [ ] Production screenshots have been compared against the provided video.

## 25. Implementation order

1. Extract reference frames and record spacing/colors/geometry.
2. Obtain the original E monogram, project screenshots, CV, verified links, and approved copy.
3. Build design tokens, font scale, global background, and reusable controls.
4. Implement header and Hero with the code-window illustration.
5. Build About and three topic cards.
6. Implement the three featured projects in the large split-card carousel.
7. Implement four Tech Stack category cards.
8. Implement the Credentials timeline/list.
9. Implement contact callout, contact tiles, and footer.
10. Add faithful animations, intro, anchor-scroll handling, language and theme behavior.
11. Check visual parity using desktop screenshots.
12. Adapt to tablet/mobile, then perform accessibility and performance QA.
13. Configure verified external assets/URLs, SEO, and deploy.

---

## Non-negotiable final direction

**Build the portfolio shown in the provided recording.** Keep the lavender-and-white aesthetic, compact pill navigation, left-text/right-code Hero, prominent Spanish positioning line, three About cards, horizontally split project carousel, four-category Tech Stack grid, credential timeline, and centered contact composition. Engineering improvements are welcome only when they preserve the visible identity and make the page reliable, accessible, and responsive.
