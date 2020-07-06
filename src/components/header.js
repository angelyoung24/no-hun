import React from "react"

import { Link } from "gatsby"
import headerStyles from "../styles/header.module.scss"

const Header = () => {
  return (
    <header className={ headerStyles.background }>
      <h1 className={ headerStyles.title }>No, Hun!</h1>
      <h3>
        <Link className={ headerStyles.link } activeClassName={headerStyles.activeLink} to="/">Home</Link>
      </h3>
      <h3>
        <Link className={ headerStyles.link } activeClassName={headerStyles.activeLink} to="/about">About</Link>
      </h3>
      <h3>
        <Link className={ headerStyles.link } activeClassName={headerStyles.activeLink} to="/resources">Resources</Link>
      </h3>
      <h3>
        <Link className={ headerStyles.link } activeClassName={headerStyles.activeLink} to="/contact">Contact</Link>
      </h3>
    </header>
  )
}

export default Header
