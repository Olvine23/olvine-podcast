module.exports = {
  siteMetadata: {
    siteUrl: "https://olvinepodcast.gatsbyjs.io",
    title: "OlvineGeorge",
  },
  plugins: [ 
            { 
              resolve: "gatsby-plugin-theme-ui",
              options: {
                prismPrset:'night-owl',
                preset: '@theme-ui/preset-funk',
              }
            },
            "gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
             {
               resolve:"gatsby-plugin-mdx",
               options: {
                  gatsbyRemarkPlugins: [
                    {
                      resolve:"gatsby-remark-images",
                      options:{
                        maxWidth:650,
                        quality:60,

                      },
                    },
                  ],
               },
             },
             {
               resolve:"gatsby-source-filesystem",
               options:{

                path: `${__dirname}/blogs/`
               },
             },

            
            {
              resolve:"gatsby-source-filesystem",
              options:{
                name:"blog",
                path:`${__dirname}/blogs`
              },
            },
          
          ],
};
 