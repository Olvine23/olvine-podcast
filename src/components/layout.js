import { Link } from 'gatsby';
import * as React from 'react';
import {container} from  '../components/layout.module.css';
console.log(container)

const Layout = ({pageTitle,pageHeading,children}) => {
    return(
        <main className = {container}>
        <title>{pageTitle}</title>
         <nav>
             <ul>
                 <li><Link to = "/">Home</Link></li>
                 <li><Link to = "/about">About Me</Link></li>
                 <li><Link to = "/contact">Contact Me</Link></li>
             </ul>
         </nav>
         <h1>{pageHeading}</h1>
         {children}
         <footer>
             &copy; 2021 Olvine George
         </footer>
        </main>
    )
}

export default Layout;