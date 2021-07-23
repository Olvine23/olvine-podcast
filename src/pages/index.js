import * as React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";


const HomePage = () => {

  return (
    <Layout pageTitle ='Home' pageHeading = 'Hello Olvine'>

     <p>I love this vscode github theme</p>
     <Link to = "about">About Me</Link>
     </Layout>
    
  );
 };

 export default HomePage;