import { writeFileSync } from "fs";
import { resolve } from "path";

const SITE_URL = "https://www.circularinnovationhub.com";
const DIST_DIR = resolve(import.meta.dirname, "../dist");

interface PageEntry {
  loc: string;
  priority: string;
  changefreq: string;
}

const pages: PageEntry[] = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/about", priority: "0.8", changefreq: "monthly" },
  { loc: "/projects", priority: "0.8", changefreq: "weekly" },
  { loc: "/corporates", priority: "0.7", changefreq: "monthly" },
  { loc: "/advisory", priority: "0.7", changefreq: "monthly" },
  { loc: "/co-working", priority: "0.7", changefreq: "monthly" },
  { loc: "/startup-hub", priority: "0.8", changefreq: "weekly" },
  { loc: "/mentorship", priority: "0.7", changefreq: "monthly" },
  { loc: "/bpo", priority: "0.7", changefreq: "monthly" },
  { loc: "/academy", priority: "0.8", changefreq: "weekly" },
  { loc: "/contactUs", priority: "0.6", changefreq: "monthly" },
];

function buildSitemapXml(entries: PageEntry[]): string {
  const urls = entries
    .map(
      (p) => `  <url>
    <loc>${SITE_URL}${p.loc}</loc>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

const sitemap = buildSitemapXml(pages);
writeFileSync(resolve(DIST_DIR, "sitemap.xml"), sitemap, "utf-8");
console.log("sitemap.xml generated at dist/sitemap.xml");
