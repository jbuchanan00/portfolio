import React from 'react';
import { Parallax } from "react-scroll-parallax"
import * as Scroll from "react-scroll"

export default function Introduction() {
    return (
        <div className="splash-page-container">
            <Parallax className="splash-page-container-parallax" y={[-30, 70]}>
                <div >
                    <div className="title-text-container">
                        <header>
                            <h1 className="heading-text name">Josh Buchanan</h1>
                            <h1 className="heading-text position">Web Developer</h1>
                        </header>
                        <div className="click-more-container">
                            <h3>More About Me!</h3>
                            <div className="click-more-arrow" onClick={() => {
                                Scroll.scroller.scrollTo("about_me", {
                                    smooth: true,
                                    offset: -40
                                })
                            }}>
                                <i className="fas fa-arrow-alt-circle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
             
        </div>
    );
}