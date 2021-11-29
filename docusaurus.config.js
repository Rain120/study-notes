// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { plugins } = require('./plugins');
const presets = require('./presets');
const navbar = require('./navbar');

const baseUrl = process.env.BASE_URL || '/';
console.log('baseUrl', baseUrl)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '小超子的笔记',
  tagline: 'Daily study notes, some useful bookmarking resources, and resources for friends.',
  url: 'https://rain120.github.io/study-notes/',
  baseUrl,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/chao.png',
  organizationName: 'Rain120', // Usually your GitHub org/user name.
  projectName: 'study-notes', // Usually your repo name.

  plugins,
  presets,

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // gtag: {
      //   trackingID: '',
      //   anonymizeIP: true, // 是否匿名化 IP？
      // },
      navbar: {
        title: '',
        logo: {
          alt: '',
          src: 'img/chao.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'guide',
            position: 'left',
            label: 'Docs',
          },
          ...navbar,
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/rain120/study-notes',
            label: 'GitHub',
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
                label: 'Docs',
                to: '/docs/guide',
              },
            ],
          },
          {
            title: '其他仓库',
            items: [
              {
                label: 'Study Notes',
                href: 'https://github.com/Rain120/study-notes',
              },
              {
                label: 'Typescript Guide',
                href: 'https://github.com/Rain120/typescript-guide',
              },
              {
                label: 'One Utils',
                href: 'https://github.com/tinyfe/one-utils',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rain120/study-notes',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}.`,
      },
      gtag: {
        // You can also use your "G-" Measurement ID here.
        trackingID: 'UA-150864629-1',
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
