import React from "react"
import Layout from "../components/layout"
import image from "../img/profilbild.jpg"

export default () => (
  <Layout>
    <div class="home-main">
      <div>
        <img class="about-image" src={image} alt="profilbild" />
      </div>
      <div class="about-column">
        <p>
          I am a FrontEnd developer student at Nackademin in Stockholm who is currently looking for an
          internship. I have just finished the first year of the program. During this time I gained experience
          working with JavaScript, jQuery, JSON, HTML, CSS, Git, GitHub, Bootstrap, Sass, PHP, SQL,
          WordPress, Photoshop and Illustrator, among other skills.
        </p>
      </div>
    </div>
  </Layout>
)