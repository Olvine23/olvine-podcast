import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby';
import {list } from '../components/layout.module.css'

const Blog = ({data}) => {
    console.log(data)
    return(
        <Layout pageTitle = 'Blogs' pageHeading = 'Blogs'>
            <p>Hello</p>
            <ul className = {list}>
                {data.allMdx.nodes.map(node => {
                    return <li key = {node.name}>{node.frontmatter.title}</li>

                })}
            </ul>
           
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