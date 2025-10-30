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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/bobbuitech' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/bobbui' },
    { ariaLabel: 'Reddit', icon: 'tabler:brand-reddit', href: 'https://www.reddit.com/user/thangbui04' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/bobbui' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Bob Bui· All rights reserved.
  `,
};
