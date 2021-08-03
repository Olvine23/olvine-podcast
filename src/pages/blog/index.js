import * as React from 'react'
import Layout from '../../components/layout'
import {Link, graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image'
// import {blogs} from '../../components/layout.module.css'
import {MDXRenderer} from 'gatsby-plugin-mdx'


const Blog = ({data}) => {
    console.log(data)
    return(
        <Layout pageTitle = 'Blogs' pageHeading = 'Blogs'>
               {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <Link to={`/blog/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <hr></hr>
          </article>
        ))
      }
    </Layout>

    );
};

export const query = graphql`
query  {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: " dddd, MMMM Do YYYY")
        title
      }
      id
      slug
    }
  }
}


`

export default Blog;