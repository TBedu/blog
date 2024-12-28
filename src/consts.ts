// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_LANG = "zh";
export const SITE_TAB = "FeltSquiirel727";
export const SITE_TITLE = "FeltSquiirel727";
export const SITE_DESCRIPTION = "FeltSquiirel727's blog";
export const DATE_FORMAT = "YYYY年MM月DD日";

// User profile information
export const USER_NAME = "FeltSquiirel727";
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
        text: "所有博客",
        href: "/blog",
        svg: "material-symbols:ink-pen-outline-rounded",
        target: "_self",
      }, // All blog
      {
        id: "tech",
        text: "技术博客",
        href: "/blog/categories/技术博客",
        svg: "material-symbols:deployed-code-outline",
        target: "_self",
      }, // Technology category
      {
        id: "life",
        text: "生活博客",
        href: "/blog/categories/生活博客",
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
    href: "https://afdian.net/a/FeltSquiirel727",
    ariaLabel: "Support my work",
    title: "支持我",
    svg: "ri:cup-line",
  },
  {
    href: "https://github.com/TBedu",
    ariaLabel: "Github",
    title: "Github",
    svg: "ri:github-line",
  },
  {
    href: "https://space.bilibili.com/3461568163481938",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "ri:bilibili-line",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS",
    svg: "ri:rss-line",
  },
];
