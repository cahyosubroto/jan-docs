// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
const path = require('path');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'Jan AI Docs',
  tagline: 'Everything you need about Jan AI is here',
  favicon: 'img/jan-50.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
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
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Jan AI',
      logo: {
        alt: 'Jan AI Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'quickstart',
          position: 'left',
          label: 'Quickstart',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Quickstart',
              to: '/docs/quickstart', // Updated path
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/janhq/jan',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/FTk2MvZwJH',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/janframework',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/janhq/jan',
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: 'Y8QU1SIVLP',

    //   // Public API key: it is safe to commit it
    //   apiKey: 'YOUR_SEARCH_API_KEY',

    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: 'external\\.com|domain\\.com',

    //   // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
    //   replaceSearchResultPathname: {
    //     from: '/docs/', // or as RegExp: /\/docs\//
    //     to: '/',
    //   },

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: 'search',

    //   //... other Algolia params
    // },
  },

  customFields: {
    githubAccessToken: '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',
    organizationName: 'janhq',
    projectName: 'jan'
  },

  plugins: [
    // ... (other Docusaurus plugins)
    path.resolve(__dirname, 'plugins', 'changelog-plugin'),
  ],
};

export default config;
