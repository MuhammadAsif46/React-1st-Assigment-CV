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

        <div class="right-side">
        <div class="cv-summary">
          <div>
            <h3>SUMMARY</h3>
          </div>
          <div class="line-black"></div>
          <div class="summary">
            <p>
              Highly motivated Junior Web Developer with experience in building and maintaining web applications.
              Proficient in HTML, CSS, Javscript and Firebase with expertice in Javascript library like React and it`s framework like Next.js.Seeking to join a dynamic team where I can utilize my skills to help drive the success of the orginaization.
            </p>
          </div>
        </div>

        <div class="cv-experience">
            <div>
                <h3>EXPERIENCE</h3>
            </div>
            <div class="line-black">

            </div>
            <div class="experience">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet,</p>
                <div class="experience-list">
                    <ul>
                        <li>lorem ipsum is simple dummy text.ipsum simple dummy text</li>
                        <li>lorem ipsum is simple dummy text.ipsum simple dummy text</li>
                        <li>lorem ipsum is simple dummy text.ipsum simple dummy text</li>
                        <li>lorem ipsum is simple dummy text.ipsum simple dummy text</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="cv-education">
            <div>
                <h3>EDUCATION</h3>
            </div>
            <div class="line-black">

            </div>
            <div class="education-list">
                <ul>
                    <li><strong>Bachelor of Commerce: Part 02 Continue...</strong> | <span>2023 Karachi-University,Karachi</span> </li>
                </ul>
            </div>
        </div>

        <div class="cv-skill-highlights">
            <div>
                <h3>SKILL HIGHLIGHTS</h3>
            </div>
            <div class="line-black">

            </div>
            <div class="skills-list">
              <div class="cv-skill">
                <ul>
                  <li>UI/UX design </li>
                  <li>HTML/CSS </li>
                  <li>Javascript </li>
                  <li>Firebase </li>
                </ul>
              </div>
              <div class="cv-skill">
                <ul>
                  <li>React </li>
                  <li>Next.js </li>
                  <li>lorem ipsum </li>
                  <li>lorem ipsum </li>
                </ul>
              </div>
            </div>
        </div>

        <div class="cv-certification">
            <div>
                <h3>CERTIFICATIONS</h3>
            </div>
            <div class="line-black">

            </div>
            <div class="certificates-list">
                <ul>
                    <li>lorem ipsum is simple dummy text.ipsum simple dummy text</li>
                    <li>lorem ipsum is simple dummy text.ipsum simple dummy text</li>
                </ul>
            </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
