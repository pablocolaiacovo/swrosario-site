module.exports = {
  siteMetadata: {
    title: `Startup Weekend Rosario 2022 | 54hs De Pura Acción`,
    description: `En solo 54 hs vas a experimentar toda las sensaciones de una Startup! Si tenés una idea o simplemente te gustaría contribuir en la creación de un startup, te invitamos a participar de esta increíble experiencia.`,
    author: `@swrosario_`,
    siteUrl: "https://www.startupweekendrosario.com",
    previewImage: `src/images/sw-icon.png`,
    socialLinks: [
      { url: `https://twitter.com/swrosario_`, icon: `fa-twitter` },
      { url: `https://www.instagram.com/swrosario_`, icon: `fa-instagram` },
      { url: `https://www.facebook.com/startupweekendrosario`, icon: `fa-facebook-square`},
      { url: `https://www.linkedin.com/company/startupweekendrosario/`, icon: `fa-linkedin-square`},
    ],
    footerLinks: [
      {
        url: `https://docs.google.com/document/d/1RMWd1sMcNPxbGCKU5a5YMO7XOM4P_3jjGz64keW8_p4/edit`,
        text: `Kit de prensa`,
      },
      { url: `https://forms.gle/oRK2sDHKi6fP3HGb9`, text: `Newsletter` },
      { url: `mailto:rosario@startupweekend.org`, text: `Contacto` },
    ],
    hashtags: ["SWR22", "SWRosario"],
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
        background_color: `#E9A40B`,
        theme_color: `#E9A40B`,
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
