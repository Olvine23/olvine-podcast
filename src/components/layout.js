import { Link, useStaticQuery, graphql } from 'gatsby';
import * as React from 'react';
import "@fontsource/open-sans";
import {Box} from 'theme-ui';

 
import {container, pink, siteTitle, nav} from  '../components/layout.module.css';


  

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
        {/* <Link to = "/"><p className = {siteTitle}>{data.site.siteMetadata.title}</p></Link>  */}
         <nav className ={nav}>
             <ul>
                 <li><Link  to = "/">Home</Link></li>
                 <li><Link to = "/blog">My Blogs</Link></li>
                 <li><Link to = "/about">About Me</Link></li>
                 <li><Link to = "/contact">Contact Me</Link></li>
                 
             </ul>
         </nav>
         <Link to ="/"><h1 className ={pink}>{pageHeading}</h1></Link>
         <hr></hr>
         {children}
         {/* <Box as="header" sx={{ bg: "highlight", mb: "1.45rem" }}>
      <Box
        as="div"
        sx={{
          m: "0 auto",
          maxWidth: "640px",
          p: "1.45rem 1.0875rem",
        }}
      >
        <Link to="/">
          <h3>side</h3>
        </Link>
        <Box as="p" variant="styles.p">
          <p>Hello world</p>
        </Box>
      </Box>
    </Box> */}
          
         <footer>
             &copy; 2021 Olvine George
         </footer>
        </main>
    )
}

export default Layout;