// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TAB = "Georgi Kolev's Blog";
export const SITE_TITLE = "Georgi Kolev's Blog";
export const SITE_DESCRIPTION = "A blog template";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "Georgi Kolev";
export const USER_AVATAR = "/profile-picture.jpeg";

// Server and transition settings
export const SERVER_URL = "https://demo.saroprock.com";
export const TRANSITION_API = true;

// Site theme
export const siteTheme = {
  light: "winter",
  dark: "dracula",
};

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "untagged",
  tagCard: "Tags",
  tagPage: "Tag - ",
  noCategory: "uncategorized",
  categoryCard: "Categories",
  categoryPage: "Category - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "Home", href: "/", svg: "home", target: "_self" }, // Home page
  {
    id: "blog",
    text: "Blog",
    href: "/blog",
    svg: "post",
    target: "_self",
  }, // All blog
  {
    id: "projects",
    text: "Projects",
    href: "/projects",
    svg: "projects",
    target: "_self",
  } // Projects page
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://github.com/kolev9605",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
