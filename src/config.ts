export const SITE = {
  website: "https://bobbui.com/",
  author: "Bob Bui",
  profile: "https://bobbui.com/",
  desc: "My personal website & blog | Writing about tech mainly AI | Where I share ideas, projects, and learnings",
  title: "Bob Bui",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/bobbui/bobbui.com/edit/main/",
    editLinkText: "Edit on GitHub",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en",
  timezone: "America/Los_Angeles", // IANA timezone format
} as const;
