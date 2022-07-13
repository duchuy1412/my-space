// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hello Everyone',
  titleDelimiter: '^',

  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'duchuy1412', // Usually your GitHub org/user name.
  projectName: 'my-space', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      vi: {
        label: 'Tiếng Việt',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Tản mạn về cuộc sống, nghề nghiệp, sở thích',
          routeBasePath: '/',
          showReadingTime: true,
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
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      image: 'img/docusaurus.png',
      navbar: {
        title: 'My space',
        logo: {
          alt: 'My Space Logo',
          src: 'img/Space-Logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/aboutme', label: 'About me', position: 'left' },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          // {
          //   href: 'https://github.com/duchuy1412/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        logo: { src: 'img/Space-Logo.svg' },
        style: 'dark',
        links: [
          {
            title: 'Tutorial',
            items: [
              {
                label: 'HTML',
                to: '/tutorial/html',
              },
              {
                label: 'CSS',
                to: '/tutorial/css',
              },
              {
                label: 'Javascript',
                to: '/tutorial/javascript',
              },
              {
                label: 'Tutorial',
                to: '/tutorial/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              // {
              //   html: `
              //       <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
              //         <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
              //       </a>
              //     `,
              // },
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
                href: 'https://github.com/duchuy1412',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Space. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
