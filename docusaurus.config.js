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
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
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
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://medium.com/sumelms",
            },
            {
              label: "GitHub",
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
