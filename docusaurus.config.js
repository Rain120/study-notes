// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { plugins } = require('./config/plugins');
const presets = require('./config/presets');
const navbar = require('./config/navbar');

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

  // themes: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "feature_release", // Any value that will identify this message.
        content: `
          <a href='https://rain120.github.io/study-notes/books/read/react/a-hundred-things-i-learned-working-on-the-react-team'>阅书阁</a> 
          新上线，欢迎体验
        `,
        // 文章📚 
        // 模块 👩‍💻
        // content: `
        //   新模块 👩‍💻 <a href='https://rain120.github.io/study-notes/interview/guide'>面试</a>
        //   ，欢迎阅读👁👁
        // `,
        // backgroundColor: "#fafbfc", // Defaults to `#fff`.
        // textColor: "#091E42", // Defaults to `#000`.
      },
      liveCodeBlock: {
          /**
           * The position of the live playground, above or under the editor
           * Possible values: "top" | "bottom"
           */
          playgroundPosition: 'bottom',
      },
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
            label: '关于',
          },
          ...navbar,
          // {to: '/blog', label: 'Blog', position: 'left'},
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
            title: '文档站点',
            items: [
              {
                label: '关于我',
                to: '/docs/guide',
              },
            ],
          },
          {
            title: 'Hot 仓库',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
