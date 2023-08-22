  import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div class="container">
        <div class="left-side">
          <div class="image-work">
            <img class="img" src="man-picture.jpg" alt="man-picture" />
          </div>
          <div>
            <div class="cv-name">
              MUHAMMAD <span> ASIF </span>
            </div>
          </div>
          <div class="cv-phone">
            <div class="cv-icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="mobile">0315 0278120</div>
          </div>
          <div class="cv-email">
            <div class="cv-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="email">
              asiffareed32b@gmail
              <br />
              .com
            </div>
          </div>
          <div class="cv-location">
            <div class="cv-icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="location">
              33 block nazimabad,
              <br />
              karachi
            </div>
          </div>
          <div class="cv-language">
            <div class="lang-para">
              <p>LANGUAGES</p>
            </div>

            <div class="line"></div>

            <div class="languages">
              <ul>
                <li>English</li>
                <li>Urdu</li>
              </ul>
            </div>
          </div>

          <div class="cv-hobbies">
            <div class="hobi-para">
              <p>HOBBIES</p>
            </div>

            <div class="line"></div>

            <div class="hobbies">
              <ul>
                <li>Watching</li>
                <li>Playing</li>
                <li>Reading</li>
                <li>Coding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
