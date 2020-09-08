module.exports = {
  siteMetadata: {
    title: "WrittenMinds // Children's English tutor and free Worksheets // United Kingdom",
    description: "Writtenminds provides creative teachinsg resources that engage children through practical writing tasks and tutoring.",
    url: "https://presencecounselling.co.uk",
    siteUrl: "https://presencecounselling.co.uk",
    image: "/social_image.jpg"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Presence Counselling`,
        short_name: `Presence`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#1F3EEA`,
        icon: `static/favicon.png`
      }
    }
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-background-image`,
    `simple-react-lightbox`,
    `typewriter-effect`,
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
