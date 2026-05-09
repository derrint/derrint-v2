#!/usr/bin/env node

import { readdir, stat, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const TARGET_DIRS = ["public/workspace", "public/portfolio"];
const SOURCE_EXTS = new Set([".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"]);
const SKIP_SUFFIXES = ["-thumb.webp", "-full.webp"];

const THUMB_MAX_WIDTH = 640;
const FULL_MAX_WIDTH = 1920;
const THUMB_QUALITY = 70;
const FULL_QUALITY = 82;

const args = new Set(process.argv.slice(2));
const DRY_RUN = args.has("--dry-run");

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return [fullPath];
    })
  );
  return files.flat();
}

function getOutputs(filePath) {
  const ext = path.extname(filePath);
  const sourceNoExt = filePath.slice(0, -ext.length);
  return {
    thumb: `${sourceNoExt}-thumb.webp`,
    full: `${sourceNoExt}-full.webp`,
  };
}

function isSourceImage(filePath) {
  const ext = path.extname(filePath);
  if (!SOURCE_EXTS.has(ext)) return false;
  return !SKIP_SUFFIXES.some((suffix) => filePath.endsWith(suffix));
}

async function optimizeOne(filePath) {
  const { thumb, full } = getOutputs(filePath);

  if (DRY_RUN) {
    console.log(`[dry] ${path.relative(ROOT, filePath)}`);
    console.log(`      -> ${path.relative(ROOT, thumb)}`);
    console.log(`      -> ${path.relative(ROOT, full)}`);
    return;
  }

  await mkdir(path.dirname(thumb), { recursive: true });

  await sharp(filePath)
    .rotate()
    .resize({ width: THUMB_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: THUMB_QUALITY, effort: 5 })
    .toFile(thumb);

  await sharp(filePath)
    .rotate()
    .resize({ width: FULL_MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: FULL_QUALITY, effort: 5 })
    .toFile(full);

  const srcSize = (await stat(filePath)).size;
  const thumbSize = (await stat(thumb)).size;
  const fullSize = (await stat(full)).size;
  console.log(
    `${path.relative(ROOT, filePath)} -> ${path.relative(
      ROOT,
      thumb
    )} (${Math.round((thumbSize / srcSize) * 100)}%), ${path.relative(
      ROOT,
      full
    )} (${Math.round((fullSize / srcSize) * 100)}%)`
  );
}

async function main() {
  const candidates = [];
  for (const relDir of TARGET_DIRS) {
    const absDir = path.join(ROOT, relDir);
    const files = await walk(absDir);
    for (const filePath of files) {
      if (isSourceImage(filePath)) candidates.push(filePath);
    }
  }

  if (candidates.length === 0) {
    console.log("No source images found.");
    return;
  }

  console.log(
    `${DRY_RUN ? "Dry run:" : "Optimizing:"} ${candidates.length} image(s)`
  );
  for (const filePath of candidates) {
    await optimizeOne(filePath);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
