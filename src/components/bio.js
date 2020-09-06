/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/rajendra.jpg/" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(2),
          marginBottom: 0,
          minWidth: 300,
          minHeight: 300,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
    <div>
      <p>
        Hi. I'm Rajendra(Raj).
      </p>
      <p>
        I'm a <strong>software engineer</strong> at Microsoft with an interest for <strong>entreprenurship</strong>.
      </p>
      <p>
        I’ve worked at a few places: American Airlines, Capitalone. I graduated from the University of Southern Mississippi with a degree in Computer Science in 2016.

        In my free time, I make videos on <a href={`https://youtube.com/hackerheap`}>
          Youtube
        </a>, write a <a href={`https://rajendra.io/blog`}>
          blog
        </a>, and code.
      </p>
    </div>
    </div>
  )
}

export default Bio
