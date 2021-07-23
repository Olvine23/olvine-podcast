import * as React from "react";
import { Link } from 'gatsby';


const HomePage = () => {

  return (
    <main>
     <h1>Hello Olvine</h1>
     <p>I love this vscode github theme</p>
     <Link to = "about">About Me</Link>
    </main>
  );
 };

 export default HomePage;