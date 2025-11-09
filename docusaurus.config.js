// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Matsuko',
  tagline: '麻糬子的 blog',
  favicon: 'img/favicon.ico',

  // 為未來 v4 提前開啟相容模式
  future: {
    v4: true,
  },

  // 你的網站正式網址（GitHub Pages）
  url: 'https://matsukozui.github.io',
  // 專案頁面一定要有前後斜線
  baseUrl: '/matsuko-blog/',

  // GitHub pages 部署參數（建議填上）
  organizationName: 'matsukozui', // GitHub 帳號或 org
  projectName: 'matsuko-blog',    // repo 名稱

  onBrokenLinks: 'warn',  // 或 'throw'
  onBrokenMarkdownLinks: 'warn',

  // 語系：繁體中文
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // 若不需要「在 GitHub 編輯此頁」，可刪除此行
          // editUrl: 'https://github.com/matsukozui/matsuko-blog/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          // 若不需要「在 GitHub 編輯此頁」，可刪除此行
          // editUrl: 'https://github.com/matsukozui/matsuko-blog/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: { respectPrefersColorScheme: true },

      navbar: {
        title: 'Matsuko',
        logo: { alt: 'Matsuko Logo', src: 'img/logo.svg' },
        items: [
          { to: '/blog', label: '部落格', position: 'left' },
          {
            href: 'https://github.com/matsukozui/matsuko-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '導覽',
            items: [{ label: '部落格', to: '/blog' }],
          },
          {
            title: '社群',
            items: [
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: '原始碼',
            items: [
              { label: 'GitHub', href: 'https://github.com/matsukozui/matsuko-blog' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matsuko. Built with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
