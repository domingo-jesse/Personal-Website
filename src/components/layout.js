import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { SocialIcon } from 'react-social-icons';
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    content, 
    socialLinks,
    socialContainer, 
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    return (
        <div  className={container}>
            <style>{'body { background-color: #c1d6c5;'}</style>
            <title>{pageTitle}</title>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>

            <body>
                <aside>
                    <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                    <ul>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                Home
            </Link>
                        </li>
                  <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>
                                About
            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/projects" className={navLinkText}>
                                Projects
            </Link>
                        </li>
                        <div className={socialContainer}> 
                        <div className={socialLinks}>
                            <SocialIcon url="https://www.linkedin.com/in/jesse-domingo/" style={{ height: 50, width: 50, margin: 5}} />
                            <SocialIcon url="https://github.com/domingo-jesse/" style={{ height: 50, width: 50,  margin: 5}} />
                            <SocialIcon url="https://www.facebook.com/jesse.domingo.5/" style={{ height: 50, width: 50, margin: 5 }} />
                            </div>
                        </div>
                    </ul>

                  
                    
             </aside>
                <div className={content}>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.iam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit ametsdiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
                </div>
                
            </body>
           
            
        </div>
    )
}

export default Layout