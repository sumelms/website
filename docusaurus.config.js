/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Sumé LMS",
  tagline: "Evolving Education.",
  organizationName: "sumelms", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  url: "https://sumelms.com",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  customFields: {
    description:
      "Sumé is a modern, fast, and open-source learning management system.",
  },
  themeConfig: {
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "Sumé LMS Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
      },
      items: [
        // left
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://medium.com/sumelms",
          label: "Blog",
          position: "left",
        },
        // right
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: "https://github.com/sumelms",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Sumé LMS Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_dark.svg",
        href: "https://www.sumelms.com",
      },
      style: "light",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "What is Sumé LMS?",
              to: "docs/",
            },
            {
              label: "The Team",
              to: "docs/",
            },
            {
              label: "Contact Us",
              to: "docs/",
            },
            {
              label: "Code of Conduct",
              to: "docs/conduct",
            },
            {
              label: "Become Partner",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/sumelms",
            },
            {
              label: "Discord",
              href: "https://discord.gg/Yx98nwK",
            },
            {
              label: "Blog",
              href: "https://medium.com/sumelms",
            },
          ],
        },
        {
          title: "Other Projects",
          items: [
            {
              label: "Guaraná",
              href: "https://github.com/sumelms/guarana",
            },
            {
              label: "Edu",
              href: "https://edu.sumelms.com",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Sumé LMS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== "en") {
              return `https://crowdin.com/project/sum-lms-website/${locale}`;
            }
            return `https://github.com/sumelms/website/edit/master/website/${versionDocsDirPath}/${docPath}`;
          },
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        label: 'English',
      },      
      pt: {
        label: 'Português',
      }
    },
  },
};
