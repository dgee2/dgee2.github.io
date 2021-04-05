/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { ReactNodeArray } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

interface LayoutProps {
  children: ReactNodeArray;
}

interface LayoutData {
  site: {
    siteMetadata: {
      title: string;
    },
    buildTime: string;
  };
}

function Layout({ children }: LayoutProps) {
  const data = useStaticQuery<LayoutData>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
        buildTime(formatString: "YYYY-MM-DD hh:mm a")
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()} - Site was built on {data.site.buildTime}
        </footer>
      </div>
    </>
  )
}

export default Layout;