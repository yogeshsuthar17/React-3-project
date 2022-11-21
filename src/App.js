
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';



function App() {

  return (
    <React.Fragment>
      <div id="container">
      <Header/>
      <div id="main">
     
      <div id="site_content">
        <div id="sidebar_container">
          <div className="sidebar">
            <h4>New Website Launched</h4>
            <h5>January 1st, 2012</h5>
            <p>2012 sees the redesign of our website. Let us know what you think..... <a href="#">read more</a></p>
          </div>
          <div className="sidebar">
            <h4>20% Discount</h4>
            <p>For the month of March 2012, we are offering a 20% discount for all new customers.</p>
          </div>
          <div className="sidebar">
            <h4>Contact Us</h4>
            <p>We'd love to hear from you. Call us, <a href="#">email us</a> or complete our <a href="contact.php">contact form</a>.</p>
          </div>
        </div>
        <div id="content">
          <h1>Welcome to CSS3<span className="logo_colour">_five</span></h1>
          <img id='pk' src="images/photo.png" alt="photo" />
          <p>This simple, fixed width website template is released under a <a href="http://creativecommons.org/licenses/by/3.0">Creative Commons Attribution 3.0 Licence</a>. This means you are free to download and use it for personal and commercial projects. However, you <strong>must leave the 'design from css3templates.co.uk' link in the footer of the template</strong>.</p>
          <p>This template is written entirely in <strong>HTML5</strong> and <strong>CSS3</strong>.</p>
          <p>You can view more free CSS3 web templates <a href="http://www.css3templates.co.uk">here</a>.</p>
          <p>This template is a fully documented 5 page website, with an <a href="examples.html">examples</a> page that gives examples of all the styles available with this design. There is also a working PHP contact form on the contact page.</p>
          <h2>Browser Compatibility</h2>
          <p>This template has been tested in the following browsers:</p>
          <p>Internet Explorer 8, Internet Explorer 7, FireFox 10, Google Chrome 17, Safari 4.</p>
        </div>
      </div>
      <Footer/>
      </div>
      </div>
    

  <div id="grass"></div>
  
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.easing-sooper.js"></script>
  <script type="text/javascript" src="js/jquery.sooperfish.js"></script>
  <script type="text/javascript">
    {/* $(document).ready(function() {
      $('ul.sf-menu').sooperfish()
    }); */}
  </script>


    </React.Fragment>
    
  );
}

export default App;
