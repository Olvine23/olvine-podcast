import * as React from 'react'
import Layout from  '../../components/layout'
import {date, blogs}  from '../../components/blog.module.css'
import { graphql } from 'gatsby' 
import {MDXRenderer} from 'gatsby-plugin-mdx'

const BlogPost = ({data}) => {
    return (
     <Layout pageTitle={data.mdx.frontmatter.title} pageHeading = 'Olvine Podcast'>
       <h2>{data.mdx.frontmatter.title}</h2>
        <h5 className = {date}>Posted on: {data.mdx.frontmatter.date}</h5>
        <p className = {blogs}>
        <MDXRenderer  >

          {data.mdx.body}
        </MDXRenderer>
        </p>
        
    </Layout>
    )};

export const query = graphql`
query ($id:String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
    }
    body
  }
}

  


`

export default BlogPost;
