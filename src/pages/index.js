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
    <StaticImage height = {400} layout = "fixed" src ="https://images.unsplash.com/photo-1567596275753-92607c3ce1ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHBvZGNhc3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
    <StaticImage width = {400} layout ="fixed" height = { 400} placeholder = "blurred" src ="../images/okay.jpg" />


     <p>I love this vscode github theme</p>
     <Link to = "about">About Me</Link>
     </Layout>
    
  );
 };

 export default HomePage;