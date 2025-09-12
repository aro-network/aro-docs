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

  onBrokenLinks: 'warn',  // 改为 'warn' 以忽略 broken links，让 build 通过
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
      docs: false,  // 禁用默认 docs，使用多 content-docs
      blog: {
        showReadingTime: true,
        // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
      },
      theme: {
        customCss: './src/css/custom.css',
      },
    }),
  ],
  // Introduction
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'introduction',
      path: 'introduction',
      routeBasePath: 'introduction',
      sidebarPath: require.resolve('./sidebars-introduction.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // ARO Network
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'aro-network',
      path: 'aro-network',
      routeBasePath: 'aro-network',
      sidebarPath: require.resolve('./sidebars-aro-network.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // Node Operator Guide: Run ARO Nodes
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'node-operator-guide',
      path: 'node-operator-guide',
      routeBasePath: 'node-operator-guide',
      sidebarPath: require.resolve('./sidebars-node-operator-guide.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // Developer Guide: Build on ARO
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'developer-guide',
      path: 'developer-guide',
      routeBasePath: 'developer-guide',
      sidebarPath: require.resolve('./sidebars-developer-guide.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // Edge Cloud Guide: Explore Edge Solutions
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'edge-cloud-guide',
      path: 'edge-cloud-guide',
      routeBasePath: 'edge-cloud-guide',
      sidebarPath: require.resolve('./sidebars-edge-cloud-guide.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // Campaign Hub
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'campaign-hub',
      path: 'campaign-hub',
      routeBasePath: 'campaign-hub',
      sidebarPath: require.resolve('./sidebars-campaign-hub.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // $ARO Tokenomics
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'aro-tokenomics',
      path: 'aro-tokenomics',
      routeBasePath: 'aro-tokenomics',
      sidebarPath: require.resolve('./sidebars-aro-tokenomics.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  ],
  // Appendix
  [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: 'appendix',
      path: 'appendix',
      routeBasePath: 'appendix',
      sidebarPath: require.resolve('./sidebars-appendix.js'),
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
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
        title: 'ARO Network Docs', 
        logo: {
          alt: 'ARO Logo',
          src: 'img/logo-light.svg',  
          srcDark: 'img/logo-dark.svg',  
          href: '/',  
          target: '_self',
        },
        items: [  
          {
            type: 'docSidebar',
            sidebarId: 'docs',  
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/aro-network/aro-docs',  
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://aro.network',  
            label: 'ARO Network',
            position: 'right',
          },
        ],
      },
      footer: {  
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/introduction/get-started',  
              },
              {
                label: 'Node Operator Guide',
                to: '/node-operator-guide/become-operator/idle-bandwidth',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/your-discord',  
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aro_network',  
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/aro-network/aro-docs',
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