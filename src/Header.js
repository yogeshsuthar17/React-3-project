import React from "react";
function Header()
{
    return(
        <React.Fragment>
            
              {/* <div id="container"> */}
    <img src="images/sun.png" alt="sunshine" />
    <div id="main">
    
        <div id="logo">
          <div id="logo_text">
            <h1><a href="index.html">CSS3<span className="logo_colour">_five</span></a></h1>
            <h2>Simple. Contemporary. Website Template.</h2>
          </div>
          <div id="logo_text2">
            <h3>Telephone</h3>
            <h4>0100 123 456</h4>
          </div>
        </div>
      
        <nav>
          <ul className="sf-menu" id="nav">
            <li><a href="index.html">Home</a></li>
            <li><a href="examples.html">Examples</a></li>
            <li><a href="page.html">A Page</a></li>
            <li><a href="another_page.html">Another Page</a></li>
            <li><a href="#">Example Drop Down</a>
              <ul>
                <li><a href="#">Drop Down One</a></li>
                <li><a href="#">Drop Down Two</a>
                  <ul>
                    <li><a href="#">Sub Drop Down One</a></li>
                    <li><a href="#">Sub Drop Down Two</a></li>
                    <li><a href="#">Sub Drop Down Three</a></li>
                    <li><a href="#">Sub Drop Down Four</a></li>
                    <li><a href="#">Sub Drop Down Five</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down Three</a></li>
                <li><a href="#">Drop Down Four</a></li>
                <li><a href="#">Drop Down Five</a></li>
              </ul>
            </li>
            <li><a href="contact.php">Contact Us</a></li>
          </ul>
        </nav>
    
        
    {/* </div> */}
    </div>
    </React.Fragment>



        



    )}
export default Header;