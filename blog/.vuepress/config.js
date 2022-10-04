const { description } = require("../../package");

module.exports = {
  title: "dan-gee.co.uk",
  description: description,
  theme: "@vuepress/theme-blog",
  themeConfig: {
    sitemap: {
      hostname: "https://dgee2.github.io",
    },
    feed: {
      canonical_base: "https://dgee2.github.io",
    },
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/dgee2",
        },
        {
          type: "twitter",
          link: "https://twitter.com/DanielGee",
        },
        {
          type: "linkedin",
          link: "https://www.linkedin.com/in/daniel-gee-32816a23",
        },
        {
          type: "facebook",
          link: "https://www.facebook.com/dgee2",
        },
      ],
      copyright: [
        {
          text: `Daniel Gee © ${new Date().getFullYear()}`,
          link: "",
        },
      ],
    },
    smoothScroll: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
  ],
};
