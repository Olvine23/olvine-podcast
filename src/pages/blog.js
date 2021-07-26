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
                {data.allFile.nodes.map(node => {
                    return <li key = {node}>{node.name}</li>

                })}
            </ul>
           
        </Layout>

    );
};

export const query = graphql`
query{
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
  

`

export default Blog;