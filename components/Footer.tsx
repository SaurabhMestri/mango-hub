import Image from "next/image";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-left">
            <Image
              src="/images/new-logo.png"
              alt="logo"
              width={100}
              height={100}
            />
            <p>
              The whole world best quality Alphonso mangoes come from Maharastra.
              
            </p>
            <div className="social-icon">
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-google"></a>
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <li>+919860176395</li>
            <li>mangohub27@gmail.com</li>
          </div>
        </div >
        <p className="copyright-content">Mango Hub &copy; Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
