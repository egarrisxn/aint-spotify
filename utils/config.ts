import { siteUrl } from "./env";
import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  title: "Aint Spotify",
  description: "A Spotify clone.",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image.png`,
  twitterImage: `${siteUrl}/twitter-image.png`,
  socialHandle: "@eg__xo",
  links: {
    x: "https://x.com/eg__xo",
    github: "https://github.com/egarrisxn",
    website: "https://egxo.dev",
    linkedin: "https://linkedin.com/in/ethan-gx",
  },
};
