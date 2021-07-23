import { Link } from 'gatsby';
import * as React from 'react';

const Layout = ({pageTitle,pageHeading}) => {
    return(
        <main>
        <title>{pageTitle}</title>
         <nav>
             <ul>
                 <li><Link to = "/">Home</Link></li>
                 <li><Link to = "/about">About Me</Link></li>
                 <li><Link to = "/contact">Contact Me</Link></li>
             </ul>
         </nav>

         <h1>{pageHeading}</h1>
        </main>
    )
}

export default Layout;