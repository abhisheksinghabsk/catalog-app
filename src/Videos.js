import { Link } from "react-router-dom";
import Clock from "./clock";

function Videos() {
  return (
    <div>
      <div className="navbar">
        <div className="catalog-z">
          <i class="fas fa-film"></i>Catalog-z
        </div>
        <div className="nav">
          <Link to="/">Photos</Link>

          <Link to="/video">Videos</Link>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          {/* <a href="#Contact"> Contact </a> */}
        </div>
      </div>
      <div className="loaded-2">

</div>
<div className="latest">
  <div>
    <h2>Latest Photos</h2>
  </div>

  <div className="page">
    page <div className="one">1</div>of 200
  </div>
</div>
<div className="images">
        <Clock cimg={require("../src/photos/img-01.jpg")} />
        <Clock cimg={require("../src/photos/img-04.jpg")} />
        <Clock cimg={require("../src/photos/img-05.jpg")} />
        <Clock cimg={require("../src/photos/img-03.jpg")} />
      </div>
      <div className="images">
        <Clock cimg={require("../src/photos/img-02.jpg")} />
        <Clock cimg={require("../src/photos/img-06.jpg")} />
        <Clock cimg={require("../src/photos/img-07.jpg")} />
        <Clock cimg={require("../src/photos/img-08.jpg")} />
      </div>
      <div className="images">
        <Clock cimg={require("../src/photos/img-09.jpg")} />
        <Clock cimg={require("../src/photos/img-10.jpg")} />
        <Clock cimg={require("../src/photos/img-11.jpg")} />
        <Clock cimg={require("../src/photos/img-12.jpg")} />
      </div>
      <div className="images">
        <Clock cimg={require("../src/photos/img-13.jpg")} />
        <Clock cimg={require("../src/photos/img-14.jpg")} />
        <Clock cimg={require("../src/photos/img-15.jpg")} />
        <Clock cimg={require("../src/photos/img-16.jpg")} />
      </div>
      <div className="buttons">
        <div>
          <button className="button-not">Previous</button>
        </div>
        <div>
          <button className="button">1</button>
          <button className="button">2</button>
          <button className="button">3</button>
          <button className="button">4</button>
        </div>
        <div>
          <button className="button">Next Page</button>
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
export default Videos;
