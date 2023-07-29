import React from 'react';
import Header from './Header';
import './AboutPage.css'; // Import your CSS file for AboutPage styling
import Footer from './Footer';


export function  AboutPage () {
  return (
    <div>
        <Header/>
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are a dedicated team of professionals
        passionate about providing high-quality products/services to our
        customers. Our mission is to deliver excellence and customer satisfaction
        in everything we do.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales
        orci et ipsum aliquet, ac rhoncus est fringilla. Nam gravida blandit mi,
        eu facilisis nibh fermentum eu. Praesent rhoncus mauris eu enim euismod,
        ut varius velit facilisis. Suspendisse sit amet tristique quam. Nam
        venenatis nulla sit amet massa faucibus, nec bibendum nisi vulputate.
      </p>
      <p>
        Sed elementum libero eget nulla ultrices euismod. Sed fermentum quam sit
        amet odio consequat, quis varius turpis facilisis. Vestibulum sed sem
        fringilla, posuere velit vel, posuere sapien. Suspendisse fringilla
        facilisis diam, auctor pharetra odio rhoncus eu.
      </p>
      <h2>Our Team</h2>
      <p>
        We have assembled a talented and diverse team of experts in their
        respective fields. Each team member brings unique skills and experiences
        to help us achieve our goals and serve our customers better.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales
        orci et ipsum aliquet, ac rhoncus est fringilla. Nam gravida blandit mi,
        eu facilisis nibh fermentum eu. Praesent rhoncus mauris eu enim euismod,
        ut varius velit facilisis. Suspendisse sit amet tristique quam. Nam
        venenatis nulla sit amet massa faucibus, nec bibendum nisi vulputate.
      </p>
    </div>
    <Footer />
    </div>
  );
};

