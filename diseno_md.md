# UI/UX Refinement — Lourdes Escobar Portfolio

## Objective

Refine the existing portfolio without rebuilding its architecture or replacing its content.

The current light design feels too pale, static and visually empty. Transform it into a vibrant, animated lavender-periwinkle experience inspired by the original illustrated reference.

### 1. Color and atmosphere

Replace excessive white surfaces with a layered lavender environment.

Use:
- Main background: `#F0F1FF`
- Alternate background: `#E4E9FF`
- Soft blue: `#B9C6FA`
- Periwinkle: `#8198EF`
- Primary accent: `#555DD6`
- Deep navy: `#171B4B`
- White: `#FFFFFF` for selected foreground surfaces.

Preserve accessible contrast for all readable text.

### 2. Animated background — mandatory

Create a reusable `AnimatedBackground` component.

- Add 3–4 large translucent gradient shapes behind the content.
- Use slow continuous movement, approximately 18–30 seconds per cycle.
- Combine subtle translation, scaling and rotation.
- Add very low-opacity organic curved lines.
- Use one or two decorative botanical or cloud-like SVG shapes.
- Ensure shapes are visible but do not obstruct text.
- Animate the background throughout the page, not only inside the hero.
- Respect `prefers-reduced-motion`.
- Optimize performance by animating only transform and opacity where possible.

Do not use particle explosions, neon effects, random floating dots or a developer-style grid.

### 3. Horizontal featured projects — mandatory

Completely refactor the featured projects layout.

**Desktop:**
- Each featured project uses a wide horizontal card.
- Image occupies 50–55% of the card.
- Description and actions occupy the remaining 45–50%.
- Minimum desktop aspect ratio approximately 2.2:1.
- Use real project screenshots and assets.
- Show project category, title, short description, stack and CTA.
- Alternate image position across consecutive projects.
- Use an editorial layout rather than multiple dashboard boxes.

**Awards and recognition:**
- Integrate directly into the corresponding project.
- Use small achievement badges or a secondary horizontal information strip.
- Avoid full-height award panels beside projects.

**Mobile:**
- Stack image above content.
- Preserve sufficient text space.
- Keep all CTAs accessible.
- Do not introduce horizontal overflow.

### 4. Motion and interactivity

Add:
- Gentle parallax to decorative background layers.
- Reveal animations triggered by viewport entry.
- Project card hover elevation.
- Subtle image scale on hover (maximum 1.04).
- Animated underline for navigation links.
- Smooth transitions between selected projects.
- Button arrow micro-interactions.
- Scroll progress indicator, if visually unobtrusive.

Do not use heavy spring bouncing, dramatic rotations or excessive stagger animations.

### 5. Improve section composition

- Increase variation between section backgrounds.
- Avoid large empty white spaces.
- Introduce asymmetrical composition.
- Use fewer but more meaningful cards.
- Make project imagery the focal point.
- Keep consistent typography using Outfit, Plus Jakarta Sans and JetBrains Mono.
- Remove redundant captions and excessive technical labels.
- Preserve the original reference's soft illustrated atmosphere.

### 6. Quality criteria

The final site must feel:

- Vibrant, not washed out.
- Animated, not distracting.
- Personal, not template-generated.
- Professional, not childish.
- Spacious, but not empty.
- Illustrated and colorful, but still readable.

**Important:** Do not switch back to a dark navy technology dashboard. The target is a brighter, more expressive version of the existing lavender editorial aesthetic.