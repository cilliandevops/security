import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Mr·希",
  description: "希里安的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
