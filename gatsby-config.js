module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "sos-project",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "\u0016http://localhost:10018/",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
