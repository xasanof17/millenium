import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    theme_color: "#fff",
    background_color: "#fff",
    display: "browser",
    scope: "/",
    start_url: "/",
    name: "MilleniumTech",
    short_name: "Millenium",
    description: "The Official Website of Millenium Tech Company",
    // icons: [
    //   {
    //     src: "icons/icon-192x192.png",
    //     sizes: "192x192",
    //     type: "image/png",
    //   },
    //   {
    //     src: "icons/icon-256x256.png",
    //     sizes: "256x256",
    //     type: "image/png",
    //   },
    //   {
    //     src: "icons/icon-384x384.png",
    //     sizes: "384x384",
    //     type: "image/png",
    //   },
    //   {
    //     src: "icons/icon-512x512.png",
    //     sizes: "512x512",
    //     type: "image/png",
    //   },
    //   {
    //     src: "/apple-icon.svg",
    //     sizes: "16x16",
    //     type: "image/svg+xml",
    //   },
    //   {
    //     src: "/favicon.ico",
    //     sizes: "16x16",
    //     type: "image/ico",
    //   },
    // ],
  };
}
