module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-background-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 2400,
              quality: 100,
              withWebp: true,
              loading: 'lazy',
              linkImagesToOriginal: false,
              wrapperStyle: 'overflow: hidden'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -200
      }
    },
    `gatsby-plugin-netlify-cms`
  ],
}
