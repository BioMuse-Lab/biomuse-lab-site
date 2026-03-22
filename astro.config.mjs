import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // 1. 修正你的正式领地域名
  site: "https://biomuselab.com", 
  
  // 2. 保持现有的功能集成
  integrations: [mdx(), sitemap(), tailwind()],
  
  // 3. 核心：开启多语言导航雷达
  i18n: {
    defaultLocale: "cn",
    locales: ["cn", "en", "de", "fr"],
    routing: {
      // 默认中文不加前缀（保持原有链接不变），英文访问 /en，德文访问 /de
      prefixDefaultLocale: false 
    }
  }
});
