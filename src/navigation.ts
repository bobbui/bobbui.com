import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'About', href: getPermalink('/about') },
    // { text: 'Portfolio', href: getPermalink('/portfolio') },
    { text: 'Blog', href: getPermalink('/blog') },
    // { text: 'Github', href: 'https://github.com/arthelokyo' },
  ],
  actions: [
    // {
    //   text: 'Hire me',
    //   href: getPermalink('/contact'),
    // },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/bobbui' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/bobbuitech' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/user/thangbui04' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/bobbui' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bobbuitech' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/bobbuitech' },
    { ariaLabel: 'Threads', icon: 'tabler:brand-threads', href: 'https://www.threads.net/bobbuitech' },
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bobbui.bsky.social' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Bob Bui· All rights reserved.
  `,
};
export const footerData2 = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/bobbui' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/bobbuitech' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/user/thangbui04' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/bobbui' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Bob Bui· All rights reserved.
  `,
};
