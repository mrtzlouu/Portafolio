/**
 * One-off image optimizer (Requirements §17).
 * Generates compressed WebP variants next to the originals (originals untouched)
 * and an Open Graph image (1200x630 JPG). Re-run after replacing source images:
 *   npm run optimize:images
 */
import sharp from 'sharp';
import { existsSync } from 'node:fs';
import path from 'node:path';

const pub = path.resolve('public');

/** [source, output, max width] */
const jobs = [
  ['img/Yo.png', 'img/Yo.webp', 900],
  ['img/CUENCAOS.png', 'img/cuencaos.webp', 1400],
  ['img/WUJU.png', 'img/wuju.webp', 1400],
  ['costos-cover.jpg', 'img/costos.webp', 1400],
];

for (const [src, out, width] of jobs) {
  const input = path.join(pub, src);
  if (!existsSync(input)) {
    console.warn(`skip: ${src} not found`);
    continue;
  }
  const info = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(path.join(pub, out));
  console.log(`${out}: ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`);
}

// Open Graph preview image
const og = await sharp(path.join(pub, 'img/CUENCAOS.png'))
  .resize(1200, 630, { fit: 'cover', position: 'top' })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(path.join(pub, 'og-image.jpg'));
console.log(`og-image.jpg: ${og.width}x${og.height} ${(og.size / 1024).toFixed(0)} KB`);
