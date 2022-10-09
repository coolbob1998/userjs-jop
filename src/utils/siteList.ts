export interface DomQuery_parser {
  /** 部分网站搜索页结果第一个是广告，所以要加一个 index  */
  listIndex?: number;
  /** code 是用空格分割的 */
  spaceCode?: boolean;
  linkQuery: string;
  titleQuery: string;
  /** 确定返回颜色，暂未启用 */
  certainColor?: string;
}

export interface DomQuery_get {
  /** 收录视频，但是未提供在线播放资源 */
  videoQuery?: string;
  subQuery?: string;
  leakQuery?: string;
}

interface SiteItemBase {
  name: string;
  /** 针对 matchList 的 hostname */
  disable?: string;
  hostname: string;
  url: string;
  codeFormater?: (arg0: string) => string;
  method?: Function;
}

export interface SiteItem_get extends SiteItemBase {
  fetcher: "get";
  domQuery: DomQuery_get;
}

export interface SiteItem_parser extends SiteItemBase {
  fetcher: "parser";
  domQuery: DomQuery_parser;
}

export type SiteItem = SiteItem_get | SiteItem_parser;

const print = (name: string) => {
  console.log(name);
};

/** 网站列表 */
export const siteList: SiteItem[] = [
  {
    name: "Jable",
    hostname: "jable.tv",
    url: "https://jable.tv/videos/{{code}}/",
    fetcher: "get",
    domQuery: { subQuery: ".header-right>h6" },
    method: print,
  },
  {
    name: "MISSAV",
    hostname: "missav.com",
    url: "https://missav.com/{{code}}/",
    fetcher: "get",
    domQuery: {
      /** 标签区的第一个一般是字幕标签 */
      subQuery: '.space-y-2 a.text-nord13[href="https://missav.com/chinese-subtitle"]',
      /** videoPage 有个跳转按钮 */
      leakQuery: ".order-first div.rounded-md a[href]:last-child",
    },
    method: print,
  },
  {
    name: "NETFLAV",
    hostname: "netflav.com",
    url: "https://netflav.com/search?type=title&keyword={{code}}",
    fetcher: "parser",
    domQuery: { linkQuery: ".grid_cell>a", titleQuery: ".grid_cell>a>.grid_title" },
    method: print,
  },
  {
    name: "Avgle",
    hostname: "avgle.com",
    url: "https://avgle.com/search/videos?search_query={{code}}&search_type=videos",
    fetcher: "parser",
    domQuery: {
      linkQuery: ".container>.row .row .well>a[href]",
      titleQuery: ".container>.row .row .well .video-title",
    },
    method: print,
  },
  {
    name: "JAVHHH",
    hostname: "javhhh.com",
    url: "https://javhhh.com/v/?wd={{code}}",
    fetcher: "parser",
    domQuery: {
      linkQuery: ".typelist>.i-container>a[href]",
      titleQuery: ".typelist>.i-container>a[href]",
    },
    method: print,
  },
  {
    name: "BestJP",
    hostname: "bestjavporn.com",
    url: "https://www3.bestjavporn.com/search/{{code}}",
    fetcher: "parser",
    domQuery: { linkQuery: "article.thumb-block>a", titleQuery: "article.thumb-block>a" },
    method: print,
  },
  {
    name: "JAVMENU",
    hostname: "javmenu.com",
    url: "https://javmenu.com/{{code}}",
    fetcher: "get",
    domQuery: {
      videoQuery: "a.nav-link[aria-controls='pills-0']",
    },
    method: print,
  },
  {
    name: "Jav.Guru",
    hostname: "jav.guru",
    url: "https://jav.guru/?s={{code}}",
    fetcher: "parser",
    domQuery: { linkQuery: ".imgg>a[href]", titleQuery: ".inside-article>.grid1 a[title]" },
    method: print,
  },
  {
    name: "JAVMOST",
    hostname: "javmost.cx",
    url: "https://javmost.cx/search/{{code}}/",
    fetcher: "parser",
    domQuery: {
      linkQuery: "#content .card a#MyImage",
      titleQuery: "#content .card-block .card-title",
    },
    method: print,
  },
  {
    name: "HAYAV",
    hostname: "hayav.com",
    url: "https://hayav.com/video/{{code}}/",
    fetcher: "get",
    domQuery: {},
    method: print,
  },

  {
    name: "JAVFC2",
    hostname: "javfc2.net",
    url: "https://javfc2.net/?s={{code}}",
    fetcher: "parser",
    domQuery: {
      linkQuery: "article.loop-video>a[href]",
      titleQuery: "article.loop-video .entry-header",
    },
    method: print,
  },
  {
    name: "baihuse",
    hostname: "paipancon.com",
    url: "https://paipancon.com/search/{{code}}",
    fetcher: "parser",
    domQuery: {
      linkQuery: "div.col>div.card>a[href]",
      // 然而这个不是 title，是图片，这个站居然 title 里不包含 code，反而图片包含
      titleQuery: "div.card img.card-img-top",
    },
    method: print,
  },
  {
    name: "GGJAV",
    hostname: "ggjav.com",
    url: "https://ggjav.com/main/search?string={{code}}",
    fetcher: "parser",
    domQuery: {
      listIndex: 1,
      spaceCode: true,
      titleQuery: "div.columns.large-3.medium-6.small-12.item.float-left>div.item_title>a.gray_a",
      linkQuery: "div.columns.large-3.medium-6.small-12.item.float-left>div.item_title>a.gray_a",
    },
    method: print,
  },

  {
    name: "AV01",
    hostname: "av01.tv",
    url: "https://www.av01.tv/search/videos?search_query={{code}}",
    fetcher: "parser",
    domQuery: { linkQuery: "div[id].well-sm>a", titleQuery: ".video-views>.pull-left" },
    method: print,
  },
  {
    name: "JavBus",
    disable: "javbus",
    hostname: "javbus.com",
    url: "https://javbus.com/{{code}}",
    fetcher: "get",
    domQuery: {},
    method: print,
  },
  // {
  //   name: "JavDB",
  //   disable:"javdb",
  //   hostname: "javbus.com",
  //   url: "https://javbus.com/{{code}}",
  //   fetcher: "get",
  //   domQuery: {},
  //   method: print,
  // },
];
