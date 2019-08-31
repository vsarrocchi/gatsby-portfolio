import React from "react"
import { Link } from "gatsby"
// import {Helmet} from "react-helmet"

const ListLink = props => (
  <li style={{ display: `inline`, marginLeft: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div class="layout">
    {/* <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-146663538-1"></script>
      <script>
        {`if (window) {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'UA-146663538-1');
      }`}
      </script>
    </Helmet> */}
    <header class="header">
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>My Portfolio</h3>
      </Link>
      <ul class="header-ul">
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/charts/">Charts</ListLink>
      </ul>
    </header>
    {children}
  </div>
)