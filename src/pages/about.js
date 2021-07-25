import * as React from 'react';
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'


const About = () => {
    return (
    <Layout pageHeading = 'About' pageHeading = 'About Me' >
    <p>This is a page that describes Me</p>
    <p>Olvine George</p>
    <StaticImage placeholder = "blurred" src ="../images/olvine.JPG" height= {500} width ={700} />

    <h3>Get In Touch</h3>
    <Link to = "/">Back to home</Link>
    </Layout>
    );
};
export default About;
