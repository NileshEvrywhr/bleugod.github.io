require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `nilesh`,
    siteTitleAlt: `nilesh kumar's website`,
    siteHeadline: `nilesh kumar's website`,
    siteUrl: `https://elegant-borg-d05721.netlify.app/`,
    siteDescription: `blogs about hacking and security, sometimes other disciplines too`,
    siteLanguage: `en`,
    siteImage: `./banner.jpg`,
    author: `@knilesh_`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `YouTube`,
            url: `https://www.youtube.com/channel/UCDPM7ajDWA4Tk-r4jzfxwqw`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/nileshevrywhr/`,
          },
          {
            name: `Twitter`,
            url: `https://twitter.com/nileshevrywhr`,
          },
          {
            name: `Github`,
            url: `https://github.com/NileshEvrywhr/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID || "none",
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nilesh kumar - security technology society`,
        short_name: `minimal-blog`,
        description: `web log about hacking sometimes other disciplines`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-icon-192x192`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
