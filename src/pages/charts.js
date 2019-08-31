import React from "react"
import Layout from "../components/layout"
import Polar from "../components/polar"
import Doughnut from "../components/doughnut"
import Bar from "../components/Bar"

export default () => (
  <Layout>
    <h1>Students vote for favorite fruite</h1>
    <h2 class="charts-titles">Polar Chart</h2>
    <Polar></Polar>
    <h2 class="charts-titles">Doughnut Chart</h2>
    <Doughnut></Doughnut>
    <h2 class="charts-titles">Bar Chart</h2>
    <Bar></Bar>
  </Layout>
)