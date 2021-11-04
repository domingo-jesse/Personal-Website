import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { SocialIcon } from 'react-social-icons';
import {
    rcorners,
} from '../components/layout.module.css'

const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>Hello World</p>
            
                <StaticImage className={rcorners}
                alt="Cube logo"
                src="../images/frog.jpg"
            />
            
        </Layout>
    )
}

export default IndexPage