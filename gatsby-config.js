/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
 siteMetadata: {
   title: "Fynance",
   description: "Fynance website",
   keywords: "fynance, career, projects",
   image: "/static/images/about-us.png",
   url: "http://fynance.com/"
 },
 plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: `gatsby-transformer-remark`
  },
  {
    resolve: `gatsby-source-wordpress`, options: {
      baseUrl: `ventoji.es`,
      protocol: `http`,
      hostingWPCOM: false
    }
  },
  'gatsby-plugin-react-helmet'
],
}

/*     
  <Helmet>
      <title> Fynance</title>
      <meta name="description" content="Fynance website" />
      <meta name="keywords" content="fynance, career, projects" />
      <meta name="robots" content="index,follow"> </meta>
    </Helmet>
*/
