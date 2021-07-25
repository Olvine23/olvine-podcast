import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby';

const Blog = ({data}) => {
    console.log(data)
    return(
        <Layout pageTitle = 'Blogs' pageHeading = 'Bulogs'>
            <p>Hello</p>
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