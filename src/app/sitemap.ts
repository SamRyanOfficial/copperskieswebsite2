import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const baseUrl = "https://www.copperskies.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [];
  const appDir = path.join(process.cwd(), "src", "app");

  function findPages(dir: string, basePath = ""): void {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory()) {
        // Skip API routes, dynamic segments, and route groups
        if (
          item.name === "api" ||
          item.name.startsWith("[") ||
          item.name.startsWith("(") ||
          item.name.startsWith("_")
        ) {
          continue;
        }
        const segment = basePath ? `/${item.name}` : `/${item.name}`;
        findPages(path.join(dir, item.name), basePath + segment);
      } else if (item.name === "page.tsx" || item.name === "page.js") {
        const urlPath = basePath || "/";
        pages.push({
          url: `${baseUrl}${urlPath}`,
          lastModified: new Date(),
          changeFrequency: urlPath === "/" ? "weekly" : "monthly",
          priority: urlPath === "/" ? 1 : 0.8,
        });
      }
    }
  }

  findPages(appDir);

  return pages;
}
