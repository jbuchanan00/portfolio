import React from "react"
import * as Scroll from "react-scroll"

export default function Experience(){
    return(
        <div className="experience-container">
            <Scroll.Element name="experience">
            <header className="experience-title">
                Skills
            </header>
            </Scroll.Element>
            <div className="total-icons-container-flex">
            <div className="total-icons-container">
            <div className="icon-container">
                <img className="icon-logo" src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png" alt="react.js"/>
                <>React</>
            </div>
            <div className="icon-container">
                <img className="icon-logo" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png" alt="node.js"/>
                <div>Node.js</div>
            </div>
            <div className="icon-container">
                <img className="icon-logo" src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png" alt="express.js"/>
                <div>Express</div>
            </div>
            <div className="icon-container">
                <img className="icon-logo" src="https://previews.123rf.com/images/asnia/asnia1708/asnia170800414/83946085-sql-database-icon-logo-design-ui-or-ux-app-blue-inscription-with-shadow.jpg" alt="sql"/>
                <div>SQL</div>
            </div>
            <div className="icon-container">
                <img className="icon-logo" src="
            https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="sass" />
            <div>Sass</div>
            </div>
            </div>
            </div>
        </div>
    )
}