// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: "Welcome to Ankr Docs",
    tagline: "Your single-source-of-truth on Ankr products and services",
    url: "https://docs.ankr.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "ankr-network", // Usually your GitHub org/user name.
    projectName: "Ankr-docs", // Usually your repo name.
    stylesheets: [
      "https://fonts.googleapis.com/css?family=Raleway|Source+Code+Pro",
      "https://at-ui.github.io/feather-font/css/iconfont.css",
    ],
    scripts: [
      {
        src: 'https://crypto.com/price/static/widget/index.js',
        defer: true,
      },
    ],
    presets: [
      [
        "@docusaurus/preset-classic",
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve("./sidebars.js"),
            // Please change this to your repo.
            editUrl: "https://github.com/ankr-network/ankr-docs",
          },
          theme: {
            customCss: require.resolve("./static/css/custom.css"),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        colorMode: {
          disableSwitch: true,
        },
        navbar: {
          title: "Docs",
          logo: {
            alt: "Ankr Logo",
            src: "img/ankr-logo.svg",
          },
          items: [
            {
              type: "dropdown",
              label: "About",
              position: "right",
              items: [
                {
                  to: "docs/whatisankr/about-ankr",
                  label: "About Ankr",
                },
                {
                  to: "docs/whatisankr/ankr-approach",
                  label: "Ankr Principles",
                },
                {
                  to: "docs/whatisankr/ankr-vision",
                  label: "Ankr Vision",
                },
                {
                  to: "docs/whatisankr/ankr-solutions",
                  label: "Ankr Solutions",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Build",
              position: "right",
              items: [
                {
                  to: "docs/category/concepts",
                  label: "Concepts",
                },
                {
                  to: "docs/category/get-started",
                  label: "Get Started",
                },
                {
                  to: "docs/category/chains-v2",
                  label: "Chains",
                },
                {
                  to: "docs/category/guides",
                  label: "Guides",
                },
                {
                  to: "docs/Build/Support/get-support",
                  label: "Support",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Earn",
              position: "right",
              items: [
                {
                  to: "docs/category/earn-concepts",
                  label: "Concepts",
                },
                {
                  to: "docs/category/earn-guides",
                  label: "Guides",
                },
                {
                  to: "docs/category/earn-products",
                  label: "Products",
                },
                {
                  to: "docs/category/earn-ecosystem",
                  label: "Ecosystem",
                },
                {
                  to: "docs/category/reference",
                  label: "Reference",
                },
                {
                  to: "docs/category/support",
                  label: "Support",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Tokens & Governance",
              position: "right",
              items: [
                {
                  to: "docs/Tokens&Governance/about-ankr-tokens",
                  label: "Overview",
                },
                {
                  to: "docs/Tokens&Governance/governance",
                  label: "Governance",
                },
                {
                  to: "docs/Tokens&Governance/tokenomics",
                  label: "Tokenomics",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Community",
              position: "right",
              items: [
                {
                  to: "docs/Community/channels",
                  label: "Community Channels",
                },
                {
                  to: "docs/Community/contribute",
                  label: "Contribute",
                },
                {
                  to: "docs/Community/grants",
                  label: "Grants",
                },
              ],
            },
            {
              type: "dropdown",
              label: "Resources",
              position: "right",
              items: [
                {
                  to: "docs/Resources/key-principles/key-principles",
                  label: "Key Principles",
                },
                {
                  to: "docs/Resources/guides/guides",
                  label: "Guides",
                },
                {
                  to: "docs/Resources/glossary",
                  label: "Glossary",
                },
              ],
            },
          ],
        },
      }),
  }
);
