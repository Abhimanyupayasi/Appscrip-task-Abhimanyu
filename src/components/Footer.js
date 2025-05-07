// components/Footer.jsx

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="newsletter-input">
              <input type="email" placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <div className="footer-currency">
              <h3>CURRENCY</h3>
              <p>USD</p>
              <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <div className="footer-links">
            <div className="footer-links-left">
              <h4>mettä muse</h4>
              <ul>
                <li>About Us</li>
                <li>Stories</li>
                <li>Artisans</li>
                <li>Boutiques</li>
                <li>Contact Us</li>
                <li>EU Compliances Docs</li>
              </ul>
            </div>
            <div>
              <h4>QUICK LINKS</h4>
              <ul>
                <li>Orders & Shipping</li>
                <li>Join/Login as a Seller</li>
                <li>Payment & Pricing</li>
                <li>Return & Refunds</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <h4>FOLLOW US</h4>
            <div className="icons">
                <img src="/insta-link.svg" alt="social-meadia" />
            </div>
            <h4>mettä muse ACCEPTS</h4>
            <div className="payment-icons">
             <img src="/payments.svg" alt="Payment Methods" />
            </div>
          </div>
        </div>
  
        <p className="copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  