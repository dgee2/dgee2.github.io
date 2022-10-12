const { name, description } = require("../../package");

module.exports = {
  title: name,
  description: description,
  theme: "@vuepress/theme-blog",
  head: [
    [
      "script",
      { type: "text/javascript" },
      `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "e1g2hgog5e");`,
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-V1DTD02KYD",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-V1DTD02KYD');`,
    ],
  ],
  themeConfig: {
    sitemap: {
      hostname: "https://www.dan-gee.co.uk",
    },
    feed: {
      canonical_base: "https://www.dan-gee.co.uk",
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
    [
      "@vuepress/google-analytics",
      {
        ga: "G-V1DTD02KYD",
      },
    ],
  ],
};
