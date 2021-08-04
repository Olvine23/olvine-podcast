module.exports = {
  siteMetadata: {
    siteUrl: "https://olvinepodcast.gatsbyjs.io",
    title: "OlvineGeorge",
  },
  plugins: [
            "gatsby-plugin-gatsby-cloud",
            "gatsby-plugin-image",
            "gatsby-plugin-sharp",
            "gatsby-transformer-sharp",
             {
               resolve:"gatsby-transformer-remark",
               options: {
                 plugins: [
                   {
                    resolve:"gatsby-remark-images",
                    options: {
                      maxWidth:590,
                    },
                   }

                 ]
               },
             },

            
            {
              resolve:"gatsby-source-filesystem",
              options:{
                name:"blog",
                path:`${__dirname}/blogs`
              },
            },
            "gatsby-plugin-mdx",

  
          
          ],
};
 