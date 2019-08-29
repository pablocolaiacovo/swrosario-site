module.exports = {
  siteMetadata: {
    title: `Startup Weekend Rosario 2019 | 54hs De Pura Acción`,
    description: `En solo 54 hs vas a experimentar toda las sensaciones de una Startup! Si tenés una idea o simplemente te gustaría contribuir en la creación de un startup, te invitamos a participar de esta increíble experiencia.`,
    author: `@swrosario_`,
    siteUrl: "https://www.startupweekendrosario.com",
    previewImage: `src/images/sw-icon.png`,
    socialLinks: [
      { url: `https://twitter.com/swrosario_`, icon: `fa-twitter` },
      { url: `https://www.instagram.com/swrosario_`, icon: `fa-instagram` },
      {
        url: `https://www.facebook.com/startupweekendrosario`,
        icon: `fa-facebook-square`,
      },
    ],
    footerLinks: [
      {
        url: `https://drive.google.com/drive/folders/1j4Bv6K8VD0e8UTLtW6JITAN_fcfhDKpZ`,
        text: `Kit de prensa`,
      },
      { url: `https://goo.gl/forms/FcaELBy7KDrITkap2`, text: `Newsletter` },
      { url: `mailto:rosario@startupweekend.org`, text: `Contacto` },
    ],
    hashtags: ["SWRWomenEdition", "WomenPower", "WomenEdition"],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/sw-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.startupweekendrosario.com",
        sitemap: "https://www.startupweekendrosario.com/sitemap.xml",
        resolveEnv: () => process.env.GATSBY_ACTIVE_ENV,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
