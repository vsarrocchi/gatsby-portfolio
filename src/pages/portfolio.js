import React from "react"
import Layout from "../components/layout"
// import { Link } from "gatsby"

import image1 from "../img/artgallery.png"
import image2 from "../img/flexboxgrid.png"
import image3 from "../img/grafikverktig2.jpg"
import image4 from "../img/journal.png"
import image5 from "../img/superhero.png"
import image6 from "../img/webshop.png"
// import image7 from "../img/grafikverktig"

export default () => (
    <Layout>
      <h1 style={{ textAlign: `center`}}>Portfolio</h1>
      <div class="box-portfolio">
        
            <div>
                <img class="portfolio-img" src={image1} alt="1"/>
            </div>
            <div class="portfolio-item">
                <h4>Live Art Gallery</h4>
                <h6>HTML/CSS/JavaScript</h6>
                <div class="visit-site">
                    <a href="https://vsarrocchi.github.io/FrontendProjekt-Projekt2/"
                        class="visit-site-btn">Visit Site</a>
                </div>
            </div>
            <div>
                <img class="portfolio-img" src={image6} alt="2"/>
            </div>
            <div class="portfolio-item">
                <h4>Life Hacks - Webshop</h4>
                <h6>JavaScript/jQuery/XML/AJAX/JSON/Bootstrapp</h6>
                <div class="visit-site">
                    <a href="https://lezcodeher.github.io/project-webshop/"
                        class="visit-site-btn">VisitSite</a>
                </div>
            </div>
            <div>
                <img class="portfolio-img" src={image5} alt="3"/>
            </div>
            <div class="portfolio-item">
                <h4>SuperHero for hire</h4>
                <h6>JavaScript/JSON/HTML/CSS/Sass</h6>
                <div class="visit-site">
                    <a href="https://mmdarrah.github.io/SuperHero4rent/" class="visit-site-btn">Visit
                        Site</a>
                </div>
            </div>
            <div>
            <img class="portfolio-img" src={image2} alt="4"/>
            </div>
            <div class="portfolio-item">
                <h4>Flexbox vs Grid</h4>
                <h6>HTML/CSS/Sass</h6>
                <div class="visit-site">
                    <a href="https://vsarrocchi.github.io/Projektarbete-HTML-CSS/"
                        class="visit-site-btn">Visit Site</a>
                </div>
            </div>
            <div>
                <img class="portfolio-img" src={image3} alt="5"/>
            </div>
            <div class="portfolio-item">
                <h4>Art Gallery - Mockup</h4>
                <h6>Photoshop/Illustrator</h6>
                {/* <div class="visit-site">
                    <Link to="../img/grafikverktig.jpg" target="_blank" class="visit-site-btn">Show image</Link>
                    <img class="portfolio-img" src={image7} />
                </div> */}
            </div>
            <div>
                <img class="portfolio-img" src={image4} alt="6"/>
            </div>
            <div class="portfolio-item">
                <h4>Journal</h4>
                <h6>PHP/SQL/MySQL/HTML/CSS/Bootstrapp</h6>
            </div>
        
      </div>
    </Layout>
  )