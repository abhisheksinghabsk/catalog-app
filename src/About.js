import { Link } from "react-router-dom";
import Clock from "./clock";

function About() {
  return (
    <div>
      <div className="navbar">
        <div className="catalog-z">
          <i class="fas fa-film"></i>Catalog-z
        </div>
        <div className="nav">
          <Link to="/">Photos</Link>

          <Link to="/video">Videos</Link>

          {/* <a href="#About"> About </a> */}
          <Link to="/about">About</Link>

          {/* <a href="#Contact"> Contact </a> */}
          <Link to="/contact">Contact</Link>

        </div>
      </div>
      <div className="loaded"></div>
      <div className="latest">
        <div>
          <h2>About Catalog-Z Website Template</h2>
        </div>
      </div>

      <div className="about-img">
        <div>
          <img src={require("../src/photos/about.jpg")} alt="img" />
        </div>
        <div className="paragraph">
          <div>
            <p>
              You may support TemplateMo website by making a small contribution
              via PayPal. This will be helpful for us. We hope you like this
              Catalog-Z photo / video template for your website. We are making
              new templates regularly for you. Please come back and visit our
              TemplateMo website again.
            </p>
          </div>
          <div>
            <p>
              Credits go to Pexels and Unsplash for photos and video used in
              this template. Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template
              designed for video and photo websites.
            </p>
          </div>

          <div>
            <p>
              You are allowed to use this template for your commercial or
              non-commercial websites. You can integrate it with any kind of CMS
              website. You are NOT allowed to redistribute the downloadable
              template ZIP file on any template collection website. Please
              contact us for more information. Thank you.
            </p>
          </div>
        </div>
      </div>

      <div className="abt">
        <div className="latest">
          <div>
            <h2>Left side of 2-Column content</h2>
            <div className="paragraph">
              <p>
                Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum
                sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus
                vel augue. Suspendisse vel quam imperdiet, sodales tellus sed,
                ullamcorper lorem.
              </p>
              <p>
                Suspendisse id consequat risus. Aliquam varius posuere nunc, nec
                imperdiet neque condimentum at. Aenean porta eleifend venenatis.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus
              </p>
            </div>
          </div>
          <div>
            <h2>Right-side Title goes here</h2>
            <div className="paragraph">
              <p>
                Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum
                sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus
                vel augue. Suspendisse vel quam imperdiet, sodales tellus sed,
                ullamcorper lorem.
              </p>
              <p>
                Suspendisse id consequat risus. Aliquam varius posuere nunc, nec
                imperdiet neque condimentum at. Aenean porta eleifend venenatis.
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab">

        <div className="tablate">
          <i class="fas fa-desktop"></i>
         
        </div>

        <div className="tablate">
        <i class="fas fa-mobile-alt"></i>
                </div>

        <div className="tablate">
          <i class="fas fa-photo-video"></i>{" "}
        </div>
      </div>

      <div className="over">
        <div>
          <h2>About Catalog-Z</h2>
          <p>
            Catalog-Z is free Bootstrap 5 Alpha 2 HTML Template for video and
            photo websites. You can freely use this TemplateMo layout for a
            front-end integration with any kind of CMS website.
          </p>
        </div>
        <div>
          <h2>Our Links</h2>
          <ul>
            <li>Advertise</li>
            <li>Support</li>
            <li>Our company</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="social-media">
            <div className="mda">
              <a href="https://www.facebook.com">
                <i class="fab fa-facebook-f"> </i>{" "}
              </a>
            </div>{" "}
            <div className="mda">
              <a href="https://twitter.com">
                <i class="fab fa-twitter"> </i>{" "}
              </a>
            </div>{" "}
            <div className="mda">
              <a href="https://www.instagram.com/vicky.absk/">
                <i class="fab fa-instagram"> </i>{" "}
              </a>
            </div>{" "}
            <div className="mda">
              <i class="fab fa-linkedin-in"> </i>{" "}
            </div>{" "}
          </div>{" "}
          <ul>
            <li>Terms and Condition</li>
            <li>Privacy and Policy</li>
          </ul>
        </div>
      </div>
      <footer>
        <div className="footer">
          <b>
            <span className="brown"> ©Your Site Name. </span>{" "}
          </b>{" "}
          All Rights Reserved.Designed by{" "}
          <b>
            <span className="brown"> HTML Codex </span>{" "}
          </b>{" "}
        </div>{" "}
      </footer>
    </div>
  );
}
export default About;
