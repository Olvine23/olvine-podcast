import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
 
import {container, pink, siteTitle} from  '../components/layout.module.css';


  

const Layout = ({pageTitle,pageHeading,children}) => {

    const data = useStaticQuery(graphql`
            query MyQuery {
                site {
                siteMetadata {
                    title
                }
                }
            }      
            `);
    return(
        <main className = {container}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <p className = {siteTitle}>{data.site.siteMetadata.title}</p>
         <nav>
             <ul>
                 <li className = {pink}><Link  to = "/">Home</Link></li>
                 <li><Link to = "/blog">My Blogs</Link></li>
                 <li><Link to = "/about">About Me</Link></li>
                 <li><Link to = "/contact">Contact Me</Link></li>
                 
             </ul>
         </nav>
         <h1 className ={pink}>{pageHeading}</h1>
         {children}
          
         <footer>
             &copy; 2021 Olvine George
         </footer>
        </main>
    )
}

export default Layout;