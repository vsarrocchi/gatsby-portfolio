import React from "react"
import Layout from "../components/layout"
import image from "../img/home-image.png"

export default () => (
  <Layout>
    <div class="home-main">
      <div class="column">
        <h6 class="title">Hello! I'm</h6>
        <h1 class="title">Valesca Sarrocchi</h1>
        <h3 class="title">FrontEnd Developer Student</h3>
      </div>
      <div>
        <img class="home-image" src={image} alt="0"/>
      </div>
    </div>
  </Layout>
)
