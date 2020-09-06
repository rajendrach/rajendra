import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import ThemeChanger from "./themeChanger"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
          <h1
        style={{
          ...scale(0.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
          </li>
          <li>
          <h1
              style={{
                ...scale(0.5),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
            <Link
              style={{
                boxShadow: `none`,
                color: `inherit`,
              }}
            to="/blog"
              >
                Blog
              </Link>
          </h1>
          </li>
          <li>
          <ThemeChanger/>
          </li>
      </ul>


      </nav>

    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by
        {` `}
        <a href="https://www.rajendra.io">Rajendra</a>
      </footer>
    </div>
  )
}

export default Layout
