import React from "react"
import * as Scroll from "react-scroll"

export default function AboutMe(){
    return(
        <div className="about-me-container">
            <div className="style-notflat"></div>
            <Scroll.Element name="about_me">
            <header className="about-me-header">
                About Me
            </header>
            </Scroll.Element>
        </div>
    )
}