module.exports = {
  title: "Sumé LMS",
  tagline: "Evolving Education.",
  url: "https://www.sumelms.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sumelms", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Sumé LMS Logo",
        src: "img/logo.svg",
        position: "left",
      },
      links: [
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
              to: "docs/doc2/",
            },
            {
              label: "The Team",
              to: "docs/",
            },
            {
              label: "Contact Us",
              to: "docs/doc2/",
            },
            {
              label: "Become Partnes",
              to: "docs/doc2/",
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
              href: "https://github.com/sumelms",
            },
            {
              label: "Creators Manual",
              href: "https://github.com/sumelms",
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
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
