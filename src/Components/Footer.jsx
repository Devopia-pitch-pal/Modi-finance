import React from "react"

const Footer = () => (
  <footer className="page-footer font-small blue pt-4" style={{ backgroundColor: "#333", color: "#fff" }}>
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">About Finfolio</h5>
          <p>Our mission at FinFolio is to empower individuals to make informed financial decisions and achieve their long-term financial goals. With our comprehensive suite of financial management tools and personalized advice, we help clients navigate the complexities of the financial world and build a secure financial future.</p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-0" />
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Investement</h5>
          <ul className="list-unstyled">
            <li><a href="#!" className="text-white">Automated Investing</a></li>
            <li><a href="#!" className="text-white">Stock Investing</a></li>
            <li><a href="#!" className="text-white">Explore All Investing</a></li>
            <li><a href="#!" className="text-white">Socially Responsible Investing</a></li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Finance</h5>
          <ul className="list-unstyled">
            <li><a href="#!" className="text-white">ATM locator</a></li>
            <li><a href="#!" className="text-white">Bond Portfolio</a></li>
            <li><a href="#!" className="text-white">Save</a></li>
            <li><a href="#!" className="text-white">Expenses</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="text-center py-3" style={{ backgroundColor: "#444" }}>
      © 2024 Copyright:
      <a href="https://mdbootstrap.com/" className="text-white"> FinFolio.com</a>
    </div>
  </footer>
);

export default Footer;
