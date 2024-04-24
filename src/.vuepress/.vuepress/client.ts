import { defineClientConfig } from "vuepress/client";
import { setupRunningTimeFooter } from "./components/footerRunningTime.js";

export default defineClientConfig({
  setup() {
    setupRunningTimeFooter(
      new Date("2024-04-23"),
      {
        "/": "时间在流逝： :day 天 :hour 小时 :minute 分钟 :second 秒",
        "/en/": "Running time: :day days :hour hours :minute minutes :second seconds",
      },
      true,
    );
  },
});
