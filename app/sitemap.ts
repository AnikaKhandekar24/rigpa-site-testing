import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.identity.domain,
      lastModified: new Date("2026-06-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
