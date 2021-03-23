module.exports = {
  title: "Sumé LMS",
  tagline: "Evolving Education.",
  url: "https://sumelms.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sumelms", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  i18n: {
    defaultLocale: "pt",
    locales: ["en", "pt"],
  },
  customFields: {
    description:
      "Sumé is a modern, fast, and open-source learning management system.",
  },
  themeConfig: {
    navbar: {
      logo: {
        alt: "Sumé LMS Logo",
        src: "img/logo.svg",
      },
      items: [
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
        {
          href: "https://github.com/sumelms",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      logo: {
        alt: "Facebook Open Source Logo",
        src: "img/logo.svg",
        href: "https://opensource.facebook.com",
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
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
