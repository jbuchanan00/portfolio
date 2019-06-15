import React from 'react';
import * as Scroll from "react-scroll"

function NavBar() {
    const clickedLink = (scrollTo) => {
            return Scroll.scroller.scrollTo(scrollTo, {
                smooth: true,
                offset: -40
            })
    }
    return (
        <nav className="full-nav-bar">
            <div className="link-container">
                <div className="nav-links">
                    <div className="link-hover" onClick={() => {
                        Scroll.animateScroll.scrollToTop()
                    }}>Home Page</div>
                </div>
                <div className="nav-links">
                    <div className="link-hover" onClick={() => {clickedLink("about_me")}
                    }>About Me</div>
                </div>
                <div className="nav-links">
                    <div className="link-hover" onClick={() => {clickedLink("experience")}}>Skills</div>
                </div>
                <div className="nav-links">
                    <div className="link-hover" onClick={clickedLink}>Projects</div>
                </div>
                <div className="nav-links">
                    <div className="link-hover" onClick={clickedLink}>Contact Me</div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar