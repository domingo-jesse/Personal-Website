import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {
    gridItem,
    gridContainer,
    rcorners
} from './layout.module.css'

const Grid = ({ pageTitle, children }) => {
    return (
        <div>
            <div className={gridContainer}>
                <div className={gridItem}><StaticImage className={rcorners}
                    alt="Cube logo"
                    src="../images/frog.jpg"
                /></div>
                <div className={gridItem}>2</div>
                <div className={gridItem}>3</div>
                <div className={gridItem}>4</div>
                <div className={gridItem}>5</div>
                <div className={gridItem}>6</div>
                <div className={gridItem}>7</div>
                <div className={gridItem}>8</div>
                <div className={gridItem}>9</div>
            </div>

        </div>
    )
}

export default Grid