import { Link } from "react-router-dom";
import Clock from "./clock";

function Contact() {
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
        </div>
      </div>
      <div className="loaded"></div>
      <div className="info">
        <div className="latest">
          <div>
            <h2>Contact Page</h2>
          </div>
          <div>
            <form className="form">
              <label>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <br />

              <input type="email" name="email" placeholder="Email" />
              <br />
              <select name="inquiry" id="contact-select" placeholder="Subject">
                <option value="-">Subject</option>
                <option value="sales">Sales & Marketing</option>
                <option value="creative">Creative Design</option>
                <option value="uiux">UI / UX</option>
              </select>
              <br />
              <textarea
                rows="4"
                cols="40"
                name="comment"
                form="usrform"
                placeholder="Enter text"
              ></textarea>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>

        <div className="latest">
          <div>
            <h2>Our Address</h2>
          </div>
          <div className="paragraph">
            <p>
              Quisque eleifend mi et nisi eleifend pretium. Duis porttitor
              accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget
              vestibulum purus
            </p>
          </div>
          <div className="paragraph">
            <p>
              Quisque eleifend mi et nisi eleifend pretium. Duis porttitor
              accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget
              vestibulum purus
            </p>
          </div>
          <div className="paragraph">
            <p>
              120-240 Fusce eleifend varius tempus Duis consectetur at ligula
              10660
            </p>
          </div>
          <div className="site">
            <p>
              <i class="fas fa-envelope"></i> Email: osizone@gmail.com
            </p>
          </div>
          <div className="site">
            <p>
              <i class="fas fa-phone-alt"></i> Call: 1234567890
            </p>
          </div>
          <div className="site">
            <p>
              <i class="fas fa-globe"></i> URL: www.osizone.com
            </p>
          </div>
        </div>

        <div className="latest">
          <div>
            <h2>Our Location</h2>
          </div>
        </div>
      </div>
      <div className="officer">
        <div>
          <div>
            <img src={require("../src/photos/people-1.jpg")} alt="img" />
          </div>
          <div className="person">
            <div className="paragraph">
              <h2>Ryan White</h2>
            </div>
            <div className="paragraph">
              <h4>Chief Executive Officer</h4>
            </div>
            <div className="paragraph">
              <p>
                Mauris ante tellus, feugiat nec metus non, bibendum semper
                velit. Praesent laoreet urna id tristique fermentum. Morbi
                venenatis dui quis diam mollis pellentesque.
              </p>
            </div>
            <div className="social-media">
              <div className="mda">
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"> </i>{" "}
                </a>
              </div>
              <div className="mda">
                <a href="https://www.instagram.com/vicky.absk/">
                  <i class="fab fa-instagram"> </i>{" "}
                </a>
              </div>{" "}
              <div className="mda">
                <i class="fab fa-linkedin-in"> </i>{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={require("../src/photos/people-2.jpg")} alt="img" />
          </div>
          <div className="person">
            <div className="paragraph">
              <h2>Ryan White</h2>
            </div>
            <div className="paragraph">
              <h4>Chief Executive Officer</h4>
            </div>
            <div className="paragraph">
              <p>
                Mauris ante tellus, feugiat nec metus non, bibendum semper
                velit. Praesent laoreet urna id tristique fermentum. Morbi
                venenatis dui quis diam mollis pellentesque.
              </p>
            </div>
            <div className="social-media">
              <div className="mda">
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"> </i>{" "}
                </a>
              </div>
              <div className="mda">
                <a href="https://www.instagram.com/vicky.absk/">
                  <i class="fab fa-instagram"> </i>{" "}
                </a>
              </div>{" "}
              <div className="mda">
                <i class="fab fa-linkedin-in"> </i>{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={require("../src/photos/people-3.jpg")} alt="img" />
          </div>
          <div className="person">
            <div className="paragraph">
              <h2>Ryan White</h2>
            </div>
            <div className="paragraph">
              <h4>Chief Executive Officer</h4>
            </div>
            <div className="paragraph">
              <p>
                Mauris ante tellus, feugiat nec metus non, bibendum semper
                velit. Praesent laoreet urna id tristique fermentum. Morbi
                venenatis dui quis diam mollis pellentesque.
              </p>
            </div>
            <div className="social-media">
              <div className="mda">
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"> </i>{" "}
                </a>
              </div>
              <div className="mda">
                <a href="https://www.instagram.com/vicky.absk/">
                  <i class="fab fa-instagram"> </i>{" "}
                </a>
              </div>{" "}
              <div className="mda">
                <i class="fab fa-linkedin-in"> </i>{" "}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={require("../src/photos/people-4.jpg")} alt="img" />
          </div>
          <div className="person">
            <div className="paragraph">
              <h2>Ryan White</h2>
            </div>
            <div className="paragraph">
              <h4>Chief Executive Officer</h4>
            </div>
            <div className="paragraph">
              <p>
                Mauris ante tellus, feugiat nec metus non, bibendum semper
                velit. Praesent laoreet urna id tristique fermentum. Morbi
                venenatis dui quis diam mollis pellentesque.
              </p>
            </div>
            <div className="social-media">
              <div className="mda">
                <a href="https://www.facebook.com">
                  <i class="fab fa-facebook-f"> </i>{" "}
                </a>
              </div>
              <div className="mda">
                <a href="https://www.instagram.com/">
                  <i class="fab fa-instagram"> </i>{" "}
                </a>
              </div>{" "}
              <div className="mda">
                <i class="fab fa-linkedin-in"> </i>{" "}
              </div>
            </div>
          </div>
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
      {/* return */}
    </div>
  );
}
export default Contact;
