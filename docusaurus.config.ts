import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mobi Sync',
  tagline: 'Wireless sync from devices to home server',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'takecontrolsoft', // Usually your GitHub org/user name.
  projectName: 'mobisync', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/takecontrolsoft/mobisync/tree/main/docs/',
        },
        blog: {
          blogTitle: 'Mobi Sync Blog',
          blogDescription: 'Mobi Sync announcements',
          postsPerPage: 'ALL',
          blogSidebarTitle: 'Posts',
          blogSidebarCount: 'ALL',
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/takecontrolsoft/mobisync/tree/main/blog/',
       },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-Z4RNKLR00E',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/mobisync-social-card.jpg',
    navbar: {
      title: 'Mobi Sync',
      logo: {
        alt: 'Mobi Sync Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/takecontrolsoft/mobisync',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Installation',
              to: '/docs/category/installation',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Take control - SI',
              href: 'https://takecontrolsoft.eu',
            },
            {
              label: 'Linked In',
              href: 'https://www.linkedin.com/company/take-control-si',
            },
          ],
        },
        {
          title: 'Blog',
          items: [
            {
              label: 'Announcements',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/takecontrolsoft',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mobi Sync, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
