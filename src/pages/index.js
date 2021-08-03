import * as React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import {StaticImage } from  'gatsby-plugin-image'
 

 
const HomePage = () => {

  return (
    <Layout pageTitle ='Home' pageHeading = 'Olvine Podcast'>
    <h1>Welcome...</h1>
    <p>Get inspired by various tech articles, level and scale up your dev skills</p>
    <p>Listen to podcasts from the best software developers globally</p>
    
    <StaticImage width = {400} layout ="fixed" height = { 400} placeholder = "blurred" src ="../images/okay.jpg" />

      


     <p>I love this vscode github theme</p>
     <Link to = "about">About Me</Link>
      
     </Layout>
   
    
  );
 };

 export default HomePage;