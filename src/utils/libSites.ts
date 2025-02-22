/** 当前 macth 站点对象 */
export type LibItem = {
  name: "javdb" | "javbus" | "javlib";
  enable: boolean;
  identifier: string;
  querys: {
    panelQueryStr: string;
    codeQueryStr: string;
  };
  method: () => void;
};

/** 需要匹配的图书馆站点列表 */
export const libSites: LibItem[] = [
  {
    name: "javdb",
    enable: true,
    identifier: "a[href*='javdb']",
    querys: {
      panelQueryStr: ".video-meta-panel>.columns.is-desktop .panel.movie-panel-info",
      codeQueryStr: `[data-clipboard-text]`,
    },
    method() {
      // 一些样式调整
      const columnVideoCover = document.querySelector<HTMLElement>(".column-video-cover");
      if (columnVideoCover) {
        columnVideoCover.style.width = "60%";
      }
      const panel = document.querySelector<HTMLElement>(
        ".video-meta-panel>.columns.is-desktop>.column:not(.column-video-cover)",
      );
      panel?.classList.add("db-panel");
    },
  },
  {
    name: "javbus",
    enable: true,
    identifier: "a[href*='javbus']",
    querys: {
      panelQueryStr: ".movie>div.info",
      codeQueryStr: `span[style="color:#CC0000;"]`,
    },
    method() {},
  },
  {
    name: "javlib",
    enable: true,
    identifier: "img[src*='logo-top']",
    querys: {
      panelQueryStr: "#video_jacket_info #video_info",
      codeQueryStr: `#video_id td.text`,
    },
    method() {
      const panel = document.querySelector<HTMLElement>("#video_info");
      panel?.classList.add("lib-panel");
    },
  },
];
