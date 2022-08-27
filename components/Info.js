import React from "react"
export default function Info(){
    
    return(
         <header className="header">
            <div className="profile-img"></div>
            <div className="details">
                <h2 className="details-name">Oluwakolade Olagunju</h2>
                <h4 className="details-role">Frontend Developer</h4>
                <h6 className="details-website">kodeman.website</h6>
            </div>
            <div className="buttons">
                <a href="#" className="button-email">
                    <img src="/images/email-icon.png" />
                    Email
                </a>
                <a href="#" className="button-linkedin">
                    <img src="/images/linkedin-icon.png" />
                    LinkedIn
                </a>
            </div>
        </header>
    )
}