import { BASE_URL } from "@/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: string[] = ["/", "/about", "/contact"];

  // Generate the sitemap data
  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));

  return sitemap;
}
