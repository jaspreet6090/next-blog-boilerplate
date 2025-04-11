// export const dynamic = "force-dynamic";

//rename to orginal -- sitemap.ts and remove sitemap.xml from public folder

// import { MetadataRoute } from "next";
// import allArticles from "@/constants/all";
// import formatTitle from "@/lib/format-title";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = "https://example.com";

//   const staticRoutes: MetadataRoute.Sitemap = [
//     {
//       url: `${baseUrl}/`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1,
//     },
//     {
//       url: `${baseUrl}/about`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/privacy-policy`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/terms`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/dmca`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/cookie-policy`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/disclaimer`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/limited-edition`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/sneaker-trends`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/style-and-outfit`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//     {
//       url: `${baseUrl}/white-sneakers`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//   ];

//   const blogRoutes: MetadataRoute.Sitemap = allArticles.map((blog) => {
//     const slug = formatTitle(blog.title);

//     return {
//       url: `${baseUrl}/${slug}`,
//       lastModified: new Date(),
//       changeFrequency: "weekly" as const,
//       priority: 0.8,
//     };
//   });

//   return [...staticRoutes, ...blogRoutes];
// }

export default function Page() {
  return null;
}
