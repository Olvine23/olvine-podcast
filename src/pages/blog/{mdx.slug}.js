import * as React from 'react'
import Layout from  '../../components/layout'
import { graphql } from 'gatsby' 
import {MDXRenderer} from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
    return (
     <Layout pageTitle={data.mdx.frontmatter.title}>
        <p>Blog Posts</p>
        <p>{data.mdx.frontmatter.date}</p>
        <p>Another</p>
        <MDXRenderer>

            {data.mdx.body}
        </MDXRenderer>
        
    </Layout>
    )};

export const query = graphql`
query  {
    mdx(id: {eq: "id"}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
}
  


`

export default BlogPost;
