// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh";
export const SITE_TAB = "FeltSquirrel727";
export const SITE_TITLE = "FeltSquirrel727";
export const SITE_DESCRIPTION = "FeltSquirrel727's blog";
export const DATE_FORMAT = "YYYY年MM月DD日";

// User profile information
export const USER_NAME = "FeltSquirrel727";
export const USER_SITE = "https://blog.tbedu.top"
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://waline.tbedu.top";

// Theme settings
export const DAISYUI_THEME = {
  light: "winter",
  dark: "dracula",
}
export const CODE_THEME = {
  light: "github-light",
  dark: "github-dark",
}

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "material-symbols:home-outline-rounded", target: "_self" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "material-symbols:info-outline-rounded", target: "_self" }, // About page
  {
    id: "blog",
    text: "博客",
    href: "/blog",
    svg: "material-symbols:book-2-outline-rounded",
    target: "_self",
    subItems: [
      {
        id: "all",
        text: "所有",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术",
        href: "/blog/categories/技术",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "study",
        text: "学习",
        href: "/blog/categories/学习",
        svg: "material-symbols:menu-book-outline-rounded",
        target: "_self",
      }, // Stydy category
      {
        id: "life",
        text: "生活",
        href: "/blog/categories/生活",
        svg: "material-symbols:earthquake-rounded",
        target: "_self",
      }, // Life category
    ],
  }, // Blog page with sub-items
  {
    id: "project",
    text: "项目",
    href: "/project",
    svg: "material-symbols:code-blocks-outline",
    target: "_self",
  }, // Projects page
  {
    id: "friend",
    text: "友链",
    href: "/friend",
    svg: "material-symbols:supervisor-account-outline-rounded",
    target: "_self",
  }, // Friends page
  {
    id: "contact",
    text: "联系",
    href: "mailto:2877181146@qq.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "material-symbols:attach-email-outline-rounded",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://mr.baidu.com/r/1vpwVIFGtDq?f=cp&rs=1011739487&ruk=YE2B0oUHIpmOcIx99pZIhA&u=4b5d73d51c8b223d&sid_for_share=99125_3",
    ariaLabel: "Baidu",
    title: "百度",
    svg: "ri:baidu-fill",
  },
  {
    href: "https://space.bilibili.com/3461568163481938",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-fill",
  },
  {
    href: "https://github.com/TBedu",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-fill",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS",
    svg: "ri:rss-fill",
  },
];
