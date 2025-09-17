// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ARO Network Docs',
  tagline: 'ARO: The Genesis of Open Edge',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: process.env.SITE_URL || 'https://docs.aro.network',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aro-network', // Usually your GitHub org/user name.
  projectName: 'aro-docs', // Usually your repo name.

  onBrokenLinks: 'warn',  
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),  
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: null,
        logo: {
          alt: 'My Project Logo',
          src: 'https://aro.network/aro-logo-light.svg', // Light mode logo
          srcDark: 'https://aro.network/aro-logo.svg', // Night mode logo
          href: '/docs',  
          target: '_self',
        },
        items: [     
          {
            href: 'https://aro.network',
            label: 'Official Site',
            position: 'right',
          },
        ],
      },
      footer: {  
        style: 'dark',
        links: [
          {
            title: 'Documentations',
            items: [
              {
                label: 'Get Started',
                to: '/docs/introduction/get-started',  
              },
              {
                label: 'Guides for Node Operators',
                to: '/node-operator-guide/become-operator/idle-bandwidth',  
              },
              {
                label: 'Guides for ARO Testnet',
                to: '/campaign-hub/aro-testnet',  
              },
            ],
          },
          {
            title: 'Join Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/AroNetwork',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/ARO_Network',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Rc4BMUjbNB',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Official Site',
                to: 'https://aro.network',
              },
              {
                label: 'Blog',
                href: 'https://medium.com/aronetwork',
              },
              {
                label: 'Linktree',
                href: 'https://linktr.ee/AroNetwork',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ARO Network. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'neutral'},
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;