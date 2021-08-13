import * as React from "react";
import { Link } from 'gatsby';
import Layout from "../components/layout";
import {StaticImage } from  'gatsby-plugin-image'
import {images, right ,siteTitle, left} from "../components/layout.module.css"
 

 
const HomePage = () => {

  return (
    <Layout pageTitle ='Home' pageHeading = 'Olvine Podcast'>
    <h1>Welcome...</h1>
    <p>Get inspired by various tech articles, level and scale up your dev skills</p>
    <p>Listen to podcasts from the best software developers globally</p>
    
    <StaticImage width = {400} layout ="fixed" height = { 200} placeholder = "blurred" src ="../images/okay.jpg" />

      


     <p>I love this vscode github theme</p>

     <div className = {images}>
     <p className = {left}>
       <h2 className ={siteTitle}>Listen, Get Inspired, Take lessons</h2>
       Anytime, anywhere, set yourself to the pace you so desire with the best convos.
     </p>
      
     <StaticImage width = {900} layout ="fixed" height = { 500} placeholder = "blurred" src ="../images/pods.jpg" />

     
    

      
     </div>
      
     </Layout>
   
    
  );
 };

 export default HomePage;