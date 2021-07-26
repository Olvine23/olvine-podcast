import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image'
import {list } from '../components/layout.module.css'
import {MDXRenderer} from 'gatsby-plugin-mdx'


const Blog = ({data}) => {
    console.log(data)
    return(
        <Layout pageTitle = 'Blogs' pageHeading = 'Blogs'>
            <p>Hello</p>
          
                {data.allMdx.nodes.map(node => {
                    return  <article key = {node.frontmatter.title}>
                   <h2> {node.frontmatter.title}</h2>
                    <p> {node.frontmatter.date} </p>

                    <StaticImage   placeholder = "blurred" src ="../images/okay.jpg" height= {200} width ={300} />


                   <MDXRenderer>
                    {node.body}
                    </MDXRenderer>
                    
                    </article>

                })}
           
           
        </Layout>

    );
};

export const query = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        date(formatString: " dddd, MMMM Do YYYY")
        title
      }
      id
      body
    }
  }
}
  

`

export default Blog;