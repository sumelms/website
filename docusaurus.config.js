/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Sumé LMS",
  tagline: "A fast, modern, data-driven online education platform designed to maximize the learning and exchange of knowledge between people.",
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
      "A fast, modern, data-driven online education platform designed to maximize the learning and exchange of knowledge between people.",
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
              label: "Contributing",
              to: "docs/contributing",
            },
            {
              label: "Code of Conduct",
              to: "docs/conduct",
            },
            {
              label: "Become Partner",
              to: "docs/partners",
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
    gtag: {
      trackingID: 'G-6YETQHVNX1',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    }
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
