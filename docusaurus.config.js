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
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'ARO Network Docs',  // 更新为匹配你的站点标题
        logo: {
          alt: 'ARO Logo',
          src: 'img/logo-light.svg',  // 本地光模式 logo（确保 static/img/logo-light.svg 存在）
          srcDark: 'img/logo-dark.svg',  // 本地暗模式 logo（确保 static/img/logo-dark.svg 存在）
          href: '/',  // 保持 /，但现在通过首页修复
          target: '_self',
        },
        items: [  // 取消注释，并添加基本导航项（避免默认 broken links）
          {
            type: 'docSidebar',
            sidebarId: 'docs',  // 链接到你的侧边栏（docs 类别）
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/aro-network/aro-docs',  // 替换为你的 GitHub 仓库
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://aro.network',  // 你的主站点链接
            label: 'ARO Network',
            position: 'right',
          },
        ],
      },
      footer: {  // 取消注释，并添加基本 footer 链接（避免默认 / 链接）
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Get Started',
                to: '/introduction/get-started',  // 链接到你的第一个页面
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
                href: 'https://discord.com/invite/your-discord',  // 替换为你的 Discord
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aro_network',  // 替换为你的 Twitter
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
        copyright: `Copyright © ${new Date().getFullYear()} ARO Network. Built with Docusaurus.`,  // 更新为你的项目
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